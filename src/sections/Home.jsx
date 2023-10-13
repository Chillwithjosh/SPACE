import React from 'react'
import Navbar from '../componenet/Navbar'

const Home = () => {
  return (
    <section className='  imageLandscape imagePortrait imageTablet  '>
        <Navbar/>
        <div className='Home-container'>
            <div className='text-container'>
                <h3 className=''>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>SPACE</h1>
                <p className='home-subtext'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='explore'>
                <h3>EXPLORE</h3>
            </div>
        </div>
    </section>
  )
}

export default Home