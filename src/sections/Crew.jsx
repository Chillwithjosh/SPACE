import React from 'react'
import './crew.css'
import Navbar from '../componenet/Navbar'
import { crew } from '../index'
import { RxDotFilled } from 'react-icons/rx'

const Crew = () => {
    const [currentIndex, setCurrebtIndex] = React.useState(0)
    const [active, setActive] = React.useState(false)
    const goToSlide = (event) => {
    // setCurrebtIndex(crewIndex)
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
    <section className='  imageLandscapeC imagePortraitC imageTabletC'>
        <Navbar />
        <div className='C-container'>
        <div className='C-text-container'>
            <p className='Span-container'><span className='Span-number'>02</span><span className='Span-text'>MEET YOUR CREW</span></p>
            <div className='C-info-container'>
                    <p className='C-label'>{crew[currentIndex].label}</p>
                    <p className='C-name'>{crew[currentIndex].name}</p>
                    <p className='C-subtext'>{crew[currentIndex].subtext}</p>
            </div>
            <div className='C-dot'>
            {/* {crew.map((crew,crewIndex) =>(
                <div key={crewIndex} onClick={() => goToSlide(crewIndex)} ><div className='dot'></div></div>
            ))} */}
            <div 
                onClick={event => goToSlide(event)}  
                className={currentIndex === 0 ? 'dot C-active' : 'dot'} 
                id='one'
            ></div>
            <div 
                onClick={event => goToSlide(event)}  
                className={currentIndex === 1 ? 'dot C-active' : 'dot'} 
                id='two'
            ></div>
            <div 
                onClick={event => goToSlide(event)}  
                className={currentIndex === 2 ? 'dot C-active' : 'dot'} 
                id='three'
            ></div>
            <div 
                onClick={event => goToSlide(event)}  
                className={currentIndex === 3 ? 'dot C-active' : 'dot'} 
                id='four'
            ></div>
            </div>
        </div>
        <div className='C-image-container'>
        <p className='Span-container-p'><span className='Span-number-p'>02</span><span className='Span-text-p'>MEET YOUR CREW</span></p>
            <div>
            <img
                src={crew[currentIndex].imgURL}
                className='C-image'
                id={crew[currentIndex].id}
            />
            </div>
            <div className='C-line'></div>
            <div className='C-dot-p'>
            {/* {crew.map((crew,crewIndex) =>(
                <div key={crewIndex} onClick={() => goToSlide(crewIndex)} ><div className='dot-p'></div></div>
            ))} */}
                <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 0 ? 'dot-p C-active' : 'dot-p'} 
                    id='one'
                ></div>
                <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 1 ? 'dot-p C-active' : 'dot-p'} 
                    id='two'
                ></div>
                <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 2 ? 'dot-p C-active' : 'dot-p'} 
                    id='three'
                ></div>
                <div 
                    onClick={event => goToSlide(event)}  
                    className={currentIndex === 3 ? 'dot-p C-active' : 'dot-p'} 
                    id='four'
                ></div>
            </div>
        </div> 
        </div>
    </section>
  )
}

export default Crew