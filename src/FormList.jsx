
import React, {useState } from 'react';
import ListAnswer from './ListAnswer';
import TodoItem from './TodoItem';
import "./Style.css"
import Test from './Test';
export default function FormList(){
  const [todos, setTodos] = useState([]);
  const addTask = (userInput)=>{
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
    setTodos([...todos, newItem]);
  }
}
function removeTask(id){
  setTodos([...todos.filter((todo)=>todo.id!==id)]);
}
function handleToggle(id){
  setTodos([...todos.map((todo)=>
    todo.id === id? {...todo, complete: !todo.complete} : {...todo})])
}
const [na, setNa] = useState(false);
const [col,setCol] = useState(0);

function Save(){
  setNa(true);
 //Правильным ответом в блоке с вводом слов является слово "one". Позже это переделаю
  for(let i=0; i <todos.length; i+=1){
    if(todos[i].task.replace(/\s/g, '') === "one"){
          setCol(s=>s + 1)
    }
  }
 
} 

    return(
        <>
          <div className="Style">
           
            {
              na? 
              <h1 id="a">Правильных ответов {col} {todos.length}</h1>
              : 
              <div>
                <h1>Список вариантов {todos.length}</h1>
                {/*Поле для ввода слов */}
                <ListAnswer addTask={addTask}/> 
           
               {todos.map((todo)=>{
                  return(
                  //Список всех слов, которые ввел пользователь
                  <TodoItem
                  todo={todo} 
                  key={todo.id}
                  toggleTask={handleToggle}
                  removeTask={removeTask}
                  />
                  );
                 })
                }
              </div>
            }
            
            {/*Блок с основным тестом (где нужно выбрать правильные ответы из списка) */}
            <Test
            Save={Save}
            />
      </div>
            
    </>
    );
}
