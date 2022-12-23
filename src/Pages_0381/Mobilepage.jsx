import React from 'react'


 const Mobilepage = () => {


const Appstore =()=>{
    window.location.assign("https://apps.apple.com/my/app/kindmeal-my/id857891884?ls=1")
}

const Googlestore =()=>{
    window.location.assign("https://play.google.com/store/apps/details?id=com.andykoh.KindMeal")
}

  return (
    <div>

<div  style={{backgroundColor :"#f0f0f0"}} >
<h1>KindMeal Mobile Apps on iOS & Android</h1>
<h4>
Yummylicious food at irresistible prices. One click (alright, it's a tap) to grab a coupon, and just another click to use it. No waiting, no upfront payment.
</h4>
<h4>Share delicious moments and exhibit your camwhore skills. Follow foodies to discover great dining places.</h4>

<h4>We know you're hungry. Time to download the app</h4>

<h4>Psst.. Save the cows, save the world!</h4>

</div>

<div>
    <div>
        <img  src ="https://www.kindmeal.my/images/mobile_app_large.png" />
    </div>

</div>



<div  style={{backgroundColor :"#f0f0f0",   display:"flex" , marginLeft:"10%" ,gap :"20px", marginTop:"50px"}}>
    <div onClick={Appstore} >
<img src ="https://www.kindmeal.my/images/mobile_download_ios.png"   />
    </div>

    <div  onClick={Googlestore} >
    <img src ="https://www.kindmeal.my/images/mobile_download_android.png"   />
    </div>
</div>
    </div>
  )
}
export {Mobilepage}