import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { selectAllLists } from "../store";
import { Square, CheckSquare } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";


const ListsView: React.FC = () => {
    const lists = useSelector(selectAllLists); // Correct the typo in the useSelector hook
    const navigate = useNavigate(); // Correct the typo in the useNavigation hook
    
    return (
        <Container>
            <Row>
                <h2>Lists</h2>
            </Row>
            <Row>
                <ListGroup>
                    {lists.map((list) => (
                        <Row>
                        <ListGroup.Item key={list.id}>
                            <Row className="ms-2 me-auto"
                            onClick={() => navigate(`/dashboard/${list.id}`)}
                            style={{cursor: 'pointer'}}
                            >
                                <Col xs="auto">{list.completed ? <CheckSquare color="green" /> : <Square color="red" />}</Col>
                                <Col> <span className="fw-bold">{list.title} </span></Col>
                                <Row className="ms-2 me-auto">
                                    {list.description}
                                </Row>
                            </Row>
                        </ListGroup.Item>
                        </Row>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
}

export default ListsView;