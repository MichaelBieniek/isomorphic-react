import { put, takeEvery, all } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

function * watchFetchQuestionsByTag (tag) {
	yield takeEvery(`REQUEST_FETCH_QUESTIONS_BY_TAG`, handleFetchQuestionsByTag, tag);
}

function * watchFetchQuestions() {
	yield takeEvery(`REQUEST_FETCH_QUESTIONS`, handleFetchQuestions);
}

function * handleFetchQuestions() {
	yield take('REQUEST_FETCH_QUESTIONS');
	const raw = yield fetch('/api/questions');
	const json = yield raw.json();
	const questions = json.items;
	yield put({ type: 'FETCHED_QUESTIONS', questions});
}

function * handleFetchQuestionsByTag(tag) {
		const raw = yield fetch(`/api/questions_by_tag/${tag}`);
		const json = yield raw.json();
		const questions = json.items;
		yield put({ type: 'FETCHED_QUESTIONS_BY_TAG', questions });
}

export default function* rootSaga() {
	yield all([
		watchFetchQuestionsByTag,
		watchFetchQuestions,
	])
}