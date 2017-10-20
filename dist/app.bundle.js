/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_cardStyle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_main_scss__);



// class Element {
//   constructor(elem) {
//     this.elem = document.createElement(elem);
//   }
//   addStyle(styles) {
//     for(const style in styles) {
//         this.elem.style[style] = styles[style];
//     }
//     return this;
//   }
//   append(parent) {
//     parent.appendChild(this.elem);
//     return this;
//   }
//   addClass(className) {
//     this.elem.classList.add(className);
//     return this;
//   }
//   addEvent(event, fb) {
//     this.elem.addEventListener(event, fb);
//     return this;
//   }
// }
// figure = document.createElement('figure');

let arr = [document.createElement('figure'),document.createElement('figure'),document.createElement('figure'),document.createElement('figure'),document.createElement('figure')];
const section = document.querySelector('#table');

// arr.map(elem => {
//   elem
//     .addStyle(cardStyle)
//     .addClass('wrapper')
//     .addEvent('click', e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue')
//     .append(section);
// });
// const promise = new Promise((resolve, reject) => {
//   resolve(new Element('figure'));
// });

// promise
//   .then(figure => figure.addStyle(cardStyle))
//   .then(figure => figure.addClass('wrapper'))
//   .then(figure => figure.addEvent('click', e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue'))
//   .then(figure => figure.append(section))
//   .catch(err => console.log(err));
const addEventFull = event => fb => elem => { elem.addEventListener(event, fb); return elem};
const addClassFull = className => elem => { elem.classList.add(className); return elem};
const appendFull = parent => elem => { parent.appendChild(elem); return elem};

const addEvent = addEventFull('click')(e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue');
const addClass = addClassFull('card');
const append = appendFull(section);

const compose = f => g => x => f(g(x));

// arr.map(figure => append(addClass(addEvent(figure))));
arr.map(figure => compose(compose(append)(addClass))(addEvent)(figure));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
    width: '200px',
    height: '400px',
    background: 'red'
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map