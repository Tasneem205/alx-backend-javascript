/* eslint-disable import/extensions */
import handleResponseFromAPI from './2-then.js';

const promise = Promise.reject();
// eslint-disable-next-line jest/require-hook
handleResponseFromAPI(promise);
