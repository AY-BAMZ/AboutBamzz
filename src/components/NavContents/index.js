import { ServiceTabContext } from "../ServicesTabProvider";
import React, { useContext, Fragment } from "react";
import './index.css';
import ReviewComponent from './ReviewComponent'

const NavContents = ({ }) => {
    const { activeTab } = useContext(ServiceTabContext);

    return (
        <Fragment>
            <div className={`nav-contents-wrapper`}>
                <div>
                    {activeTab === 'goods' && (
                        <ReviewComponent />
                    )}
                </div>
                <div>
                    {activeTab === 'phones' && (
                        <PhonesComponent />
                    )}
                </div>
                <div>
                    {activeTab === 'laptop' && (
                        <LaptopComponent />
                    )}
                </div>
            </div>


        </Fragment>
    )
}

const PhonesComponent = () => {
    return (
        <div className={` nav-content `}>
            <p>Goods component</p>
        </div>
    )
}
const LaptopComponent = () => {
    return (
        <div className={` nav-content `}>
            <p>Goods component</p>
        </div>
    )
}

export default NavContents;