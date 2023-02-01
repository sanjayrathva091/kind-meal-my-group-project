

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Box, Image } from '@chakra-ui/react'
const UseTimeout = ()=>{
const [running,setRunning] = useState(true)
const [timer,setTimmer] = useState(1)

const [data,setData]=useState("")


const Bringimgdata=()=>{
    axios.get(`https://kindmeals.onrender.com/KindMonents_middle/${timer}`)
    .then((res)=>{
        setData(res.data)
        // console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}




useEffect(()=>{
Bringimgdata()
let id;
if(running){
    id = setInterval(()=>{
        setTimmer((prev)=>prev+1)
        },2000)
}else if(!running){
    clearInterval(id)
}
return ()=>clearInterval(id)
},[running,timer])

if(timer==8){
    setTimmer(1)
}

return(
    <Box    w="80%"  m="auto" marginTop="40px"  >
{/* <span><h2>{timer}</h2></span> */}

<Image  src={data.image} alt="Loading"   />
    </Box>
    
)

}


export {UseTimeout}