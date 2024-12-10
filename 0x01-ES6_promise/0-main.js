import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
// eslint-disable-next-line jest/require-hook
console.log(response instanceof Promise);
