import './normalize.css';
import './style.css';

//* **`` SELECTORS ``**

const target = document.querySelectorAll('.drop-down-target');
const box = document.querySelectorAll('.drop-down-box');
const list = document.querySelectorAll('.drop-down-list');
const listItem = document.querySelectorAll('.drop-down-list li');

//* **`` STYLING FUNCTIONS ``**

//? **`` Loops over all 'drop-down-boxes' and styles them.
[...box].map((element) => {
  Object.assign(element.style, {
    background: 'white',
    boxShadow: '2px 2px 15px rgb(2, 2, 2)',
    borderRadius: '5px',
    lineHeight: '1.5rem',
    position: 'absolute',
    opacity: '0',
  });
});

//? **`` Loops over all 'drop-down-lists' and styles them.
[...list].map((element) => {
  Object.assign(element.style, {
    listStyleType: 'none',
    padding: '5px',
  });
});

//* **`` HOVER STYLING FUNCTIONS ``**

//? **`` Loops over all 'drop-down-list items' and styles them on hover.
[...listItem].map((element) => {
  element.addEventListener('mouseover', () => {
    Object.assign(element.style, {
      background: '#1ce',
    });
  });
  element.addEventListener('mouseout', () => {
    Object.assign(element.style, {
      background: 'initial',
    });
  });
});

//? **`` Loops over all 'drop-down-targets' and reveals the child 'drop-down-box'.
[...target].map((element) => {
  element.addEventListener('mouseover', () => {
    // console.log(element.children);
    [...box].map((element) => {
      Object.assign(element.style, {
        opacity: '1',
      });
    });
  });
  element.addEventListener('mouseout', () => {
    [...box].map((element) => {
      Object.assign(element.style, {
        opacity: '0',
      });
    });
  });
});