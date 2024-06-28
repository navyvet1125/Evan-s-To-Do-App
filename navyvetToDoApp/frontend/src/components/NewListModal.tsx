import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addList } from '../store'; // Adjust the import path according to your project structure
import { Category, categoryOptions } from '../models/category';

const NewListModal: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
  const [listTitle, setListTitle] = useState('');
  const [listCategory, setListCategory] = useState(categoryOptions[0]);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleSave = () => {
    console.log('List Name: ', listTitle);
    dispatch(addList({ category: listCategory, description: description, dueDate: dueDate, title: listTitle }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="listTitle">
            <Form.Label>List Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter list Title"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
            />
            <Form.Text className="text-muted">Enter a title for your new list</Form.Text>
          </Form.Group>

            <Form.Group controlId="listDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                placeholder="Enter a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Text className="text-muted">Enter a description for your list</Form.Text>
            </Form.Group>

            <Form.Group controlId="listDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                type="date"
                value={dueDate.toISOString().split('T')[0]}
                onChange={(e) => setDueDate(new Date(e.target.value))}
                />
                <Form.Text className="text-muted">Enter a due date for your list</Form.Text>
            </Form.Group>

          <Form.Group controlId="listCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control 
            as="select"
            value={listCategory}
            onChange={(e) => setListCategory(e.target.value as Category)}
            >
                {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                    {category}
                    </option>
                ))}
            </Form.Control>
            <Form.Text className="text-muted">Select a category for your list</Form.Text>
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewListModal;