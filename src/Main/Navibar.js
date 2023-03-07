import React from 'react'
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import { Navbar,Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Users from '../Users/Users';
import Result from '../Result/Result';
import '../Result/Result';
import  '../Users/Users';
import "./Navibar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Come from './Come'
import {Component} from 'react';
import Main from './Main';
import LookResultTest from './LookResultTest';
//import Footer from './Footer';
import NewPerson from './NewPerson';
import Form from '../TakeTest/Form';
import FormCreateTest from '../CreateTest/FormCreateTest';
export default class NaviBar extends Component {
   
  render(){
  
  return (
    
    <>
    <Router>
      <Navbar  className="Navibar">
        <Container>
        <Navbar.Brand  className=" NavibarItem" href="/"><b>Тесты</b></Navbar.Brand>
        <Nav className="m-auto" >
          
          <Nav.Link  className={"NavibarItem"}  href={"/Result"}><b>Результаты</b></Nav.Link>
          <Nav.Link className={"NavibarItem"}  href={"/Users"}><b>Пользователи</b></Nav.Link>
          <NavDropdown className="OneItem"  title="Имя Фамилия" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              <Button variant="light">Выход</Button>
            </NavDropdown.Item>
          </NavDropdown>
          <Button  className={"NavibarItem"} variant="light"href={"/Come"}>Вход</Button>
          <Button   className={"NavibarItem"} variant="light"href={"/NewPerson"}>Новый</Button>
        </Nav>
      </Container>
    </Navbar>
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Users" element={<Users />} />
        
         
        <Route path="/Come" element={<Come />} />
        
  <Route path="/NewPerson" element={<NewPerson/>}/>
  <Route path="/LookResultTest" element={<LookResultTest/>}/>
  <Route path="/passing" element={<Form/>}/>
  <Route path="/createTest" element={<FormCreateTest/>}/>
      </Routes>
      </Router>
      
      
      
    </>
  );}
}

