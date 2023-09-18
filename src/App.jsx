

import './App.css'
import Gyms from './components/Gyms/Gyms'
import Navbar from './components/Navbar/Navbar'
import Chart from './components/Chart/Chart'
import Phones from './components/Phones/Phones'

function App() {
  

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Navbar></Navbar>
     <Gyms></Gyms>
     <Chart></Chart>
     <Phones></Phones>
     </div>
     
    </>
  )
}

export default App
