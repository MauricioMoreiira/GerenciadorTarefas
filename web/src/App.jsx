import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default App
