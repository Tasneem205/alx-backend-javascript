/* eslint-disable no-undef */
const { expect } = require('chai');
// eslint-disable-next-line no-unused-vars
const sinon = require('sinon');

const path = require('path');
const child = require('child_process');

const exec = path.join(__dirname, '.', '1-stdin.js');
const proc = child.spawn("node", [exec], { stdio: 'pipe' });

describe('main', () => {
  it('the user is entering a name', function (done) {
    proc.stdout.once('data', (test) => {
      expect(test.toString()).to.equal('Welcome to Holberton School, what is your name?\n');
      proc.stdin.write('Guillaumeh\r');
      proc.stdout.once('data', (test) => {
        expect(test.toString()).to.equal('Your name is: Guillaumeh\r');
        done();
      });
    });
  });
});