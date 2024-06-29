import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, InputGroup } from 'react-bootstrap';
import { addTask } from '../store';

interface TaskFormProps {
    listId: string;
    parentId?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ listId, parentId }) => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming your action creator expects an object with a Text property
    dispatch(addTask({ text: taskText, listId, parentId }));
    setTaskText(''); // Reset input field after submission
  };

  return (
    <>
    <Row>
      <h3>Tasks</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup >
          <Form.Control
            type="text"
            placeholder="Add new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        <Button variant="primary" type="submit">
          Add Task
        </Button>
        </InputGroup>
      </Form>
    </Row>

    </>
  );
};

export default TaskForm;