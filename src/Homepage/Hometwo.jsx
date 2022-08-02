import React from 'react'
import Camera from '../Images/Camera.png'
import Dron from '../Images/Dron.png'
import Instagram from '../Images/Instagram.png'
import People from '../Images/People.png'
import Labirint from '../Images/Labirint.svg'
import Play from '../Images/Play.png'
import Video from '../Images/Video.png'
import Suffix from "../Images/filter/Suffix.png"
import Homebg from "../Images/filter/Homebg.png"
import Homesm from "../Images/filter/Homesm.png"
import Condo from "../Images/filter/Condo.png"
import Estates from "../Images/filter/Estates.png"
import Luxury from "../Images/filter/Luxury.png"
import Modern from "../Images/filter/Modern.png"
import Tradit from "../Images/filter/Tradit.png"
import Classic from "../Images/filter/Classic.png"
import Close from "../Images/filter/Close.png"

import { NavLink } from 'react-router-dom'


import "./Hometwo.scss"
import { useState } from 'react'
import Slide from './Slide'

export default function Hometwo() {
    const [data,setdata] = useState([
        {
            id: 1,
            imgUrl: Dron,
            title: "drone(transpor canada licensed)"
        },
        {
            id: 2,
            imgUrl: Video,
            title: "real estate cinematic video"
        },
        {
            id: 3,
            imgUrl: Camera,
            title: "still photography"
        },
        {
            id: 4,
            imgUrl: People,
            title: "agent video presentation"
        },
        {
            id: 5,
            imgUrl: Instagram,
            title: "social media content roduction"
        },
        {
            id: 6,
            imgUrl: Play,
            title: "virtual slideshow tour"
        },
        {
            id: 7,
            imgUrl: Labirint,
            title: "floor plans"
        },
    ])


  return (
    <div className="Home-section">
          <div className="Home-section-box">
            <div className="Home-section-box-items">

                {data.map(elem => {
                    return (
                        <NavLink to={`/${elem.id}`} key={elem.id}>
                            <div className={`Home-section-box-items-text`}>
                                <div className="img-block">
                                    <img src={elem.imgUrl} alt="dron" className="img-size" />
                                </div>
                                <p>{elem.title}</p>
                            </div>
                        </NavLink>
                    )
                })}

            </div>
            <div className="Home-section-box-filter">
                <div className="Home-section-box-filter-text">
                    <h1>OUR WORK</h1>
                </div>
                <div className="Home-section-box-filter-fill">
                    <p className='item-p'>Filter by</p>
                    <div className="Home-section-box-filter-block">
                        <div className="Home-section-box-filter-block-item yellow">
                            <img src={Suffix} alt="suffix" className='img-1'/>
                            <p>All</p>
                        </div>
                        <div className="Home-section-box-filter-block-item" >
                            <img src={Homebg} alt="homebg" className='img-2'/>
                            <p>Detached</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Homesm} alt="homesm" className='img-3'/>
                            <p>Semi detached</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Condo} alt="condo" className='img-4'/>
                            <p>Condo</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Estates} alt="estates" className='img-5'/>
                            <p>Estates</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Luxury} alt="luxury" className='img-6'/>
                            <p>Luxury</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Modern} alt="modern" className='img-7'/>
                            <p>Modern</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Tradit} alt="traditional" className='img-8'/>
                            <p>Traditional</p>
                        </div>
                        <div className="Home-section-box-filter-block-item">
                            <img src={Classic} alt="classic" className='img-9'/>
                            <p>Classic</p>
                        </div>
                        <div className="Home-section-box-filter-block-item close">
                            <img src={Close} alt="close" className='img-10'/>
                            <p className='end-p'>Close</p>
                        </div>
                    </div>
                </div>
                <Slide />
            </div>
          </div>

          
    </div>
  )
}
