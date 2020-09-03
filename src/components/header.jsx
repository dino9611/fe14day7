import React, { useState,useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'

var angka=0
const Header = (props) => {
  const [koppen, setIsOpen] = useState(false); //[isidata,function untuk merubah data]
  const [nama,setnama] = useState(null)
  //setisopen(x) == this.setstate({isopen:x})
  useEffect(()=>{
    console.log('didmount')
  },[]) //sama dengan didmount

  useEffect(()=>{
    if(angka > 0){
      console.log('didupdate')
    }else{
      angka++
    }
  })//didupdate

  useEffect(()=>{
    return ()=>{
      //your code here
    }
  }) //willunmount


  const toggle = () => setIsOpen(!koppen);
  
  return (
    <div>
      <Navbar light color='purple' expand="md">
        <NavbarBrand href='/' >reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={koppen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='pt-2 mr-2'>
              <Link to="/product">product</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link to="/topics">Topics</Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;