import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


export const MealdealCard = ({item}) => {
    const navigate = useNavigate()
    const Getid=(id)=>{
        navigate(`/singlepage/${id}`)
        }
    
  return (
    <Box   w="100%" h={{base:"600px" , md:"600px",lg:""}} onClick={()=>Getid(item.id)}  >

<Image  w="100%" h="45%"  src={item.dishImage} />
<Text fontSize={"20px"} fontWeight="bold" >{item.chefName}-{item.ShopName}</Text>
<Box textAlign={"left"} mt="20px" >


<Text  fontSize={"20px"} >{item.Description}</Text>
</Box>
<Button mt="10px"  mb="20px"   bg="#f53838" w="250px" color="white"  fontWeight={"bold"}   fontSize={"2xl"} >
    Get Free Coupon
</Button>
<hr/>

<Box  h="100px" display={"flex"} gap="5px" mt="20px">

<Box  display={"flex"} gap="3px" w="32%" >
    <Box> 
<Image   src="https://www.kindmeal.my/images/icon_egg.png" />
</Box>
<Box> 
<Image   src="https://www.kindmeal.my/images/icon_milk.png" />
</Box>
<Box> 
<Image   src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" />
</Box>
</Box>

<Box   w="32%">
    <Text>KindMeal Discount</Text>
    <Text fontSize={"30px"} color="#f53838" >10 %</Text>
</Box>

<Box  w="32%" >
    <Text>Expiring Soon</Text>
    <Text>{item.date}</Text>
</Box>

</Box>

    </Box>
  )
}
