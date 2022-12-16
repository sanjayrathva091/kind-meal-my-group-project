import {useEffect} from 'react';
import './Slider.css';

function Slider(){

    let slideIndex = 1;

    setInterval(()=>{
        if(slideIndex===7){
            slideIndex=1
        }
        slideIndex++;
      showSlides(slideIndex);
    },6000)

    const handleCurrentSlide = (n)=>{
        showSlides(slideIndex = n)
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    } 

    useEffect(()=>{
        showSlides(1);
    },[])

    return(
        <div className="container" style={{height:"545px"}}>

            {/* <!-- Full-width images with number text --> */}
            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/4/467-3019-m.jpg" width="30%" alt="1"/>
                </div>
               
            </div>

            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/4/490-3254-m.jpg" width="30%" height="350px" alt="1"/>
                </div>
            </div>

            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/6/633-3874-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/5/512-3751-m.jpg" width="30%" height="350px" alt="1"/>
                </div>
            </div>

            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/6/618-3514-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/4/494-3446-m.jpg" width="30%"  alt="1"/>
                </div>
            </div>

            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/6/628-4921-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/5/505-4609-m.jpg" width="30%" height="350px" alt="1"/>
                </div>
            </div>

            <div className="mySlides">
                <div style={{display:"flex"}}>
                    <img src="https://www.kindmeal.my/photos/deal/4/498-2202-m.jpg" style={{width:"70%",height:"350px"}} alt="slide-1"/>
                    <img src="https://www.kindmeal.my/photos/shop/2/212-2494-m.jpg" width="30%" height="350px" alt="1"/>
                </div>
            </div>

            {/* <!-- Image text --> */}
            <div className="caption-container">
                <p id="caption"></p>
            </div>

        {/* <!-- Thumbnail images --> */}
        <div className="row" style={{paddingTop:"10px",paddingLeft:"10px"}}>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(1)} alt="Creative Home - Style Dinning,15%off -Red House 2"/>
            </div>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(2)} alt="Memorial Vegetairian Delights, 20%off -Elym Vegetairian"/>
            </div>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/6/633-3874-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(3)} alt="Level Feals,20%off -Love Veggie"/>
            </div>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/6/618-3514-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(4)} alt="Trendy Fuision Delights"/>
            </div>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/6/628-4921-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(5)} alt="Japanese Fusion Delights"/>
            </div>
            <div className="column">
            <img className="demo cursor" src="https://www.kindmeal.my/photos/deal/4/498-2202-m.jpg" style={{width:"90%",height:"20vh"}} onClick={()=>handleCurrentSlide(6)} alt="Imperial Rest,10% off -Implerial firstbColl"/>
            </div>
        </div>
    </div>
    )
}

export default Slider;

//  {
//     img7:"https://www.kindmeal.my/photos/deal/6/617-3503-m.jpg",
//     brand7:'https://www.kindmeal.my/photos/shop/4/493-3436-m.jpg',
//     title:"Earth Friendly Meals,15off -LOovem "
// }