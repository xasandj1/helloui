import React, { useState } from 'react';
import images from '../../data/images';
import "./Navbar.scss"


const Navbar = () => {
    const [active, setActive] = useState(false)

    const Show = () => {
        setActive((prev) => !prev)
    }
    return (
        <header className='header'>
            <nav className='header-nav'>
                <div className='container'>
                    <div className='header-nav_content'>
                        <a href="#!" className='logo'><img src={images.logo} alt="" /></a>
                        <div className={active ? 'header-nav_content-block active' : 'header-nav_content-block'}>
                            <ul className='header-nav_content-list'>
                                <li className='header-nav_content-list_item'>
                                    <a href="#!" className='header-nav_content-list_item-link'>Docs</a>
                                </li>
                                <li className='header-nav_content-list_item'>
                                    <a href="#!" className='header-nav_content-list_item-link'>Tools</a>
                                </li>
                                <li className='header-nav_content-list_item'>
                                    <a href="#!" className='header-nav_content-list_item-link'>Freatures</a>
                                </li>
                                <li className='header-nav_content-list_item'>
                                    <a href="#!" className='header-nav_content-list_item-link'>Pricing</a>
                                </li>
                                <li className='header-nav_content-list_item'>
                                    <a href="#!" className='header-nav_content-list_item-link'>Jobs</a>
                                </li>
                            </ul>
                            <div className='header-nav_content-btns'>
                                <button type="button" className='header-nav_content-btns_btn'>Sign in</button>
                                <button type="button" className='header-nav_content-btns_btn active'>Try for Free</button>
                            </div>
                        </div>
                        <button className={active ? 'burger-menu active' : 'burger-menu'} onClick={Show}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    )
}
export default Navbar