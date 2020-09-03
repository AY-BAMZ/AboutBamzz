import React, { createContext, useState } from "react";
import './index.css'

export const ServiceTabContext = createContext() 

const tabs = ['goods', 'phones', 'laptop'];

export const ServiceTabProvider = ({children}) => {
    const [activeTab, setActiveTab] =  useState('goods');

    return (
        <ServiceTabContext.Provider className='set' value={{activeTab, setActiveTab, tabs}}>
            {children}
        </ServiceTabContext.Provider>
    )
}