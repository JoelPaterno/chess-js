const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
console.log(html);

const dom = new JSDOM(html);
console.log(dom.window.document);

//mock the DOM environement

//import the functions from index.js