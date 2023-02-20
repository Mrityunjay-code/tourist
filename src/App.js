// import logo from './logo.svg';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import './App.css'
import React from 'react'
import Nav from './Compo/Nav';
import Home from './Compo/Home';
import Location from './Compo/Location';
import Package from './Compo/Package';
// import About from './Compo/About';
import Reg from './Compo/Reg';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/Location'element={<Location/>}></Route>
      <Route path='/Package'element={<Package/>}></Route>
      <Route path='/Reg'element={<Reg/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
