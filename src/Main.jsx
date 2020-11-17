import React from 'react';
import './Header.css';
import DrawerToggleButton from './DrawerToggleButton';

const Main = (props) => {
    return (

      <div>
        <div className="template">
        <DrawerToggleButton click={props.drawerClickHandler}/>
         </div>
      </div>
    
        );
}

export default Main;