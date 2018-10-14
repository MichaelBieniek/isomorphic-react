import { put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export default function * () {
	yield takeEvery(`REQUEST_FETCH_QUESTION`, handleFetchQuestion);
}

function * handleFetchQuestion() {
		const raw = yield fetch(`/api/question/${question_id}`);
		const json = yield raw.json();
		const question = json.items[0];
		yield put({ type: 'FETCHED_QUESTION', question });
}