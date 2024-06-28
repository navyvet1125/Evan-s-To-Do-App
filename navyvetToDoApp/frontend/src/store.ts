import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { v4 as uuidv4 } from 'uuid';
import Task from './models/task';
import List from './models/list';
import { Category } from './models/category';
import { calculateNextDueDate } from './utils/dateUtils';


// Initial state type for lists
const initialListsState: List[] = [];

const listsSlice = createSlice({
  name: 'lists',
  initialState: initialListsState,
  reducers: {
    addList: (state, action: PayloadAction<Omit<List,'id'>>) => {
      const newList: List = { id: uuidv4(), ...action.payload };
      state.push(newList);
    },
    removeList: (state, action: PayloadAction<string>) => {
      return state.filter(list => list.id !== action.payload);
    },
    updateList: (state, action: PayloadAction<List>) => {
      const { id, title, description, category, dueDate, recurs } = action.payload;
      const listIndex = state.findIndex(list => list.id === id);
      if (listIndex !== -1) {
        state[listIndex] = { ...state[listIndex], title, description, category, dueDate, recurs};
      }
    },
    completeList: (state, action: PayloadAction<{ id: string, timeCompleted: Date, completedBy?: string, notes?: string }>) => {
      const { id, timeCompleted, completedBy, notes } = action.payload;
      const listIndex = state.findIndex(list => list.id === id);
      if (listIndex !== -1) {
        state[listIndex].completed = { timeCompleted, completedBy, notes };
      }
    },
    uncompleteList: (state, action: PayloadAction<string>) => {
      const listIndex = state.findIndex(list => list.id === action.payload);
      if (listIndex !== -1) {
        delete state[listIndex].completed;
      }
    },
  },
});

// Initial state type for list items
const initialTasksState: Task[] = [];

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask: Task = { id: uuidv4(), ...action.payload };
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    removeTasksByListId: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.listId !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    completeTask: (state, action: PayloadAction<{ id: string, timeCompleted: Date, completedBy?: string, notes?: string }>) => {
      const { id, timeCompleted, completedBy, notes } = action.payload;
      const itemIndex = state.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].completed = { timeCompleted, completedBy, notes };
      }
    },
    uncompleteTask: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        delete state[itemIndex].completed;
      }
    },
  },
});

export const { addList, removeList, updateList } = listsSlice.actions;
export const { addTask, removeTask, updateTask, completeTask, uncompleteTask } = TasksSlice.actions;
export const selectAllLists = (state: { lists: List[] }) => state.lists;
export const selectListById = (state: { lists: List[] }, listId: string) =>
  state.lists.find(list => list.id === listId);
export const selectListByCategory = (state: { lists: List[] }, category: Category) =>
  state.lists.filter(list => list.category === category);
export const selectListByDueDate = (state: { lists: List[] }, dueDate: Date) =>
  state.lists.filter(list => list.dueDate === dueDate);

export const selectAllTasks = (state: { tasks: Task[] }) => state.tasks;
export const selectTasksByListId = (state: { tasks: Task[] }, listId: string) =>
  state.tasks.filter(item => item.listId === listId);

export const checkListCompletion = (state: { lists: List[]; tasks: Task[] }, listId:string) => {
  const list = selectListById(state, listId);
  if (!list) return false;
  const tasks = selectTasksByListId(state, listId);
  if (tasks.length === 0) return false;
  return tasks.every(task => task.completed);
}

export const applyRecurrence = (state: { lists: List[]; tasks: Task[] }, listId:string) => {
  const list = selectListById(state, listId);
  if (!list || !list.recurs) return;
  const nextDueDate = calculateNextDueDate(list.dueDate, list.recurs);
  list.dueDate = nextDueDate;
  list.completed = undefined;
  const tasks = selectTasksByListId(state, listId);
  tasks.forEach(task => task.completed = undefined);
}

const rootReducer = combineReducers({
  lists: listsSlice.reducer,
  tasks: TasksSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);