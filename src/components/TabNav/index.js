import { ServiceTabContext } from "../ServicesTabProvider";
import React, { useContext } from "react";

const TabNav = () => {
    const { activeTab, setActiveTab, tabs } = useContext(ServiceTabContext);
    return (

        <div className={`tabComponents`}>
            {tabs && tabs.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? 'active' : ''}`}>
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default TabNav;