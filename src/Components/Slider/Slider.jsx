import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../../Assets/Images/image1.jpg"
import img2 from "../../Assets/Images/image2.jpg"
import img3 from "../../Assets/Images/image3.jpg"
import img4 from "../../Assets/Images/image4.jpg"
import img5 from "../../Assets/Images/image5.jpg"
import img6 from "../../Assets/Images/image6.jpg"
import img7 from "../../Assets/Images/image7.jpg"

const Slider = () => {
  return (
        <Carousel>
                <div>
                    <img src={img1} alt="pp"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2}  alt="pp"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="pp" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} alt="pp"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img5} alt="pp"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img6} alt="pp" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img7}  alt="pp" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default Slider
