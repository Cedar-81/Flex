import React, {useRef} from 'react'

//img imports 
//bannerImgs
import bannerImg from '../../Assets/bannerImg.png'
import bannerImg2 from '../../Assets/bannerbckImg.jpg'
//displayImgs
import dispImg1 from '../../Assets/dispImg1.png'
import dispImg2 from '../../Assets/dispImg2.png'
import dispImg3 from '../../Assets/dispImg3.png'
//categoryImgs
import beautySec from '../../Assets/beautySec.png'
import fashionSec from '../../Assets/fashionSec.png'
import smarthomeSec from '../../Assets/smarthomeSec.png'
import techSec from '../../Assets/techSec.png'
import bookSec from '../../Assets/bookSec.png'
import gamesSec from '../../Assets/gamesSec.png'
//bestsellerImgs
import bbyCarrier from '../../Assets/bbyCarrier.png'
import bag from '../../Assets/bag.png'
import blender from '../../Assets/blender.png'
import blender2 from '../../Assets/blender2.png'
import candles from '../../Assets/candles.png'
import holder from '../../Assets/holder.png'
import juicer from '../../Assets/juicer.png'
import pillow from '../../Assets/pillow.png'
import plate from '../../Assets/plate.png'
import pressureCooker from '../../Assets/pressureCooker.png'
import timer from '../../Assets/timer.png'
import toy from '../../Assets/toy.png'

import './home.css'

//animation import
import {Zoom, Flip, LightSpeed}from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import {useInView} from 'react-intersection-observer'





function Home() {

    const {ref, inView} = useInView()
    console.log(inView)
    
    return (
        <>
        <div className='homepage'>
            <section className='banner' >
                <div className='cta'>
                    <h1 className='ctaTxt'>Cheap, Reliable $ Affordable<span><br /> products just 4 u</span></h1>
                    <h2 className='ctaSubtxt'>With flex you get all you need <br/> for the coolest offers you can ever find.</h2>
                    <div className='ctaBtn'><p>Shop Now</p></div>
                </div>
                <div className='bannerImg'>
                    <img src={bannerImg} className='bckImg' alt='excited woman' />
                    <img src={bannerImg2} className='bckImg2' alt='excited woman' />
                </div>                
            </section>

            <section className='display' >
                <Zoom >    
                    <img src={dispImg1} className='dispImg1 dispImg' alt='hoodie mockup' />
                    <img src={dispImg2} className='dispImg2 dispImg' alt='suit mockup' />
                    <img src={dispImg3} className='dispImg3 dispImg' alt='girl on makeup' />
                </Zoom>
            </section>

            <section className='categories'>
                <div className='categoryTxt'>
                    <h1 className='catTxt'>Categories</h1>
                    <h2 className='catSubtxt'>here are our product categories <br />listed for ease of access</h2>

                </div>
                <div className='catItems'>
                    <div className='leftCat'>
                        <Flip left>
                            <img src={fashionSec} alt='well dressed male and female' className='img'/>
                            <img src={bookSec} alt='an image stacked books' className='img'/>
                            <img src={gamesSec} alt='a deck of cards' className='img'/>
                        </Flip>
                    </div>
                    <div className='rightCat'>
                        <Flip right>
                            <img src={techSec} alt='an ai img' className='img'/>
                            <img src={beautySec} alt='a makeup kit' className='img'/>
                            <img src={smarthomeSec} alt='a smarthome img' className='img'/>
                        </Flip>
                    </div>                    
                </div>

            </section>

            <section className='bestsellers'  >
                <LightSpeed left>
                    <section className='bshomeDecor bs'>
                        <h2>Bestsellers in home decor</h2>
                        <div className='items'>
                            <img src={holder} alt='holder' />
                            <img src={candles} alt='candels' />
                            <img src={timer} alt='timer' />
                            <img src={pillow} alt='pillow' />
                            <img src={holder} alt='holder' />
                            <img src={candles} alt='candels' />
                            <img src={timer} alt='timer' />
                            <img src={pillow} alt='pillow' />
                        </div>
                    </section>

                    <section className='kitchen bs'>
                        <h2>Bestsellers in kitchen</h2>
                        <div className='items'>
                            <img src={blender} alt='blender' />
                            <img src={juicer} alt='juicer' />
                            <img src={blender2} alt='blender2' />
                            <img src={pressureCooker} alt='pressureCooker' />
                            <img src={blender} alt='blender' />
                            <img src={juicer} alt='juicer' />
                            <img src={blender2} alt='blender2' />
                            <img src={pressureCooker} alt='pressureCooker' />
                        </div>

                    </section>

                    <section className='baby bs'>
                        <h2>Bestsellers in baby</h2>
                        <div className='items'>
                            <img src={plate} alt='plate' />
                            <img src={bag} alt='bag' />
                            <img src={toy} alt='toy' />
                            <img src={bbyCarrier} alt='bbyCarrier' />
                            <img src={plate} alt='plate' />
                            <img src={bag} alt='bag' />
                            <img src={toy} alt='toy' />
                            <img src={bbyCarrier} alt='bbyCarrier' />
                        </div>
                    </section>

                    <section className='bshomeDecor bs' >
                        <h2>Bestsellers in home decor</h2>
                        <div className='items'>
                            <img src={holder} alt='holder' />
                            <img src={candles} alt='candels' />
                            <img src={timer} alt='timer' />
                            <img src={pillow} alt='pillow' />
                            <img src={holder} alt='holder' />
                            <img src={candles} alt='candels' />
                            <img src={timer} alt='timer' />
                            <img src={pillow} alt='pillow' />
                        </div>
                    </section>

                    <section className='kitchen bs'>
                        <h2>Bestsellers in kitchen</h2>
                        <div className='items'>
                            <img src={blender} alt='blender' />
                            <img src={juicer} alt='juicer' />
                            <img src={blender2} alt='blender2' />
                            <img src={pressureCooker} alt='pressureCooker' />
                            <img src={blender} alt='blender' />
                            <img src={juicer} alt='juicer' />
                            <img src={blender2} alt='blender2' />
                            <img src={pressureCooker} alt='pressureCooker' />
                        </div>
                    </section>

                    <section className='baby bs'>
                        <h2>Bestsellers in baby</h2>
                        <div className='items'>
                            <img src={plate} alt='plate' />
                            <img src={bag} alt='bag' />
                            <img src={toy} alt='toy' />
                            <img src={bbyCarrier} alt='bbyCarrier' />
                            <img src={plate} alt='plate' />
                            <img src={bag} alt='bag' />
                            <img src={toy} alt='toy' />
                            <img src={bbyCarrier} alt='bbyCarrier' />
                        </div>
                    </section>
                </LightSpeed>


            </section>
                <Flip ref={ref} spy={inView}>
                    
                    <div className='anim' ><h1>{inView ? 'yes':'no'}</h1></div>
                </Flip>

            



        </div>
        </>
    )
}

export default Home
