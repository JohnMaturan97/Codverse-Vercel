/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Layout_NoData_js-utils_calculateTime_js-utils_getUserInfo_js-utils_newMsgSound_js";
exports.ids = ["components_Layout_NoData_js-utils_calculateTime_js-utils_getUserInfo_js-utils_newMsgSound_js"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NoProfilePosts\": function() { return /* binding */ NoProfilePosts; },\n/* harmony export */   \"NoFollowData\": function() { return /* binding */ NoFollowData; },\n/* harmony export */   \"NoMessages\": function() { return /* binding */ NoMessages; },\n/* harmony export */   \"NoPosts\": function() { return /* binding */ NoPosts; },\n/* harmony export */   \"NoProfile\": function() { return /* binding */ NoProfile; },\n/* harmony export */   \"NoNotifications\": function() { return /* binding */ NoNotifications; },\n/* harmony export */   \"NoPostFound\": function() { return /* binding */ NoPostFound; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/eggrollz/Desktop/OpenSource/components/Layout/NoData.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nconst NoProfilePosts = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  info: true,\n  icon: \"meh\",\n  header: \"Sorry\",\n  content: \"User has not posted anything yet!\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n  icon: \"long arrow alternate left\",\n  content: \"Go Back\",\n  as: \"a\",\n  href: \"/\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}));\nconst NoFollowData = ({\n  followersComponent,\n  followingComponent\n}) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, followersComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  icon: \"user outline\",\n  info: true,\n  content: `User does not have followers`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 7\n  }\n}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  icon: \"user outline\",\n  info: true,\n  content: `User does not follow any users`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 7\n  }\n}));\nconst NoMessages = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  info: true,\n  icon: \"telegram plane\",\n  header: \"Sorry\",\n  content: \"You have not messaged anyone yet.Search above to message someone!\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }\n});\nconst NoPosts = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  info: true,\n  icon: \"meh\",\n  header: \"Hey!\",\n  content: \"No Posts. Make sure you have followed someone.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 3\n  }\n});\nconst NoProfile = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  info: true,\n  icon: \"meh\",\n  header: \"Hey!\",\n  content: \"No Profile Found.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 3\n  }\n});\nconst NoNotifications = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  content: \"No Notifications\",\n  icon: \"smile\",\n  info: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }\n});\nconst NoPostFound = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n  info: true,\n  icon: \"meh\",\n  header: \"Hey!\",\n  content: \"No Post Found.\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 3\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanM/Y2FlZSJdLCJuYW1lcyI6WyJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiTm9Ob3RpZmljYXRpb25zIiwiTm9Qb3N0Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsTUFDNUIscUVBQ0UsTUFBQyxzREFBRDtBQUFTLE1BQUksTUFBYjtBQUFjLE1BQUksRUFBQyxLQUFuQjtBQUF5QixRQUFNLEVBQUMsT0FBaEM7QUFBd0MsU0FBTyxFQUFDLG1DQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLHFEQUFEO0FBQVEsTUFBSSxFQUFDLDJCQUFiO0FBQXlDLFNBQU8sRUFBQyxTQUFqRDtBQUEyRCxJQUFFLEVBQUMsR0FBOUQ7QUFBa0UsTUFBSSxFQUFDLEdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURLO0FBT0EsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUMsb0JBQUY7QUFBc0JDO0FBQXRCLENBQUQsS0FDMUIscUVBQ0dELGtCQUFrQixJQUNqQixNQUFDLHNEQUFEO0FBQVMsTUFBSSxFQUFDLGNBQWQ7QUFBNkIsTUFBSSxNQUFqQztBQUFrQyxTQUFPLEVBQUcsOEJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixFQUtHQyxrQkFBa0IsSUFDakIsTUFBQyxzREFBRDtBQUFTLE1BQUksRUFBQyxjQUFkO0FBQTZCLE1BQUksTUFBakM7QUFBa0MsU0FBTyxFQUFHLGdDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTkosQ0FESztBQVlBLE1BQU1DLFVBQVUsR0FBRyxNQUN4QixNQUFDLHNEQUFEO0FBQ0UsTUFBSSxNQUROO0FBRUUsTUFBSSxFQUFDLGdCQUZQO0FBR0UsUUFBTSxFQUFDLE9BSFQ7QUFJRSxTQUFPLEVBQUMsbUVBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURLO0FBU0EsTUFBTUMsT0FBTyxHQUFHLE1BQ3JCLE1BQUMsc0RBQUQ7QUFDRSxNQUFJLE1BRE47QUFFRSxNQUFJLEVBQUMsS0FGUDtBQUdFLFFBQU0sRUFBQyxNQUhUO0FBSUUsU0FBTyxFQUFDLGdEQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESztBQVNBLE1BQU1DLFNBQVMsR0FBRyxNQUN2QixNQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxNQUFoQztBQUF1QyxTQUFPLEVBQUMsbUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESztBQUlBLE1BQU1DLGVBQWUsR0FBRyxNQUM3QixNQUFDLHNEQUFEO0FBQVMsU0FBTyxFQUFDLGtCQUFqQjtBQUFvQyxNQUFJLEVBQUMsT0FBekM7QUFBaUQsTUFBSSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsTUFDekIsTUFBQyxzREFBRDtBQUFTLE1BQUksTUFBYjtBQUFjLE1BQUksRUFBQyxLQUFuQjtBQUF5QixRQUFNLEVBQUMsTUFBaEM7QUFBdUMsU0FBTyxFQUFDLGdCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cclxuICAgIDxCdXR0b24gaWNvbj1cImxvbmcgYXJyb3cgYWx0ZXJuYXRlIGxlZnRcIiBjb250ZW50PVwiR28gQmFja1wiIGFzPVwiYVwiIGhyZWY9XCIvXCIgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoeyBmb2xsb3dlcnNDb21wb25lbnQsIGZvbGxvd2luZ0NvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBoYXZlIGZvbGxvd2Vyc2B9IC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH0gLz5cclxuICAgICl9XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcclxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwibWVoXCJcclxuICAgIGhlYWRlcj1cIkhleSFcIlxyXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTm90aWZpY2F0aW9ucyA9ICgpID0+IChcclxuICA8TWVzc2FnZSBjb250ZW50PVwiTm8gTm90aWZpY2F0aW9uc1wiIGljb249XCJzbWlsZVwiIGluZm8gLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RGb3VuZCA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFBvc3QgRm91bmQuXCIgLz5cclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/NoData.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

eval("const baseUrl =  true ? \"http://localhost:3000\" : 0;\nmodule.exports = baseUrl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzP2FlMzMiXSwibmFtZXMiOlsiYmFzZVVybCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FDWCxRQUNJLHVCQURKLEdBRUksQ0FITjtBQUtBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE9BQWpCIiwiZmlsZSI6Ii4vdXRpbHMvYmFzZVVybC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcbiAgICA6IFwiaHR0cHM6Ly9pbmRlci1zb2NpYWwtbWVkaWEyLmhlcm9rdWFwcC5jb21cIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"react-moment\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/eggrollz/Desktop/OpenSource/utils/calculateTime.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nconst calculateTime = createdAt => {\n  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());\n  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);\n  const diffInHours = today.diff(postDate, \"hours\");\n\n  if (diffInHours < 24) {\n    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Today \", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n      format: \"hh:mm A\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }\n    }, createdAt));\n  } else if (diffInHours > 24 && diffInHours < 36) {\n    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Yesterday \", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n      format: \"hh:mm A\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 19\n      }\n    }, createdAt));\n  } else if (diffInHours > 36) {\n    return __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n      format: \"DD/MM/YYYY hh:mm A\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 12\n      }\n    }, createdAt);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateTime);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzPzllMmYiXSwibmFtZXMiOlsiY2FsY3VsYXRlVGltZSIsImNyZWF0ZWRBdCIsInRvZGF5IiwibW9tZW50IiwiRGF0ZSIsIm5vdyIsInBvc3REYXRlIiwiZGlmZkluSG91cnMiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLFNBQVMsSUFBSTtBQUNqQyxRQUFNQyxLQUFLLEdBQUdDLDZDQUFNLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHSCw2Q0FBTSxDQUFDRixTQUFELENBQXZCO0FBQ0EsUUFBTU0sV0FBVyxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBV0YsUUFBWCxFQUFxQixPQUFyQixDQUFwQjs7QUFFQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEIsRUFBc0I7QUFDcEIsV0FDRSwrRUFDUSxNQUFDLHFEQUFEO0FBQVEsWUFBTSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQk4sU0FBMUIsQ0FEUixDQURGO0FBS0QsR0FORCxNQU1PLElBQUlNLFdBQVcsR0FBRyxFQUFkLElBQW9CQSxXQUFXLEdBQUcsRUFBdEMsRUFBMEM7QUFDL0MsV0FDRSxtRkFDWSxNQUFDLHFEQUFEO0FBQVEsWUFBTSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQk4sU0FBMUIsQ0FEWixDQURGO0FBS0QsR0FOTSxNQU1BLElBQUlNLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUMzQixXQUFPLE1BQUMscURBQUQ7QUFBUSxZQUFNLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQ04sU0FBckMsQ0FBUDtBQUNEO0FBQ0YsQ0FwQkQ7O0FBc0JBLCtEQUFlRCxhQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xyXG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xyXG5cclxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/calculateTime.js\n");

/***/ }),

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getUserInfo = async userToFindId => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/chats/user/${userToFindId}`, {\n      headers: {\n        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\"token\")\n      }\n    });\n    return {\n      name: res.data.name,\n      profilePicUrl: res.data.profilePicUrl\n    };\n  } catch (error) {\n    console.error(error);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getUserInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9nZXRVc2VySW5mby5qcz85MjlmIl0sIm5hbWVzIjpbImdldFVzZXJJbmZvIiwidXNlclRvRmluZElkIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJuYW1lIiwiZGF0YSIsInByb2ZpbGVQaWNVcmwiLCJlcnJvciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU1DLFlBQU4sSUFBc0I7QUFDeEMsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLGlEQUFRLG1CQUFrQkgsWUFBYSxFQUFwRCxFQUF1RDtBQUN2RUksYUFBTyxFQUFFO0FBQUVDLHFCQUFhLEVBQUVDLG9EQUFBLENBQVcsT0FBWDtBQUFqQjtBQUQ4RCxLQUF2RCxDQUFsQjtBQUlBLFdBQU87QUFBRUMsVUFBSSxFQUFFTixHQUFHLENBQUNPLElBQUosQ0FBU0QsSUFBakI7QUFBdUJFLG1CQUFhLEVBQUVSLEdBQUcsQ0FBQ08sSUFBSixDQUFTQztBQUEvQyxLQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSwrREFBZVgsV0FBZiIsImZpbGUiOiIuL3V0aWxzL2dldFVzZXJJbmZvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyB1c2VyVG9GaW5kSWQgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzL3VzZXIvJHt1c2VyVG9GaW5kSWR9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBuYW1lOiByZXMuZGF0YS5uYW1lLCBwcm9maWxlUGljVXJsOiByZXMuZGF0YS5wcm9maWxlUGljVXJsIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJJbmZvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/getUserInfo.js\n");

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst newMsgSound = senderName => {\n  const sound = new Audio(\"/light.mp3\");\n  sound && sound.play();\n\n  if (senderName) {\n    document.title = `New message from ${senderName}`;\n\n    if (document.visibilityState === \"visible\") {\n      setTimeout(() => {\n        document.title = \"Messages\";\n      }, 5000);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMsgSound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9uZXdNc2dTb3VuZC5qcz84ZWVlIl0sIm5hbWVzIjpbIm5ld01zZ1NvdW5kIiwic2VuZGVyTmFtZSIsInNvdW5kIiwiQXVkaW8iLCJwbGF5IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInZpc2liaWxpdHlTdGF0ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXLEdBQUdDLFVBQVUsSUFBSTtBQUNoQyxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLFlBQVYsQ0FBZDtBQUVBRCxPQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBTixFQUFUOztBQUVBLE1BQUlILFVBQUosRUFBZ0I7QUFDZEksWUFBUSxDQUFDQyxLQUFULEdBQWtCLG9CQUFtQkwsVUFBVyxFQUFoRDs7QUFFQSxRQUFJSSxRQUFRLENBQUNFLGVBQVQsS0FBNkIsU0FBakMsRUFBNEM7QUFDMUNDLGdCQUFVLENBQUMsTUFBTTtBQUNmSCxnQkFBUSxDQUFDQyxLQUFULEdBQWlCLFVBQWpCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0Y7QUFDRixDQWREOztBQWdCQSwrREFBZU4sV0FBZiIsImZpbGUiOiIuL3V0aWxzL25ld01zZ1NvdW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmV3TXNnU291bmQgPSBzZW5kZXJOYW1lID0+IHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XHJcblxyXG4gIHNvdW5kICYmIHNvdW5kLnBsYXkoKTtcclxuXHJcbiAgaWYgKHNlbmRlck5hbWUpIHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYE5ldyBtZXNzYWdlIGZyb20gJHtzZW5kZXJOYW1lfWA7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/newMsgSound.js\n");

/***/ })

};
;