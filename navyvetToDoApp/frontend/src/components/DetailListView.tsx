import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectListById,
    selectTasksByListId,
    toggleCompletion,
    checkListCompletion,
    completeList,
    uncompleteList,
} from '../store';
import { StarFill, Star } from 'react-bootstrap-icons';
import List  from '../models/list';
import Task from '../models/task';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import TaskForm from './TaskForm';
import TaskComponent from './Task';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

interface DetailListViewProps {
    listId: string;
}

const DetailListView: React.FC<DetailListViewProps> = ({ listId }) => {
    // Use useSelector to access the Redux store and select the list details
    const listDetails = useSelector((state: { lists: List[]; tasks: Task[] }) => selectListById(state, listId));
    const listCompleted = useSelector((state: { lists: List[]; tasks: Task[] }) => checkListCompletion(state, listId));
    // const [listCompleted, setListCompleted] = useState(listDetails?.completed || false);    
    const tasks = useSelector((state: { tasks: Task[] }) => selectTasksByListId(state, listId));
    const dispatch = useDispatch();
    const handleTaskCompletionToggle = useCallback((taskId: string) => dispatch(toggleCompletion(taskId)), [dispatch]);
    const navigate = useNavigate();

    useEffect(() => {
        if(listCompleted && !listDetails?.completed) {
            dispatch(completeList({ id: listId, timeCompleted: new Date() }));
        } else if (!listCompleted && listDetails?.completed) {
            dispatch(uncompleteList(listId));
        };
    }, [listCompleted, dispatch, listId, listDetails?.completed]);

    return (
        <>
            {listDetails ? (
                <Row>
                    {/* Example of rendering list details */}
                    <h2>
                        {listDetails.title} {!!listDetails.completed ? <StarFill color="yellow" /> : <Star />}
                    </h2>
                    <p>Category: {listDetails.category}</p>
                    <p>{listDetails.description}</p>
                    <p>Due Date: {new Intl.DateTimeFormat('en-US', { 
                        year: 'numeric', 
                        month: '2-digit', 
                        day: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit', 
                        hour12: true 
                    }).format(new Date(listDetails.dueDate))}</p>
                </Row>

            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            <TaskForm listId={listId} />
            <hr />
            {tasks ? (
                tasks.map((task) => (
                    <TaskComponent key={task.id} task={task}
                        onCompletionToggle={(taskId) => handleTaskCompletionToggle(taskId)} 
                    />
                ))
            ) : (
                <h3>No tasks found</h3>
            )}
            <Button className='btn btn-primary' onClick={() => navigate('/dashboard')}>Back to lists</Button>
        </>
    );
};

export default DetailListView;