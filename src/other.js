import './normalize.css';
import './style.css';

export default (function stuDropDown() {
  //* **`` SELECTORS ``**

  const target = document.querySelectorAll('.drop-down-target');
  const box = document.querySelectorAll('.drop-down-box');
  const list = document.querySelectorAll('.drop-down-list');
  const listItem = document.querySelectorAll('.drop-down-list > *');

  //* **`` STYLING FUNCTIONS ``**

  //? **`` Loops over all 'drop-down-targets' and styles them.
  [...target].map((element) => {
    Object.assign(element.style, {
      position: 'relative',
    });
  });

  //? **`` Loops over all 'drop-down-boxes' and styles them.
  [...box].map((element) => {
    Object.assign(element.style, {
      background: 'white',
      boxShadow: '2px 2px 15px rgb(2, 2, 2)',
      borderRadius: '5px',
      lineHeight: '1.5rem',
      top: '1.2rem',
      transition: 'opacity 300ms ease-in-out',
      position: 'absolute',
      opacity: '0',
      zIndex: '1',
      pointerEvents: 'none',
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
})();
