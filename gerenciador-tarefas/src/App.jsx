import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>

      <div className='container'>
          <Outlet></Outlet>
      </div>
    </div>




  )
}

export default App
