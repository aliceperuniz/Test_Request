import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Routes/Home/Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <Home />
    </div>
  )
}

export default App
