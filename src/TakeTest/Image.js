import React, {useState} from 'react'
import "./Image.css"
import ImageMarker from 'react-image-marker';
export default function Image({point,setPoint, markers, setMarkers}) {

  const [number, setNumber] = useState(1)
  

 function Add(marker){
  setMarkers([...markers, marker])
  setNumber(number=>number+1)
  let p = {
    x: marker.left,
    y: marker.top,
    n: number
  }
  setPoint([...point,p]) 
 
 }
 
 
      return (
        <div>
       <ImageMarker
    src="/Pict/p_1.png"
    markers={markers}
    onAddMarker={(marker) => Add(marker)}
    
/>
    
      </div>
      )
    }
  
  
 