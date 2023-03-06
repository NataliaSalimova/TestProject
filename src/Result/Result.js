import React, {useState}  from 'react'


import "./Result.css"
export default function Result(){
    const [sort, setSort] = useState(true)
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
        setL(temp)}
   }
    const people = [
    
        {
            id:7,
            name: "Горбунов Сергей Тимофеевич",
            estimation: "Незачет",
            score: 53,
            time: "14 мин",
            date: "10.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование, Тест, "

        },
        {
            id:1,
            name: "Горелова Елизавета Михайловна",
            estimation: "Незачет",
            score: 0,
            time: "-",
            date: "12.02.2023",
            details: "Посмотреть",
            checked: false,
            list_test : "Тестировщик1, Тест22",
        },
        {
            id:2,
            name: "Кудряшова Василиса Артёмовна",
            estimation: "Зачет",
            score: 100,
            time: "25 мин",
            date: "12.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тест",
        },
        {
            id:3,
            name: "Терехов Андрей Михайлович",
            estimation: "Зачет",
            score: 83,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование, Тест",
        },
        {
            id:4,
            name: "Якушева Алина Андреевна",
            estimation: "Незачет",
            score: 53,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестировщик1, Тестирование",
        },
        {
            id:5,
            name: "Малов Андрей Михайлович",
            estimation: "Зачет",
            score: 34,
            time: "32 мин",
            date: "14.12.2022",
            details: "Просмотр",
            checked: false,
            list_test : "Тестирование, Тест, Тестировщик2",
        },
        {
            id:6,
            name: "Пупкин Василий Васильевич",
            estimation: "-",
            score: "-",
            time: "-",
            date: "-",
            details: "-",
            checked: false,
            list_test : "Тестирование",
        }
       
       ]
       ;
       const [l, setL] = useState(people)
       function SortEstimation(e){
        const estimation = e.target.value
       
        let pers = []
       
        for(let i =0; i<l.length; i+=1){
         if( l[i].estimation === estimation){
                 pers.push(l[i])
         }
        }
        return setL([...pers])
       }
       function SortScore(e){
       
        let score = e.target.value
       if(score==="-"){
        const sorted = people.sort((a)=>{
            if(  a.score === score  ){
                return -1
            }
           
           
            return 0
        })
        return setL([...sorted])
       }
       else{
        let pers = []
       
       for(let i =0; i<l.length; i+=1){
        if( l[i].score<=Number(score)+10 && l[i].score>=score){
                pers.push(l[i])
        }
       }
       return setL([...pers])
       }
    }
    function SortTest(e){
        const stroka = e.target.value
        function isWordInString(needle, haystack) {
            return haystack
              .split(', ')
              .some(p => (p === needle));
          }
          let pers = []
          for(let i =0; i<l.length; i+=1){
           if(isWordInString( stroka,l[i].list_test)){
                   pers.push(l[i])
           }
          }
          return setL([...pers])
    }
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
 
    
    function Table(){

        return(
            l.map((p)=>{
               
                return(
                  
                    <tr key={p.id + p.name}>
                       
                        <td > <input type="checkbox" name={p.name}
                        onChange={handleChange}
                        checked={p?.isChecked || false}
                        value={p.name}
                        /></td>
                        <td>{p.name}</td>
                        {p.estimation==="" ? "-":
                        p.estimation==="Зачет"? 
                       
                             <td className='Zachet'>{p.estimation}</td>
                        :
                        
                         <td className='NotZachet'>{p.estimation}</td>
                   
                        }
                       
                        <td>{p.score==='-'? '-' : p.score+'%'}</td>
                        <td>{p.time}</td>
                        <td>{p.date}</td>
                        <td>{p.details}</td>
                        <td>{p.list_test}</td>
                    </tr>
                )
            })
        )
       }
    return(
        <div className='Result' >
       <div className='select-test-Result'>
       <select onChange={(e)=>SortTest(e)}>
      <option>Выберите нужный тест</option>
      <option value="Тестировщик1">Тестировщик1</option>
      <option value="Тестировщик2">Тестировщик2</option>
      <option value="Тест">Тест</option>
      </select>
   
    </div>
    <div className='nav'>
        <div className='find-users'>
            <img src="/Pict/find.png" alt='поиск'/>
            <input type='text' placeholder='Найти'/>
        </div>
    
        <div className='estimation'>
        <select onChange={(e)=>SortEstimation(e)}>
      <option>Оценка</option>
      <option value="Зачет">Зачет</option>
      <option value="Незачет">Незачет</option>
      <option value="-">-</option>
      </select>
      </div>
      <div className='score'>
      <select onChange={(e)=>SortScore(e)}>
      <option>Счёт</option>
      <option value={100}>100%</option>
      <option value={90}>90%</option>
      <option value={80}>80%</option>
      <option value={70}>70%</option>
      <option value={60}>60%</option>
      <option value={50}>50%</option>
      <option value={40}>40%</option>
      <option value={30}>30%</option>
      <option value={20}>20%</option>
      <option value={10}>10%</option>
      <option value={0}>0%</option>
      <option value={"-"}>-</option>
      </select>
      </div>
     
      <div className='reset'onClick={()=>window.location.reload()}>
        <p >Сброс</p>
        <img src="/Pict/delete2.png" alt="delete"/>
      </div>
      </div>
      <div className='table-users'>
            <table className='table'>
            <thead >
		<tr>
        <th><input type="checkbox"   name="allSelect"
      checked={l.filter((p)=>p?.isChecked !== true).length<1}
      onChange={handleChange}
        /></th>
			<th>Имя <img src="/Pict/up.jpg" onClick={()=>Sort()} alt="sort" className='sort'/></th>
           <th>Оценка</th>
			<th>Счет</th>
			<th>Время</th>
            <th>Дата</th>
            <th>Детали</th>
			<th>Список тестов</th>
		</tr>
	</thead>


                <tbody className='head-table'>
               
                    {Table()}
                </tbody>
            </table>
        </div>
      
      
        </div>
    )
}