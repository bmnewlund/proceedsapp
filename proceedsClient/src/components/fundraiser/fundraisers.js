import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { ListGroupItem, ListGroup, Button  } from 'react-bootstrap';
import { deleteFund } from '../../actions/index';
// import { fetchFund, deleteFund } from '../../actions/index';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

const config = {
   headers: { authorization: localStorage.getItem('token') }
}

class Fundraisers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fund : {}
		}
		axios.get(ROOT_URL + '/api/fund', config)
			.then( (response) => {
				console.log("Response", response)
				this.setState({
					fund: response.data
				})
				this.renderItems();

			});
			console.log(this.state)
	}

	onDeleteClick() {
		this.props.deleteFund(this.params.id);
		console.log(this.state.fund)
	}

	renderItems() {
			console.log(this.state)
		if (Object.keys(this.state.fund).length !== 0) {
			return this.state.fund.map((fund) => {
				return (
					<ListGroup>
					 	<ListGroupItem>Fundraiser: {fund.newFund}</ListGroupItem>
					 	<ListGroupItem>Organization: {fund.organization}</ListGroupItem>
					 	<ListGroupItem>Organization Type: {fund.organizationType}</ListGroupItem>
					 	<ListGroupItem>Goal Amount: {fund.goalAmount}</ListGroupItem>
					 	<ListGroupItem>Time Frame: {fund.timeFrame}</ListGroupItem>
					 	<ListGroupItem>Purpose: {fund.purpose}</ListGroupItem>
					 	<button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>
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
		console.log(this.state.fund)
		return (
			<div>
			{this.renderItems()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { funds: state.fund.all };
}

export default connect(mapStateToProps, { deleteFund })(Fundraisers);

 // { fetchFund, deleteFund }