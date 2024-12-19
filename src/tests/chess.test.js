const fs = require('fs');
const path = require('path');
const { render, fireEvent, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');


const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

beforeEach(() => {
    // Create a fresh DOM before each test
    document.body.innerHTML = html
  });

test('renders grid with correct number of squares', () => {
    const squares = document.querySelectorAll('.box');
    expect(squares).toHaveLength(81);
});

test('renders chess board with correct number of squares', () => {
    const squares = document.querySelectorAll('.box[id]');
    expect(squares).toHaveLength(64);
});


test('squares have correct color classes', () => {
    const whiteSquares = document.querySelectorAll('.box.white');
    const blackSquares = document.querySelectorAll('.box.black');

    expect(whiteSquares.length + blackSquares.length).toBe(64);
    expect(whiteSquares.length).toBe(32);
    expect(blackSquares.length).toBe(32);
});