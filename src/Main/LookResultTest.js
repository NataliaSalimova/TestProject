import React from 'react'
import "./LookResultTest.css"
import { useNavigate } from "react-router-dom";
import "../TakeTest/Form"
export default function LookResultTest(){
    const navigate = useNavigate(); 
    const people = [
        {
            id:0,
            name_test:"Тестировщик 1",
            number_of_tasks: 6,
            time_limit: "45 мин",
            status: "Завершен",
            date: "14.12.2022",
            time: "32 мин",
            score: 83.4,
            estimation: "Зачет",
        },
        {
            id:1,
            name_test:"Тестировщик 2",
            number_of_tasks: 8,
            time_limit: "1 час",
            status: "Еще не пройден",
            date: "",
            time: "",
            score: 0,
            estimation: "",
        }
        
    ]
    function Table(){
        return(
            people.map((p)=>{
                return(
                    
                    <div key={p.id}>
                        <div  className='LookResultTest'>
                      <div className='LookResultTest-general_data'>
                       
                    <h1>{p.name_test}</h1>
                  <h3>Количество заданий:  </h3>
                  <h3 className='Stroka_answer'>{p.number_of_tasks}</h3>
                  <h3>Ограничение времени: </h3>
                  <h3 className='Stroka_answer'>{p.time_limit}</h3>
                  <h3>Статус: </h3>
                 
                  <h3 className='Stroka_answer '>{p.status}</h3>
                 
                  {p.status==="Завершен"? <button disabled>Пройти тест</button>:<button onClick={()=>navigate("/passing")}>Пройти тест</button>}
                  </div>
                 
                  <div className='LookResultTest-result_test'>
               <h1>Результат</h1>
                    <h3>Дата: </h3>
                    <h3 className='Stroka_answer'>{p.date===""? "-":p.date}</h3>
                    <h3>Время: </h3>
                    <h3 className='Stroka_answer'>{p.time===""? "-":p.time}</h3>
                    <h3>Счет: </h3>
                    <h3 className='Stroka_answer'>{p.score===0? "-":p.score+'%'}</h3>
                    <h3>Оценка: </h3>
                   
                   
                    <h3 className='Stroka_answer'>{p.estimation===""? "-":
                    p.estimation==="Зачет"?
                     <div className='result_test'>
                   { p.estimation}
                    </div>
                    :
                    <div className='result_test_error'>
                   { p.estimation}
                    </div>
                    
                 } </h3>
                   
                    </div>
                    </div>
                   
                  </div>
                )
            })
        )
    }
    return(
        <>
        <div className='title'>
        <h1>Доступные тесты</h1>
        </div>
            {Table()}
        </>
    )
}



