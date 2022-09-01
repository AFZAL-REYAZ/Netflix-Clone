import React from 'react'
import Cardsgroup from './components/Cardsgroup'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';
import Form from './components/Form';

const App = () => {
  return (
    
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Cardsgroup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/form' element={<Form/>}/>
      </Routes>
      <Footer/>
      </Router>
      
    
  )
}

export default App
