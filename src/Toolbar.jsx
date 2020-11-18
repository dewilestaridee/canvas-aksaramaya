import React, { useState } from 'react';
import './Header.css';
import { ButtonDropdown} from 'reactstrap';
import {
  Navbar,
  DropdownToggle,
  Dropdown, DropdownItem, DropdownMenu
 
} from 'reactstrap';

const Toolbar = (props) =>{

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>      
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle>
               {props.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Save</DropdownItem>
            <DropdownItem header>Save to Folder</DropdownItem>
            <DropdownItem header>Version History</DropdownItem>
            <DropdownItem header>Make a copy</DropdownItem>
          </DropdownMenu>
        </Dropdown>
              
    </div>
  );
}

const Tolbar = () =>{
  return(
       <div className="baris">    
         <Navbar color="light" navbar="md">
          <Toolbar name="File"/>
          <Toolbar name="Edit"/>
          <Toolbar name ="Insert"/>
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
