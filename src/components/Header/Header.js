import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Bed Sofa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user &&
                                <>
                                <Nav.Link as={Link} to="/manageAll">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user? 
                                <button className='btn btn-link text-decoration-none text-dark' onClick={handleSignOut}>Sign Out</button>
                                :<Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;