import React from 'react'
import { close, logo } from '../assets/icons'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
// import { FaBars } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { SidebarData } from './SidebarData'
// import './navbar.css'

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    const showMenu = () => setOpenMenu(!openMenu)
    const [currentIndex, setCurrebtIndex] = React.useState(0)
    const goToSlides = (event) => {
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
  console.log(currentIndex)
return (
    <nav>
        <div className='nav-container'>
        <div className='logo-container'>
            <img
                src={logo}
            />
        </div>
        <div className='lineNav'></div>
        <div className='links-container'>
        <NavLink activeClassName="N-active"  to='/'>
        <p
            onClick={event => goToSlides(event)} 
            className={currentIndex === 0 ? 'link N-active' : 'link'}  
            id='one'
        ><span className='number right'>00 </span><span className='text'> HOME</span></p>
        </NavLink>
        <NavLink activeClassName="N-active" to='/destination'>
        <p 
            onClick={event => goToSlides(event)}
            className={currentIndex === 1 ? 'link N-active' : 'link'} 
            id='two'
        ><span className='number'>01 </span><span className='text'> DESTINATION</span></p>
        </NavLink>
        <NavLink activeClassName="N-active" to='/crew'>
        <p 
            onClick={event => goToSlides(event)}
            className={currentIndex === 2 ? 'link N-active' : 'link'}
            id='three'
        ><span className='number'>02 </span><span className='text'> CREW</span></p>
        </NavLink>
        <NavLink to='/technology'>
        <p 
            onClick={event => goToSlides(event)}
            className={currentIndex === 3 ? 'link N-active' : 'link'} 
            id='four'
        ><span className='number'>03 </span><span className='text'> TECHNOLOGY</span></p>
        </NavLink>
        </div>
        </div>
        <>
        <div className='container-portrait'>
            <div className='logo-container-portrait'>
                <img
                    src={logo}
                />
            </div>
            <div>
                <div className='icon'>
                <AiOutlineMenu onClick={showMenu} />
                </div>
            </div>
        </div>
        <div className={openMenu ? 'nav-menu active' : 'nav-menu' }>
                <div>
                    <img
                        className='close'
                        src={close}
                        onClick={showMenu}
                    />
                </div>
            <ul className='ul'>
                
                {/* <h1>khi<AiOutlineMenu className='close' onClick={showMenu} /></h1> */}

                
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className= {item.cName}>
                        <Link to={item.path}>
                            <p className='title'><span className='number-p'>{item.number}</span><span className='text-p'>{item.title}</span></p>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
        </>
    </nav>
)
}

export default Navbar