import { Route, Routes} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Community from './components/Community'
import NotFound from './components/NotFound'
import MessA from './components/MessA/MessA'
import MessB from './components/MessB/MessB'
import MessC from './components/MessC/MessC'
import LhMess from './components/LhMess/LhMess'
import SaleCard from './components/SaleCard'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    console.log(window.innerWidth)
  })
  return (
      <>
      
      <Routes>
      <Route  path="/login" element={<LoginForm/>}/> 
      <Route path="/Register" element={<Register/>} />
      <Route path="/profile"  element={<Profile/>} />
      <Route path="/community" element={<Community/>}/>
      <Route path="/messa" element={<MessA/>}/>
      <Route path="/messb" element={<MessB/>}/>
      <Route path="/messc" element={<MessC/>}/>
      <Route path="/lhmess" element={<LhMess/>}/>
      <Route path='/salecard' element={<SaleCard/>}/>
      <Route  path="/" element={<Home/>}/>
      <Route  path="*"  element={<NotFound/>} />
      </Routes>
      </>
     
      
   
  );
}

export default App;
