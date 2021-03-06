import React from 'react';
import './TopNavbar.css';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
// import HomeIcon from '@material-ui/icons/Home';

export default class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">Book Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className='nav-active-style' tag={Link} to="/"> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/wish-list" className="nav-link white underline pa3 pointer">Books WishList</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/currentlist" className='nav-active-style'>Reading List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/add" className="nav-link white underline pa3 pointer" value="Add Book">Add Book</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/login" className='nav-active-style'>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className='nav-active-style'>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}