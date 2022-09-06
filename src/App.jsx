import { useState } from 'react';
import './App.css'
// import { NavBar } from './component/navbar/NavBar'
import { Home } from './component/Home/Home'
import { NavBar } from './component/navbar/NavBar';
import {Footer} from "./component/footer/Footer"
import { Routers } from './routes/Routes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default App
