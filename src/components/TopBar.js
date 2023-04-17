import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
// import whale from '../app/assets/whale.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faHome } from '@fortawesome/free-solid-svg-icons';


export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar
            className="mb-2"
            color="info"
            expand='md'
        >
            <NavbarBrand tag={Link} to='/'>
                {/* <img className='float-start'
                alt="whale logo"
                src={whale}
                style={{
                height: 40,
                width: 40
                }}
            /> */}

                <FontAwesomeIcon icon={faHippo} className='me-2' size='xl' /> <strong className='headerq'>Hungry Hungry Hippo</strong>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/addrecipe'>
                            <i className='fa fa-info fa-lg' /> Add Recipe
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}