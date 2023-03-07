import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import NaviBar from "./Main/Navibar";
import React from 'react';
//import { Router } from "react-router-dom";

import DoTest2 from "./TakeTest/DoTest2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoTest from "./TakeTest/DoTest";


export default class App extends Component{
  
  render(){
    
  return (
    <>
    {/*Чтобы запустить проект: npm start */}
    
     <NaviBar/>
     <Router>
     <Routes>
      
      <Route path="/DoTest" element={<DoTest/>}/>
      <Route path="/DoTest2" element={<DoTest2/>}/>
      
      </Routes>
      </Router>
   
    
     </>
  );}
}
