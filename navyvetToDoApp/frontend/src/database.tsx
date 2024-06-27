import { DBSchema, IDBPDatabase, openDB } from 'idb';

interface User {
  id?: number; // Optional because it's auto-incremented by the database
  name: string;
  email: string;
  username: string;
}

interface List {
    id?: number; // Optional because it's auto-incremented by the database
    title: string;
    description: string;
}
  
interface ListItem {
    id?: number; // Optional because it's auto-incremented by the database
    listId: number;
    content: string;
    completed: boolean;
    parentItemId?: number;
}
  

interface MyAppDB extends DBSchema {
    users: {
      key: number;
      value: User;
      indexes: { 'email': string; 'username': string};
    };
    lists: {
      key: number;
      value: List;
      indexes: { 'title': string };
    };
    listItems: {
      key: number;
      value: ListItem;
      indexes: { 'listId': number; 'parentItemId': number };
    };
  }

export async function initDB() {
    // Access environment variables
    const dbName = import.meta.env.VITE_TODO_DB_NAME as string;
    const dbVersion = parseInt(import.meta.env.VITE_TODO_DB_VERSION as string);

    const db = await openDB<MyAppDB>(dbName, dbVersion, {
      // Moving forward, if we need to upgrade the database, we can do so here
      // We'll need to increment the version number in the environment variables
      // and add a new case to the switch statement
      // We'll also need to add oldVersion, newVersion, and possibly transaction
      // parameters to the upgrade function
      upgrade(db) {
        if (!db.objectStoreNames.contains('users')) {
          const userStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
          userStore.createIndex('email', 'email', { unique: true });
          userStore.createIndex('username', 'username', { unique: true });
        }
        // Create 'lists' object store
        if (!db.objectStoreNames.contains('lists')) {
          const listStore = db.createObjectStore('lists', { keyPath: 'id', autoIncrement: true });
          listStore.createIndex('title', 'title', { unique: false });
        }
        // Create 'listItems' object store
        if (!db.objectStoreNames.contains('listItems')) {
          const listItemStore = db.createObjectStore('listItems', { keyPath: 'id', autoIncrement: true });
          listItemStore.createIndex('listId', 'listId', { unique: false });
        }
      },
    });
    return db;
}
  

export async function addUser(db: IDBPDatabase<MyAppDB>, user: User) {
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  const result = await store.add(user);
  console.log('User added', result);
  return result;
}

export async function addList(db: IDBPDatabase<MyAppDB>, list: List) {
    const tx = db.transaction('lists', 'readwrite');
    const store = tx.objectStore('lists');
    const result = await store.add(list);
    console.log('List added', result);
    return result;
}
  
export async function addListItem(db: IDBPDatabase<MyAppDB>, listItem: ListItem) {
    const tx = db.transaction('listItems', 'readwrite');
    const store = tx.objectStore('listItems');
    const result = await store.add(listItem);
    console.log('List item added', result);
    return result;
}