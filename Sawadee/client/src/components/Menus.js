import React from 'react';
import MenuList from './MenuList';
import MenuDetails from './MenuDetails';

const Menus = () => {
    return(
        <div>
            <div>
                <MenuList />
            </div>
            <div>
                <MenuDetails />
            </div>
        </div>
    )
}

export default Menus;