import React from 'react'
import "./DeletePerson.css"
import CloseButton from 'react-bootstrap/CloseButton';

export default function DeletePerson({handleClose,setTask}){
    
    return(
        <>
        <div className="popup-box-DeletePerson">
     
        <div className="box-DeletePerson">
            <div className='title-DeletePerson'>
        <h1>Вы уверены?</h1>
        <CloseButton onClick={handleClose} className='CloseButton-DeletePerson'/>
       
        </div>
        
    <button className='OK2-DeletePerson' onClick={handleClose}>Отмена</button>
    <button className='OK-DeletePerson' onClick={()=> setTask("yes")}>Удалить</button>
        </div>
       
      </div>
      
</>
    )
}