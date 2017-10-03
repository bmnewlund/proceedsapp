import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav, collapseOnSelect, Header, Toggle, Collapse, Button, ButtonToolbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NavBarHeader extends Component {


	render() {
		return (
			<div>
			  <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="/home">Proceeds</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			      <Nav pullRight >
			      	<ButtonToolbar>
				        <Button bsStyle="primary" href="/user">SignUp</Button>
				        <Button bsStyle="primary" href="/user">SignIn</Button>
				    </ButtonToolbar>
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