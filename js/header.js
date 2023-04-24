/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/header.js":
/*!*********************************!*\
  !*** ./src/client/js/header.js ***!
  \*********************************/
/***/ (() => {

eval("var link = document.querySelector(\"a\");\nvar button = document.querySelector(\"#loginBtn\");\nvar home = document.querySelector(\"#homeTitle\");\nvar topTracks = document.querySelector(\"#topTracks\");\nvar popstar = document.querySelector(\"#popstar\");\nvar kPop = document.querySelector(\"#kPop\"); // button event\n\nvar location = window.location.pathname.split(\"/\")[1];\n\nif (location === \"\") {\n  link.innerHTML = \"Login\";\n  link.href = \"/register\";\n\n  if (sessionStorage.getItem(\"token\") === \"doylee\") {\n    link.innerHTML = \"My Playlist\";\n    link.href = \"/myplaylist\";\n  }\n}\n\nif (location === \"register\") {\n  button.style.display = \"none\";\n  link.style.display = \"none\";\n}\n\nif (location === \"myplaylist\") {\n  link.innerHTML = \"Logout\";\n  link.href = \"/\";\n  sessionStorage.removeItem(\"token\");\n}\n\nif (location === \"toptracks\" || location === \"popstar\" || location === \"kpop\") {\n  link.innerHTML = \"My Playlist\";\n  link.href = \"myplaylist\";\n} // click title event\n\n\nvar onClickHomeTitle = function onClickHomeTitle() {\n  window.location.href = \"/\";\n};\n\nvar onClickChannelTopTracks = function onClickChannelTopTracks() {\n  window.location.href = \"/toptracks\";\n};\n\nvar onClickChannelPopstar = function onClickChannelPopstar() {\n  window.location.href = \"/popstar\";\n};\n\nvar onClickChannelKpop = function onClickChannelKpop() {\n  window.location.href = \"/kpop\";\n};\n\nhome.addEventListener(\"click\", onClickHomeTitle);\ntopTracks.addEventListener(\"click\", onClickChannelTopTracks);\npopstar.addEventListener(\"click\", onClickChannelPopstar);\nkPop.addEventListener(\"click\", onClickChannelKpop);\n\n//# sourceURL=webpack://tomato/./src/client/js/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/header.js"]();
/******/ 	
/******/ })()
;