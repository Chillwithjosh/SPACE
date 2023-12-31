import React from 'react'
import './technology.css'
import Navbar from '../componenet/Navbar'
import { technology } from '../index'

const Technology = () => {
    const [currentIndex, setCurrebtIndex] = React.useState(0)
    
    const goToSlide = (event) => {
    let x = event.target.id;
    if(x === 'one'){
        setCurrebtIndex(0)
    }else if (x === 'two'){
        setCurrebtIndex(1)
    }else if (x === 'three'){
        setCurrebtIndex(2)
    }
    }
    console.log(currentIndex) 
  return (
    <section className=' imageLandscapeT imagePortraitT imageTabletT '>
        <Navbar/>
        <div>
            <p className='Tspan-container'><span className='Tspan-number'>03</span><span className='Tspan-text'>SPACE LAUNCH 101</span></p>
        </div>
        <img
            src={technology[currentIndex].imgURL}
            alt='no'
            className='T-image-landscape'
        />
        <div className='T-max-container'>
            <div className='T-container'>
                <div className='T-round-container'>
                    <div 
                    onClick={event => goToSlide(event)} 
                    className={currentIndex === 0 ? 'T-round T-active' : 'T-round'} id='one'>1</div>
                    <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 1 ? 'T-round T-active' : 'T-round'}
                    id='two'>2</div>
                    <div 
                    onClick={event => goToSlide(event)}  className={currentIndex === 2 ? 'T-round T-active' : 'T-round'} 
                    id='three'>3</div>
                </div>
                <div className='T-text-container'>
                <p className='T-header'>THE TECHNOLOGY_</p>
                <p className='T-name'>{technology[currentIndex].name}</p>
                <p className='T-subtext'>{technology[currentIndex].subtext}</p>
                </div>
            </div>
            <div className='T-image-container'>
                <img
                    src={technology[currentIndex].imgURLPortrait}
                    alt='no'
                    className='T-image'
                />
            </div>  
        </div>
    </section>
  )
}

export default Technology