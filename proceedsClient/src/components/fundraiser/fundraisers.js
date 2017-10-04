import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { ListGroupItem, ListGroup, Button  } from 'react-bootstrap';
import { deleteFund, fetchFunds } from '../../actions/index';
// import { fetchFund, deleteFund } from '../../actions/index';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

const config = {
   headers: { authorization: localStorage.getItem('token') }
}


class Fundraisers extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		console.log("1")
		this.props.fetchFunds();
	}

	onDeleteClick(e) {
		console.log(e.target.id)
		console.log(this.props)
		this.props.deleteFund(e.target.id); 
		this.props.fetchFunds()

	}
	componentDidMount(){
		console.log("3")
	}

	// componentWillUnmount() {
	// 	console.log("4");
 //    	onDeleteClick();
 //  	}
	renderItems() {
			// console.log(this.state)
			console.log(this.props)
			console.log("2")
		if(this.props.funds !== undefined) {
			return this.props.funds.map((fund) => {
				return (
					<ListGroup>
					 	<ListGroupItem>Fundraiser: {fund.newFund}</ListGroupItem>
					 	<ListGroupItem>Organization: {fund.organization}</ListGroupItem>
					 	<ListGroupItem>Organization Type: {fund.organizationType}</ListGroupItem>
					 	<ListGroupItem>Goal Amount: {fund.goalAmount}</ListGroupItem>
					 	<ListGroupItem>Time Frame: {fund.timeFrame}</ListGroupItem>
					 	<ListGroupItem>Purpose: {fund.purpose}</ListGroupItem>
					 	<button className="btn btn-danger" id={fund.id} onClick={this.onDeleteClick.bind(this)}>
					 	Delete Fundraiser
					 	</button>
				 	</ListGroup>
				);
			});
		}
		else {return ""}
	}

	render() {
		// const funds = this.props.funds;
		return (
			<div>
			{this.renderItems()}
			</div>
		);
	}
}

function mapStateToProps(state) { console.log(state.fund.deleted)
	return { funddeleted: state.fund.deleted, funds: state.fund.funds };
}

export default connect(mapStateToProps, { deleteFund, fetchFunds })(Fundraisers);

 // { fetchFund, deleteFund }