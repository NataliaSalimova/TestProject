import React, {useState} from 'react'
import "./AssignTest.css"
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

export default function AssignTest({handleClose,setTask}){
    const [answer, setAnswer] = useState("")
    
    return(
        <>
        <div className="popup-box">
     
        <div className="box">
            <div className='title-assignTest'>
        <h1>Назначить тест</h1>
        <CloseButton onClick={handleClose} className='CloseButton'/>
        </div>
        
        <Form.Select  className='select-test' onChange={(e)=>setAnswer(e.target.value)}>
      <option>Выбрать тест</option>
      <option value=" Тестировщик1" >Тестировщик1</option>
      <option value=" Тестировщик2" >Тестировщик2</option>
      <option value=" Тест" >Тест</option>
    </Form.Select>
   
    <button className='OK' onClick={()=> setTask(answer)}>Подтвердить</button>
        </div>
       
      </div>
      
</>
    )
}