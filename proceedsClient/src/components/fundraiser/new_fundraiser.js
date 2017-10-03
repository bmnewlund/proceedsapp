import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createFund } from '../../actions/index';
import { Link } from 'react-router';


class Fundraiser extends Component {
	handleFormSubmit(formProps){
		console.log(formProps);
	  //call action creator to sign up the user
	    this.props.createFund(formProps);
	}

	render() {
		const { fields: { newFundraiser, organization, organizationType, goalAmount, timeFrame, purpose }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create New Fundraiser</h3>
				
				<fieldset className="form-group">
					<label>New Fundraiser</label>
					<input type="text" className="form-control" {...newFundraiser} />
				</fieldset>
				<fieldset className="form-group">
					<label>Organization</label>
					<input type="text" className="form-control" {...organization} />
				</fieldset>
				<fieldset className="form-group">
					<label>Organization Type</label>
					<input type="text" className="form-control" {...organizationType} />
				</fieldset>
				<fieldset className="form-group">
					<label>Goal Amount</label>
					<input type="number" className="form-control" {...goalAmount} />
				</fieldset>
				<fieldset className="form-group">
					<label>Time Frame</label>
					<input type="text" className="form-control" {...timeFrame} />
				</fieldset>
				<fieldset className="form-group">
					<label>Purpose</label>
					<textarea type="text" rows="8" className="form-control text" {...purpose} />
				</fieldset>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);

	}
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'FundsNewForm',
	fields: [ 'newFundraiser', 'organization', 'organizationType', 'goalAmount', 'timeFrame', 'purpose' ]
}, mapStateToProps, { createFund })(Fundraiser);