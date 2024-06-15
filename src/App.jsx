import { useState } from 'react'
import './App.css'
import StopWatch from './StopWatch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StopWatch />
    </>
  )
}

export default App
