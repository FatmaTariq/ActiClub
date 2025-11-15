import React, { useState } from 'react';
import { Collapse, Navbar,NavbarToggler, NavbarBrand, Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt  } from "react-icons/fa";


const Header =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
        <Navbar className='navigation' light expand='md'>
            <h2 className='h2'>ActiClub </h2>
        <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className='navs'>
                        <Link to="/home" className='nav-link'>Home</Link>
                    </NavItem>

                    <NavItem className='navs'>
                         <Link  className='nav-link'>Our Goal</Link>
                    </NavItem>

                    <NavItem className='navs'>
                         <Link  className='nav-link'>Our Location</Link>
                    </NavItem>
                        
                    <NavItem className='navs'>
                         <Link className='nav-link'>Your Activity</Link>
                    </NavItem>

                    <NavItem className='navs'>
                        <Link  className='nav-link'>Sing Out </Link>
                    </NavItem>

                    <NavItem className='navs'>
                            <Link  className='nav-link'><FaUserAlt /></Link>
                        </NavItem>
                    </Nav>
                </Collapse>

        </Navbar>
        </>
    )
}
export default Header; 