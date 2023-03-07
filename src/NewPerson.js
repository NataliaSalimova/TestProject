import React from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

import './NewPerson.css';
export default function NewPerson(){
    return (
        <Form className='NewPerson'>
            <div > 
            <CloseButton  className='MyCloseBtn'/>
            <h2 className='Text2'>Новый пользователь</h2>
            </div>
            <Form.Group className="mb-3 Come32">
              <Form.Control  type="text"className="Input"  placeholder="Имя" />
            </Form.Group>
            <Form.Group className="mb-3 Come32" controlId="formBasicEmail">
                <Form.Control  type="email" className="Input" placeholder="Электронный адрес" />
            </Form.Group>
            
            <Form.Group className="mb-3 Come32">
              <Form.Control id="disabledTextInput" className="Input" type="password" placeholder="Пароль" />
            </Form.Group>
            <Form.Group className="mb-3 Come32">
              <Form.Select id="disabledSelect"className="Input">
                <option >Назначить тест</option>
                <option >Тест 1</option>
                <option>Тест 2</option>

              </Form.Select>
            </Form.Group>
           
            <button className="ComeButton2">Добавить пользователя</button>
          
        </Form>
      );
}