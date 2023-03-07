
import React from "react";
import Page from "./Component/ListPage/page/page";
import MainContent from "./Component/PgPage/MainContent.js/MainContent";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import About from "./Component/Aboutpage/About";
import "./App.css"



function App(){
 return(
  <>
    

  <BrowserRouter>
    <Routes>
   <Route path='page' element={<Page/>}/>
   <Route path="pg" element={<MainContent/>}/>
   <Route path="/" element={<Home/>}/>
   <Route path="about" element={<About/>}/>


    </Routes>
    </BrowserRouter>
  </>
 )
}

export default App;