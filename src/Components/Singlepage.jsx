import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';

export const Singlepage = () => {

    let { id } = useParams();
const [data,setData] = useState("")

const singleProd=()=>{
axios.get(`https://kindmeals.onrender.com/KindMonents_upper/${id}`)
.then((res)=>setData(res.data))
.catch((err)=>console.log(err))

}

useEffect(()=>{
    singleProd()
},[id])

console.log(data)

  return (
    <Box mt="20px"> 
<Box>
<Box  height={"450px"}  position={"relative"} w="80%" m="auto" >
    <Image src={data.dishImage}  height="100%" w="100%" 
opacity="90%"
    
    />
</Box>

<Box>
<Box  w="200px" h="250px"position={"absolute"}
 top={"220px"}left={"200px"}
 borderRadius="10px"
 boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
 >
    <Image src={data.chefImage} w="100%" h="100%" borderRadius="10px"  />
    <Text fontSize={"2xl"} fontWeight="bold" color="white" >{data.chefName}</Text>
</Box>

<Box position={"absolute"} left="500px" top="400px">
    <Button bg="tomato" color={"white"} >+Follow Members</Button> 
    
    <Button ml="10px"  >contact Number</Button>
</Box>

</Box>

</Box>

<Box color={"rgb(38, 201, 109)"} w="80%" m="auto" mt="10px" fontSize={"25px"}fontWeight={"bold"} textAlign={"left"} >
    <Text  >Description:- {data.Description}</Text>
<Text>ShopName:- {data.ShopName}</Text>
<Text>Location:- {data.Location}</Text>
</Box>
    </Box>
  )
}
