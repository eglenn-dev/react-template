import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Follow the instructions in the <code><a href="https://github.com/eglenn-dev/react-template?tab=readme-ov-file#react--ts--swc-template">README.md</a></code> to get started with this repo template.
        </p>
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/eglenn-dev/react-template?tab=readme-ov-file#react--ts--swc-template">Easy deployment instructions</a>
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
