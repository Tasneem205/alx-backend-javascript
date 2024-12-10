/* eslint-disable import/extensions */
import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
// eslint-disable-next-line jest/require-hook
handleResponseFromAPI(promise);
