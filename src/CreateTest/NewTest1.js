import React, { useState } from 'react'
import './NewTest1.css'
import Picture from './Picture'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Error from '../TakeTest/Error';
export default function NewTest1({ name, setName, errorPoint, setErrorPoint, mainText, setMainText, selectedImage, setSelectedImage,Data, setData, numb, setNumb }){
    

    const [text12, setText12] = useState("")
    const [text22, setText22] = useState("")
    const [moreText2, setMoreText2] = useState("")
    const [n2, setN2] = useState("")
    function removeError2(id){
      setData([...Data.filter((todo)=>todo.id!==id)])
    }
   
    function Clear2(){
    
      setNumb(true)
      const newItem2 = {
        id: Math.random().toString(36).substr(2, 9),
        text: moreText2,
        t1: text12,
        t2: text22,
        n: n2,
        x: errorPoint[n2-1].x,
        y: errorPoint[n2-1].y,
        w: errorPoint[n2-1].w,
        h: errorPoint[n2-1].h
      }
      
 
  setData([...Data, newItem2])
  
    setText12()
    setText22()
    setMoreText2("")
    setN2("")
  
    
  }
    return(

        <>
        <h3>Введите название теста</h3>
        <input type="text"  onChange={(e)=>setName(e.target.value)} className="setName-NewTest1"/>
        <h3>Введите текст задания</h3>
        <textarea value={mainText||""} onChange={(e)=>setMainText(e.target.value)} className='big_text-NewTest1'/>
        {/*}
        <h1>Вы ввели</h1>
    <p>{mainText}</p>*/}
        <h3>Добавьте изображение</h3>
     
        <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
 {selectedImage && ( 
        <div>
          {/*}
        <img alt="not fount" width={"800px"} src={URL.createObjectURL(selectedImage)} /> URL.createObjectURL*/}
        <Picture errorPoint={errorPoint} setErrorPoint={setErrorPoint} SRC={selectedImage} width={"800"} height={"450"}/>
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        
 </div>)}
    <div >
        <div className='error-description'>
    <Form >
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
       <h3>Описание ошибки</h3>
        <Form.Control type="text" placeholder="Краткое описание" value={moreText2} onChange={(e)=>setMoreText2(e.target.value)} />
      </Form.Group>
      <Row className="g-3">
      <Col md>
      <Form.Select aria-label="Default select example"  value={text12 || ""}onChange={(e)=>setText12(e.target.value)}>
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
    <Form.Select aria-label="Default select example" value={text22 || ""} onChange={(e)=>setText22(e.target.value)}>
      <option >Серьёзность</option>
      <option value="критична">критична</option>
      <option value="не критична">не критична</option>
      
    </Form.Select>
    </Col>
    <Col md>
    <Form.Control type="text" placeholder="Номер ошибки" value={n2} onChange={(e)=>setN2(e.target.value)}/>
    </Col>
    <Col md>
    <Button varient="primary" onClick={()=>{Clear2()}} >Записать ошибку</Button>
    </Col>
    
    </Row>
    </Form>
    </div>
    </div>
    <h3>Список ошибок:</h3>
    

{
  numb?
   <>
   {
             Data.map((todo)=>{
              return(
                 <Error 
                 error={todo}
                 key={todo.id}
                 removeError = {removeError2}
                 />
              );
          })
        }

  </>:
  <div className="Error">
  <h3>Пока что здесь пусто</h3>
  </div>
}

     
        </>
    )
}