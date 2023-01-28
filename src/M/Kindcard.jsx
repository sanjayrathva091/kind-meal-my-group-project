import React, { useState } from 'react'
import {FaComment,FaHeart} from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";

import { useDispatch } from 'react-redux';
import { EditReqMainFn, GetdataMainfn } from '../Redux_0381/action';
import { Box, Button, Image, Text } from '@chakra-ui/react';




export const Kindcard = ({item}) => {
const dispatch = useDispatch()

const HandleEdit=(id)=>{
const newValue = item.heartcount+1
dispatch(EditReqMainFn(`https://kindmeals.onrender.com/KindMonents_upper/${id}`,{heartcount:newValue}))
.then(()=>{
    dispatch(GetdataMainfn())
})
}

  return (
    
    <Box   boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"    height="480px" >  

   {/* upper Box ----------*/}

        <Box  style={{display:'flex', margin:"auto",gap:"60px"}}>
            {/* upperleft img */}
<Box    >
<Image src={item.chefImage} height="80px" width="80px"
     borderRadius={{ base:"50%",md:"50%",lg:"50%"}}
     marginTop="5px"
     marginLeft="3px"
     />
 
 </Box >
 
<Box >
<Text  fontWeight={"bold"} style={{marginLeft:"2px"}} >{item.chefName}</Text>

<Text style={{marginLeft:"2px"}} >{item.date}</Text>
</Box >
    
 
{/* upperbtn */}
<Box  style={{marginTop:"20px"}}>
    <Button style={{backgroundColor:"#f53838",
    color:"white",
    borderColor:"transparent",
    height:"30px",
width:"70px",
borderRadius:"4px",
marginRight:"15px"
    }} >View
    </Button>
    </Box >

        </Box >
{/* --------- */}
{/* middle dish img */}
<Box marginTop={"10px"} >
    <Image   style={{width:"100%" ,height:"200px", margin:"auto" }}    src={item.dishImage}  />
</Box >
{/* ---- */}
{/* icons */}
<Box display="flex" margin="auto" gap="10px" marginTop={"4px"} marginLeft="10px" >
<Box  style={{color:"#797877" , width:"10%"  }}><FaComment/> 0</Box >
<Box   style={{color:"#797877" , width:"10%"}}  ><BsFillCameraFill/> 0</Box >

<Box  style={{color:"red" , width:"10%"}} 
onClick={()=>HandleEdit(item.id)}><FaHeart/> {item.heartcount}</Box >



</Box >

<Box ><Text>  {item.Description}</Text></Box >
{/* -------- */}


<Box  display={"flex"} margin="auto" gap="10px" >
    <Box   width="40px" marginLeft={"10px"}>
<Image  src="data:image/png;base64,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" 
   height="40px" />
    </Box >

    <Box   width="70%"  >
<Text style={{marginLeft:"30px" ,fontWeight:"bold"}}  >{item.ShopName}</Text>
<br/>
<Text style={{marginTop:"-20px"}} >{item.Location}</Text>
    </Box >
</Box >

</Box>
   
  )
}


