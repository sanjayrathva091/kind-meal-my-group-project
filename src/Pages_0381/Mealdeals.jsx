import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { MealdealCard } from '../Components/MealdealCard'
import Pagination from './Pagination'

export const Mealdeals = () => {
const[data,setData] = useState([])
const[page,setPage] = useState(1)

const Getdata=()=>{
    axios.get(`https://kindmeals.onrender.com/KindMonents_upper?_page=${page}&_limit=6`)
    .then((res)=>setData(res.data))
    .catch((err)=>{
        console.log(err)
    })
}


useEffect(()=>{
Getdata()
},[page])


  return (
   <Box  height="2300px" >



    <Box height={{base:"550px" ,md:"0px",lg:"250px"}}  bg="#f0f0f0" mb="50px">
        <Box w="90%" m="auto" textAlign={"left"} > 
        <Text fontSize={"2xl"}  > Meat-Free Deals   |   Restaurants In Malaysia</Text>
           <Text  fontSize={"18px"} >
           Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!
            </Text> 
            <Text >
            Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!

            </Text>
        </Box>



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
   placeholder="Search By Country"
    />
  </Box>
  
  
  <Box> 
  <select  style={{height:"30px",width:"150px",borderRadius:"7px"
   , borderColor:"#f0f0f0"
  }}   
  
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
  }}  >Search</button>
  </Box>
  
      
  </SimpleGrid>

  <Box display="flex"  margin="auto"  gap="20x" w={[300, 400, 500]} mt="100px"  >
    <Box>Pages :</Box>
     <Box marginLeft="5px"> <Pagination current={page} onChange={(page)=>setPage(page)}   /> </Box>
   </Box>

   

  <SimpleGrid columns={[1, 2, 2]} w="90%" margin={"auto"} mt="100px" gap="25px"  >
  {
    data.length >0 && data.map((item)=>{
        return <MealdealCard key={item.id}  item={item} />

    })
  }
</SimpleGrid>



    </Box>



    

   </Box>
  )
}
