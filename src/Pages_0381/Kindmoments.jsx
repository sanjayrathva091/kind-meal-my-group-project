import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Kindcard } from '../M/Kindcard'
import styled from "styled-components"
import { GetdataMainfn } from '../Redux_0381/action'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'

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
  setTask("")
}

  
   
}


useEffect(()=>{

if(task1){
     setTask("")
        dispatch(GetdataMainfn(task1))

}

},[dispatch,kindmeallist.length,task1])



  return (
    <div>
        <h1>Data 1</h1>
<InputWrapper>

<button  style={{backgroundColor:"#2bb673 ",color:"white",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent",marginLeft:"30px"}}  >Moments</button>

<button  style={{backgroundColor:"#f0f0f0",color:"black",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent",marginLeft:"30px"}}  >Deal Reviews</button>

<button  style={{backgroundColor:"#f0f0f0",color:"black",height:"30px",width:"130px",
borderRadius:"7px" , borderColor:"transparent",marginLeft:"30px"}}  >Following</button>

<input style={{height:"25px",borderRadius:"7px",width:"200px",marginLeft:"150px" }}
value={task} placeholder="Search By Country"
 onChange={(e)=>setTask(e.target.value)}   />


<select value={task1} style={{height:"30px",width:"150px",borderRadius:"7px"
 ,marginLeft:"20px", borderColor:"#f0f0f0"
}}   onChange={(e)=>setTask1(e.target.value)}

>
<option value="All">All Location</option>
    <option value="India" >India</option>
    <option value="America" >America</option>
    <option value="Thailand" >Thailand</option>
    <option value="Malaysia" >Malaysia</option>
</select>

<button style={{backgroundColor:"#f53838",color:"white",height:"30px",width:"100px",
borderRadius:"7px" , borderColor:"transparent",marginLeft:"30px"
}} onClick={SearchByplace} >Search</button>

</InputWrapper>
    
  

    <Wrapper >
    
{
    kindmeallist.length >0 && kindmeallist.map((item)=>{
        return <Kindcard key={item.id} item={item} />
    })
}
    </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`

 width:90%;
 margin:auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
   grid-gap: 20px;
    // border:1px solid black;
    

    @media  screen and (max-width: 600px) {
        grid-template-columns: repeat(2,1fr);
   grid-gap: 2px;
      }
      @media  screen and (max-width: 420px) {
        grid-template-columns: repeat(1,1fr);
   grid-gap: 2px;
      }
`
const InputWrapper = styled.div`
height :50px;
width:90%;
margin :auto;
// border :1px solid black;
margin-top:20px  
    
`