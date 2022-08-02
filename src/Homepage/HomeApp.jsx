import React, { useRef,useState } from 'react'
import Footer from '../Footer/Footer'
import Headerimg from "../Images/header_image.png"

import "./Home.scss"
import Homeeight from './Homeeight'
import Homefive from './Homefive'
import Homefour from './Homefour'
import Homeseven from './Homeseven'
import Homesix from './Homesix'
import Homethree from './Homethree'
import Hometwo from './Hometwo'




export default function Home() {
  const [value,setvalue] = useState(false)


  return (
    <div className='Home'>
      <div className="Homes">
        <img src={Headerimg} alt="header-img" className='Homes-img' />

        <div className="Homes-container">
          <div className="Homes-container-text">
            <h1>capitaving property tours</h1>
          </div>
          <div className="Homes-container-btn">
            <button className="btn-1">Pricing</button>
            <button className="btn-2">Our work</button>
            <button className="btn-3">Order a tour</button>
          </div>
        </div>
      </div>
      <Hometwo />
      <Homethree />
      <Homefour />
      <Homefive />
      <Homesix />
      <Homeseven />
      <Homeeight />
      <Footer />
    </div>
  )
}
