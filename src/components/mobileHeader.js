import React, {useState} from 'react'
import './mobileHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function mobileHeader() {
    const [open, setOpen] =useState(false);
    return (
        <div className='mobile-Header'>
            <h1 className='logo'><span>B</span>a<span>m</span>z<span>z</span> </h1>
            <div className='menuToggle' onClick={()=> setOpen(open)}>
                <h2>Menu</h2>
                <FontAwesomeIcon className='menuIcons' icon={faBars} />
            </div>
            {open && <ul>
                <li> home</li>
                </ul>}
        </div>
    )
}

export default mobileHeader
