import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Error from './Error';
//import Picture from './Picture';
import Image from './Image';
import "./Form.css"
//import ListError from './ListError';
export default function DoTest2({Todos, SetTodos, number, setNumber, markers, setMarkers}) {
 
     
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [moreText, setMoreText] = useState("")
    const [n, setN] = useState("")
    const [point,setPoint] = useState([])
    


  function removeError(id){
    SetTodos([...Todos.filter((todo)=>todo.id!==id)])
  }
  function Clear(){
    
    setNumber(true)

    if(point.length < n-1 || n-1===-1){
      alert("Пока такого номера ошибки не существует! Проверьте введенные данные.")
    }
    else{
 
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      text: moreText,
      t1: text1,
      t2: text2,
      n: n,
      x:point[n-1].x,
      y: point[n-1].y,
      completeE: false,
    }
    
console.log(newItem)
  SetTodos([...Todos, newItem]);
  setText1()
  setText2()
  setMoreText("")
  setN("")
    }
  }
  
 //className='DoTest'
  return (
    <div >
        <p>Ниже представлен скриншот страницы товара интернет-магазина ru.puma.com, на котором продаются спортивная обувь, одежда и аксессуары.
              На этой странице есть некоторое количество ошибок. Необходимо найти все ошибки и описать их.</p>
             <Image point={point} setPoint={setPoint} markers={markers} setMarkers={setMarkers}/>
       <div >
        <div className='error-description'>
    <Form >
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
       <h3>Описание ошибки</h3>
        <Form.Control type="text" placeholder="Краткое описание" value={moreText} onChange={(e)=>setMoreText(e.target.value)} />
      </Form.Group>
      <Row className="g-3">
      <Col md>
      <Form.Select aria-label="Default select example"  value={text1 || ""}onChange={(e)=>setText1(e.target.value)}>
      <option  > Тип ошибки</option>
      <option value="логическая" >логическая</option>
      <option value="типографическая (орфографические, пунктуационные)
" >типографическая (орфографические, пунктуационные)
</option>
      <option value="ошибка в отрисовке интерфейса"  >ошибка в отрисовке интерфейса</option>
      <option value="ошибка контента" >ошибка контента</option>
    </Form.Select>
    </Col>
    <Col md>
    <Form.Select aria-label="Default select example" value={text2 || ""} onChange={(e)=>setText2(e.target.value)}>
      <option >Серьёзность</option>
      <option value="критична">критична</option>
      <option value="не критична">не критична</option>
      
    </Form.Select>
    </Col>
    <Col md>
    <Form.Control type="text" placeholder="Номер ошибки" value={n} onChange={(e)=>setN(e.target.value)}/>
    </Col>
    <Col md>
    <Button varient="primary" onClick={()=>{Clear()}} >Записать ошибку</Button>
    </Col>
    
    </Row>
    </Form>
    </div>
    </div>
    <h3>Список ошибок:</h3>
    

{
  number?
   <>
   {
            Todos.map((todo)=>{
                return(
                   <Error  
                   error={todo}
                   key={todo.id}
                   removeError = {removeError}
                   />
                );
            })
        }

  </>:
  <div className="Error">
  <h3>Пока что здесь пусто</h3>
  </div>
}

</div>
  );
}

