import React, { useState,useEffect } from 'react'
import House from '../Images/House.jpg'
import House2 from '../Images/House2.png'
import Stop from '../Images/Stop.png'
import Home1 from '../Images/Home1.png'
import Home3 from '../Images/Home3.png'
import Next from '../Images/Next.png'
import Prev from '../Images/Prev.png'
import Previmg from '../Images/Previmg.png'
import Nextimg from '../Images/Nextimg.png'

import "./Slide.scss"

export default function Slide() {
    const [indexSlide, setIndexSlide] = useState(0)
    const [slide,setSlide] = useState([
        {
            id: 1,
            image: Home1,
            color: "red",
            name: "House"
        },
        {
            id: 2,
            image: House2,
            color: "black",
            name: "House2"
        },
        {
            id: 3,
            image: Home3,
            color: "green",
            name: "House3"
        },
        {
            id: 4,
            image: Home1,
            color: "blue",
            name: "House4"
        },
        {
            id: 5,
            image: House2,
            color: "pink",
            name: "House5"
        },
        {
            id: 6,
            image: Home3,
            color: "yellow",
            name: "House6"
        },
        {
            id: 7,
            image: Home1,
            color: "purple",
            name: "House7"
        },
    ])


    

    useEffect(() => {
     const lastIndex  = slide.length - 1
     if(indexSlide < 0) {
        setIndexSlide(lastIndex)
     }  
     if(indexSlide > lastIndex) {
        setIndexSlide(0)
     }
    }, [indexSlide, slide])

  return (
    <div className="Home-section-box-filter-slider">
        <div className="Home-section-box-filter-slider-block1">
            <div className="Home-section-box-filter-slider-textcontainer">
                <p>Starting <b>99<sup>$</sup></b></p>
                <h2>REAL ESTATE<br/> CINEMATIC VIDEO</h2>
                <p className="text2">Video is THE most effective content type in today's digital marketing environment. We offer a truly CUSTOM Video production for Real Estate, from music selection to editing style, every detail will be created to best showcase your property. On average, 2 -4 min, dynamic Cinematic Experience is THE most effective way to create strong engagement and generate leads. Delivery: NEXT DAY.</p>            
                <div className="btn-box">
                    <button className="btn-orange">Order now</button>
                    <span>
                        <button className="btn-transparent">How it works</button>
                        <img src={Stop} alt="stop" />
                    </span>
                </div>
            </div>
        </div>
        <div className="Home-section-box-filter-slider-block2">
            {slide.map((elem,index) => {
                let position = "nextSlide"
                if(index === indexSlide) {
                    position = "activeSlide"
                }
                if(index === indexSlide - 1 || (indexSlide === 0 && index === slide.length - 1)) {
                    position = "lastSlide"
                }
                return (
                    <div className={`Home-section-box-filter-slider-block2-slides ${position}`} key={elem.id}>
                        <div className="House-slide">
                            <img src={elem.image} alt={elem.name} className="slider-img"/>
                        </div>
                    </div>
                )
            })}
            <button className='prev' onClick={() => setIndexSlide(indexSlide - 1)}>
                <img src={Previmg} alt="prev" />
            </button>
            <button className='next' onClick={() => setIndexSlide(indexSlide + 1)}>
                <img src={Nextimg} alt="next" />
            </button>

            <div className="Home-section-box-filter-slider-block2-item">
                <span>
                    <img src={Next} alt="prev" className='prev2'/>
                    <img src={Prev} alt="next" className='next2'/>
                </span>
                    <img src={Home1}  className="red" alt="home1" />
                    <img src={House2} className="black" alt="home2" />
                    <img src={Home3} className="green" alt="home3" />
                    <img src={Home1} className="blue" alt="home4" />
                    <img src={House2} className="pink" alt="home5" />
                    <img src={Home3} className="yellow" alt="home6" />
                    <img src={Home1} className="purple" alt="home7" />
            </div>
        </div>
    </div>
  )
}
