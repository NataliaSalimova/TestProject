
import "../TakeTest/DoTest.css";
//import FormList from "./FormList";
//import Picture from './Picture';

import React from "react";

import "./LookResultTest"

import "../TakeTest/DoTest";
import { useNavigate } from "react-router-dom";
//import Form from "./Form";
import "../CreateTest/FormCreateTest"
import LookResultTest from "./LookResultTest";

 const  Main = ({props})=>{
  const navigate = useNavigate(); 
  /*
  let state = {
    time: 0,
    count:0,
    status: 0,
  }*/
  
  //const [see, setSee] = useState(0)
  //const date = new Date()*/
//const hour  = date.getHours();



  return (
    <>
  
  <LookResultTest/>
  <button onClick={()=>navigate("/createTest")}>Создать новый тест</button>
   {/*}
   <Form/>*/}
       
        
        
     
        {/*
        
    <div className="App_Answer">
    
     <FormList/> {/*Блок с написанием слов и тестом 
     <Picture/>Блок с картинкой 
   
   </div>*/}
  
   

  
    </>
  );
}

export default Main;

