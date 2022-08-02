import React, {useState} from 'react'
import Star from '../Images/Star.png'
import Men from '../Images/Men.png'
import Men1 from '../Images/Men1.png'
import Men2 from '../Images/Men2.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Homesix.scss"

export default function Homesix() {
  const [slide,setslide] = useState([
    {
        id: 1,
        icon: Men,
        imgstar: Star,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        link: "more"
    },
    {
        id: 2,
        icon: Men1,
        imgstar: Star,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
        link: "less"
    },
    {
        id: 3,
        icon: Men2,
        imgstar: Star,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        link: "more"
    },
    {
        id: 3,
        icon: Men2,
        imgstar: Star,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        link: "more"
    }
    
  ])

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className='Homesix'>
      <div className="text-container">
        <h1>Testimonials</h1>
      </div>
        <div className="Homesix-block">
            <Slider {...settings}>
            {slide.map(elem => {
                return (
                    <div className="Homesix-block-box" key={elem.id}>
                            <div className="Homesix-block-box-block">
                                <img src={elem.icon} alt="icon" />
                            </div>
                            <div className="Homesix-block-box-block2">
                                <b>Jhon Smith</b>
                                <p className='text'>Lorem Ipsum</p>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <p className='text2'>{elem.description}<a href="/">{elem.link}</a></p>
                            </div>
                    </div>
                )
            })}
            </Slider>
      </div>
    </div>
  )
}
