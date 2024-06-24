import { useState } from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="4">
          <Image src="/evan1.jpg" alt="Evan" fluid/>
          <Image src="/question.png" alt="question" fluid/>
        </Col>
      </Row>
      <h1>Evan J. Washington</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
