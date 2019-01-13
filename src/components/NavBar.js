import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    render() {
        const { genres } = this.props;
        return (
            <Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Ticketmaster Events</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Genres <Badge color='dark'>{ genres.length }</Badge>
                                </DropdownToggle>
                                <DropdownMenu right>
                                {
                                    genres.map((genre, idx) => (
                                        <DropdownItem key={ idx }>
                                            <Link to={`/${genre}`}>
                                                { genre }
                                            </Link> 
                                        </DropdownItem>
                                    ))
                                }
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;