import React from 'react';
import './Header.css';
import DrawerToggleButton from './DrawerToggleButton';

const Main = (props) => {
    return (

      <div>
        <div className="template"> 
           <div className="page">page</div>
        </div>
         <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
    
        );
}

export default Main;
