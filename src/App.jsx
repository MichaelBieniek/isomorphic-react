import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './components/QuestionsList';
import QuestionDetail from './components/QuestionDetail';
import { Route, Link } from 'react-router-dom';

const AppDisplay = () => (
	<div>
		<h1>
			<Link to={`/`}>
				Isomorphic react
			</Link>			
		</h1>
		<div>
			<Route exact path ='/' render={() => <QuestionList />} />
			<Route exact path ='/questions/:id'
				render={({ match }) => <QuestionDetail
					question_id={match.params.id} />} />
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