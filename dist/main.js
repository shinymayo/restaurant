/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createAboutPage = () => {\n    const content = document.getElementById(\"content\");\n\n    const divHeader = document.createElement(\"h1\");\n    divHeader.innerText = \"About us\";\n    content.appendChild(divHeader);\n\n    const divDescription = document.createElement(\"p\");\n    divDescription.innerText =\n      \"For special orders see the menu and booking form below\";\n    content.appendChild(divDescription);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutPage);\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n// export const homeButton = document.getElementById(\"home-button\");\n// export const menuButton = document.getElementById(\"menu-button\");\n// export const aboutButton = document.getElementById(\"about-button\");\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuPage = () => {\n    const content = document.getElementById(\"content\");\n\n    const divHeader = document.createElement(\"h1\");\n    divHeader.innerText = \"Our Menu\";\n    content.appendChild(divHeader);\n\n    const menuList = document.createElement(\"ul\");\n    content.appendChild(menuList);\n\n    const menuItem1 = document.createElement(\"li\");\n    const menuItem2 = document.createElement(\"li\");\n    const menuItem3 = document.createElement(\"li\");\n    const menuItem4 = document.createElement(\"li\");\n    const menuItem5 = document.createElement(\"li\");\n    const menuItem6 = document.createElement(\"li\");\n\n    menuItem1.textContent = \"Latte\";\n    menuItem2.textContent = \"Cappuccino\";\n    menuItem3.textContent = \"Americano\";\n    menuItem4.textContent = \"Espresso\";\n    menuItem5.textContent = \"Tea\";\n    menuItem6.textContent = \"Hot Chocolate\";\n\n    menuList.appendChild(menuItem1);\n    menuList.appendChild(menuItem2);\n    menuList.appendChild(menuItem3);\n    menuList.appendChild(menuItem4);\n    menuList.appendChild(menuItem5);\n    menuList.appendChild(menuItem6);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\n\nfunction initialLoad() {\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () => {\n    const content = document.getElementById(\"content\");\n\n    const divHeader = document.createElement(\"h1\");\n    divHeader.innerText = \"&feast\";\n    content.appendChild(divHeader);\n\n    const divDescription = document.createElement(\"p\");\n    divDescription.innerText = \"Get your daily coffee and pastry here\";\n    content.appendChild(divDescription);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\n\n\n\nconst createTabs = () =>  {\n    const navigation = document.getElementById(\"navigation\");\n\n    // create buttons\n    const button1 = document.createElement(\"button\");\n    const button2 = document.createElement(\"button\");\n    const button3 = document.createElement(\"button\");\n\n    // set ids for buttons\n    button1.setAttribute(\"id\", \"home-button\");\n    button2.setAttribute(\"id\", \"menu-button\");\n    button3.setAttribute(\"id\", \"about-button\");\n\n    // set classes on buttons for styling\n    button1.classList.add(\"button\");\n    button2.classList.add(\"button\");\n    button3.classList.add(\"button\");\n\n    // add text\n    button1.textContent = \"Home\";\n    button2.textContent = \"Menu\";\n    button3.textContent = \"About\";\n\n    navigation.appendChild(button1);\n    navigation.appendChild(button2);\n    navigation.appendChild(button3);\n\n    button1.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n    button2.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n    button3.addEventListener(\"click\", () => {\n        clearContent();\n        (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n}\n\nfunction clearContent() {\n    const content = document.getElementById(\"content\");\n    content.textContent = \"\";\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restaurant/./src/tabs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;