import React from 'react'
import Fleximg1 from '../Images/fleximg/Fleximg1.png'
import Fleximg2 from '../Images/fleximg/Fleximg2.png'
import Fleximg3 from '../Images/fleximg/Fleximg3.png'
import Fleximg4 from '../Images/fleximg/Fleximg4.png'
import Fleximg5 from '../Images/fleximg/Fleximg5.png'
import Fleximg6 from '../Images/fleximg/Fleximg6.png'
import Fleximg7 from '../Images/fleximg/Fleximg7.png'
import Klor from '../Images/fleximg/Klor.png'
import Znak from '../Images/fleximg/Znak.png'
import Klordexin from '../Images/fleximg/Klordexin.png'
import Ptichka from '../Images/fleximg/Ptichka.png'
import Klorsilver from '../Images/fleximg/Klorsilver.png'
import Shop from '../Images/fleximg/Shop.png'
import Shop2 from '../Images/fleximg/Shop2.png'
import Xach from '../Images/fleximg/Xach.png'

import "./Homethree.scss"

export default function Homethree() {
  return (
    <div className='Home-Homethree'>
      <div className="Home-Homethree-bigbox">
        <div className="Home-Homethree-bigbox-text">
            <h2>PRICING</h2>
            <p>Please select the sq/ft range of your property in order to see our pricing
            ( note* sq/ft must include finished basements )</p>
        </div>
        <div className="Home-Homethree-bigbox-filterbox">
            <button className='trans'>Select SQ/FT</button>
            <button className='orange-btn'>&#x276E; 1000</button>
            <button>1000 - 1500</button>
            <button>1500 - 2000</button>
            <button>2000 - 3000</button>
            <button>3000 - 4500</button>
        </div>
        <div className="Home-Homethree-bigbox-flex">
            <div className="Home-Homethree-bigbox-flex-flex1 flexbox">
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg1} alt="fleximg1" className="lefticon"/>
                    <span><p>HDR Photo (/ qty.)</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg2} alt="fleximg2" className="lefticon"/>
                    <span><p>Cinematic Video</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg3} alt="fleximg3" className="lefticon"/>
                    <span><p>3D Matterport Scan</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg4} alt="fleximg4" className="lefticon"/>
                    <span><p>Drone Photo/Video</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg5} alt="fleximg5" className="lefticon"/>
                    <span><p>Slideshow</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg6} alt="fleximg6" className="lefticon"/>
                    <span><p>Instagram teaser</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
                <div className='Home-Homethree-bigbox-flex-items1'>
                    <img src={Fleximg7} alt="fleximg7" className="lefticon"/>
                    <span><p>Website</p></span>
                    <img src={Klor} alt="" className="Klor"/>
                    <img src={Znak} alt="" className="Znak"/>
                </div>
            </div>
            <div className="Home-Homethree-bigbox-flex-flex2 flexbox">
                <div className="Home-Homethree-bigbox-flex-flex2-block">
                    <span>
                        <p>POPULAR</p>
                    </span>
                    <div className="flex-box">
                        <p className='p-box'><sup>$</sup>149</p>
                        <p className='p-box2'>Photography Slideshow Property Website</p>

                    </div>
                    <img src={Klordexin} alt="dexin" className='klordexin1'/>
                    <img src={Ptichka} alt="" className='done1'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex2-items2'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex2-items2'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex2-items2'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex2-items2'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex2-items2'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                
                <div className="Home-Homethree-bigbox-flex-flex2-block2">
                    <img src={Klordexin} alt="dexin" className='klordexin2'/>
                    <img src={Ptichka} alt="" className='done2'/>
                    <button className='btn-block'>
                        <img src={Shop} alt="shop" />
                        Add
                    </button>
                </div>
            </div>
            <div className="Home-Homethree-bigbox-flex-flex3 flexbox">
                <div className="Home-Homethree-bigbox-flex-flex3-block">
                    <span>
                        <p>POPULAR</p>
                    </span>
                    <div className="flex-box">
                        <p className='p-box'><sup>$</sup>259</p>
                        <p className='p-box2'>Photography Cinematic Video Property Website</p>
                    </div>
                    <img src={Klordexin} alt="dexin" className='klordexin1'/>
                    <img src={Ptichka} alt="" className='done1'/>
                </div>

                <div className='Home-Homethree-bigbox-flex-flex3-items3'>
                    <img src={Klordexin} alt="dexin" className='klordexin3'/>
                    <img src={Ptichka} alt="" className='done3'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex3-items3'>
                    <img src={Klordexin} alt="dexin" className='klordexin3'/>
                    <img src={Ptichka} alt="" className='done3'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex3-items3'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex3-items3'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex3-items3'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>

                <div className="Home-Homethree-bigbox-flex-flex3-block3">
                    <img src={Klordexin} alt="dexin" className='klordexin2'/>
                    <img src={Ptichka} alt="" className='done2'/>
                    <button className='btn-block black-btn'>
                        <img src={Shop2} alt="shop" />
                        Added
                    </button>
                </div>
            </div>
            <div className="Home-Homethree-bigbox-flex-flex4 flexbox">
                <div className="Home-Homethree-bigbox-flex-flex4-block">
                    <div className="flex-box">
                        <p className='p-box'><sup>$</sup>299</p>
                        <p className='p-box2'>Photography Matterport Slideshow Property Website</p>
                    </div>
                    <img src={Klordexin} alt="dexin" className='klordexin1'/>
                    <img src={Ptichka} alt="" className='done1'/>
                </div>

                <div className='Home-Homethree-bigbox-flex-flex4-items4'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex4-items4'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex4-items4'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex4-items4'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex4-items4'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>

                <div className="Home-Homethree-bigbox-flex-flex4-block4">
                    <img src={Klordexin} alt="dexin" className='klordexin2'/>
                    <img src={Ptichka} alt="" className='done2'/>
                    <button className='btn-block'>
                        <img src={Shop} alt="shop" />
                        Add
                    </button>
                </div>
            </div>
            <div className="Home-Homethree-bigbox-flex-flex5 flexbox">
                <div className="Home-Homethree-bigbox-flex-flex5-block">
                    <span>
                        <p>POPULAR</p>
                    </span>
                    <div className="flex-box">
                        <p className='p-box'><sup>$</sup>399</p>
                        <p className='p-box2'>Photography Matterport Cinematic Video Property Website</p>
                    </div>
                    <img src={Klordexin} alt="dexin" className='klordexin1'/>
                    <img src={Ptichka} alt="" className='done1'/>
                </div>

                <div className='Home-Homethree-bigbox-flex-flex5-items5'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex5-items5'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex5-items5'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex5-items5'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex5-items5'>
                    <img src={Klorsilver} alt="silver" className='klor'/>
                    <img src={Xach} alt="xach" className='done'/>
                </div>

                <div className="Home-Homethree-bigbox-flex-flex5-block5">
                    <img src={Klordexin} alt="dexin" className='klordexin2'/>
                    <img src={Ptichka} alt="" className='done2'/>
                    <button className='btn-block'>
                        <img src={Shop} alt="shop" />
                        Add
                    </button>
                </div>
            </div>
            <div className="Home-Homethree-bigbox-flex-flex6 flexbox">
                <div className="Home-Homethree-bigbox-flex-flex6-block">
                    <div className="flex-box">
                        <p className='p-box'><sup>$</sup>699</p>
                        <p className='p-box2'>All IN</p>
                    </div>
                    <img src={Klordexin} alt="dexin" className='klordexin1'/>
                    <img src={Ptichka} alt="" className='done1'/>
                </div>

                <div className='Home-Homethree-bigbox-flex-flex6-items6'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex6-items6'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex6-items6'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex6-items6'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>
                <div className='Home-Homethree-bigbox-flex-flex6-items6'>
                    <img src={Klordexin} alt="dexin" className='klor'/>
                    <img src={Ptichka} alt="" className='done'/>
                </div>

                <div className="Home-Homethree-bigbox-flex-flex6-block6">
                    <img src={Klordexin} alt="dexin" className='klordexin2'/>
                    <img src={Ptichka} alt="" className='done2'/>
                    <button className='btn-block'>
                        <img src={Shop} alt="shop" />
                        Add
                    </button>
                </div>
            </div>
        </div>
        <div className="Home-flex"></div>
      </div>
    </div>
  )
}
