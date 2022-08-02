import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import Phone from '../Images/Phone.png'
import Clock from '../Images/Clock.png'
import Linkedin from '../Images/Linkedin.png'
import Facebook from '../Images/Facebook.png'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="Footer-content">
        <div className="Footer-content-box1">
            <ul>
                <Link to="/"><li>Service</li></Link>
                <Link to="/about"><li>Pricing</li></Link>
                <Link to="/service"><li>Order a Tour</li></Link>
                <li>Sign in / Sign up</li>
            </ul>
        </div>
        <div className="Footer-content-box2">
            <ul>
                <span>
                    <img src={Phone} alt="phone" />
                    <li>(000) 000 0000</li>
                </span>
                <span>
                    <img src={Clock} alt="clock" />
                    <li>10:00 АМ - 18:00 PM</li>
                </span>
                <span>
                    <img src={Linkedin} alt="linkedin" />
                    <li className='icon'><FaInstagram /></li>
                    <img src={Facebook} alt="facebook" />
                </span>
            </ul>
        </div>
      </div>
    </div>
  )
}
