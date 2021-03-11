(self["webpackChunkwallace_corporation"] = self["webpackChunkwallace_corporation"] || []).push([["client_src_components_reviews_Reviews_jsx"],{

/***/ "./node_modules/@iconify-icons/clarity/flag-solid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iconify-icons/clarity/flag-solid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
	"body": "<path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M5.92 2a1 1 0 0 0-1 1v30a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z\" fill=\"currentColor\"/><path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M30.5 3.82a1 1 0 0 0-1 0a14.9 14.9 0 0 1-6.13 1.16a13.11 13.11 0 0 1-5.18-1.49A12.78 12.78 0 0 0 13.2 2a10.86 10.86 0 0 0-4.2.85V20a8.8 8.8 0 0 1 4.25-1.08a11.22 11.22 0 0 1 4.2 1.28a14.84 14.84 0 0 0 6 1.66a16.79 16.79 0 0 0 7-1.37a1 1 0 0 0 .55-.89V4.67a1 1 0 0 0-.5-.85z\" fill=\"currentColor\"/>",
	"width": 36,
	"height": 36
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./client/src/components/ExpandedPhotos.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/ExpandedPhotos.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styleComponents/App.module.css */ "./client/src/styleComponents/App.module.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ExpandedPhotos = function ExpandedPhotos(_ref) {
  var photo = _ref.photo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return photo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: expanded ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.overlayPhoto : ''
  }, !expanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    role: "presentation",
    src: photo.url ? photo.url : photo,
    alt: "review",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.imgThumbnail,
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    onKeyDown: function onKeyDown() {
      return setExpanded(!expanded);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    role: "presentation",
    src: photo.url ? photo.url : photo,
    alt: "review",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.photo,
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    onKeyDown: function onKeyDown() {
      return setExpanded(!expanded);
    }
  })) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandedPhotos);

/***/ }),

/***/ "./client/src/components/Helpful.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/Helpful.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styleComponents/App.module.css */ "./client/src/styleComponents/App.module.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_icons_clarity_flag_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify-icons/clarity/flag-solid */ "./node_modules/@iconify-icons/clarity/flag-solid.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Helpful = function Helpful(props) {
  var helpfulness = props.helpfulness;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(helpfulness),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Report'),
      _useState4 = _slicedToArray(_useState3, 2),
      reported = _useState4[0],
      setReported = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReported = _useState6[0],
      setIsReported = _useState6[1];

  var handleCount = function handleCount(e) {
    setCount(helpfulness + 1);

    if (props.review_id) {
      var review_id = props.review_id;
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/reviews/".concat(review_id, "/helpful")).then(function (status) {
        return console.log(status.status);
      })["catch"](function (err) {
        return console.log(err);
      });
    } else if (props.question_id) {
      var question_id = props.question_id;
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/qa/questions/".concat(question_id, "/helpful")).then(function (status) {
        return console.log(status.status);
      })["catch"](function (err) {
        return console.log(err);
      });
    } else if (props.answer_id) {
      var answer_id = props.answer_id;
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/qa/answers/".concat(answer_id, "/helpful")).then(function (status) {
        return console.log(status.status);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  };

  var report = function report() {
    setReported('Reported');
    setIsReported(true);

    if (props.answer_id) {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/qa/answers/".concat(props.answer_id, "/report")).then(function () {
        return console.log(status.status);
      })["catch"](console.log);
    } else if (props.review_id) {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/reviews/".concat(props.review_id, "/report")).then(function () {
        return console.log(status.status);
      })["catch"](console.log);
    } else {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/qa/questions/".concat(props.question_id, "/report")).then(function () {
        return console.log(status.status);
      })["catch"](console.log);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.helpful
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "helpfulText",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.helpful
  }, "Was this helpful?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "helpful-button",
    type: "submit",
    onClick: handleCount,
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.helpfulButton,
    value: "yes"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "helpful-count",
    className: "".concat(_styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.helpful, " ").concat(_styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.helpfulCount)
  }, "(", count, ")", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "report-button",
    className: isReported ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.reportedTrue : _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.reported,
    onClick: report,
    type: "submit"
  }, reported), isReported ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_1__.default.flag,
    icon: _iconify_icons_clarity_flag_solid__WEBPACK_IMPORTED_MODULE_4__.default
  }) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helpful);

/***/ }),

/***/ "./client/src/components/reviews/Characteristics.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/reviews/Characteristics.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Characteristics = function Characteristics(_ref) {
  var characteristics = _ref.characteristics,
      charObject = _ref.charObject,
      setReview = _ref.setReview,
      review = _ref.review;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      chars = _useState2[0],
      setChars = _useState2[1];

  var handleCharacteristics = function handleCharacteristics(e) {
    var value = e.target.value;
    var arr = value.split('-');
    var rating = arr[0];
    var id = arr[1];
    var newCharacteristics = chars;
    newCharacteristics[id] = Number(rating);
    setReview(_objectSpread(_objectSpread({}, review), {}, {
      characteristics: newCharacteristics
    }));
  };

  return characteristics ? Object.entries(characteristics).map(function (x) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: x[1].id,
      onChange: handleCharacteristics,
      "data-testid": "characteristic-map"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, x[0], " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 25%)',
        fontSize: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridColumn: '1/2'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3',
        justifySelf: 'center'
      },
      htmlFor: "one"
    }, charObject[x[0]][1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "1-".concat(x[1].id),
      style: {
        gridRow: '1/2',
        justifySelf: 'center'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridColumn: '2/3'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3',
        justifySelf: 'center'
      },
      htmlFor: "two"
    }, charObject[x[0]][2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "2-".concat(x[1].id),
      style: {
        gridRow: '1/2',
        justifySelf: 'center'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridColumn: '3/4'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3',
        justifySelf: 'center'
      },
      htmlFor: "three"
    }, charObject[x[0]][3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "3-".concat(x[1].id),
      style: {
        gridRow: '1/2',
        justifySelf: 'center'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridColumn: '4/5'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3',
        justifySelf: 'center'
      },
      htmlFor: "four"
    }, charObject[x[0]][4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "4-".concat(x[1].id),
      style: {
        gridRow: '1/2',
        justifySelf: 'center'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridColumn: '5/6'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3',
        justifySelf: 'center'
      },
      htmlFor: "five"
    }, charObject[x[0]][5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "5-".concat(x[1].id),
      style: {
        gridRow: '1/2',
        justifySelf: 'center'
      }
    }))));
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Characteristics);

/***/ }),

/***/ "./client/src/components/reviews/InteractiveStars.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/reviews/InteractiveStars.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styleComponents/Reviews.module.css */ "./client/src/styleComponents/Reviews.module.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var InteractiveStars = function InteractiveStars(_ref) {
  var review = _ref.review,
      setReview = _ref.setReview;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var descriptionObj = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  var handleValue = function handleValue(index) {
    setValue(descriptionObj[index]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    required: "required"
  }, _toConsumableArray(Array(5)).map(function (star, index) {
    index += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      key: index,
      className: "".concat(index <= (hover || rating) ? _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.on : _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.off, " ").concat(_styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.button),
      onClick: function onClick() {
        setRating(index);
        handleValue(index);
      },
      onMouseEnter: function onMouseEnter() {
        setRating(rating);
        setReview(_objectSpread(_objectSpread({}, review), {}, {
          rating: index
        }));
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(rating);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-testid": "interactive-stars"
    }, "\u2605"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.comment
  }, value));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveStars);

/***/ }),

/***/ "./client/src/components/reviews/ReviewModal.jsx":
/*!*******************************************************!*\
  !*** ./client/src/components/reviews/ReviewModal.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleComponents/Reviews.module.css */ "./client/src/styleComponents/Reviews.module.css");
/* harmony import */ var _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styleComponents/App.module.css */ "./client/src/styleComponents/App.module.css");
/* harmony import */ var _Characteristics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Characteristics */ "./client/src/components/reviews/Characteristics.jsx");
/* harmony import */ var _InteractiveStars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InteractiveStars */ "./client/src/components/reviews/InteractiveStars.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ReviewsModal = function ReviewsModal(_ref) {
  var productId = _ref.productId,
      onClose = _ref.onClose,
      open = _ref.open,
      getReviews = _ref.getReviews,
      name = _ref.name,
      metaReviews = _ref.metaReviews,
      charObject = _ref.charObject;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    product_id: productId,
    rating: '',
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      review = _useState2[0],
      setReview = _useState2[1];

  console.log(productId);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      thumbnails = _useState4[0],
      setThumbnails = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: '',
    photoSize: '',
    missingFields: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50),
      _useState8 = _slicedToArray(_useState7, 2),
      characterCount = _useState8[0],
      setCharacterCount = _useState8[1];

  var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  var toBase64 = function toBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var finalReview = _objectSpread({}, review);

    var promises = []; // if (!validEmailRegex.test(finalReview.email)) {
    //   setError({ ...error, email: '*You must enter a valid email' });
    //   return;
    // }
    // if (finalReview.body.length < 50 || finalReview.rating === '' || finalReview.recommend === '' || finalReview.name === '' || Object.keys(finalReview.characteristics) !== Object.keys(metaReviews.characteristics)) {
    //   setError({ ...error, missingFields: '*One or more mandatory fields is missing' });
    // }

    if (finalReview.photos.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/reviews', finalReview).then(function (data) {
        return console.log('1st: ', data);
      }).then(function () {
        return getReviews(productId);
      }).then(function () {
        return onClose();
      })["catch"](function (err) {
        return console.log(err);
      });
    } else {
      finalReview.photos.map(function (photo) {
        if (photo.size > 100000) {
          setError(_objectSpread(_objectSpread({}, error), {}, {
            photoSize: '*The images selected are invalid or unable to be uploaded'
          }));
          return;
        }

        var payload = {
          name: photo.name,
          data: ''
        };
        var promise = toBase64(photo).then(function (result) {
          return payload.data = result.split(',')[1];
        }).then(function () {
          return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/upload_images', payload);
        }).then(function (_ref2) {
          var data = _ref2.data;
          return data;
        })["catch"](console.log);
        promises.push(promise);
        Promise.all(promises).then(function (results) {
          finalReview.photos = results;
        })["catch"](console.log);
      }).then(function () {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/reviews', finalReview);
      }).then(function (data) {
        return console.log('2st: ', data);
      }).then(function () {
        return getReviews(productId);
      }).then(function () {
        return onClose();
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  };

  var handleCountChange = function handleCountChange(e) {
    var value = e.target.value;
    setCharacterCount(50 - value.length);
  };

  var handleChange = function handleChange(e) {
    if (review.photos.length < 5) {
      setReview(_objectSpread(_objectSpread({}, review), {}, {
        photos: [].concat(_toConsumableArray(review.photos), [e.target.files[0]])
      }));
      setThumbnails([].concat(_toConsumableArray(thumbnails), [URL.createObjectURL(e.target.files[0])]));
    }
  };

  return metaReviews && review && review.photos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      maxHeight: '100%'
    },
    role: "presentation",
    onClick: function onClick() {
      onClose();
    },
    className: open ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.overlay : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
    },
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "About the ", name, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    "data-testid": "review-modal",
    role: "presentation",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.closeModal,
    onClick: function onClick() {
      onClose();
    }
  }, "x")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: function onSubmit(e) {
      handleSubmit(e);
    },
    action: "",
    encType: "multipart/form-data",
    style: {
      fontSize: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    style: {
      margin: '5px'
    }
  }, "Overall Rating: *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.starRating
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_InteractiveStars__WEBPACK_IMPORTED_MODULE_5__.default, {
    review: review,
    setReview: setReview
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Would you recommend this product? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "radio",
    id: "Yes",
    name: "recommend",
    onClick: function onClick() {
      return setReview(_objectSpread(_objectSpread({}, review), {}, {
        recommend: true
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "Yes"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "radio",
    id: "No",
    name: "recommend",
    onClick: function onClick() {
      return setReview(_objectSpread(_objectSpread({}, review), {}, {
        recommend: false
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "No"
  }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Characteristics__WEBPACK_IMPORTED_MODULE_4__.default, {
    characteristics: metaReviews.characteristics,
    charObject: charObject,
    setReview: setReview,
    review: review
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Review Title:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    onChange: function onChange(e) {
      return setReview(_objectSpread(_objectSpread({}, review), {}, {
        summary: e.target.value
      }));
    },
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalInput,
    maxLength: "60",
    placeholder: "Example: Best purchase ever!",
    type: "text",
    style: {
      fontSize: '12px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Review Body: *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    required: "required",
    onChange: function onChange(e) {
      setReview(_objectSpread(_objectSpread({}, review), {}, {
        body: e.target.value
      }));
      handleCountChange(e);
    },
    minLength: "50",
    maxLength: "1000",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.qInput,
    placeholder: "Why did you like the product or not?",
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.comment
  }, characterCount <= 0 ? 'Minimum Characters Reached' : "Minimum required characters left: ".concat(characterCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "What is your nickname? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    required: "required",
    onChange: function onChange(e) {
      return setReview(_objectSpread(_objectSpread({}, review), {}, {
        name: e.target.value
      }));
    },
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalInput,
    maxLength: "60",
    type: "text",
    placeholder: "Example: jackson11!",
    style: {
      fontSize: '12px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, review.name.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "What is your email? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    required: "required",
    onChange: function onChange(e) {
      return setReview(_objectSpread(_objectSpread({}, review), {}, {
        email: e.target.value
      }));
    },
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalInput,
    maxLength: "60",
    type: "text",
    placeholder: "Example: jackson11@email.com",
    style: {
      fontSize: '12px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, review.email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, review.photos.length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    value: "",
    onChange: handleChange,
    type: "file"
  }) : null, thumbnails.map(function (photo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      alt: photo,
      key: photo,
      className: "".concat(_styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.imgThumbnail, " ").concat(_styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.reviewPhoto),
      src: photo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_2__.default.comment
  }, "* Mandatory Fields"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, error.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, error.photoSize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, error.missingFields), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalButton
  }, "Submit Review"))))) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsModal);

/***/ }),

/***/ "./client/src/components/reviews/ReviewTemplate.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/reviews/ReviewTemplate.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styleComponents/Reviews.module.css */ "./client/src/styleComponents/Reviews.module.css");
/* harmony import */ var _Helpful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpful */ "./client/src/components/Helpful.jsx");
/* harmony import */ var _ExpandedPhotos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExpandedPhotos */ "./client/src/components/ExpandedPhotos.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ReviewTemplate = function ReviewTemplate(_ref) {
  var review = _ref.review;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.reviewTemplate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StarRating, {
    rating: review.rating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateSummary
  }, review.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateBody,
    style: {
      fontSize: '15px'
    }
  }, review.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateUserDateBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserDateBar, {
    review: review
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateHelpfulReportBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpful__WEBPACK_IMPORTED_MODULE_2__.default, {
    review_id: review.review_id,
    helpfulness: review.helpfulness
  })), review.response ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateResponseFromSeller
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      margin: '0px',
      fontWeight: 'bolder',
      padding: '10px 10px 0 10px',
      fontSize: '15px'
    }
  }, "Response from seller:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      margin: '0px',
      padding: '10px',
      fontSize: '15px'
    }
  }, review.response)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateImages
  }, review.photos.map(function (photo, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExpandedPhotos__WEBPACK_IMPORTED_MODULE_3__.default, {
      photo: photo,
      key: id
    });
  })), review.recommend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateRecommendsBar,
    style: {
      paddingRight: '10px',
      fontSize: '12px'
    }
  }, "\u2713 Yes, I recommend this product") : null));
};

var StarRating = function StarRating(_ref2) {
  var rating = _ref2.rating;
  var starPercentage = rating / 5 * 100;
  var roundedPercentage = Math.round(starPercentage * 5) / 5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.starRating,
    style: {
      justifyContent: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.starRatingTop,
    style: {
      width: roundedPercentage
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.starRatingBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605")));
};

var UserDateBar = function UserDateBar(_ref3) {
  var review = _ref3.review;

  var getDate = function getDate(date) {
    var dateArr = date.slice(0, date.indexOf('T')).split('-');
    var year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  var date = getDate(review.date);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontSize: 10,
      fontStyle: 'italic'
    }
  }, "\u2713 Verified Purchaser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.userDateBar
  }, review.reviewer_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.userDateBar
  }, date));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTemplate);

/***/ }),

/***/ "./client/src/components/reviews/Reviews.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/reviews/Reviews.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RatingBreakdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingBreakdown */ "./client/src/components/reviews/RatingBreakdown.jsx");
/* harmony import */ var _ReviewTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewTemplate */ "./client/src/components/reviews/ReviewTemplate.jsx");
/* harmony import */ var _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styleComponents/Reviews.module.css */ "./client/src/styleComponents/Reviews.module.css");
/* harmony import */ var _ReviewModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReviewModal */ "./client/src/components/reviews/ReviewModal.jsx");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StarRating */ "./client/src/components/StarRating.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Reviews = function Reviews(_ref) {
  var productId = _ref.productId,
      name = _ref.name,
      handleReviewAverage = _ref.handleReviewAverage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedReviews = _useState4[0],
      setDisplayedReviews = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      metaReviews = _useState6[0],
      setMetaReviews = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      expanded = _useState10[0],
      setExpanded = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('relevant'),
      _useState12 = _slicedToArray(_useState11, 2),
      sort = _useState12[0],
      setSort = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('More Reviews'),
      _useState14 = _slicedToArray(_useState13, 2),
      moreButton = _useState14[0],
      setMoreButton = _useState14[1];

  var charObject = {
    Size: {
      1: "A size too small",
      2: "1/2 a size too small",
      3: "Perfect",
      4: "1/2 a size too big",
      5: "A size too wide"
    },
    Width: {
      1: "Too narrow",
      2: "Slightly narrow",
      3: "Perfect",
      4: "Slightly wide",
      5: "Too wide"
    },
    Comfort: {
      1: "Uncomfortable",
      2: "Slightly uncomfortable",
      3: "Ok",
      4: "Comfortable",
      5: "Perfect"
    },
    Quality: {
      1: "Poor",
      2: "Below average",
      3: "What I expected",
      4: "Pretty great",
      5: "Perfect"
    },
    Length: {
      1: "Runs short",
      2: "Runs slightly short",
      3: "Perfect",
      4: "Runs slightly long",
      5: "Runs long"
    },
    Fit: {
      1: "Runs tight",
      2: "Runs slightly tight",
      3: "Perfect",
      4: "Runs slightly long",
      5: "Runs long"
    }
  };

  var getReviews = function getReviews(id) {
    var reviewsURL = "/reviews/sort/".concat(id, "/").concat(sort);
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(reviewsURL).then(function (_ref2) {
      var data = _ref2.data;
      setReviews(data);

      if (expanded) {
        setDisplayedReviews(data);
      } else {
        setDisplayedReviews(data.slice(0, 2));
      }
    })["catch"](console.log);
  };

  var getMetaReviews = function getMetaReviews(id) {
    var metaReviewsURL = "/reviews/meta/".concat(id);
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(metaReviewsURL).then(function (_ref3) {
      var data = _ref3.data;
      setMetaReviews(data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getReviews(productId);
    setExpanded(expanded);
  }, [sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getMetaReviews(productId);
    getReviews(productId);
  }, [productId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    expanded ? setDisplayedReviews(reviews) : setDisplayedReviews(reviews.slice(0, 2));
  }, [expanded]);

  var handleStarFilters = function handleStarFilters(filters) {
    var reviewArray = [];

    if (filters.length === 0) {
      setDisplayedReviews(reviews.slice(0, 2));
    } else {
      filters.map(function (filter) {
        reviews.filter(function (review) {
          if (review.rating === Number(filter)) reviewArray.push(review);
        });
      });
      setDisplayedReviews(reviewArray);
    }
  };

  var handleMoreButton = function handleMoreButton() {
    displayedReviews.length <= 2 ? setMoreButton('More Reviews') : setMoreButton('Show Less Reviews');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handleMoreButton();
  }, [displayedReviews]);
  return metaReviews && reviews && productId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.parentContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.parentBreakdown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingBreakdown__WEBPACK_IMPORTED_MODULE_2__.default, {
    reviews: reviews,
    metaReviews: metaReviews,
    handleStarFilters: handleStarFilters,
    handleReviewAverage: handleReviewAverage,
    charObject: charObject
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.parentHeader,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      alignSelf: 'center',
      paddingLeft: '20px'
    },
    "data-testid": "sort-on-dropdown"
  }, "Sort on:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    onChange: function onChange(e) {
      return setSort(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Relevant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Helpful"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "Newest")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      maxHeight: '800px',
      overflowY: 'scroll'
    },
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.parentIndividualReview
  }, displayedReviews.map(function (review, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewTemplate__WEBPACK_IMPORTED_MODULE_3__.default, {
      review: review,
      key: id
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.parentFooter
  }, reviews.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.footerButton,
    type: "submit",
    onClick: function onClick() {
      setExpanded(!expanded);
    }
  }, moreButton) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_4__.default.footerButton,
    type: "submit",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Add Review  + "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewModal__WEBPACK_IMPORTED_MODULE_5__.default, {
    productId: productId,
    getReviews: getReviews,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    open: isOpen,
    name: name,
    metaReviews: metaReviews,
    charObject: charObject
  }))) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZC5qcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGFuZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlbHBmdWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9DaGFyYWN0ZXJpc3RpY3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9JbnRlcmFjdGl2ZVN0YXJzLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Jldmlld3MvUmV2aWV3TW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9SZXZpZXdUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzL1Jldmlld3MuanN4Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhck9iamVjdCIsInNldFJldmlldyIsInJldmlldyIsImNoYXJzIiwic2V0Q2hhcnMiLCJoYW5kbGVDaGFyYWN0ZXJpc3RpY3MiLCJ2YWx1ZSIsInRhcmdldCIsImFyciIsInNwbGl0IiwicmF0aW5nIiwiaWQiLCJuZXdDaGFyYWN0ZXJpc3RpY3MiLCJOdW1iZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwieCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJqdXN0aWZ5U2VsZiIsIkludGVyYWN0aXZlU3RhcnMiLCJzZXRSYXRpbmciLCJob3ZlciIsInNldEhvdmVyIiwic2V0VmFsdWUiLCJkZXNjcmlwdGlvbk9iaiIsImhhbmRsZVZhbHVlIiwiaW5kZXgiLCJBcnJheSIsInN0YXIiLCJjb21tZW50IiwiUmV2aWV3c01vZGFsIiwicHJvZHVjdElkIiwib25DbG9zZSIsIm9wZW4iLCJnZXRSZXZpZXdzIiwibmFtZSIsIm1ldGFSZXZpZXdzIiwicHJvZHVjdF9pZCIsInN1bW1hcnkiLCJib2R5IiwicmVjb21tZW5kIiwiZW1haWwiLCJwaG90b3MiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsInBob3RvU2l6ZSIsIm1pc3NpbmdGaWVsZHMiLCJlcnJvciIsInNldEVycm9yIiwiY2hhcmFjdGVyQ291bnQiLCJzZXRDaGFyYWN0ZXJDb3VudCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaW5hbFJldmlldyIsInByb21pc2VzIiwibGVuZ3RoIiwiZGF0YSIsInNpemUiLCJwYXlsb2FkIiwicHJvbWlzZSIsInB1c2giLCJhbGwiLCJyZXN1bHRzIiwiaGFuZGxlQ291bnRDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1heEhlaWdodCIsInRyYW5zZm9ybSIsIm1vZGFsIiwibW9kYWxIZWFkZXIiLCJtb2RhbEJvZHkiLCJtYXJnaW4iLCJSc3R5bGVzIiwic3RhclJhdGluZyIsImZpbmVQcmludCIsIm1vZGFsQnV0dG9uIiwiUmV2aWV3VGVtcGxhdGUiLCJyZXZpZXdUZW1wbGF0ZSIsInRlbXBsYXRlU3VtbWFyeSIsInRlbXBsYXRlVXNlckRhdGVCYXIiLCJ0ZW1wbGF0ZUhlbHBmdWxSZXBvcnRCYXIiLCJyZXNwb25zZSIsInRlbXBsYXRlUmVzcG9uc2VGcm9tU2VsbGVyIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJ0ZW1wbGF0ZUltYWdlcyIsInBhZGRpbmdSaWdodCIsIlN0YXJSYXRpbmciLCJzdGFyUGVyY2VudGFnZSIsInJvdW5kZWRQZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsInN0YXJSYXRpbmdCb3R0b20iLCJVc2VyRGF0ZUJhciIsImdldERhdGUiLCJkYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInllYXIiLCJzaGlmdCIsImpvaW4iLCJmb250U3R5bGUiLCJ1c2VyRGF0ZUJhciIsInJldmlld2VyX25hbWUiLCJSZXZpZXdzIiwiaGFuZGxlUmV2aWV3QXZlcmFnZSIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZGlzcGxheWVkUmV2aWV3cyIsInNldERpc3BsYXllZFJldmlld3MiLCJzZXRNZXRhUmV2aWV3cyIsImlzT3BlbiIsInNldElzT3BlbiIsInNvcnQiLCJzZXRTb3J0IiwibW9yZUJ1dHRvbiIsInNldE1vcmVCdXR0b24iLCJTaXplIiwiV2lkdGgiLCJDb21mb3J0IiwiUXVhbGl0eSIsIkxlbmd0aCIsIkZpdCIsInJldmlld3NVUkwiLCJnZXRNZXRhUmV2aWV3cyIsIm1ldGFSZXZpZXdzVVJMIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhckZpbHRlcnMiLCJmaWx0ZXJzIiwicmV2aWV3QXJyYXkiLCJmaWx0ZXIiLCJoYW5kbGVNb3JlQnV0dG9uIiwicGFyZW50Q29udGFpbmVyIiwicGFyZW50QnJlYWtkb3duIiwiYWxpZ25TZWxmIiwicGFkZGluZ0xlZnQiLCJvdmVyZmxvd1kiLCJwYXJlbnRJbmRpdmlkdWFsUmV2aWV3IiwicGFyZW50Rm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEtBQUQsQ0FESjtBQUFBO0FBQUEsTUFDN0JDLFFBRDZCO0FBQUEsTUFDbkJDLFdBRG1COztBQUdwQyxTQUNFSCxLQUFLLGdCQUVEO0FBQU0sYUFBUyxFQUFFRSxRQUFRLEdBQUdFLGlGQUFILEdBQXlCO0FBQWxELEtBQ0ksQ0FBQ0YsUUFBRixnQkFFRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksaUZBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FB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LEVBQUU7QUFBQSxhQUFNbUssU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBO0FBQS9ELHNCQWRGLGVBZUUsaURBQUMsaURBQUQ7QUFDRSxhQUFTLEVBQUVuRyxTQURiO0FBRUUsY0FBVSxFQUFFRyxVQUZkO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTWdHLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUhYO0FBSUUsUUFBSSxFQUFFRCxNQUpSO0FBS0UsUUFBSSxFQUFFOUYsSUFMUjtBQU1FLGVBQVcsRUFBRUMsV0FOZjtBQU9FLGNBQVUsRUFBRTFDO0FBUGQsSUFmRixDQTVCRixDQUZKLEdBeURJLElBMUROO0FBNERELENBakxEOztBQW1MQSxpRUFBZWdJLE9BQWYsRSIsImZpbGUiOiJjbGllbnRfc3JjX2NvbXBvbmVudHNfcmV2aWV3c19SZXZpZXdzX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGF0YSA9IHtcblx0XCJib2R5XCI6IFwiPHBhdGggY2xhc3M9XFxcImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMVxcXCIgZD1cXFwiTTUuOTIgMmExIDEgMCAwIDAtMSAxdjMwYTEgMSAwIDAgMCAyIDBWM2ExIDEgMCAwIDAtMS0xelxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIi8+PHBhdGggY2xhc3M9XFxcImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMlxcXCIgZD1cXFwiTTMwLjUgMy44MmExIDEgMCAwIDAtMSAwYTE0LjkgMTQuOSAwIDAgMS02LjEzIDEuMTZhMTMuMTEgMTMuMTEgMCAwIDEtNS4xOC0xLjQ5QTEyLjc4IDEyLjc4IDAgMCAwIDEzLjIgMmExMC44NiAxMC44NiAwIDAgMC00LjIuODVWMjBhOC44IDguOCAwIDAgMSA0LjI1LTEuMDhhMTEuMjIgMTEuMjIgMCAwIDEgNC4yIDEuMjhhMTQuODQgMTQuODQgMCAwIDAgNiAxLjY2YTE2Ljc5IDE2Ljc5IDAgMCAwIDctMS4zN2ExIDEgMCAwIDAgLjU1LS44OVY0LjY3YTEgMSAwIDAgMC0uNS0uODV6XFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiLz5cIixcblx0XCJ3aWR0aFwiOiAzNixcblx0XCJoZWlnaHRcIjogMzZcbn07XG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlQ29tcG9uZW50cy9BcHAubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEV4cGFuZGVkUGhvdG9zID0gKHsgcGhvdG8gfSkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIHBob3RvXG4gICAgICA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtleHBhbmRlZCA/IHN0eWxlcy5vdmVybGF5UGhvdG8gOiAnJ30+XG4gICAgICAgICAgeyghZXhwYW5kZWQpXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgIHNyYz17cGhvdG8udXJsID8gcGhvdG8udXJsIDogcGhvdG99XG4gICAgICAgICAgICAgICAgYWx0PVwicmV2aWV3XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdUaHVtYm5haWx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgIHNyYz17cGhvdG8udXJsID8gcGhvdG8udXJsIDogcGhvdG99XG4gICAgICAgICAgICAgICAgYWx0PVwicmV2aWV3XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5waG90b31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcbiAgICAgIDogbnVsbFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kZWRQaG90b3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlQ29tcG9uZW50cy9BcHAubW9kdWxlLmNzcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSWNvbiwgSW5saW5lSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBmbGFnU29saWQgZnJvbSAnQGljb25pZnktaWNvbnMvY2xhcml0eS9mbGFnLXNvbGlkJztcblxuXG5jb25zdCBIZWxwZnVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaGVscGZ1bG5lc3MgfSA9IHByb3BzO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGhlbHBmdWxuZXNzKTtcbiAgY29uc3QgW3JlcG9ydGVkLCBzZXRSZXBvcnRlZF0gPSB1c2VTdGF0ZSgnUmVwb3J0Jyk7XG4gIGNvbnN0IFtpc1JlcG9ydGVkLCBzZXRJc1JlcG9ydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDb3VudCA9IChlKSA9PiB7XG4gICAgc2V0Q291bnQoaGVscGZ1bG5lc3MgKyAxKTtcblxuICAgIGlmIChwcm9wcy5yZXZpZXdfaWQpIHtcbiAgICAgIGNvbnN0IHsgcmV2aWV3X2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3Jldmlld3MvJHtyZXZpZXdfaWR9L2hlbHBmdWxgKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMucXVlc3Rpb25faWQpIHtcbiAgICAgIGNvbnN0IHsgcXVlc3Rpb25faWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcWEvcXVlc3Rpb25zLyR7cXVlc3Rpb25faWR9L2hlbHBmdWxgKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuYW5zd2VyX2lkKSB7XG4gICAgICBjb25zdCB7IGFuc3dlcl9pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9xYS9hbnN3ZXJzLyR7YW5zd2VyX2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVwb3J0ID0gKCkgPT4ge1xuICAgIHNldFJlcG9ydGVkKCdSZXBvcnRlZCcpO1xuICAgIHNldElzUmVwb3J0ZWQodHJ1ZSk7XG4gICAgaWYgKHByb3BzLmFuc3dlcl9pZCkge1xuICAgICAgYXhpb3MucHV0KGAvcWEvYW5zd2Vycy8ke3Byb3BzLmFuc3dlcl9pZH0vcmVwb3J0YClcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5yZXZpZXdfaWQpIHtcbiAgICAgIGF4aW9zLnB1dChgL3Jldmlld3MvJHtwcm9wcy5yZXZpZXdfaWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGlvcy5wdXQoYC9xYS9xdWVzdGlvbnMvJHtwcm9wcy5xdWVzdGlvbl9pZH0vcmVwb3J0YClcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsfT5cbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoZWxwZnVsVGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLmhlbHBmdWx9PldhcyB0aGlzIGhlbHBmdWw/PC9kaXY+XG4gICAgICA8YnV0dG9uIGRhdGEtdGVzdGlkPVwiaGVscGZ1bC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlQ291bnR9IGNsYXNzTmFtZT17c3R5bGVzLmhlbHBmdWxCdXR0b259IHZhbHVlPVwieWVzXCI+WWVzPC9idXR0b24+XG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGVscGZ1bC1jb3VudFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlbHBmdWx9ICR7c3R5bGVzLmhlbHBmdWxDb3VudH1gfT5cbiAgICAgICAgKFxuICAgICAgICB7Y291bnR9XG4gICAgICAgIClcbiAgICAgICAgeycgJ31cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cInJlcG9ydC1idXR0b25cIiBjbGFzc05hbWU9e2lzUmVwb3J0ZWQgPyBzdHlsZXMucmVwb3J0ZWRUcnVlIDogc3R5bGVzLnJlcG9ydGVkfSBvbkNsaWNrPXtyZXBvcnR9IHR5cGU9XCJzdWJtaXRcIj57cmVwb3J0ZWR9PC9idXR0b24+XG4gICAgICB7aXNSZXBvcnRlZCA/IDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmZsYWd9IGljb249e2ZsYWdTb2xpZH0gLz4gOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscGZ1bDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hhcmFjdGVyaXN0aWNzID0gKHsgY2hhcmFjdGVyaXN0aWNzLCBjaGFyT2JqZWN0LCBzZXRSZXZpZXcsIHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IFtjaGFycywgc2V0Q2hhcnNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYXJhY3RlcmlzdGljcyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgYXJyID0gdmFsdWUuc3BsaXQoJy0nKTtcbiAgICBjb25zdCByYXRpbmcgPSBhcnJbMF07XG4gICAgY29uc3QgaWQgPSBhcnJbMV07XG4gICAgY29uc3QgbmV3Q2hhcmFjdGVyaXN0aWNzID0gY2hhcnM7XG4gICAgbmV3Q2hhcmFjdGVyaXN0aWNzW2lkXSA9IE51bWJlcihyYXRpbmcpO1xuICAgIHNldFJldmlldyh7IC4uLnJldmlldywgY2hhcmFjdGVyaXN0aWNzOiBuZXdDaGFyYWN0ZXJpc3RpY3MgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAoY2hhcmFjdGVyaXN0aWNzKVxuICAgICAgPyBPYmplY3QuZW50cmllcyhjaGFyYWN0ZXJpc3RpY3MpLm1hcCgoeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17eFsxXS5pZH0gb25DaGFuZ2U9e2hhbmRsZUNoYXJhY3RlcmlzdGljc30gZGF0YS10ZXN0aWQ9XCJjaGFyYWN0ZXJpc3RpYy1tYXBcIj5cbiAgICAgICAgICA8cD57eFswXX0gKjwvcD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCg1LCAyNSUpJywgZm9udFNpemU6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzEvMicgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJvbmVcIj57Y2hhck9iamVjdFt4WzBdXVsxXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AxLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnMi8zJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cInR3b1wiPntjaGFyT2JqZWN0W3hbMF1dWzJdfTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT17eFswXX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17YDItJHt4WzFdLmlkfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZFJvdzogJzEvMicsIGp1c3RpZnlTZWxmOiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gYXV0bycsIGdyaWRDb2x1bW46ICczLzQnIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycsIGp1c3RpZnlTZWxmOiAnY2VudGVyJyB9fSBodG1sRm9yPVwidGhyZWVcIj57Y2hhck9iamVjdFt4WzBdXVszXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AzLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnNC81JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cImZvdXJcIj57Y2hhck9iamVjdFt4WzBdXVs0XX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2A0LSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnNS82JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cImZpdmVcIj57Y2hhck9iamVjdFt4WzBdXVs1XX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2A1LSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcmlzdGljcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1Jldmlld3MubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEludGVyYWN0aXZlU3RhcnMgPSAoeyByZXZpZXcsIHNldFJldmlldyB9KSA9PiB7XG4gIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25PYmogPSB7XG4gICAgMTogJ1Bvb3InLFxuICAgIDI6ICdGYWlyJyxcbiAgICAzOiAnQXZlcmFnZScsXG4gICAgNDogJ0dvb2QnLFxuICAgIDU6ICdHcmVhdCcsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmFsdWUgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRWYWx1ZShkZXNjcmlwdGlvbk9ialtpbmRleF0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZXF1aXJlZD1cInJlcXVpcmVkXCI+XG4gICAgICB7Wy4uLkFycmF5KDUpXS5tYXAoKHN0YXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbmRleCA8PSAoaG92ZXIgfHwgcmF0aW5nKSA/IHN0eWxlcy5vbiA6IHN0eWxlcy5vZmZ9ICR7c3R5bGVzLmJ1dHRvbn1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSYXRpbmcoaW5kZXgpO1xuICAgICAgICAgICAgICBoYW5kbGVWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFJhdGluZyhyYXRpbmcpO1xuICAgICAgICAgICAgICBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIHJhdGluZzogaW5kZXggfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihyYXRpbmcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtdGVzdGlkPVwiaW50ZXJhY3RpdmUtc3RhcnNcIj7imIU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9Pnt2YWx1ZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmFjdGl2ZVN0YXJzO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1Jldmlld3MubW9kdWxlLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9BcHAubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ2hhcmFjdGVyaXN0aWNzIGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNzJztcbmltcG9ydCBJbnRlcmFjdGl2ZVN0YXJzIGZyb20gJy4vSW50ZXJhY3RpdmVTdGFycyc7XG5cbmNvbnN0IFJldmlld3NNb2RhbCA9ICh7XG4gIHByb2R1Y3RJZCwgb25DbG9zZSwgb3BlbiwgZ2V0UmV2aWV3cywgbmFtZSwgbWV0YVJldmlld3MsIGNoYXJPYmplY3Rcbn0pID0+IHtcbiAgY29uc3QgW3Jldmlldywgc2V0UmV2aWV3XSA9IHVzZVN0YXRlKHtcbiAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgcmF0aW5nOiAnJyxcbiAgICBzdW1tYXJ5OiAnJyxcbiAgICBib2R5OiAnJyxcbiAgICByZWNvbW1lbmQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaG90b3M6IFtdLFxuICAgIGNoYXJhY3RlcmlzdGljczoge30sXG4gIH0pO1xuICBjb25zb2xlLmxvZyhwcm9kdWN0SWQpXG4gIGNvbnN0IFt0aHVtYm5haWxzLCBzZXRUaHVtYm5haWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBob3RvU2l6ZTogJycsXG4gICAgbWlzc2luZ0ZpZWxkczogJycsXG4gIH0pO1xuICBjb25zdCBbY2hhcmFjdGVyQ291bnQsIHNldENoYXJhY3RlckNvdW50XSA9IHVzZVN0YXRlKDUwKTtcblxuICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBSZWdFeHAoXG4gICAgL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaVxuICApO1xuXG4gIGNvbnN0IHRvQmFzZTY0ID0gKGZpbGUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaW5hbFJldmlldyA9IHsgLi4ucmV2aWV3IH07XG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgIC8vIGlmICghdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZmluYWxSZXZpZXcuZW1haWwpKSB7XG4gICAgLy8gICBzZXRFcnJvcih7IC4uLmVycm9yLCBlbWFpbDogJypZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsJyB9KTtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoZmluYWxSZXZpZXcuYm9keS5sZW5ndGggPCA1MCB8fCBmaW5hbFJldmlldy5yYXRpbmcgPT09ICcnIHx8IGZpbmFsUmV2aWV3LnJlY29tbWVuZCA9PT0gJycgfHwgZmluYWxSZXZpZXcubmFtZSA9PT0gJycgfHwgT2JqZWN0LmtleXMoZmluYWxSZXZpZXcuY2hhcmFjdGVyaXN0aWNzKSAhPT0gT2JqZWN0LmtleXMobWV0YVJldmlld3MuY2hhcmFjdGVyaXN0aWNzKSkge1xuICAgIC8vICAgc2V0RXJyb3IoeyAuLi5lcnJvciwgbWlzc2luZ0ZpZWxkczogJypPbmUgb3IgbW9yZSBtYW5kYXRvcnkgZmllbGRzIGlzIG1pc3NpbmcnIH0pO1xuICAgIC8vIH1cbiAgICBpZiAoZmluYWxSZXZpZXcucGhvdG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXhpb3MucG9zdCgnL3Jldmlld3MnLCBmaW5hbFJldmlldylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKCcxc3Q6ICcsIGRhdGEpKVxuICAgICAgICAudGhlbigoKSA9PiBnZXRSZXZpZXdzKHByb2R1Y3RJZCkpXG4gICAgICAgIC50aGVuKCgpID0+IG9uQ2xvc2UoKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbFJldmlldy5waG90b3MubWFwKChwaG90bykgPT4ge1xuICAgICAgICBpZiAocGhvdG8uc2l6ZSA+IDEwMDAwMCkge1xuICAgICAgICAgIHNldEVycm9yKHsgLi4uZXJyb3IsIHBob3RvU2l6ZTogJypUaGUgaW1hZ2VzIHNlbGVjdGVkIGFyZSBpbnZhbGlkIG9yIHVuYWJsZSB0byBiZSB1cGxvYWRlZCcgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgbmFtZTogcGhvdG8ubmFtZSxcbiAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRvQmFzZTY0KHBob3RvKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHBheWxvYWQuZGF0YSA9IHJlc3VsdC5zcGxpdCgnLCcpWzFdKVxuICAgICAgICAgIC50aGVuKCgpID0+IGF4aW9zLnBvc3QoJy91cGxvYWRfaW1hZ2VzJywgcGF5bG9hZCkpXG4gICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhKVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICBmaW5hbFJldmlldy5waG90b3MgPSByZXN1bHRzO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IGF4aW9zLnBvc3QoJy9yZXZpZXdzJywgZmluYWxSZXZpZXcpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coJzJzdDogJywgZGF0YSkpXG4gICAgICAgIC50aGVuKCgpID0+IGdldFJldmlld3MocHJvZHVjdElkKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gb25DbG9zZSgpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRDaGFyYWN0ZXJDb3VudCg1MCAtIHZhbHVlLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBpZiAocmV2aWV3LnBob3Rvcy5sZW5ndGggPCA1KSB7XG4gICAgICBzZXRSZXZpZXcoe1xuICAgICAgICAuLi5yZXZpZXcsXG4gICAgICAgIHBob3RvczogWy4uLnJldmlldy5waG90b3MsIGUudGFyZ2V0LmZpbGVzWzBdXSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGh1bWJuYWlscyhbXG4gICAgICAgIC4uLnRodW1ibmFpbHMsXG4gICAgICAgIFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pLFxuICAgICAgXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgKG1ldGFSZXZpZXdzICYmIHJldmlldyAmJiByZXZpZXcucGhvdG9zKVxuICAgICAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuID8gc3R5bGVzLm92ZXJsYXkgOiAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknIDogJ3RyYW5zbGF0ZSgtNTAlLCAtMTUwdmgpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cbiAgICAgICAgICAgICAgPGgzPldyaXRlIFlvdXIgUmV2aWV3PC9oMz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQWJvdXQgdGhlIHtuYW1lfVxuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJyZXZpZXctbW9kYWxcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB4XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiXCJcbiAgICAgICAgICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JyB9fT5PdmVyYWxsIFJhdGluZzogKjwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1JzdHlsZXMuc3RhclJhdGluZ30+XG4gICAgICAgICAgICAgICAgICA8SW50ZXJhY3RpdmVTdGFycyByZXZpZXc9e3Jldmlld30gc2V0UmV2aWV3PXtzZXRSZXZpZXd9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPldvdWxkIHlvdSByZWNvbW1lbmQgdGhpcyBwcm9kdWN0PyAqPC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJZZXNcIiBuYW1lPVwicmVjb21tZW5kXCIgb25DbGljaz17KCkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByZWNvbW1lbmQ6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlllc1wiPlllczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJOb1wiIG5hbWU9XCJyZWNvbW1lbmRcIiBvbkNsaWNrPXsoKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIHJlY29tbWVuZDogZmFsc2UgfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIk5vXCI+Tm88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY3NcbiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcmlzdGljcz17bWV0YVJldmlld3MuY2hhcmFjdGVyaXN0aWNzfVxuICAgICAgICAgICAgICAgICAgY2hhck9iamVjdD17Y2hhck9iamVjdH1cbiAgICAgICAgICAgICAgICAgIHNldFJldmlldz17c2V0UmV2aWV3fVxuICAgICAgICAgICAgICAgICAgcmV2aWV3PXtyZXZpZXd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD5SZXZpZXcgVGl0bGU6PC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIHN1bW1hcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSc3R5bGVzLm1vZGFsSW5wdXR9XG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2MFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IEJlc3QgcHVyY2hhc2UgZXZlciFcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+UmV2aWV3IEJvZHk6ICo8L3A+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIGJvZHk6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb3VudENoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCI1MFwiXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMDAwXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnFJbnB1dH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2h5IGRpZCB5b3UgbGlrZSB0aGUgcHJvZHVjdCBvciBub3Q/XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMuY29tbWVudH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hhcmFjdGVyQ291bnQgPD0gMCA/ICdNaW5pbXVtIENoYXJhY3RlcnMgUmVhY2hlZCcgOiBgTWluaW11bSByZXF1aXJlZCBjaGFyYWN0ZXJzIGxlZnQ6ICR7Y2hhcmFjdGVyQ291bnR9YH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+V2hhdCBpcyB5b3VyIG5pY2tuYW1lPyAqPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja3NvbjExIVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntyZXZpZXcubmFtZS5sZW5ndGggPiAwID8gJ0ZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzcycgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgPHA+V2hhdCBpcyB5b3VyIGVtYWlsPyAqPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSc3R5bGVzLm1vZGFsSW5wdXR9XG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2MFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IGphY2tzb24xMUBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57cmV2aWV3LmVtYWlsLmxlbmd0aCA+IDAgPyAnRm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMsIHlvdSB3aWxsIG5vdCBiZSBlbWFpbGVkJyA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHtyZXZpZXcucGhvdG9zLmxlbmd0aCA8IDUgPyA8aW5wdXQgdmFsdWU9XCJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwiZmlsZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIHt0aHVtYm5haWxzLm1hcCgocGhvdG8pID0+IDxpbWcgYWx0PXtwaG90b30ga2V5PXtwaG90b30gY2xhc3NOYW1lPXtgJHtSc3R5bGVzLmltZ1RodW1ibmFpbH0gJHtSc3R5bGVzLnJldmlld1Bob3RvfWB9IHNyYz17cGhvdG99IC8+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1JzdHlsZXMuY29tbWVudH0+KiBNYW5kYXRvcnkgRmllbGRzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e2Vycm9yLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvci5waG90b1NpemV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e2Vycm9yLm1pc3NpbmdGaWVsZHN9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0IFJldmlld1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3NNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUmV2aWV3cy5tb2R1bGUuY3NzJztcbmltcG9ydCBIZWxwZnVsIGZyb20gJy4uL0hlbHBmdWwnO1xuaW1wb3J0IEV4cGFuZGVkUGhvdG9zIGZyb20gJy4uL0V4cGFuZGVkUGhvdG9zJztcblxuY29uc3QgUmV2aWV3VGVtcGxhdGUgPSAoeyByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld1RlbXBsYXRlfT5cbiAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXtyZXZpZXcucmF0aW5nfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlU3VtbWFyeX0+e3Jldmlldy5zdW1tYXJ5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlQm9keX0gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT57cmV2aWV3LmJvZHl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVVc2VyRGF0ZUJhcn0+XG4gICAgICAgICAgPFVzZXJEYXRlQmFyIHJldmlldz17cmV2aWV3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZUhlbHBmdWxSZXBvcnRCYXJ9PlxuICAgICAgICAgIDxIZWxwZnVsIHJldmlld19pZD17cmV2aWV3LnJldmlld19pZH0gaGVscGZ1bG5lc3M9e3Jldmlldy5oZWxwZnVsbmVzc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsocmV2aWV3LnJlc3BvbnNlKVxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVJlc3BvbnNlRnJvbVNlbGxlcn0+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzBweCcsIGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMTBweCAxMHB4IDAgMTBweCcsIGZvbnRTaXplOiAnMTVweCcgfX0+UmVzcG9uc2UgZnJvbSBzZWxsZXI6PC9wPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICcwcHgnLCBwYWRkaW5nOiAnMTBweCcsIGZvbnRTaXplOiAnMTVweCcgfX0+e3Jldmlldy5yZXNwb25zZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlSW1hZ2VzfT5cbiAgICAgICAgICB7cmV2aWV3LnBob3Rvcy5tYXAoKHBob3RvLCBpZCkgPT4gPEV4cGFuZGVkUGhvdG9zIHBob3RvPXtwaG90b30ga2V5PXtpZH0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhyZXZpZXcucmVjb21tZW5kKVxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVJlY29tbWVuZHNCYXJ9IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgICAgICAgICAgICYjMTAwMDM7IFllcywgSSByZWNvbW1lbmQgdGhpcyBwcm9kdWN0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTdGFyUmF0aW5nID0gKHsgcmF0aW5nIH0pID0+IHtcbiAgY29uc3Qgc3RhclBlcmNlbnRhZ2UgPSAocmF0aW5nIC8gNSkgKiAxMDA7XG4gIGNvbnN0IHJvdW5kZWRQZXJjZW50YWdlID0gKE1hdGgucm91bmQoc3RhclBlcmNlbnRhZ2UgKiA1KSAvIDUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyUmF0aW5nfSBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2xlZnQnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyUmF0aW5nVG9wfSBzdHlsZT17eyB3aWR0aDogcm91bmRlZFBlcmNlbnRhZ2UgfX0+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJSYXRpbmdCb3R0b219PlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVXNlckRhdGVCYXIgPSAoeyByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBnZXREYXRlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS5zbGljZSgwLCBkYXRlLmluZGV4T2YoJ1QnKSkuc3BsaXQoJy0nKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZUFyci5zaGlmdCgpO1xuICAgIGRhdGVBcnIucHVzaCh5ZWFyKTtcbiAgICByZXR1cm4gZGF0ZUFyci5qb2luKCctJyk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZSA9IGdldERhdGUocmV2aWV3LmRhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDEwLCBmb250U3R5bGU6ICdpdGFsaWMnfX0+JiMxMDAwMzsgVmVyaWZpZWQgUHVyY2hhc2VyPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGF0ZUJhcn0+e3Jldmlldy5yZXZpZXdlcl9uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGF0ZUJhcn0+e2RhdGV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmV2aWV3VGVtcGxhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmF0aW5nQnJlYWtkb3duIGZyb20gJy4vUmF0aW5nQnJlYWtkb3duJztcbmltcG9ydCBSZXZpZXdUZW1wbGF0ZSBmcm9tICcuL1Jldmlld1RlbXBsYXRlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1Jldmlld3MubW9kdWxlLmNzcyc7XG5pbXBvcnQgUmV2aWV3c01vZGFsIGZyb20gJy4vUmV2aWV3TW9kYWwnO1xuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi4vU3RhclJhdGluZyc7XG5cbmNvbnN0IFJldmlld3MgPSAoeyBwcm9kdWN0SWQsIG5hbWUsIGhhbmRsZVJldmlld0F2ZXJhZ2UgfSkgPT4ge1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRSZXZpZXdzLCBzZXREaXNwbGF5ZWRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW21ldGFSZXZpZXdzLCBzZXRNZXRhUmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgncmVsZXZhbnQnKTtcbiAgY29uc3QgW21vcmVCdXR0b24sIHNldE1vcmVCdXR0b25dID0gdXNlU3RhdGUoJ01vcmUgUmV2aWV3cycpO1xuXG4gIGNvbnN0IGNoYXJPYmplY3QgPSB7XG4gICAgU2l6ZToge1xuICAgICAgMTogXCJBIHNpemUgdG9vIHNtYWxsXCIsXG4gICAgICAyOiBcIjEvMiBhIHNpemUgdG9vIHNtYWxsXCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiMS8yIGEgc2l6ZSB0b28gYmlnXCIsXG4gICAgICA1OiBcIkEgc2l6ZSB0b28gd2lkZVwiLFxuICAgIH0sXG4gICAgV2lkdGg6IHtcbiAgICAgIDE6IFwiVG9vIG5hcnJvd1wiLFxuICAgICAgMjogXCJTbGlnaHRseSBuYXJyb3dcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCJTbGlnaHRseSB3aWRlXCIsXG4gICAgICA1OiBcIlRvbyB3aWRlXCIsXG4gICAgfSxcbiAgICBDb21mb3J0OiB7XG4gICAgICAxOiBcIlVuY29tZm9ydGFibGVcIixcbiAgICAgIDI6IFwiU2xpZ2h0bHkgdW5jb21mb3J0YWJsZVwiLFxuICAgICAgMzogXCJPa1wiLFxuICAgICAgNDogXCJDb21mb3J0YWJsZVwiLFxuICAgICAgNTogXCJQZXJmZWN0XCJcbiAgICB9LFxuICAgIFF1YWxpdHk6IHtcbiAgICAgIDE6IFwiUG9vclwiLFxuICAgICAgMjogXCJCZWxvdyBhdmVyYWdlXCIsXG4gICAgICAzOiBcIldoYXQgSSBleHBlY3RlZFwiLFxuICAgICAgNDogXCJQcmV0dHkgZ3JlYXRcIixcbiAgICAgIDU6IFwiUGVyZmVjdFwiLFxuICAgIH0sXG4gICAgTGVuZ3RoOiB7XG4gICAgICAxOiBcIlJ1bnMgc2hvcnRcIixcbiAgICAgIDI6IFwiUnVucyBzbGlnaHRseSBzaG9ydFwiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIlJ1bnMgc2xpZ2h0bHkgbG9uZ1wiLFxuICAgICAgNTogXCJSdW5zIGxvbmdcIixcbiAgICB9LFxuICAgIEZpdDoge1xuICAgICAgMTogXCJSdW5zIHRpZ2h0XCIsXG4gICAgICAyOiBcIlJ1bnMgc2xpZ2h0bHkgdGlnaHRcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCJSdW5zIHNsaWdodGx5IGxvbmdcIixcbiAgICAgIDU6IFwiUnVucyBsb25nXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBnZXRSZXZpZXdzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcmV2aWV3c1VSTCA9IGAvcmV2aWV3cy9zb3J0LyR7aWR9LyR7c29ydH1gO1xuICAgIGF4aW9zLmdldChyZXZpZXdzVVJMKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHNldFJldmlld3MoZGF0YSk7XG4gICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgIHNldERpc3BsYXllZFJldmlld3MoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhkYXRhLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWV0YVJldmlld3MgPSAoaWQpID0+IHtcbiAgICBjb25zdCBtZXRhUmV2aWV3c1VSTCA9IGAvcmV2aWV3cy9tZXRhLyR7aWR9YDtcbiAgICBheGlvcy5nZXQobWV0YVJldmlld3NVUkwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0TWV0YVJldmlld3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UmV2aWV3cyhwcm9kdWN0SWQpO1xuICAgIHNldEV4cGFuZGVkKGV4cGFuZGVkKTtcbiAgfSwgW3NvcnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1ldGFSZXZpZXdzKHByb2R1Y3RJZCk7XG4gICAgZ2V0UmV2aWV3cyhwcm9kdWN0SWQpO1xuICB9LCBbcHJvZHVjdElkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoZXhwYW5kZWQpXG4gICAgPyBzZXREaXNwbGF5ZWRSZXZpZXdzKHJldmlld3MpXG4gICAgOiBzZXREaXNwbGF5ZWRSZXZpZXdzKHJldmlld3Muc2xpY2UoMCwgMikpXG4gIH0sIFtleHBhbmRlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXJGaWx0ZXJzID0gKGZpbHRlcnMpID0+IHtcbiAgICBjb25zdCByZXZpZXdBcnJheSA9IFtdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdzLnNsaWNlKDAsIDIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVycy5tYXAoKGZpbHRlcikgPT4ge1xuICAgICAgICByZXZpZXdzLmZpbHRlcigocmV2aWV3KSA9PiB7XG4gICAgICAgICAgaWYgKHJldmlldy5yYXRpbmcgPT09IE51bWJlcihmaWx0ZXIpKSByZXZpZXdBcnJheS5wdXNoKHJldmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKHJldmlld0FycmF5KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW9yZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAoZGlzcGxheWVkUmV2aWV3cy5sZW5ndGggPD0gMilcbiAgICAgID8gc2V0TW9yZUJ1dHRvbignTW9yZSBSZXZpZXdzJylcbiAgICAgIDogc2V0TW9yZUJ1dHRvbignU2hvdyBMZXNzIFJldmlld3MnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZU1vcmVCdXR0b24oKTtcbiAgfSwgW2Rpc3BsYXllZFJldmlld3NdKTtcblxuICByZXR1cm4gKFxuICAgIChtZXRhUmV2aWV3cyAmJiByZXZpZXdzICYmIHByb2R1Y3RJZClcbiAgICAgID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudENvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRCcmVha2Rvd259PlxuICAgICAgICAgICAgPFJhdGluZ0JyZWFrZG93blxuICAgICAgICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxuICAgICAgICAgICAgICBtZXRhUmV2aWV3cz17bWV0YVJldmlld3N9XG4gICAgICAgICAgICAgIGhhbmRsZVN0YXJGaWx0ZXJzPXtoYW5kbGVTdGFyRmlsdGVyc31cbiAgICAgICAgICAgICAgaGFuZGxlUmV2aWV3QXZlcmFnZT17aGFuZGxlUmV2aWV3QXZlcmFnZX1cbiAgICAgICAgICAgICAgY2hhck9iamVjdD17Y2hhck9iamVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRIZWFkZXJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgcGFkZGluZ0xlZnQ6ICcyMHB4JyB9fVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNvcnQtb24tZHJvcGRvd25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTb3J0IG9uOlxuICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29ydChlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+UmVsZXZhbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkhlbHBmdWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPk5ld2VzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnODAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEluZGl2aWR1YWxSZXZpZXd9PlxuICAgICAgICAgICAge2Rpc3BsYXllZFJldmlld3MubWFwKChyZXZpZXcsIGlkKSA9PiAoXG4gICAgICAgICAgICAgIDxSZXZpZXdUZW1wbGF0ZSByZXZpZXc9e3Jldmlld30ga2V5PXtpZH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50Rm9vdGVyfT5cbiAgICAgICAgICAgIHtyZXZpZXdzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttb3JlQnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQnV0dG9ufSB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT5BZGQgUmV2aWV3ICArIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFJldmlld3NNb2RhbFxuICAgICAgICAgICAgICBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH1cbiAgICAgICAgICAgICAgZ2V0UmV2aWV3cz17Z2V0UmV2aWV3c31cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgb3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBtZXRhUmV2aWV3cz17bWV0YVJldmlld3N9XG4gICAgICAgICAgICAgIGNoYXJPYmplY3Q9e2NoYXJPYmplY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIDogbnVsbFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=