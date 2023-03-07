import React,{useState, useEffect, useCallback} from'react';
import "./Picture.css";
import Rector from './Rector';
//Здесь высвечиваются координаты выделенного прямоугольника
export default function Picture({errorPoint, setErrorPoint, width,height, SRC}) {
   
 
        const [State, setState]= useState({})
       const [v, setV] = useState("No select")
       const [n, setN] = useState(0)
    function onSelected(rect) {
      setState({
        selected: true,
        ...rect
      })
    };
    const initFetch = useCallback(() => {
      setN(n=>n+1)
      const point={
        x:State.x /10,
       y: State.y /10,
       w: State.w /10,
       h: State.h /10,
       n: n
      
     }

     setV("x:"+ point.x+ ", y: "+ point.y + ", h: "+ point.h + ", w: "+ point.w + ", n: "+ n  )
     setErrorPoint([...errorPoint, point])
    }, [State.x, State.y, State.w, State.h])
     useEffect(()=>{
      
      initFetch()
   //  return <p>{s}</p>
     }, [initFetch])//
       
   function getSelectionStr() {
  
      return ( <p>{v}</p>)
      
      
    }
    //x: {point.x}, y: {point.y}, w: {point.w}, h: {point.h}, n:{point.n}
      //setErrorPoint([...errorPoint, point])
       
      //}
      //;
    
    
    
     
    
      return (
        <div>
          <Rector width={width} height={height} onSelected={onSelected} SRC={URL.createObjectURL(SRC)}/>
          <div>
            {getSelectionStr()}
           
          </div>
        </div>
      )
    }
  
  
 