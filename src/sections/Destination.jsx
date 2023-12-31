import React from 'react'
import './destination.css'
import Navbar from '../componenet/Navbar'
import { destination } from '../index'

const Destination = () => {
  const [currentIndex, setCurrebtIndex] = React.useState(0)

  const goToSlide = (event) => {
    let x = event.target.id;
    if(x === 'one'){
        setCurrebtIndex(0)
    }else if (x === 'two'){
        setCurrebtIndex(1)
    }else if (x === 'three'){
        setCurrebtIndex(2)
    }else if (x === 'four'){
        setCurrebtIndex(3)
    }
  }
    return (
    <section className='  imageLandscapeD imagePortraitD imageTabletD'>
        <Navbar/>
        <div className='D-container'>
            <div className='D-image-container'>
                <p className='S-container'><span className='s-number'>01</span><span className='s-text'>PICK YOUR DESTINATION</span></p>
                <img className='D-image' src={destination[currentIndex].imgURL}  />
            </div>
            <div className='D-location-container'>
                <div className='D-location '>
                 <div 
                    onClick={event => goToSlide(event)} 
                    className={currentIndex === 0 ? 'D-location-item D-active' : 'D-location-item'} id='one'>MOON</div>
                    <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 1 ? 'D-location-item D-active' : 'D-location-item'}
                    id='two'>
                    MARS</div>
                    <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 2 ? 'D-location-item D-active' : 'D-location-item'} 
                    id='three'>
                    EUROPA</div>
                    <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 3 ? 'D-location-item D-active' : 'D-location-item'} 
                    id='four'>
                    TITAN</div>
                </div>
                <div>
                    <p className='D-name'>{destination[currentIndex].name} </p>
                    <p className='D-subtext'>{destination[currentIndex].subtext}</p>
                    <div className='D-line'></div>
                    <div className='D-distance'>
                        <div className='D-km'>
                            <p className='D-header'>AVG. DISTANCE</p>
                            <p className='D-time'>{destination[currentIndex].distanceKm}</p>
                        </div>
                        <div className='D-days'>
                            <p className='D-header'>EST. TRAVEL TIME</p>
                            <p className='D-time'>{destination[currentIndex].distanceDays}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Destination