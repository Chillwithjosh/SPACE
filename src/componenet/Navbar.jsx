import React from 'react'
import { close, logo } from '../assets/icons'
import {  AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    const showMenu = () => setOpenMenu(!openMenu)

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
        <NavLink className='none' to='/SPACE'>
        <p
            className='link none'
            id='one'
        ><span className='number right'>00 </span><span className='text'> HOME</span></p>
        </NavLink>
        <NavLink className='none' to='/destination'>
        <p
            className='link N-active'
            id='two'
        ><span className='number'>01 </span><span className='text'> DESTINATION</span></p>
        </NavLink>
        <NavLink className='none' to='/crew'>
        <p 
            className='link N-active'
            id='three'
        ><span className='number'>02 </span><span className='text'> CREW</span></p>
        </NavLink>
        <NavLink className='none' to='/technology'>
        <p
            className='link N-active'
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
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className= {item.cName}>
                        <NavLink className='none' to={item.path}>
                            <p className='title'><span className='number-p'>{item.number}</span><span className='text-p'>{item.title}</span></p>
                        </NavLink>
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