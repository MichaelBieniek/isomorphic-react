import React from 'react';
import { connect } from 'react-redux';
import TagsList from './TagsList';

const QuestionListItem = ({ title, tags }) => (
	<div className="mb-3">
		<h3>{title}</h3>
		<div className="mb-2">
			<TagsList tags={tags} />
		</div>
	</div>
)

const QuestionList = ({questions}) => (
	<div>
		{ questions && questions.length > 0 ?
			<div>
				{questions.map(question => <QuestionListItem key={question.question_id} {...question} /> )}
			</div> :
			<div>
				... loading questions ...
			</div>
		}
	</div>
);

//export default AppDisplay;

const mapStateToProps = ({questions}) => ({
	questions,
});

export default connect(mapStateToProps)(QuestionList);