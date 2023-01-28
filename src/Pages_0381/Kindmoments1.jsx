import { Box, SimpleGrid } from '@chakra-ui/react'
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
    
   <Box  width="90%" m="auto" >


        
<Box height ="50px"width="90%"  margin ="auto"marginTop={"20px"}
// border ='1px solid black'
margin-top="20px"
marginBottom={"20px"}
> 
    
<Box display="flex"  margin="auto"  gap="20x" w={[300, 400, 500]}   >
    <Box>Pages :</Box>
     <Box marginLeft="5px"> <Pagination current={page} onChange={(page)=>setPage(page)}   /> </Box>
   </Box>

   </Box>


<SimpleGrid columns={[1, 2, 3]} spacing='40px'>
  
  {
DataList.length>0 && DataList.map((item)=>{
    return <Kindcard1 key ={item.id} item={item} />
})
}

 
  
</SimpleGrid>


   


</Box>
  )
}


      const InputWrapper = styled.div`
 
    
`