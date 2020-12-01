import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png'
import './NavPage.css'

const NavPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg md">
            <Navbar.Brand className="logo-div " href="#home"><img className=" logo-img" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="" id="responsive-navbar-nav">
                <Nav className="ml-auto pr-5">
                    <Nav.Link className="text-decoration-none nav-link-div text-reset" to="/home"><p className="nav-items">Home</p></Nav.Link>
                    <Nav.Link className="text-decoration-none nav-link-div text-reset" to="/home"><p className="nav-items">Our Portfolio</p></Nav.Link>
                    <Nav.Link className="text-decoration-none nav-link-div text-reset" to="/home"><p className="nav-items">Our Team</p></Nav.Link>
                    <Nav.Link className="text-decoration-none nav-link-div text-reset" to="/home"><p className="nav-items">Contact Us</p></Nav.Link>
                    {
                        loggedInUser.isSignedIn ? <div className="btn-div login-btn-div"><p className="login-btn d-flex justify-content-center text-white text-center align-items-center">{loggedInUser.name}</p></div> :
                            <Link className=" text-decoration-none login-btn-div text-reset btn-div" to="/login"><p className="rounded-lg login-btn d-flex justify-content-center text-white text-center align-items-center">Login</p></Link>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavPage;