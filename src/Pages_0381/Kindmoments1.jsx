import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from "styled-components"
import { Kindcard } from '../M/Kindcard'
import { Kindcard1 } from '../M/kindcard1'
import { Getdata1, Getdatafailure1, Getdatasuccess1 } from '../Redux_0381/action'
import Pagination from './Pagination'




export const Kindmoments1 = () => {
const dispatch = useDispatch()
const DataList = useSelector((store)=>store.Reducer2.Data)
// console.log(DataList)
const[page,setPage] = useState(1)

const GetdataMainFn1 =()=>{
    dispatch(Getdata1())
axios.get(`https://kindmeals.onrender.com/KindMonents_Lower?_page=${page}&_limit=6`)
.then((res)=>{
    dispatch(Getdatasuccess1(res.data))
}).catch((err)=>{
    dispatch(Getdatafailure1())
})
}
console.log(page)
useEffect(()=>{
    GetdataMainFn1()
},[page])

  return (
    
    <div>
        
<InputWrapper>
    
<div style={{display:"flex" , margin:"auto" , gap:"20x", width:"90%"}}  >
    <div>Pages :</div>
     <div style={{marginLeft:"5px"}}> <Pagination current={page} onChange={(page)=>setPage(page)}   /></div>
   </div>


</InputWrapper>
<Wrapper>
{
DataList.length>0 && DataList.map((item)=>{
    return <Kindcard1 key ={item.id} item={item} />
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
      }`

      const InputWrapper = styled.div`
height :50px;
width:90%;
margin :auto;
// border :1px solid black;
margin-top:20px  
    
`