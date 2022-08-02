import React, { useState } from 'react'
import People from '../Images/People.png'
import Camera from '../Images/Camera.png'
import Fleximg3 from '../Images/fleximg/Fleximg3.png'
import Dron from '../Images/Dron.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Homefour.scss"


export default function Homefour() {
    const [arr,setarr] = useState([
    {
        id: 1,
        imgUrl: Camera,
        textp: "Twilight Photography"
    },
    {
        id: 2,
        imgUrl: People,
        textp: "Agent Video Presentation(hover)"
    },
    {
        id: 3,
        imgUrl: Camera,
        textp: "Matterport"
    },
    {
        id: 4,
        imgUrl: Dron,
        textp: "Drone"
    },
    {
        id: 5,
        imgUrl: Camera,
        textp: "Twilight Photography"
    },
    {
        id: 6,
        imgUrl: People,
        textp: "Agent Video Presentation"
    },
    // {
    //     id: 7,
    //     imgUrl: Fleximg3,
    //     textp: "Matterport"
    // },
  ])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='Homefour'>
        <div className="HomeSlide">
          <div className="h1-container">
            <h1>Additional services</h1>
            <p>Customize your experience by adding any additional services to any Package</p>
          </div>
        <Slider {...settings}>
        {arr.map(elem => {
            return (
                
                <div className='HomefourSlide' key={elem.id}>
                    <div className="HomefourSlide-block">
                        <div className="HomefourSlide-text">
                            <img src={elem.imgUrl} alt="img" />
                            <p><sup>$</sup>129</p>
                            <h5>{elem.textp}</h5>
                        </div>
                        <div className="HomefourSlide-box">
                            <button className='btn-1'>Add to order</button>
                            <ul>
                                <li>24 hours delivery guarantee</li>
                                <li>x20 HDR professional photos</li>
                                <li>24 hours delivery guarantee</li>
                            </ul>
                        </div>
                        <button className='btn-2'>Quick preview</button>
                    </div>
                </div>
                
            )
        })}
        </Slider>
        </div>
    </div>
  )
}
