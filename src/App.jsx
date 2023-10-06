import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './sections/Home'
import Destination from './sections/Destination'
import Technology from './sections/Technology'
import Crew from './sections/Crew'

//control d to select mutle text of the same value

function App() {

  return (
    <main className='relative'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/crew' element={<Crew/>} />
      </Routes>      
    </main>
  )
}

export default App
