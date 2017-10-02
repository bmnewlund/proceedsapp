import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav, collapseOnSelect, Header, Toggle, Collapse, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NavBarHeader extends Component {


	render() {
		return (
			<div>
			  <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Proceeds</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			      <Nav pullRight >
			        <Button>SignUp</Button>
			        <Button>SignIn</Button>
			      </Nav>			 
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(NavBarHeader);