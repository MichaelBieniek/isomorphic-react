import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './components/QuestionsList';

const AppDisplay = ({test}) => (
	<div>
		<h1>
			Isomorphic react {test}
		</h1>
		<div>
			<QuestionList />
		</div>
	</div>
);

//export default AppDisplay;

const mapStateToProps = (state, ownProps) => {
	return {
		...state
	}
};

export default connect(mapStateToProps)(AppDisplay);