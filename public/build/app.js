"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Index */ "./assets/components/Index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./assets/app.css");





var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./assets/components/Index.js":
/*!************************************!*\
  !*** ./assets/components/Index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Index = function Index(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var fetchMovies = function fetchMovies() {
    setLoading(true);
    return fetch('/api/movies').then(function (response) {
      return response.json();
    }).then(function (data) {
      setMovies(data.movies);
      setLoading(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    fetchMovies();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Heading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(MovieList, {
    loading: loading
  }, movies.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(MovieItem, _extends({
      key: key
    }, item));
  })));
};
var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  }, props.children));
};
var Heading = function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, "Movie Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
  }, "Explore the whole collection of movies"));
};
var MovieList = function MovieList(props) {
  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Spinner, {
      size: "xl"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3"
  }, props.children);
};
var MovieItem = function MovieItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
    className: "object-cover w-full h-60 md:h-80",
    src: props.image,
    alt: props.title,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow flex flex-col h-full p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow mb-3 last:mb-0"
  }, props.year || props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "flex justify-between align-middle text-gray-900 text-xs font-medium mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("span", null, props.year), props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Rating.Star, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("span", {
    className: "ml-0.5"
  }, props.rating)) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h3", {
    className: "text-gray-900 text-lg leading-tight font-semibold mb-1"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "text-gray-600 text-sm leading-normal mb-4 last:mb-0"
  }, props.plot.substr(0, 80), "...")), props.wikipedia_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Button, {
    color: "light",
    size: "xs",
    className: "w-full",
    onClick: function onClick() {
      return window.open(props.wikipedia_url, '_blank');
    }
  }, "More") : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./assets/app.css":
/*!************************!*\
  !*** ./assets/app.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-eddf8c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUNvQix3REFBVyxPQUFHLGVBRWZwQiwyREFBQTtJQUFNNkMsU0FBUyxFQUFDO0VBQVEsR0FDckJ0QyxLQUFLLENBQUM4QyxNQUFNLENBQ1IsQ0FDQSxHQUNULElBQUksQ0FFSixHQUNOLElBQUksZUFHUnJELDJEQUFBO0lBQUk2QyxTQUFTLEVBQUM7RUFBd0QsR0FDbkV0QyxLQUFLLENBQUM0QyxLQUFLLENBQ1QsZUFFTG5ELDJEQUFBO0lBQUc2QyxTQUFTLEVBQUM7RUFBcUQsR0FDL0R0QyxLQUFLLENBQUNnRCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FDNUIsQ0FBSSxDQUNBLEVBRUxqRCxLQUFLLENBQUNrRCxhQUFhLGdCQUNoQnpELDJEQUFBLENBQUNtQixtREFBTTtJQUNMdUMsS0FBSyxFQUFDLE9BQU87SUFDYlgsSUFBSSxFQUFDLElBQUk7SUFDVEYsU0FBUyxFQUFDLFFBQVE7SUFDbEJjLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUMsTUFBTSxDQUFDQyxJQUFJLENBQUN0RCxLQUFLLENBQUNrRCxhQUFhLEVBQUUsUUFBUSxDQUFDO0lBQUE7RUFBQyxHQUMzRCxNQUVELENBQVMsR0FDVCxJQUFJLENBRUosQ0FDRjtBQUVkLENBQUM7QUFFRCxpRUFBZXBELEtBQUs7Ozs7Ozs7Ozs7O0FDcElwQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5jc3M/MWUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXgnO1xuXG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5cbmNvbnN0IEFwcCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxJbmRleCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59O1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFJhdGluZywgU3Bpbm5lciB9IGZyb20gJ2Zsb3diaXRlLXJlYWN0JztcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGZldGNoTW92aWVzID0gKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmZXRjaCgnL2FwaS9tb3ZpZXMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TW92aWVzKGRhdGEubW92aWVzKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoTW92aWVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8SGVhZGluZyAvPlxuXG4gICAgICAgICAgPE1vdmllTGlzdCBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHttb3ZpZXMubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgPE1vdmllSXRlbSBrZXk9e2tleX0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L01vdmllTGlzdD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmNvbnN0IEhlYWRpbmcgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1zbSB0ZXh0LWNlbnRlciBtYi04IGxnOm1iLTE2XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIE1vdmllIENvbGxlY3Rpb25cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGxnOm1iLTE2IHNtOnRleHQteGwgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICBFeHBsb3JlIHRoZSB3aG9sZSBjb2xsZWN0aW9uIG9mIG1vdmllc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IE1vdmllTGlzdCA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdhcC15LTggeGw6Z3JpZC1jb2xzLTYgbGc6Z3JpZC1jb2xzLTQgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBNb3ZpZUl0ZW0gPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1sZyBzaGFkb3ctbWQgbGc6bWF4LXctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLTYwIG1kOmgtODBcIlxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGZsZXggZmxleC1jb2wgaC1mdWxsIHAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IG1iLTMgbGFzdDptYi0wXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy55ZWFyIHx8IHByb3BzLnJhdGluZ1xuICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTkwMCB0ZXh0LXhzIGZvbnQtbWVkaXVtIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnllYXJ9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IDxSYXRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmcuU3RhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmF0aW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtbGcgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkIG1iLTFcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG1iLTQgbGFzdDptYi0wXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLnBsb3Quc3Vic3RyKDAsIDgwKX0uLi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtwcm9wcy53aWtpcGVkaWFfdXJsXG4gICAgICAgICAgICAgID8gPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHByb3BzLndpa2lwZWRpYV91cmwsICdfYmxhbmsnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBNb3JlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkluZGV4IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU3RyaWN0TW9kZSIsInBhdGgiLCJlbGVtZW50Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJSYXRpbmciLCJTcGlubmVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibW92aWVzIiwic2V0TW92aWVzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoTW92aWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIkxheW91dCIsIkhlYWRpbmciLCJNb3ZpZUxpc3QiLCJtYXAiLCJpdGVtIiwia2V5IiwiTW92aWVJdGVtIiwiX2V4dGVuZHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInNpemUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwieWVhciIsInJhdGluZyIsIlN0YXIiLCJwbG90Iiwic3Vic3RyIiwid2lraXBlZGlhX3VybCIsImNvbG9yIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9