import React, { useCallback } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import  Task  from '../models/task';
import { PlusCircle, Trash } from 'react-bootstrap-icons';
import { removeTask } from '../store';
import { useDispatch } from 'react-redux';

interface TaskProps {
  task: Task;
  onCompletionToggle: (taskId: string) => void; // Function to handle task completion toggle
}

const TaskComponent: React.FC<TaskProps> = ({ task, onCompletionToggle }) => {
    const dispatch = useDispatch();
    const handleRemoveTask = useCallback((taskId: string) => {
      dispatch(removeTask(taskId));
  }, [dispatch]); // dispatch is stable and does not change, so it's safe to omit from dependencies, but included here for clarity

  return (
    <Form>
      <Row noGutters className="align-items-center">
        <Col xs="10">
          <Form.Check
            type="checkbox"
            id={`task-${task.id}`}
            checked={!!task.completed}
            onChange={() => onCompletionToggle(task.id)}
            label={task.text}
          />
        </Col>
        <Col xs="auto">
          <Button variant="outline-success" size="sm">
            <PlusCircle />
          </Button>
        </Col>
        <Col xs={1}>
        <Trash
        style={{ 
            cursor: "pointer",
            color: "red",
        }}
        onClick={() => handleRemoveTask(task.id)} />
        </Col>
      </Row>
    </Form>
  );
};

export default TaskComponent;