import { put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export default function * () {
	yield takeEvery(`REQUEST_FETCH_QUESTION`, handleFetchQuestion);
}

function * handleFetchQuestion(ques) {
		console.log(ques);
		const raw = yield fetch(`/api/question/${ques.question_id}`);
		const json = yield raw.json();
		const question = json.items[0];
		yield put({ type: 'FETCHED_QUESTION', question });
}