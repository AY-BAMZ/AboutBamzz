import React, { useState } from 'react';
import './ServicesTab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TabNav from '../components/TabNav';
import NavContents from '../components/NavContents';
import { ServiceTabProvider } from '../components/ServicesTabProvider';



function Example() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);

    return (
        <ServiceTabProvider>
            <div className='Tabs'>
                <TabNav />
                <div className='searchFilter'>
                    <h3>Filter:</h3>
                    <div className='filter1'>
                        <h4>By Price</h4>
                        <FontAwesomeIcon className='headerIcons' icon={faCaretDown} />
                    </div>
                    <div className='filter2'>
                        <h4>By Date</h4>
                        <FontAwesomeIcon className='headerIcons' icon={faCaretDown} />
                    </div>
                    <div className='filter3'>
                        <h4>By Quality</h4>
                        <FontAwesomeIcon className='headerIcons' icon={faCaretDown} />
                    </div>
                </div>
                <NavContents />
            </div>
        </ServiceTabProvider>
    );
}

export default Example