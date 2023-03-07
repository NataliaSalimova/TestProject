import React, {useState} from 'react';
import "./Users.css"


import 'reactjs-popup/dist/index.css';
import AssignTest from './AssignTest';
import DeletePerson from './DeletePerson';
export default function Users(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false)
    const [sort, setSort] = useState(true)
    const [task, setTask] = useState("")
    
    const togglePopup = () => {
      setIsOpen(!isOpen);
     
      l.map((p)=>{
       return(
            (p?.isChecked === true? p.list_test+=task: null)
                
            
      )})
      setTask("")
    }
     const Delete = () =>{
        setIsDelete(!isDelete)
    let pers = []
        l.map((p)=>{
            return(
                 (p?.isChecked === true&& isDelete==="yes"? null:  pers.push(p) )
                     
                 
           )})
           setL(pers)
     
          
     }

     
   
   const people = [
    
    {
        id:0,
        name: "Горбунов Сергей Тимофеевич",
        email: "gorbunoff@gmail.com",
        list_test : "Тестировщик1, Тестирование, Тест",
    },
    {
        id:1,
        name: "Агорелова Елизавета Михайловна",
        email: "gorelovaa.lizavet@mail.ru",
        list_test : "Тестировщик1, Тест",
    },
    {
        id:2,
        name: "Зубов Антон Михайлович",
        email: "zzub_am@gmail.com",
        list_test : "Тест",
    },
    {
        id:3,
        name: "Иванов Артём Михайлович",
        email: "artemivanoff@yandex.ru",
        list_test : "-",
    },
    {
        id:4,
        name: "Кудряшова Василиса Артёмовна",
        email: "kudryash@ya.ru",
        list_test : "Тестировщик1",
    },
    {
        id:5,
        name: "Малов Павел Георгиевич",
        email: "malov.pavel@bk.ru",
        list_test : "Тест",
    },
    {
        id:6,
        name: "Бельникова Яна Тимофеевна",
        email: "yan_timofee@yandex.ru",
        list_test : "Тестировщик2, Тестирование",
    },
    {
        id:7,
        name: "Береханов Андрей Михайлович",
        email: "androohov@mail.ru",
        list_test : "Тестировщик1",
    },
    
   ]
   const [l, setL] = useState(people)
   function Sort(){
   if(sort){
    const sortedTitle = people.sort((a, b)=> {
    
    if(a.name > b.name){
        return 1;
    }
    if(a.name < b.name){
        return -1;
    }
    return 0;

})
setSort(false)
return setL([ ...sortedTitle]);}
else{
    const sortedTitle = people.sort((a, b)=> {
    
        if(a.name < b.name){
            return 1;
        }
        if(a.name > b.name){
            return -1;
        }
        return 0;
    
    })
    setSort(true)
    return setL([ ...sortedTitle]);
}

  
    
    

    
   }
   const handleChange = (e)=>{
    const {name, checked} = e.target
    if(name==="allSelect"){
        let temp= l.map((p)=>{
        return{...p, isChecked:checked}} 
        )
        setL(temp)
       
    }
    else{
    let temp = l.map((p)=>{
      return(  p.name===name? {...p,isChecked:checked}: p)
    })
    

    setL(temp)
  
}
}
   function Table(){
    return(
        l.map((p)=>{
            return(
              
                <tr key={p.id + p.name}>
                   
                    <td > <input type="checkbox" 
                       onChange={handleChange}
                       checked={p?.isChecked || false}
                       value={p.name}
                       name={p.name}
                    /></td>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.list_test}</td>
                </tr>
            )
        })
    )
   }
    return(
        <div className='users-Users'>
            <h1>Список пользователей</h1>
        <div className='nav-Users'>
            <div className='find-users-Users'>
                <img src="/Pict/find.png" alt='поиск'/>
                <input type='text' placeholder='Найти'/>

            </div>
            <div className='test-Users'  onClick={togglePopup}>
                <p >Назначить тест</p>
                <img src="/Pict/add_test.png" alt='назначить тест'/>
            </div>
          
            
            <div className='add-Users'>
                <p>Добавить</p>
                <img src="/Pict/add.png" alt='назначить тест'/>
            </div>
            <div className='delete-Users' onClick={Delete}>
                <p>Удалить</p>
                <img src="/Pict/delete_pers.png" alt='назначить тест'/>
            </div>
        </div>
        <div className='table-users-Users'>
            <table className='table-Users'>
            <thead >
		<tr>
        <th><input type="checkbox"   name="allSelect"
      checked={l.filter((p)=>p?.isChecked !== true).length<1}
      onChange={handleChange} /></th>
			<th>Имя <img src="/Pict/up.jpg" onClick={()=>Sort()} alt="sort" className='sort'/></th>
           
			<th>Электронный адрес</th>
			<th>Назначенные тесты</th>
			
		</tr>
	</thead>


                <tbody className='head-table'>
               
                    {Table()}
                </tbody>
            </table>
        </div>
       
   {isOpen? <AssignTest
      
      handleClose={togglePopup} setTask={setTask}/>:null}
      {isDelete? <DeletePerson handleClose={Delete} setTask={setIsDelete} />:null}
    
        </div>
    )
}