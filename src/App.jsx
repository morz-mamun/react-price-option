

import './App.css'
import Gyms from './components/Gyms/Gyms'
import Navbar from './components/Navbar/Navbar'
import Chart from './components/Chart/Chart'

function App() {
  

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Navbar></Navbar>
     <Gyms></Gyms>
     <Chart></Chart>
     </div>
     
    </>
  )
}

export default App
