import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
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
	}
	componentWillMount() {

		// this.props.fetchFund(this.props.params.id);
		axios.get(ROOT_URL + '/fund', config)
			.then( (response) => {
				console.log("Response", response)
				this.setState({
					fund: response.data
				})
			});
	}

	onDeleteClick() {
		this.props.deleteFund(this.props.params.id);
	}

		renderItems() {
		return this.state.fund.map((fund) => {

			return (
				<ListGroup>
				 	<ListGroupItem>Fundraiser: {this.state.fund.newFundraiser}</ListGroupItem>
				 	<ListGroupItem>Organization: {this.state.fund.organization}</ListGroupItem>
				 	<ListGroupItem>Organization Type: {this.state.fund.organizationType}</ListGroupItem>
				 	<ListGroupItem>Goal Amount: {this.state.fund.goalAmount}</ListGroupItem>
				 	<ListGroupItem>Time Frame: {this.state.und.timeFrame}</ListGroupItem>
				 	<ListGroupItem>Purpose: {this.state.fund.purpose}</ListGroupItem>
			 	</ListGroup>
			);
		});
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

export default connect(mapStateToProps)(Fundraisers);

 // { fetchFund, deleteFund }