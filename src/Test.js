import React, {useState} from 'react';
import './Test.css'
export default function Test({ Save}){

    let question =[
        {
        QuestionText:"Какой тип ошибки?",
        answerOption:[
            {answerText:"логическая", isClass: "ClickBtn",  isCorrect: false, cl:false, n:0},
            {answerText:"типографическая (орфографические, пунктуационные)", isClass: "ClickBtn", isCorrect: false, cl:false, n:1},
            {answerText:"ошибка в отрисовке интерфейса",isClass: "ClickBtn",  isCorrect: true, cl:false, n:2},
            {answerText:"ошибка контента", isClass: "ClickBtn", isCorrect: false, cl:false, n:3}
        ]},
        {
        QuestionText:"Насколько серьезная ошибка?",
        answerOption:[
            {answerText:"критична",isClass: "ClickBtn",  isCorrect: false,cl:false, n:4},
            {answerText:"не критична", isClass: "ClickBtn", isCorrect: true, cl:false,n:5},
        ]
    }
    ]
    const [currentQuetion, setCurrentQuetion] = useState(0)
    const [color, setColor] = useState(["ClickBtn", "ClickBtn","ClickBtn", "ClickBtn", "ClickBtn", "ClickBtn"])
    const [ch, setCh] = useState([false, false,false,false,false, false])
    const [pr, setPr] = useState(false)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    
    function Choice(isCorrect, isClass, n){
        let copy = Object.assign([], color);
        let index = n;
        if(copy[index] === "ClickBtn2"){
            copy[index] = "ClickBtn";
            setScore(score - 1)
        }
        else{
            copy[index] = "ClickBtn2";
        }
        setColor(copy);
        let copy2 = Object.assign([], ch);
        let index2 = n;
        copy2[index2] = !ch[n];
        setCh(copy2);
        //Подсчет результата
        if(!pr){
            isClass = "ClickBtn";
            if(isCorrect){
                if(ch[n] ===true){
                    setScore(score - 1);
                }
                else{
                    setScore(score + 1);
                }
            }
            if(!isCorrect){
                if(ch[n] ===true){
                    setScore(score -2);
                }
                else{
                    setScore(score - 1);
                }
            }
        }
    }

    function NextQuestion(){
       const nextQ = currentQuetion + 1;
        if(nextQ < question.length){
            setCurrentQuetion(nextQ)
        }
        else{
            setShowScore(true)
           
        }
        
    }
    function Look(){
        setPr(true);
        setCurrentQuetion(0);
    }
    function NextItem(){
        const nextQ = currentQuetion + 1;
        if(nextQ < question.length){
            setCurrentQuetion(nextQ)
        }
        else{
            setPr(false)
        }
       
    }
    
    function Redact(){
       setCurrentQuetion(0);
        setCh([false, false,false,false,false, false]);
        setColor(["ClickBtn", "ClickBtn","ClickBtn", "ClickBtn", "ClickBtn", "ClickBtn"]);
        setPr(false);
        setScore(0);
        setShowScore(false);
    }

    const [endMy, setEndMy] = useState(false);

    function EndFunct(){
        setShowScore(true);
        setEndMy(true);
        setPr(false);
    }
    function Ans(){
        if(score<0) setScore(0);
    }
   
   
    return(
        <>
        {showScore?
                null
                 : 
                <div>
                    {/*Блок с прохождением теста */}
                    <span>Вопрос {currentQuetion + 1}/</span>{question.length}
                    <h1>{question[currentQuetion].QuestionText}</h1>
                    <div >
                        {question[currentQuetion].answerOption.map(item=>(
                            <div>
                                <input type="checkbox"  onChange={()=>{Choice(item.isCorrect, item.isClass, item.n)}} checked={ch[item.n]} />
                                <label >{item.answerText }</label>
                            </div>
                        
                        ))}
                        <button onClick={()=>NextQuestion()}>Next Question</button>
                    
                    </div>
                </div>
            }
            {pr? 
           
                <div>
                     {/*Блок с просмотром своих ответов */}
                    <span>Вопрос {currentQuetion + 1}/</span>{question.length}
                    <h1>{question[currentQuetion].QuestionText}</h1>
                    <div >
                        {question[currentQuetion].answerOption.map(item=>(
                        <div>
                            <input type="checkbox"  checked={ch[item.n]}/>
                            <label className={color[item.n]} >{item.answerText }</label>
                        </div>
                        )
                        )}
                        <button onClick={NextItem}>next</button>
                    </div>
               </div>
                : null
            }
            {Ans()}
            {endMy?<h1>Правильных ответов {score}  из {question.length}</h1>:null }
            {endMy ===false?
                <div>
                    <button  onClick={()=>{
                    EndFunct();
                    Save()
                    }}>Отправить</button>
   
                    <button onClick={() =>Look()}>Посмотреть</button>
                    <button onClick={()=>Redact()}>Редактировать</button>
                </div>  
                : null
            }  
        </>
    )
}
    
