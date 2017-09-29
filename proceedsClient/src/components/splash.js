import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {Jumbotron, Button} from 'react-bootstrap';




class SplashSignup extends Component {
		render() {
				return (
			  			<Jumbotron>
			    			<h1>Welcome to Proceeds!</h1>
			    			<p>A fundraising site for whatever your purpose!</p>
			    			<p><Button bsStyle="primary">SignUp!</Button></p>
			  			</Jumbotron>
				);
			}
		}

export default SplashSignup;

