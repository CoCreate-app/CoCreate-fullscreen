(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fullscreen"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["fullscreen"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-fullscreen/src/CoCreate-fullscreen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-fullscreen/src/CoCreate-fullscreen.js":
/*!*****************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-fullscreen/src/CoCreate-fullscreen.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/*!\n* https://cocreate.app\n* https://github.com/CoCreate-app/Fullscreen_Toggle\n* Released under the MIT license\n* https://github.com/CoCreate-app/Fullscreen_Toggle/blob/master/LICENSE\n*/\nvar requestFullscreen = function requestFullscreen(ele) {\n  if (!document.fullscreenElement) {\n    if (ele.requestFullscreen) {\n      ele.requestFullscreen();\n    } else if (ele.webkitRequestFullscreen) {\n      ele.webkitRequestFullscreen();\n    } else if (ele.mozRequestFullScreen) {\n      ele.mozRequestFullScreen();\n    } else if (ele.msRequestFullscreen) {\n      ele.msRequestFullscreen();\n    } else {\n      console.log('Fullscreen API is not supported.');\n    }\n  }\n};\n\nvar exitFullscreen = function exitFullscreen(item) {\n  if (document.fullscreenElement) {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    } else if (document.webkitExitFullscreen) {\n      document.webkitExitFullscreen();\n    } else if (document.mozCancelFullScreen) {\n      document.mozCancelFullScreen();\n    } else if (document.msExitFullscreen) {\n      document.msExitFullscreen();\n    } else {\n      console.log('Fullscreen API is not supported.');\n    } //FullscreenItem(item)\n\n  }\n};\n\nvar FullscreenItem = function FullscreenItem(item) {\n  //item = event.target;\n  var target = item.getAttribute(\"target\") == null ? document.documentElement : document.querySelector(item.getAttribute(\"target\")); //console.log('target => ',target)\n\n  requestFullscreen(target);\n};\n\nBoolean.parse = function (str) {\n  switch (str.toLowerCase()) {\n    case \"true\":\n      return true;\n\n    case \"false\":\n      return false;\n\n    default:\n      return false;\n    //throw new Error (\"Boolean.parse: Cannot convert string to boolean.\");\n  }\n};\n\nvar list_fs_target_button = document.querySelectorAll('[data-fullscreen]');\ndocument.addEventListener('fullscreenchange', function (event) {\n  //list_fs_target_button_true = document.querySelectorAll('[data-fullscreen=\"true\"]');\n  var list_fs_target_button_true = document.querySelectorAll('[data-fullscreen=\"true\"]');\n  list_fs_target_button_true.forEach(function (elem) {\n    //elem.dataset['fullscreen'] = document.fullscreenElement!=null\n    console.log(\"evetn \", document.fullscreenElement);\n\n    if (document.fullscreenElement == null) {\n      console.log(\"LOG fullscreen\");\n      elem.dataset['fullscreen'] = false;\n    }\n  });\n});\n\nvar _iterator = _createForOfIteratorHelper(list_fs_target_button),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var item = _step.value;\n    item.addEventListener(\"click\", function (event) {\n      console.log(\"primero \", item.dataset['fullscreen']);\n      if (document.fullscreenElement == null) item.dataset['fullscreen'] = false;\n      var action = typeof item.dataset['fullscreen'] != 'undefined' ? Boolean.parse(item.dataset['fullscreen']) : false;\n      console.log(\"action \", action);\n      /*list_fs_target_button.forEach(elem =>{\n        elem.dataset['fullscreen'] = !action\n      })*/\n\n      item.dataset['fullscreen'] = !action;\n      console.log(\"primero \", item.dataset['fullscreen']);\n\n      if (!action) {\n        FullscreenItem(item);\n      } else {\n        exitFullscreen(item);\n      }\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5mdWxsc2NyZWVuLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZnVsbHNjcmVlbi9zcmMvQ29DcmVhdGUtZnVsbHNjcmVlbi5qcz84ODZkIl0sIm5hbWVzIjpbInJlcXVlc3RGdWxsc2NyZWVuIiwiZWxlIiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuRWxlbWVudCIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiY29uc29sZSIsImxvZyIsImV4aXRGdWxsc2NyZWVuIiwiaXRlbSIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibW96Q2FuY2VsRnVsbFNjcmVlbiIsIm1zRXhpdEZ1bGxzY3JlZW4iLCJGdWxsc2NyZWVuSXRlbSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImRvY3VtZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJCb29sZWFuIiwicGFyc2UiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsImxpc3RfZnNfdGFyZ2V0X2J1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJsaXN0X2ZzX3RhcmdldF9idXR0b25fdHJ1ZSIsImZvckVhY2giLCJlbGVtIiwiZGF0YXNldCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFVQyxHQUFWLEVBQWU7QUFDbkMsTUFBRyxDQUFDQyxRQUFRLENBQUNDLGlCQUFiLEVBQStCO0FBQzdCLFFBQUlGLEdBQUcsQ0FBQ0QsaUJBQVIsRUFBMkI7QUFDekJDLFNBQUcsQ0FBQ0QsaUJBQUo7QUFDRCxLQUZELE1BRU8sSUFBSUMsR0FBRyxDQUFDRyx1QkFBUixFQUFpQztBQUN0Q0gsU0FBRyxDQUFDRyx1QkFBSjtBQUNELEtBRk0s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LENBQUNvQixPQUFMLENBQWEsWUFBYixDQUFQLElBQXFDLFdBQXJDLEdBQW1EWCxPQUFPLENBQUNDLEtBQVIsQ0FBY1YsSUFBSSxDQUFDb0IsT0FBTCxDQUFhLFlBQWIsQ0FBZCxDQUFuRCxHQUErRixLQUE1RztBQUNBdkIsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQnVCLE1BQXRCO0FBQ0E7QUFDUjtBQUNBOztBQUNRckIsVUFBSSxDQUFDb0IsT0FBTCxDQUFhLFlBQWIsSUFBNkIsQ0FBQ0MsTUFBOUI7QUFDQXhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBdUJFLElBQUksQ0FBQ29CLE9BQUwsQ0FBYSxZQUFiLENBQXZCOztBQUNBLFVBQUcsQ0FBQ0MsTUFBSixFQUFXO0FBQ1RqQixzQkFBYyxDQUFDSixJQUFELENBQWQ7QUFDRCxPQUZELE1BR0k7QUFDRkQsc0JBQWMsQ0FBQ0MsSUFBRCxDQUFkO0FBQ0Q7QUFDRixLQWpCRDs7O0FBREosc0RBQXdDO0FBQUE7QUFtQnZDIiwiZmlsZSI6Ii4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZnVsbHNjcmVlbi9zcmMvQ29DcmVhdGUtZnVsbHNjcmVlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlx0LyohXG4gKiBodHRwczovL2NvY3JlYXRlLmFwcFxuICogaHR0cHM6Ly9naXRodWIuY29tL0NvQ3JlYXRlLWFwcC9GdWxsc2NyZWVuX1RvZ2dsZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29DcmVhdGUtYXBwL0Z1bGxzY3JlZW5fVG9nZ2xlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1x0XG5cbnZhciByZXF1ZXN0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uIChlbGUpIHtcbiAgICBpZighZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpe1xuICAgICAgaWYgKGVsZS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICBlbGUucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGUubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZWxlLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZS5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBBUEkgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICB9XG59O1xuICB2YXIgZXhpdEZ1bGxzY3JlZW4gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KXtcbiAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBBUEkgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICAgIC8vRnVsbHNjcmVlbkl0ZW0oaXRlbSlcbiAgICB9XG4gIH07XG4gIHZhciBGdWxsc2NyZWVuSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgLy9pdGVtID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciB0YXJnZXQgPSBpdGVtLmdldEF0dHJpYnV0ZShcInRhcmdldFwiKSA9PSBudWxsID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLmdldEF0dHJpYnV0ZShcInRhcmdldFwiKSlcbiAgICAvL2NvbnNvbGUubG9nKCd0YXJnZXQgPT4gJyx0YXJnZXQpXG4gICAgcmVxdWVzdEZ1bGxzY3JlZW4odGFyZ2V0KTtcbiAgfVxuICBcbiAgQm9vbGVhbi5wYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgc3dpdGNoIChzdHIudG9Mb3dlckNhc2UgKCkpIHtcbiAgICBjYXNlIFwidHJ1ZVwiOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSBcImZhbHNlXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vdGhyb3cgbmV3IEVycm9yIChcIkJvb2xlYW4ucGFyc2U6IENhbm5vdCBjb252ZXJ0IHN0cmluZyB0byBib29sZWFuLlwiKTtcbiAgfVxufTtcbiAgXG4gIGxldCBsaXN0X2ZzX3RhcmdldF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mdWxsc2NyZWVuXScpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4ge1xuICAgIC8vbGlzdF9mc190YXJnZXRfYnV0dG9uX3RydWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mdWxsc2NyZWVuPVwidHJ1ZVwiXScpO1xuICAgIGxldCBsaXN0X2ZzX3RhcmdldF9idXR0b25fdHJ1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZ1bGxzY3JlZW49XCJ0cnVlXCJdJyk7XG4gICAgbGlzdF9mc190YXJnZXRfYnV0dG9uX3RydWUuZm9yRWFjaChlbGVtID0+e1xuICAgICAgICAgIC8vZWxlbS5kYXRhc2V0WydmdWxsc2NyZWVuJ10gPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCE9bnVsbFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZldG4gXCIsZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpXG4gICAgICAgICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQ9PW51bGwpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTE9HIGZ1bGxzY3JlZW5cIilcbiAgICAgICAgICAgIGVsZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgZm9yIChsZXQgaXRlbSBvZiBsaXN0X2ZzX3RhcmdldF9idXR0b24pIHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpbWVybyBcIixpdGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSlcbiAgICAgICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQ9PW51bGwpXG4gICAgICAgICAgaXRlbS5kYXRhc2V0WydmdWxsc2NyZWVuJ10gPSBmYWxzZVxuICAgICAgICB2YXIgYWN0aW9uID0gdHlwZW9mIGl0ZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddICE9ICd1bmRlZmluZWQnID8gQm9vbGVhbi5wYXJzZShpdGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSkgOiBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbiBcIixhY3Rpb24pXG4gICAgICAgIC8qbGlzdF9mc190YXJnZXRfYnV0dG9uLmZvckVhY2goZWxlbSA9PntcbiAgICAgICAgICBlbGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSA9ICFhY3Rpb25cbiAgICAgICAgfSkqL1xuICAgICAgICBpdGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSA9ICFhY3Rpb25cbiAgICAgICAgY29uc29sZS5sb2coXCJwcmltZXJvIFwiLGl0ZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddKVxuICAgICAgICBpZighYWN0aW9uKXtcbiAgICAgICAgICBGdWxsc2NyZWVuSXRlbShpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgZXhpdEZ1bGxzY3JlZW4oaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-fullscreen/src/CoCreate-fullscreen.js\n");

/***/ })

/******/ })["default"];
});