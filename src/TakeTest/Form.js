import React, {useState} from 'react'
import DoTest from './DoTest';
import DoTest2 from './DoTest2'
import "./Form.css"
export default function Form(){
    const FormTitle = ["Задание 1", "Задание 2"]
    const [page, setPage] = useState(0)

    const [Todos, SetTodos] = useState([]);
    const [number, setNumber] = useState(false)
    const [markers, setMarkers] = useState([])
 
    const [Todos2, SetTodos2] = useState([]);
    const [number2, setNumber2] = useState(false)
    const [markers2, setMarkers2] = useState([])
  
    function SeeNewTest(){
        if(page===0){
            return <DoTest Todos={Todos} SetTodos={SetTodos}  number={number} setNumber={setNumber} markers={markers} setMarkers={setMarkers}  />
        }
        if(page===1){
            return <DoTest2 Todos={Todos2} SetTodos={SetTodos2}  number={number2} setNumber={setNumber2} markers={markers2} setMarkers={setMarkers2}/>
        }
    }
    return(
        <div className='form'>
       
        <div className='title-form'>
            <img src="/Pict/prev.png" alt="назад" onClick={()=>{
                if (page > 0 ) {
                    setPage((p)=>p - 1)}}}
                     />

            <p>{FormTitle[page]}/{FormTitle.length}</p>
       

            <img src='/Pict/next.png' alt='next' onClick={()=>{
                    if(page < FormTitle.length -1){
                        setPage((p)=>p+ 1)
                    }
            }}/>
           
            
        </div>
        <div className='body-form'>
            {SeeNewTest()}
            

        </div>
       
        <div className='footer-form'>
        {page === FormTitle.length - 1? <button>Отправить</button> : null}
        </div>
        </div>
    )
}