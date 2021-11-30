import React, { useEffect } from 'react';
import { darkLightMode } from '../events';

const DarkLightSwitch = () => {
    useEffect(() => {
        darkLightMode();
    }, [])
    return (
        <div className="toggle-container">
            <input type="checkbox" name="theme" id="switch" /><label htmlFor="switch" >Toggle</label>
        </div>
    )
}

export default DarkLightSwitch