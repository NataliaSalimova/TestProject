import React from 'react';
import Form from 'react-bootstrap/Form';
import "./Come.css";
import Nav from 'react-bootstrap/Nav';
export default function Come(){
   return(
        <>
          <div  className='Come' >
          <Form >
            <h2 className='Text'>Добро пожаловать!</h2>
            <Form.Group className="mb-3 Come3" controlId="formBasicEmail">
              <Form.Control className='InputCome' type="email" placeholder="Электронный адрес" />
            </Form.Group>
            <Form.Group className="mb-3 Come3" controlId="formBasicPassword">
              <Form.Control className='InputCome' type="password" placeholder="Пароль" />
            </Form.Group>
            <Nav.Item className='ComeLink'>
              <Nav.Link  href="/home">Забыли пароль?</Nav.Link>
            </Nav.Item>
          <button className="ComeButton" >
              Войти
          </button>
          <div className="footer-main2">
          </div>
          </Form>
        </div>
      </>
    )
} 
