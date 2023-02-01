import { Box, Button, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';

export const Singlepage = () => {

    let { id } = useParams();
const [data,setData] = useState("")
const [running,setRunning] = useState(true)
const [timer,setTimmer] = useState(1)
const [imgdata,setImgdata]=useState("")



const Dishdata =[
    {
        id:1,
        url:"https://www.kindmeal.my/photos/deal/6/681-4344-s.jpg"
    },
    {
        id:2,
        url:"https://www.kindmeal.my/photos/deal/6/681-4345-s.jpg"
    },
    {
        id:3,
        url:"https://www.kindmeal.my/photos/deal/6/681-4347-s.jpg"
    },
    {
        id:4,
        url:"https://www.kindmeal.my/photos/deal/6/681-4348-s.jpg"
    },
    {
        id:5,
        url:"https://www.kindmeal.my/photos/deal/6/681-4349-s.jpg"
    },
    {
        id:6,
        url:"https://www.kindmeal.my/photos/deal/6/681-4350-s.jpg"
    },
    {
        id:7,
        url:"https://www.kindmeal.my/photos/deal/6/681-4351-s.jpg"
    },
    {
        id:8,
        url:"https://www.kindmeal.my/photos/deal/6/681-4354-s.jpg"
    },
    {
        id:9,
        url:"https://www.kindmeal.my/photos/deal/6/681-4355-s.jpg"
    }
]



useEffect(()=>{
    Bringdata()
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
    
    if(timer==40){
        setTimmer(1)
    }

    const Bringdata=()=>{
        axios.get(`https://kindmeals.onrender.com/KindMonents_upper/${timer}`)
        .then((res)=>setImgdata(res.data))
        .catch((err)=>console.log(err))
    }
    


const singleProd=()=>{
axios.get(`https://kindmeals.onrender.com/KindMonents_upper/${id}`)
.then((res)=>setData(res.data))
.catch((err)=>console.log(err))

}

useEffect(()=>{
    singleProd()
   

},[id])



  return (
    <Box mt="20px" bg="#f0f0f0 "> 
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

<Box     w="80%" m="auto" mt="10px" fontSize={"25px"} textAlign={"left"} >
<SimpleGrid columns={[1, 2, 2]} spacing='40px'  >
  {/* imgbox */}
  <Box   >
    <Image w="500px" h ="400px" src={imgdata.dishImage} />
   </Box>
{/* textbox */}
   <Box    textAlign={"center"}>
   <Box  w="50%" m="auto" >
    <Text>Normal Price</Text>
    <Text color="green"  fontSize={"35px"}>RM12.00</Text>
</Box>
<Box  w="50%"  m="auto">
<Text>KindMeal Discount</Text>
    <Text  fontSize={"35px"} color="green" >10%</Text>
</Box>
<Box>
<Text> No pre-payment or booking needed. Get coupon & dine instantly!</Text>
<Button bg="#2d96ff " color="white" fontSize={"30px"} > Get Free Coupons </Button>
</Box>
   </Box>

   <Box >
    <Heading color="#2bb673"  >Delicious Details</Heading>
    <Text fontSize={"20px"} >
    Berjaya Cafe delights you with opulence, style and taste from the best chefs in town.
<br/> <br/>
Savor only the best in gastronomic experience with our creative variety of contemporary vegetarian cuisine.
    </Text>
<Text fontSize={"25px"} fontWeight="bold" color="#2bb673" >Enjoy discount off our ala carte menu, including:</Text>
    <UnorderedList >
  <ListItem>Pasta</ListItem>
  <ListItem>Pizzat</ListItem>
  <ListItem>Rice</ListItem>
  <ListItem>Chola kulcha</ListItem>
  <ListItem>Snak</ListItem>
  <ListItem>Soup</ListItem>
  <ListItem>Beverages</ListItem>
</UnorderedList>
  <Box  display={"flex"} gap="10px" w="32%" m="auto">
    <Box> 
<Image   src="https://www.kindmeal.my/images/icon_egg.png" />
<Text fontSize={"15px"}>Contains Eggs</Text>
</Box>
<Box> 
<Image   src="https://www.kindmeal.my/images/icon_milk.png" />
<Text fontSize={"15px"}>Contains Dairyor Milk</Text>
</Box>
<Box> 
<Image   src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" />
<Text fontSize={"15px"}  >No Alcohol</Text>
</Box>
</Box>
   </Box>
   <Box>
    <Heading color="#2bb673">Terms & Conditions</Heading>
    <Text>Coupon Validity :-  {data.date}</Text>
    <Text>Exclusivity :- Valid with other KindMeal.my coupons only</Text>
<Text>Reservation :- Not required</Text>
<Text>Repeat Customers:- You can get this coupon once per week</Text>
   </Box>
</SimpleGrid>
   
</Box>

<Box w="80%" m="auto" bg="#f0f0f0 ">
    <Heading>Gallery</Heading>
<SimpleGrid columns={[1, 3, 6]} spacing='40px' mt="20px" >
 
    {
        Dishdata.length > 0 && Dishdata.map((item)=>{
            return(<Box>
                <Image  src={item.url} />
            </Box>)
        })
    }

</SimpleGrid>
</Box>
    </Box>
  )
}
