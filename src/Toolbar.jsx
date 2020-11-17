import React from 'react';
import './Header.css';
import { ButtonDropdown} from 'reactstrap';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
 
} from 'reactstrap';

const Toolbar = (props) =>{
  return (
    <div >      
         <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">{props.name}</NavLink>
         </NavItem>
        </Nav>      
    </div>
  );
}

const Tolbar = () =>{
  return(
       <div className="baris">    
        <Navbar color="light" light expand="md">
        <Toolbar name=""/>
         <Toolbar name="File"/>
         <Toolbar name="Edit"/>
         <Toolbar name ="Insert"/>
         <Toolbar name="Design"/>
         <Toolbar name="Layout"/>
         <Toolbar name="Format"/>
         <Toolbar name="Bantuan"/>

         <div className ="spacer" />
         <div className="simpan">
          <ButtonDropdown>
               <DropdownToggle caret color="danger">
                Simpan
                </DropdownToggle>
               </ButtonDropdown>
           </div>
          
        </Navbar>
      </div>     
  );
}
export default Tolbar;