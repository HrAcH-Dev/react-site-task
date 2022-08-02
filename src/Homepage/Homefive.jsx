import React, { useState, useEffect } from 'react'
import House2 from '../Images/House2.png'
import "./Homefive.scss"
import House from '../Images/House.jpg'
import Home1 from '../Images/Home1.png'
import Home2 from '../Images/Home3.png'
import Iconprev from '../Images/Iconprev.png'
import Iconnext from '../Images/Iconnext.png'

export default function Homefive() {
  const [indexCount,setIndexCount] = useState(0)
  const [counter,setCounter] = useState(1)
  const [slidefive,setSlidefive] = useState([
    {
      id: 1,
      imgUrl: House2,
      alt: "img1"
    },
    {
      id: 2,
      imgUrl:  House,
      alt: "img2"
    },
    {
      id: 3,
      imgUrl: Home1,
      alt: "img3"
    },
    {
      id: 4,
      imgUrl: Home2,
      alt: "img4"
    },
  ])

  const sliderNext = () => {
    setIndexCount(indexCount + 1);
    handleClick()
  }

  const sliderPrev = () => {
    setIndexCount(indexCount - 1)
    setCounter(counter - 1)
    if(counter <= 1) {
      setCounter(4)
    }
  }

  const handleClick = () => {
    setCounter(counter + 1)
    if(counter >= 4) {
      setCounter(1)
    }
  }


  useEffect(() => {
    const lastIndex = slidefive.length - 1
    if(indexCount < 0) {
      setIndexCount(lastIndex)
    }
    if(indexCount > lastIndex) {
      setIndexCount(0)
    }
  },[indexCount,slidefive])

  return (
    <div className='Homefive'>
            {slidefive.map((elem,index) => {
              let position = "nextSlide"
              if(index === indexCount) {
                position = "activeSlide"
              }
              if(index === indexCount - 1 || (indexCount === 0 && index === slidefive.length - 1)) {
                position = "lastSlide"
              }
              return (
                <div className={`img-block ${position}`} key={elem.id}>
                  <img src={elem.imgUrl} alt={elem.alt}/>
                </div>
              )
            })}
      <div className="Homefive-block2">
        <div className="Homefive-block2-text">
            <h2>LAST UPDATES</h2>
            <h3>New Service | VIRTUAL STAGING |<br/> starting at $45/photo</h3>
            <p>We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic Interiors Design that compliments your space We can work with both Empty and Furnished spaces</p>
            <button>Discover more</button>
        </div>
        <div className="slide-box">
          <img src={Iconprev} alt="prev"  onClick={() => sliderPrev()}/>
          <p><b>0{counter}/04</b></p>
          <img src={Iconnext} alt="next" onClick={() => sliderNext()}/>
        </div>
      </div>
    </div>
  )
}
