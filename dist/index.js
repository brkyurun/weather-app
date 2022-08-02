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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst searchBar = document.querySelector(\".card-input\");\nconst locationName = document.querySelector(\".location-name\");\nsearchBar.addEventListener(\"keydown\", (e) => {\n    if (e.key !== \"Enter\")\n        return;\n    fetchWeather(searchBar.value);\n});\nfunction fetchWeather(location = \"Istanbul\", units = \"metric\") {\n    const API_URL = \"https://api.openweathermap.org/data/2.5/weather?\";\n    const API_KEY = \"7f7de09e94384bb2128bd49ebdbced3c\";\n    fetch(`${API_URL}appid=${API_KEY}&q=${location}&units=${units}`)\n        .then((res) => console.log(res.json()))\n        .catch((err) => console.log(err));\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;