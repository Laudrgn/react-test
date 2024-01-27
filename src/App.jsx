import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useWiggle } from '../hooks/wiggle';
import { animated } from  'react-spring';



function MyButton() {
  return (
    <button>Im a button</button>
  );
}



function App() {
  const [count, setCount] = useState(0)
  const [style] = useWiggle({ x: 50, rotation: 1, scale: 1.2 })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit and reedit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
      <h1>Welcome to my app</h1>
      <MyButton />
     </div>

    <animated.h1 className="title" style={style}>
       About this site
    </animated.h1>    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
