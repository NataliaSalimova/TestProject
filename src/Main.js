
import {Component} from 'react';
import FormList from "./FormList";
import Picture from './Picture';
export default class Main extends Component{
 
  render(){
  return (
    <>
    <div className="App_Answer">
     <FormList/> {/*Блок с написанием слов и тестом */}
     <Picture/>{/*Блок с картинкой */}
   
   </div>
  
    </>
  );}
}

