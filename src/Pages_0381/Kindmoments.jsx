import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Kindcard } from '../M/Kindcard'
import styled from "styled-components"
import { GetdataMainfn } from '../Redux_0381/action'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'
import { Box, SimpleGrid } from '@chakra-ui/react'

export const Kindmoments = () => {

const dispatch = useDispatch()
const kindmeallist = useSelector((store)=>store.Reducer1.Data)
// console.log(kindmeallist)
let [searchParams, setSearchParams] = useSearchParams();
// for search inputbox
const [task,setTask] = useState("")
// for sliding filter search
const [task1,setTask1] = useState("")




const SearchByplace =()=>{
 
if(task){
  setTask1("")
  dispatch(GetdataMainfn(task))
}else{
  dispatch(GetdataMainfn())
}
}


useEffect(()=>{

if(task1){
     setTask("")
        dispatch(GetdataMainfn(task1))

}

},[dispatch,kindmeallist.length,task1])



  return (
    <Box width={"90%"} margin={"auto"} >
        
        <SimpleGrid columns={[2, 3, 6]} spacing='10px' mt="50px" >
  

<Box> 
<button  style={{backgroundColor:"#2bb673 ",color:"white",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent"}}  >Moments</button>
</Box>

<Box> 
<button  style={{backgroundColor:"#f0f0f0",color:"black",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent"}}  >Deal Reviews</button>
</Box>

<Box> 
<button  style={{backgroundColor:"#f0f0f0",color:"black",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent"}}  >Following</button>
</Box>

<Box> 
<input style={{height:"25px",borderRadius:"7px",width:"200px" }}
value={task} placeholder="Search By Country"
 onChange={(e)=>setTask(e.target.value)}   />
</Box>


<Box> 
<select value={task1} style={{height:"30px",width:"150px",borderRadius:"7px"
 , borderColor:"#f0f0f0"
}}   onChange={(e)=>setTask1(e.target.value)}

>
<option value="All">All Location</option>
    <option value="India" >India</option>
    <option value="America" >America</option>
    <option value="Thailand" >Thailand</option>
    <option value="Malaysia" >Malaysia</option>
</select>
</Box>

<Box> 
<button style={{backgroundColor:"#f53838",color:"white",height:"30px",width:"100px",
borderRadius:"7px" , borderColor:"transparent"
}} onClick={SearchByplace} >Search</button>
</Box>

    
</SimpleGrid>

    
<SimpleGrid columns={[1,2,3]} spacing='10px' mt="50px" > 
{
    kindmeallist.length >0 && kindmeallist.map((item)=>{
        return <Kindcard key={item.id} item={item} />
    })
}
</SimpleGrid>

    </Box>
  )
}


