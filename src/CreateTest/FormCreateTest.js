import React, {useState} from 'react'
import NewTest1 from './NewTest1';
import NewTest2 from './NewTest2';
import  '../TakeTest/Form.css';


export default function FormCreateTest(){
    const FormTitle = ["Задание 1", "Задание 2"]
    const [name, setName] = useState("")
    const [Data, SetData] = useState([]);
   
    const [numb, setNumb] = useState(false)
    const [page, setPage] = useState(0)

    const [selectedImage, setSelectedImage] = useState(null);
  const [mainText,setMainText] = useState("")
  const [errorPoint, setErrorPoint] = useState([])


  const [Data2, SetData2] = useState([]);
   
  const [numb2, setNumb2] = useState(false)
  

  const [selectedImage2, setSelectedImage2] = useState(null);
const [mainText2,setMainText2] = useState("")
const [errorPoint2, setErrorPoint2] = useState([])
 function SeeNewTest(){
    if(page===0){
      
        return <NewTest1 name={name} setName={setName} errorPoint={errorPoint} setErrorPoint={setErrorPoint} mainText={mainText} setMainText={setMainText} selectedImage={selectedImage} setSelectedImage={setSelectedImage} Data={Data} setData={SetData} numb={numb} setNumb={setNumb}/>
    }
    if(page===1){
      
        return <NewTest2 errorPoint={errorPoint2} setErrorPoint={setErrorPoint2} mainText={mainText2} setMainText={setMainText2} selectedImage={selectedImage2} setSelectedImage={setSelectedImage2} Data={Data2} setData={SetData2} numb={numb2} setNumb={setNumb2}/>
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
        {page === FormTitle.length - 1? <button>Сохранить</button> : null}
        </div>
        </div>
    )
}