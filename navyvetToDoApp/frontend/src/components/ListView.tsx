import React from 'react';
import { useSelector } from 'react-redux';
import { selectListById } from '../store'; // Adjust the import path as necessary
import List  from '../models/list';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

interface ListViewProps {
    listId: string;
}

const ListView: React.FC<ListViewProps> = ({ listId }) => {
    // Use useSelector to access the Redux store and select the list details
    const listDetails = useSelector((state: { lists: List[] }) => selectListById(state, listId));

    return (
        <Row>
            {listDetails ? (
                <div>
                    {/* Example of rendering list details */}
                    <h2>{listDetails.title}</h2>
                    <p>Category: {listDetails.category}</p>
                    <p>{listDetails.description}</p>
                    <p>Due Date: {listDetails.dueDate.toString()}</p>
                </div>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Row>
    );
};

export default ListView;