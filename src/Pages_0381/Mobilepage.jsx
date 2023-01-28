import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'


 const Mobilepage = () => {


const Appstore =()=>{
    window.location.assign("https://apps.apple.com/my/app/kindmeal-my/id857891884?ls=1")
}

const Googlestore =()=>{
    window.location.assign("https://play.google.com/store/apps/details?id=com.andykoh.KindMeal")
}

  return (
    <Box >

<Box   backgroundColor ="#f0f0f0" textAlign={"left"} >
<Box width="90%"   m="auto" >
<Text fontWeight={"bold"}  fontSize={"3xl"} >KindMeal Mobile Apps on iOS & Android</Text>
<Text  fontSize={"2xl"}>
Yummylicious food at irresistible prices. One click (alright, it's a tap) to grab a coupon, and just another click to use it. No waiting, no upfront payment.
</Text>
<Text fontSize={"2xl"}>Share delicious moments and exhibit your camwhore skills. Follow foodies to discover great dining places.</Text>

<Text fontSize={"2xl"}>We know you're hungry. Time to download the app</Text>

<Text fontSize={"2xl"}>Psst.. Save the cows, save the world!</Text>
</Box>

</Box >

<Box  >
   
        <img  src ="https://www.kindmeal.my/images/mobile_app_large.png" />
    

</Box >





<SimpleGrid columns={[1, 2, 2]} 
spacing='0.3px' w="90%" m="auto"
 
 
 marginTop="50px"
 >
<Box  onClick={Appstore} >
<img src ="https://www.kindmeal.my/images/mobile_download_ios.png"   />
    </Box >

    <Box   onClick={Googlestore} >
    <img src ="https://www.kindmeal.my/images/mobile_download_android.png"   />
    </Box >
</SimpleGrid>

    </Box >
  )
}
export {Mobilepage}