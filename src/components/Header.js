import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBell, faBars, faHome, faUser, faStar, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap';

function header() {
    return (
        <div className='header-body'>
            <div className='mainLinks'>
                <h1 className='logo'><span>B</span>a<span>m</span>z<span>z</span> </h1>
                <ul className='Links'>
                    <li className='subLinks'>Home</li>
                    <li className='subLinks'>Agent</li>
                    <li className='subLinks'>V.I.P</li>
                    <li className='subLinks'>Contact</li>
                </ul>
            </div>
            
            <div className='searchNotification'>
                <div className='wordSearch'>        
                    <input placeholder='search' type='text' />
                    <button type='submit'>Search</button>
                </div>

                <FontAwesomeIcon className='headerIcons' icon={faBell} />
                <FontAwesomeIcon className='headerIcons' icon={faUserCircle} />
            </div>
            <Dropdown className='menu-toggle'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                 <div className='menu-mobile'>
                     <h2>Menu</h2>
                     <FontAwesomeIcon className='menuIcons' icon={faBars} />
                 </div>
            </Dropdown.Toggle>

              <Dropdown.Menu className='dropdowns'>
                <ul className='mobile-menu-links'>
                <li><FontAwesomeIcon className='menuIcon' icon={faHome} />Home</li>
                <li><FontAwesomeIcon className='menuIcon' icon={faUserCircle} />Profile</li>
                <li><FontAwesomeIcon className='menuIcon' icon={faBell} />Notification</li>
                <li><FontAwesomeIcon className='menuIcon' icon={faUser} />Agent</li>
                <li><FontAwesomeIcon className='menuIcon' icon={faStar} />V.I.P</li>
                <li><FontAwesomeIcon className='menuIcon' icon={faIdCard} />Contact</li>
                </ul>
              </Dropdown.Menu>
           </Dropdown>
        </div>
    )
}

export default header
