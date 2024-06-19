import { useState } from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import evan1 from '../assets/evan1.jpg'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Image src={evan1} alt="Evan" fluid/>
      </div>
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
      Go <Link to="/">Home</Link><br />
      Click <Link to="/test">here</Link> to test.
    </>
  )
}

export default App
