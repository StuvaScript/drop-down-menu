import './normalize.css';
import './style.css';

//* **`` STYLING VARIABLES ``**

//! **`` Feel free to change these variables to style your dropdowns :)
//!----------------------------------------------------------------
//? **`` Dropdown Box
const dDBBackground = 'white';
const boxShadow = '2px 2px 15px rgb(2, 2, 2)';
const borderRadius = '5px';
const lineHeight = '1.5rem';
const fadeInOutTransition = '300ms ease-in-out';

//? **`` Dropdown List
const listStyleType = 'none';
const padding = '5px';

//? **`` Hovering Over List Items
const lIBackground = '#1ce';
//!----------------------------------------------------------------

//* **`` SELECTORS ``**

const target = document.querySelectorAll('.drop-down-target');
const box = document.querySelectorAll('.drop-down-box');
const list = document.querySelectorAll('.drop-down-list');
const listItem = document.querySelectorAll('.drop-down-list > *');

//* **`` STYLING FUNCTIONS ``**

//? **`` Loops over all 'drop-down-boxes' and styles them.
[...box].map((element) => {
  Object.assign(element.style, {
    background: dDBBackground,
    boxShadow: boxShadow,
    borderRadius: borderRadius,
    lineHeight: lineHeight,
    transition: 'opacity ' + fadeInOutTransition,
    position: 'absolute',
    opacity: '0',
    pointerEvents: 'none',
  });
});

//? **`` Loops over all 'drop-down-lists' and styles them.
[...list].map((element) => {
  Object.assign(element.style, {
    listStyleType: listStyleType,
    padding: padding,
  });
});

//* **`` HOVER STYLING FUNCTIONS ``**

//? **`` Loops over all 'drop-down-list items' and styles them on hover.
[...listItem].map((element) => {
  element.addEventListener('mouseover', () => {
    Object.assign(element.style, {
      background: lIBackground,
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
    Object.assign(element.children[0].style, {
      opacity: '1',
      pointerEvents: 'initial',
    });
  });
  element.addEventListener('mouseout', () => {
    Object.assign(element.children[0].style, {
      opacity: '0',
      pointerEvents: 'none',
    });
  });
});
