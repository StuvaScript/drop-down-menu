/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/other.js":
/*!**********************!*\
  !*** ./src/other.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import './normalize.css';
// import './style.css';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function stuDropDown() {
  //* **`` STYLING VARIABLES ``**

  //! **`` Feel free to change these variables to style your dropdowns :)
  //!----------------------------------------------------------------
  //? **`` Dropdown Box
  const dDBBackground = 'white';
  const boxShadow = '2px 2px 15px rgb(2, 2, 2)';
  const borderRadius = '5px';
  const lineHeight = '1.5rem';
  const distanceBelowTarget = '1.2rem';
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

  //? **`` Loops over all 'drop-down-targets' and styles them.
  [...target].map((element) => {
    Object.assign(element.style, {
      position: 'relative',
    });
  });

  //? **`` Loops over all 'drop-down-boxes' and styles them.
  [...box].map((element) => {
    Object.assign(element.style, {
      background: dDBBackground,
      boxShadow: boxShadow,
      borderRadius: borderRadius,
      lineHeight: lineHeight,
      top: distanceBelowTarget,
      transition: 'opacity ' + fadeInOutTransition,
      position: 'absolute',
      opacity: '0',
      zIndex: '1',
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
})());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other */ "./src/other.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map