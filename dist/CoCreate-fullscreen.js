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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-fullscreen/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-fullscreen/src/index.js":
/*!***************************************************************!*\
  !*** ../CoCreate-components/CoCreate-fullscreen/src/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*!\n* https://cocreate.app\n* https://github.com/CoCreate-app/Fullscreen_Toggle\n* Released under the MIT license\n* https://github.com/CoCreate-app/Fullscreen_Toggle/blob/master/LICENSE\n*/\nvar requestFullscreen = function (ele) {\n  if (!document.fullscreenElement) {\n    if (ele.requestFullscreen) {\n      ele.requestFullscreen();\n    } else if (ele.webkitRequestFullscreen) {\n      ele.webkitRequestFullscreen();\n    } else if (ele.mozRequestFullScreen) {\n      ele.mozRequestFullScreen();\n    } else if (ele.msRequestFullscreen) {\n      ele.msRequestFullscreen();\n    } else {\n      console.log('Fullscreen API is not supported.');\n    }\n  }\n};\n\nvar exitFullscreen = function (item) {\n  if (document.fullscreenElement) {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    } else if (document.webkitExitFullscreen) {\n      document.webkitExitFullscreen();\n    } else if (document.mozCancelFullScreen) {\n      document.mozCancelFullScreen();\n    } else if (document.msExitFullscreen) {\n      document.msExitFullscreen();\n    } else {\n      console.log('Fullscreen API is not supported.');\n    } //FullscreenItem(item)\n\n  }\n};\n\nvar FullscreenItem = function (item) {\n  //item = event.target;\n  var target = item.getAttribute(\"target\") == null ? document.documentElement : document.querySelector(item.getAttribute(\"target\")); //console.log('target => ',target)\n\n  requestFullscreen(target);\n};\n\nBoolean.parse = function (str) {\n  switch (str.toLowerCase()) {\n    case \"true\":\n      return true;\n\n    case \"false\":\n      return false;\n\n    default:\n      return false;\n    //throw new Error (\"Boolean.parse: Cannot convert string to boolean.\");\n  }\n};\n\nlet list_fs_target_button = document.querySelectorAll('[data-fullscreen]');\ndocument.addEventListener('fullscreenchange', event => {\n  //list_fs_target_button_true = document.querySelectorAll('[data-fullscreen=\"true\"]');\n  let list_fs_target_button_true = document.querySelectorAll('[data-fullscreen=\"true\"]');\n  list_fs_target_button_true.forEach(elem => {\n    //elem.dataset['fullscreen'] = document.fullscreenElement!=null\n    console.log(\"evetn \", document.fullscreenElement);\n\n    if (document.fullscreenElement == null) {\n      console.log(\"LOG fullscreen\");\n      elem.dataset['fullscreen'] = false;\n    }\n  });\n});\n\nfor (let item of list_fs_target_button) {\n  item.addEventListener(\"click\", function (event) {\n    console.log(\"primero \", item.dataset['fullscreen']);\n    if (document.fullscreenElement == null) item.dataset['fullscreen'] = false;\n    var action = typeof item.dataset['fullscreen'] != 'undefined' ? Boolean.parse(item.dataset['fullscreen']) : false;\n    console.log(\"action \", action);\n    /*list_fs_target_button.forEach(elem =>{\n      elem.dataset['fullscreen'] = !action\n    })*/\n\n    item.dataset['fullscreen'] = !action;\n    console.log(\"primero \", item.dataset['fullscreen']);\n\n    if (!action) {\n      FullscreenItem(item);\n    } else {\n      exitFullscreen(item);\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5mdWxsc2NyZWVuLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtZnVsbHNjcmVlbi9zcmMvaW5kZXguanM/MTUyNyJdLCJuYW1lcyI6WyJyZXF1ZXN0RnVsbHNjcmVlbiIsImVsZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImNvbnNvbGUiLCJsb2ciLCJleGl0RnVsbHNjcmVlbiIsIml0ZW0iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJtc0V4aXRGdWxsc2NyZWVuIiwiRnVsbHNjcmVlbkl0ZW0iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJkb2N1bWVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQm9vbGVhbiIsInBhcnNlIiwic3RyIiwidG9Mb3dlckNhc2UiLCJsaXN0X2ZzX3RhcmdldF9idXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibGlzdF9mc190YXJnZXRfYnV0dG9uX3RydWUiLCJmb3JFYWNoIiwiZWxlbSIsImRhdGFzZXQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7O0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsaUJBQWlCLEdBQUcsVUFBVUMsR0FBVixFQUFlO0FBQ25DLE1BQUcsQ0FBQ0MsUUFBUSxDQUFDQyxpQkFBYixFQUErQjtBQUM3QixRQUFJRixHQUFHLENBQUNELGlCQUFSLEVBQTJCO0FBQ3pCQyxTQUFHLENBQUNELGlCQUFKO0FBQ0QsS0FGRCxNQUVPLElBQUlDLEdBQUcsQ0FBQ0csdUJBQVIsRUFBaUM7QUFDdENILFNBQUcsQ0FBQ0csdUJBQUo7QUFDRCxLQUZNLE1BRUEsSUFBSUgsR0FBRyxDQUFDSSxvQkFBUixFQUE4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QUFPLENBQUNDLEtBQVIsQ0FBY1YsSUFBSSxDQUFDb0IsT0FBTCxDQUFhLFlBQWIsQ0FBZCxDQUFuRCxHQUErRixLQUE1RztBQUNBdkIsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQnVCLE1BQXRCO0FBQ0E7QUFDUjtBQUNBOztBQUNRckIsUUFBSSxDQUFDb0IsT0FBTCxDQUFhLFlBQWIsSUFBNkIsQ0FBQ0MsTUFBOUI7QUFDQXhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBdUJFLElBQUksQ0FBQ29CLE9BQUwsQ0FBYSxZQUFiLENBQXZCOztBQUNBLFFBQUcsQ0FBQ0MsTUFBSixFQUFXO0FBQ1RqQixvQkFBYyxDQUFDSixJQUFELENBQWQ7QUFDRCxLQUZELE1BR0k7QUFDRkQsb0JBQWMsQ0FBQ0MsSUFBRCxDQUFkO0FBQ0Q7QUFDRixHQWpCRDtBQWtCSCIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWZ1bGxzY3JlZW4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiFcbiAqIGh0dHBzOi8vY29jcmVhdGUuYXBwXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29DcmVhdGUtYXBwL0Z1bGxzY3JlZW5fVG9nZ2xlXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Db0NyZWF0ZS1hcHAvRnVsbHNjcmVlbl9Ub2dnbGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXHRcblxudmFyIHJlcXVlc3RGdWxsc2NyZWVuID0gZnVuY3Rpb24gKGVsZSkge1xuICAgIGlmKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCl7XG4gICAgICBpZiAoZWxlLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGVsZS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICBlbGUubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZWxlLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIEFQSSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfVxuICAgIH1cbn07XG4gIHZhciBleGl0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpe1xuICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIEFQSSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfVxuICAgICAgLy9GdWxsc2NyZWVuSXRlbShpdGVtKVxuICAgIH1cbiAgfTtcbiAgdmFyIEZ1bGxzY3JlZW5JdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAvL2l0ZW0gPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHRhcmdldCA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpID09IG51bGwgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0uZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpKVxuICAgIC8vY29uc29sZS5sb2coJ3RhcmdldCA9PiAnLHRhcmdldClcbiAgICByZXF1ZXN0RnVsbHNjcmVlbih0YXJnZXQpO1xuICB9XG4gIFxuICBCb29sZWFuLnBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICBzd2l0Y2ggKHN0ci50b0xvd2VyQ2FzZSAoKSkge1xuICAgIGNhc2UgXCJ0cnVlXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFwiZmFsc2VcIjpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy90aHJvdyBuZXcgRXJyb3IgKFwiQm9vbGVhbi5wYXJzZTogQ2Fubm90IGNvbnZlcnQgc3RyaW5nIHRvIGJvb2xlYW4uXCIpO1xuICB9XG59O1xuICBcbiAgbGV0IGxpc3RfZnNfdGFyZ2V0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZ1bGxzY3JlZW5dJyk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgLy9saXN0X2ZzX3RhcmdldF9idXR0b25fdHJ1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZ1bGxzY3JlZW49XCJ0cnVlXCJdJyk7XG4gICAgbGV0IGxpc3RfZnNfdGFyZ2V0X2J1dHRvbl90cnVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZnVsbHNjcmVlbj1cInRydWVcIl0nKTtcbiAgICBsaXN0X2ZzX3RhcmdldF9idXR0b25fdHJ1ZS5mb3JFYWNoKGVsZW0gPT57XG4gICAgICAgICAgLy9lbGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IT1udWxsXG4gICAgICAgICAgY29uc29sZS5sb2coXCJldmV0biBcIixkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudClcbiAgICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudD09bnVsbCl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJMT0cgZnVsbHNjcmVlblwiKVxuICAgICAgICAgICAgZWxlbS5kYXRhc2V0WydmdWxsc2NyZWVuJ10gPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICBmb3IgKGxldCBpdGVtIG9mIGxpc3RfZnNfdGFyZ2V0X2J1dHRvbikge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmltZXJvIFwiLGl0ZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddKVxuICAgICAgICBpZihkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudD09bnVsbClcbiAgICAgICAgICBpdGVtLmRhdGFzZXRbJ2Z1bGxzY3JlZW4nXSA9IGZhbHNlXG4gICAgICAgIHZhciBhY3Rpb24gPSB0eXBlb2YgaXRlbS5kYXRhc2V0WydmdWxsc2NyZWVuJ10gIT0gJ3VuZGVmaW5lZCcgPyBCb29sZWFuLnBhcnNlKGl0ZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddKSA6IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIFwiLGFjdGlvbilcbiAgICAgICAgLypsaXN0X2ZzX3RhcmdldF9idXR0b24uZm9yRWFjaChlbGVtID0+e1xuICAgICAgICAgIGVsZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddID0gIWFjdGlvblxuICAgICAgICB9KSovXG4gICAgICAgIGl0ZW0uZGF0YXNldFsnZnVsbHNjcmVlbiddID0gIWFjdGlvblxuICAgICAgICBjb25zb2xlLmxvZyhcInByaW1lcm8gXCIsaXRlbS5kYXRhc2V0WydmdWxsc2NyZWVuJ10pXG4gICAgICAgIGlmKCFhY3Rpb24pe1xuICAgICAgICAgIEZ1bGxzY3JlZW5JdGVtKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBleGl0RnVsbHNjcmVlbihpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-fullscreen/src/index.js\n");

/***/ })

/******/ })["default"];
});