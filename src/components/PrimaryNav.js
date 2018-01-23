import React, {Component} from 'react';
import logo from '../images/logo.png';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class PrimaryNav extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {state} = this;

        return (
            <Container>
                <Navbar dark color="blue" expand="md" className="app-primary-nav pt-4 mt-2">
                    <NavbarBrand href="/" title="Anonency (ANON)"><img src={logo} height="60" alt="Anonency"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Roadmap</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Mining</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Wallets</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Contribute</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default PrimaryNav;
