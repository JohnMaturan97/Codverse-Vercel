/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "utils_authUser_js";
exports.ids = ["utils_authUser_js"];
exports.modules = {

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerUser\": function() { return /* binding */ registerUser; },\n/* harmony export */   \"loginUser\": function() { return /* binding */ loginUser; },\n/* harmony export */   \"redirectUser\": function() { return /* binding */ redirectUser; },\n/* harmony export */   \"logoutUser\": function() { return /* binding */ logoutUser; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ \"./utils/catchErrors.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst registerUser = async (user, profilePicUrl, setError, setLoading) => {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/signup`, {\n      user,\n      profilePicUrl\n    });\n    setToken(res.data);\n  } catch (error) {\n    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);\n    setError(errorMsg);\n  }\n\n  setLoading(false);\n};\nconst loginUser = async (user, setError, setLoading) => {\n  setLoading(true);\n\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/auth`, {\n      user\n    });\n    setToken(res.data);\n  } catch (error) {\n    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);\n    setError(errorMsg);\n  }\n\n  setLoading(false);\n};\nconst redirectUser = (ctx, location) => {\n  if (ctx.req) {\n    ctx.res.writeHead(302, {\n      Location: location\n    });\n    ctx.res.end();\n  } else {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);\n  }\n};\n\nconst setToken = token => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set(\"token\", token);\n  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n};\n\nconst logoutUser = email => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set(\"userEmail\", email);\n  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove(\"token\");\n  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/login\");\n  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcz84ZTVlIl0sIm5hbWVzIjpbInJlZ2lzdGVyVXNlciIsInVzZXIiLCJwcm9maWxlUGljVXJsIiwic2V0RXJyb3IiLCJzZXRMb2FkaW5nIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwic2V0VG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwicmVkaXJlY3RVc2VyIiwiY3R4IiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIlJvdXRlciIsInRva2VuIiwiY29va2llIiwibG9nb3V0VXNlciIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxJQUFQLEVBQWFDLGFBQWIsRUFBNEJDLFFBQTVCLEVBQXNDQyxVQUF0QyxLQUFxRDtBQUMvRSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsaURBQVEsYUFBdEIsRUFBb0M7QUFBRU4sVUFBRjtBQUFRQztBQUFSLEtBQXBDLENBQWxCO0FBRUFNLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFDRCxHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7O0FBQ0RQLFlBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxDQVZNO0FBWUEsTUFBTVMsU0FBUyxHQUFHLE9BQU9aLElBQVAsRUFBYUUsUUFBYixFQUF1QkMsVUFBdkIsS0FBc0M7QUFDN0RBLFlBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLGlEQUFRLFdBQXRCLEVBQWtDO0FBQUVOO0FBQUYsS0FBbEMsQ0FBbEI7QUFFQU8sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBWE07QUFhQSxNQUFNVSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEtBQW1CO0FBQzdDLE1BQUlELEdBQUcsQ0FBQ0UsR0FBUixFQUFhO0FBQ1hGLE9BQUcsQ0FBQ1YsR0FBSixDQUFRYSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLGNBQVEsRUFBRUg7QUFBWixLQUF2QjtBQUNBRCxPQUFHLENBQUNWLEdBQUosQ0FBUWUsR0FBUjtBQUNELEdBSEQsTUFHTztBQUNMQywyREFBQSxDQUFZTCxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVNQLE1BQU1SLFFBQVEsR0FBR2MsS0FBSyxJQUFJO0FBQ3hCQyxzREFBQSxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0FELHlEQUFBLENBQVksR0FBWjtBQUNELENBSEQ7O0FBS08sTUFBTUcsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFDakNGLHNEQUFBLENBQVcsV0FBWCxFQUF3QkUsS0FBeEI7QUFDQUYseURBQUEsQ0FBYyxPQUFkO0FBQ0FGLHlEQUFBLENBQVksUUFBWjtBQUNBQSwyREFBQTtBQUNELENBTE0iLCJmaWxlIjoiLi91dGlscy9hdXRoVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAsIHsgdXNlciwgcHJvZmlsZVBpY1VybCB9KTtcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodXNlciwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwgeyB1c2VyIH0pO1xyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIGxvY2F0aW9uKSA9PiB7XHJcbiAgaWYgKGN0eC5yZXEpIHtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogbG9jYXRpb24gfSk7XHJcbiAgICBjdHgucmVzLmVuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0VG9rZW4gPSB0b2tlbiA9PiB7XHJcbiAgY29va2llLnNldChcInRva2VuXCIsIHRva2VuKTtcclxuICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IGVtYWlsID0+IHtcclxuICBjb29raWUuc2V0KFwidXNlckVtYWlsXCIsIGVtYWlsKTtcclxuICBjb29raWUucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgUm91dGVyLnJlbG9hZCgpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/authUser.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

eval("const baseUrl =  true ? \"http://localhost:3000\" : 0;\nmodule.exports = baseUrl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzP2FlMzMiXSwibmFtZXMiOlsiYmFzZVVybCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FDWCxRQUNJLHVCQURKLEdBRUksQ0FITjtBQUtBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE9BQWpCIiwiZmlsZSI6Ii4vdXRpbHMvYmFzZVVybC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcbiAgICA6IFwiaHR0cHM6Ly9pbmRlci1zb2NpYWwtbWVkaWEyLmhlcm9rdWFwcC5jb21cIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZVVybDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst catchErrors = error => {\n  let errorMsg;\n\n  if (error.response) {\n    // If the request was made and the server not responded with a status code in the range of 2xx\n    errorMsg = error.response.data;\n    console.error(errorMsg);\n  } else if (error.request) {\n    // if the request was made and no response was recevied from server\n    errorMsg = error.request;\n    console.error(errorMsg);\n  } else {\n    // if something else happened while making the request\n    errorMsg = error.message;\n    console.error(errorMsg);\n  }\n\n  return errorMsg;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (catchErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYXRjaEVycm9ycy5qcz9jNTQ1Il0sIm5hbWVzIjpbImNhdGNoRXJyb3JzIiwiZXJyb3IiLCJlcnJvck1zZyIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsR0FBR0MsS0FBSyxJQUFJO0FBQzNCLE1BQUlDLFFBQUo7O0FBRUEsTUFBSUQsS0FBSyxDQUFDRSxRQUFWLEVBQW9CO0FBQ2xCO0FBRUFELFlBQVEsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLElBQTFCO0FBRUFDLFdBQU8sQ0FBQ0osS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FORCxNQU1PLElBQUlELEtBQUssQ0FBQ0ssT0FBVixFQUFtQjtBQUN4QjtBQUNBSixZQUFRLEdBQUdELEtBQUssQ0FBQ0ssT0FBakI7QUFFQUQsV0FBTyxDQUFDSixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdELEtBQUssQ0FBQ00sT0FBakI7QUFFQUYsV0FBTyxDQUFDSixLQUFSLENBQWNDLFFBQWQ7QUFDRDs7QUFDRCxTQUFPQSxRQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBLCtEQUFlRixXQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY2F0Y2hFcnJvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/catchErrors.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;