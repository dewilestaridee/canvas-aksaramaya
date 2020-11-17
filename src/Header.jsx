import React from 'react';
import './Header.css';
import {
  Navbar,  
  NavbarBrand,
} from 'reactstrap';

const Header = () => {
    return (
         <div className="judul">
              <Navbar color="light" light expand="md">
               <NavbarBrand className="text-danger">Editor Judul</NavbarBrand>
      </Navbar>
      </div>
    );
  }
export default Header;