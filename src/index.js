import './normalize.css';
import './style.css';

const backgroundColor = '#1ce';

const target = document.querySelectorAll('.drop-down-target');
console.log(target);
const box = document.querySelector('.drop-down-box');

[...target].map((obj) => {
  Object.assign(obj.style, {
    background: backgroundColor,
    color: 'white',
    fontSize: '4rem',
  });
});

//todo **`` Going to change the above code to style the 'box' instead of the 'target'. Then the ':hover' event is going to be replicated using either 'mouseover' or 'mouseenter' event listeners.
