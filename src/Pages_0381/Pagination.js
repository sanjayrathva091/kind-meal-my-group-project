import React from 'react'

function Size(n){
return new Array(n).fill(0)
}


export default function Pagination({totalpage=7,current,onChange}) {
    let Pages = Size(totalpage).map((a,i)=>(
        <button onClick={()=>onChange(i+1)} disabled={current==i+1}  key={i+1} 
        style={{color:"blue" ,backgroundColor:"white", borderColor:"#797877",
      height:"25px", width:"50px"
      
      }}
        
        >{i+1}</button>
    ))
  return (
    <div>{Pages}</div>
  )
}
