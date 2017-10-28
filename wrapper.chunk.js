webpackJsonp([1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/wrapper/wrapper.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  background: #116059; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/wrapper/wrapper.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_element_component__ = __webpack_require__("./src/components/element/element.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper_style_scss__ = __webpack_require__("./src/components/wrapper/wrapper.style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wrapper_style_scss__);



class Wrapper extends __WEBPACK_IMPORTED_MODULE_0__element_element_component__["a" /* default */]{
  constructor() {
    super('section');
    this.elem.classList.add('wrapper');
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Wrapper;


/***/ }),

/***/ "./src/components/wrapper/wrapper.style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/wrapper/wrapper.style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/wrapper/wrapper.style.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/wrapper/wrapper.style.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=wrapper.chunk.js.map