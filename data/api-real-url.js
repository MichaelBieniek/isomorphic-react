export const questions = 'http://api.stackexchange.com/2.0/questions?site=stackoverflow';
export const question = (id) => `http://api.stackexchange.com/2.0/questions/${id}?site=stackoverflow&filter=withbody`;
export const questions_by_tag = (tag) => `http://api.stackexchange.com/2.2/search/advanced?tagged=${tag}&site=stackoverflow`;
