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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZC5qcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGFuZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlbHBmdWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9DaGFyYWN0ZXJpc3RpY3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9JbnRlcmFjdGl2ZVN0YXJzLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Jldmlld3MvUmV2aWV3TW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9SZXZpZXdUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzL1Jldmlld3MuanN4Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhck9iamVjdCIsInNldFJldmlldyIsInJldmlldyIsImNoYXJzIiwic2V0Q2hhcnMiLCJoYW5kbGVDaGFyYWN0ZXJpc3RpY3MiLCJ2YWx1ZSIsInRhcmdldCIsImFyciIsInNwbGl0IiwicmF0aW5nIiwiaWQiLCJuZXdDaGFyYWN0ZXJpc3RpY3MiLCJOdW1iZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwieCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJqdXN0aWZ5U2VsZiIsIkludGVyYWN0aXZlU3RhcnMiLCJzZXRSYXRpbmciLCJob3ZlciIsInNldEhvdmVyIiwic2V0VmFsdWUiLCJkZXNjcmlwdGlvbk9iaiIsImhhbmRsZVZhbHVlIiwiaW5kZXgiLCJBcnJheSIsInN0YXIiLCJjb21tZW50IiwiUmV2aWV3c01vZGFsIiwicHJvZHVjdElkIiwib25DbG9zZSIsIm9wZW4iLCJnZXRSZXZpZXdzIiwibmFtZSIsIm1ldGFSZXZpZXdzIiwicHJvZHVjdF9pZCIsInN1bW1hcnkiLCJib2R5IiwicmVjb21tZW5kIiwiZW1haWwiLCJwaG90b3MiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsInBob3RvU2l6ZSIsIm1pc3NpbmdGaWVsZHMiLCJlcnJvciIsInNldEVycm9yIiwiY2hhcmFjdGVyQ291bnQiLCJzZXRDaGFyYWN0ZXJDb3VudCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaW5hbFJldmlldyIsInByb21pc2VzIiwibGVuZ3RoIiwiZGF0YSIsInNpemUiLCJwYXlsb2FkIiwicHJvbWlzZSIsInB1c2giLCJhbGwiLCJyZXN1bHRzIiwiaGFuZGxlQ291bnRDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1heEhlaWdodCIsInRyYW5zZm9ybSIsIm1vZGFsIiwibW9kYWxIZWFkZXIiLCJtb2RhbEJvZHkiLCJtYXJnaW4iLCJSc3R5bGVzIiwic3RhclJhdGluZyIsImZpbmVQcmludCIsIm1vZGFsQnV0dG9uIiwiUmV2aWV3VGVtcGxhdGUiLCJyZXZpZXdUZW1wbGF0ZSIsInRlbXBsYXRlU3VtbWFyeSIsInRlbXBsYXRlVXNlckRhdGVCYXIiLCJ0ZW1wbGF0ZUhlbHBmdWxSZXBvcnRCYXIiLCJyZXNwb25zZSIsInRlbXBsYXRlUmVzcG9uc2VGcm9tU2VsbGVyIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJ0ZW1wbGF0ZUltYWdlcyIsInBhZGRpbmdSaWdodCIsIlN0YXJSYXRpbmciLCJzdGFyUGVyY2VudGFnZSIsInJvdW5kZWRQZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsInN0YXJSYXRpbmdCb3R0b20iLCJVc2VyRGF0ZUJhciIsImdldERhdGUiLCJkYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInllYXIiLCJzaGlmdCIsImpvaW4iLCJmb250U3R5bGUiLCJ1c2VyRGF0ZUJhciIsInJldmlld2VyX25hbWUiLCJSZXZpZXdzIiwiaGFuZGxlUmV2aWV3QXZlcmFnZSIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZGlzcGxheWVkUmV2aWV3cyIsInNldERpc3BsYXllZFJldmlld3MiLCJzZXRNZXRhUmV2aWV3cyIsImlzT3BlbiIsInNldElzT3BlbiIsInNvcnQiLCJzZXRTb3J0IiwibW9yZUJ1dHRvbiIsInNldE1vcmVCdXR0b24iLCJTaXplIiwiV2lkdGgiLCJDb21mb3J0IiwiUXVhbGl0eSIsIkxlbmd0aCIsIkZpdCIsInJldmlld3NVUkwiLCJnZXRNZXRhUmV2aWV3cyIsIm1ldGFSZXZpZXdzVVJMIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhckZpbHRlcnMiLCJmaWx0ZXJzIiwicmV2aWV3QXJyYXkiLCJmaWx0ZXIiLCJoYW5kbGVNb3JlQnV0dG9uIiwicGFyZW50Q29udGFpbmVyIiwicGFyZW50QnJlYWtkb3duIiwiYWxpZ25TZWxmIiwicGFkZGluZ0xlZnQiLCJvdmVyZmxvd1kiLCJwYXJlbnRJbmRpdmlkdWFsUmV2aWV3IiwicGFyZW50Rm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEtBQUQsQ0FESjtBQUFBO0FBQUEsTUFDN0JDLFFBRDZCO0FBQUEsTUFDbkJDLFdBRG1COztBQUdwQyxTQUNFSCxLQUFLLGdCQUVEO0FBQU0sYUFBUyxFQUFFRSxRQUFRLEdBQUdFLGlGQUFILEdBQXlCO0FBQWxELEtBQ0ksQ0FBQ0YsUUFBRixnQkFFRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksaUZBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FB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QWY7QUFBQTtBQUEvRCxzQkFkRixlQWVFLGlEQUFDLGlEQUFEO0FBQ0UsYUFBUyxFQUFFbkcsU0FEYjtBQUVFLGNBQVUsRUFBRUcsVUFGZDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1nRyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FIWDtBQUlFLFFBQUksRUFBRUQsTUFKUjtBQUtFLFFBQUksRUFBRTlGLElBTFI7QUFNRSxlQUFXLEVBQUVDLFdBTmY7QUFPRSxjQUFVLEVBQUUxQztBQVBkLElBZkYsQ0E1QkYsQ0FGSixHQXlESSxJQTFETjtBQTRERCxDQWpMRDs7QUFtTEEsaUVBQWVnSSxPQUFmLEUiLCJmaWxlIjoiY2xpZW50X3NyY19jb21wb25lbnRzX3Jldmlld3NfUmV2aWV3c19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRhdGEgPSB7XG5cdFwiYm9keVwiOiBcIjxwYXRoIGNsYXNzPVxcXCJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTFcXFwiIGQ9XFxcIk01LjkyIDJhMSAxIDAgMCAwLTEgMXYzMGExIDEgMCAwIDAgMiAwVjNhMSAxIDAgMCAwLTEtMXpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTJcXFwiIGQ9XFxcIk0zMC41IDMuODJhMSAxIDAgMCAwLTEgMGExNC45IDE0LjkgMCAwIDEtNi4xMyAxLjE2YTEzLjExIDEzLjExIDAgMCAxLTUuMTgtMS40OUExMi43OCAxMi43OCAwIDAgMCAxMy4yIDJhMTAuODYgMTAuODYgMCAwIDAtNC4yLjg1VjIwYTguOCA4LjggMCAwIDEgNC4yNS0xLjA4YTExLjIyIDExLjIyIDAgMCAxIDQuMiAxLjI4YTE0Ljg0IDE0Ljg0IDAgMCAwIDYgMS42NmExNi43OSAxNi43OSAwIDAgMCA3LTEuMzdhMSAxIDAgMCAwIC41NS0uODlWNC42N2ExIDEgMCAwIDAtLjUtLjg1elxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIi8+XCIsXG5cdFwid2lkdGhcIjogMzYsXG5cdFwiaGVpZ2h0XCI6IDM2XG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBFeHBhbmRlZFBob3RvcyA9ICh7IHBob3RvIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICBwaG90b1xuICAgICAgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBzdHlsZXMub3ZlcmxheVBob3RvIDogJyd9PlxuICAgICAgICAgIHsoIWV4cGFuZGVkKVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nVGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVkUGhvdG9zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEljb24sIElubGluZUljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgZmxhZ1NvbGlkIGZyb20gJ0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZCc7XG5cblxuY29uc3QgSGVscGZ1bCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGhlbHBmdWxuZXNzIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShoZWxwZnVsbmVzcyk7XG4gIGNvbnN0IFtyZXBvcnRlZCwgc2V0UmVwb3J0ZWRdID0gdXNlU3RhdGUoJ1JlcG9ydCcpO1xuICBjb25zdCBbaXNSZXBvcnRlZCwgc2V0SXNSZXBvcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnQgPSAoZSkgPT4ge1xuICAgIHNldENvdW50KGhlbHBmdWxuZXNzICsgMSk7XG5cbiAgICBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBjb25zdCB7IHJldmlld19pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cmV2aWV3X2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnF1ZXN0aW9uX2lkKSB7XG4gICAgICBjb25zdCB7IHF1ZXN0aW9uX2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3FhL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uX2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFuc3dlcl9pZCkge1xuICAgICAgY29uc3QgeyBhbnN3ZXJfaWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcWEvYW5zd2Vycy8ke2Fuc3dlcl9pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcG9ydCA9ICgpID0+IHtcbiAgICBzZXRSZXBvcnRlZCgnUmVwb3J0ZWQnKTtcbiAgICBzZXRJc1JlcG9ydGVkKHRydWUpO1xuICAgIGlmIChwcm9wcy5hbnN3ZXJfaWQpIHtcbiAgICAgIGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHtwcm9wcy5hbnN3ZXJfaWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cHJvcHMucmV2aWV3X2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MucHV0KGAvcWEvcXVlc3Rpb25zLyR7cHJvcHMucXVlc3Rpb25faWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bH0+XG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGVscGZ1bFRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsfT5XYXMgdGhpcyBoZWxwZnVsPzwvZGl2PlxuICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZUNvdW50fSBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsQnV0dG9ufSB2YWx1ZT1cInllc1wiPlllczwvYnV0dG9uPlxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtY291bnRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWxwZnVsfSAke3N0eWxlcy5oZWxwZnVsQ291bnR9YH0+XG4gICAgICAgIChcbiAgICAgICAge2NvdW50fVxuICAgICAgICApXG4gICAgICAgIHsnICd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJyZXBvcnQtYnV0dG9uXCIgY2xhc3NOYW1lPXtpc1JlcG9ydGVkID8gc3R5bGVzLnJlcG9ydGVkVHJ1ZSA6IHN0eWxlcy5yZXBvcnRlZH0gb25DbGljaz17cmVwb3J0fSB0eXBlPVwic3VibWl0XCI+e3JlcG9ydGVkfTwvYnV0dG9uPlxuICAgICAge2lzUmVwb3J0ZWQgPyA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGFnfSBpY29uPXtmbGFnU29saWR9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBmdWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoYXJhY3RlcmlzdGljcyA9ICh7IGNoYXJhY3RlcmlzdGljcywgY2hhck9iamVjdCwgc2V0UmV2aWV3LCByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbY2hhcnMsIHNldENoYXJzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGFyYWN0ZXJpc3RpY3MgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGFyciA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgY29uc3QgcmF0aW5nID0gYXJyWzBdO1xuICAgIGNvbnN0IGlkID0gYXJyWzFdO1xuICAgIGNvbnN0IG5ld0NoYXJhY3RlcmlzdGljcyA9IGNoYXJzO1xuICAgIG5ld0NoYXJhY3RlcmlzdGljc1tpZF0gPSBOdW1iZXIocmF0aW5nKTtcbiAgICBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIGNoYXJhY3RlcmlzdGljczogbmV3Q2hhcmFjdGVyaXN0aWNzIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgKGNoYXJhY3RlcmlzdGljcylcbiAgICAgID8gT2JqZWN0LmVudHJpZXMoY2hhcmFjdGVyaXN0aWNzKS5tYXAoKHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3hbMV0uaWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFyYWN0ZXJpc3RpY3N9IGRhdGEtdGVzdGlkPVwiY2hhcmFjdGVyaXN0aWMtbWFwXCI+XG4gICAgICAgICAgPHA+e3hbMF19ICo8L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoNSwgMjUlKScsIGZvbnRTaXplOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gYXV0bycsIGdyaWRDb2x1bW46ICcxLzInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycsIGp1c3RpZnlTZWxmOiAnY2VudGVyJyB9fSBodG1sRm9yPVwib25lXCI+e2NoYXJPYmplY3RbeFswXV1bMV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzIvMycgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJ0d29cIj57Y2hhck9iamVjdFt4WzBdXVsyXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AyLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnMy80JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cInRocmVlXCI+e2NoYXJPYmplY3RbeFswXV1bM119PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMy0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzQvNScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmb3VyXCI+e2NoYXJPYmplY3RbeFswXV1bNF19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNC0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzUvNicgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmaXZlXCI+e2NoYXJPYmplY3RbeFswXV1bNV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbnRlcmFjdGl2ZVN0YXJzID0gKHsgcmV2aWV3LCBzZXRSZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uT2JqID0ge1xuICAgIDE6ICdQb29yJyxcbiAgICAyOiAnRmFpcicsXG4gICAgMzogJ0F2ZXJhZ2UnLFxuICAgIDQ6ICdHb29kJyxcbiAgICA1OiAnR3JlYXQnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZhbHVlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0VmFsdWUoZGVzY3JpcHRpb25PYmpbaW5kZXhdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiPlxuICAgICAge1suLi5BcnJheSg1KV0ubWFwKChzdGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5kZXggPD0gKGhvdmVyIHx8IHJhdGluZykgPyBzdHlsZXMub24gOiBzdHlsZXMub2ZmfSAke3N0eWxlcy5idXR0b259YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmF0aW5nKGluZGV4KTtcbiAgICAgICAgICAgICAgaGFuZGxlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSYXRpbmcocmF0aW5nKTtcbiAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByYXRpbmc6IGluZGV4IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3RpZD1cImludGVyYWN0aXZlLXN0YXJzXCI+4piFPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT57dmFsdWV9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJhY3RpdmVTdGFycztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENoYXJhY3RlcmlzdGljcyBmcm9tICcuL0NoYXJhY3RlcmlzdGljcyc7XG5pbXBvcnQgSW50ZXJhY3RpdmVTdGFycyBmcm9tICcuL0ludGVyYWN0aXZlU3RhcnMnO1xuXG5jb25zdCBSZXZpZXdzTW9kYWwgPSAoe1xuICBwcm9kdWN0SWQsIG9uQ2xvc2UsIG9wZW4sIGdldFJldmlld3MsIG5hbWUsIG1ldGFSZXZpZXdzLCBjaGFyT2JqZWN0XG59KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZSh7XG4gICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgIHJhdGluZzogJycsXG4gICAgc3VtbWFyeTogJycsXG4gICAgYm9keTogJycsXG4gICAgcmVjb21tZW5kOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9zOiBbXSxcbiAgICBjaGFyYWN0ZXJpc3RpY3M6IHt9LFxuICB9KTtcblxuICBjb25zdCBbdGh1bWJuYWlscywgc2V0VGh1bWJuYWlsc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwaG90b1NpemU6ICcnLFxuICAgIG1pc3NpbmdGaWVsZHM6ICcnLFxuICB9KTtcbiAgY29uc3QgW2NoYXJhY3RlckNvdW50LCBzZXRDaGFyYWN0ZXJDb3VudF0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgIC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2lcbiAgKTtcblxuICBjb25zdCB0b0Jhc2U2NCA9IChmaWxlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmluYWxSZXZpZXcgPSB7IC4uLnJldmlldyB9O1xuICAgIGNvbnN0IHByb21pc2VzID0gW107XG5cbiAgICAvLyBpZiAoIXZhbGlkRW1haWxSZWdleC50ZXN0KGZpbmFsUmV2aWV3LmVtYWlsKSkge1xuICAgIC8vICAgc2V0RXJyb3IoeyAuLi5lcnJvciwgZW1haWw6ICcqWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbCcgfSk7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGZpbmFsUmV2aWV3LmJvZHkubGVuZ3RoIDwgNTAgfHwgZmluYWxSZXZpZXcucmF0aW5nID09PSAnJyB8fCBmaW5hbFJldmlldy5yZWNvbW1lbmQgPT09ICcnIHx8IGZpbmFsUmV2aWV3Lm5hbWUgPT09ICcnIHx8IE9iamVjdC5rZXlzKGZpbmFsUmV2aWV3LmNoYXJhY3RlcmlzdGljcykgIT09IE9iamVjdC5rZXlzKG1ldGFSZXZpZXdzLmNoYXJhY3RlcmlzdGljcykpIHtcbiAgICAvLyAgIHNldEVycm9yKHsgLi4uZXJyb3IsIG1pc3NpbmdGaWVsZHM6ICcqT25lIG9yIG1vcmUgbWFuZGF0b3J5IGZpZWxkcyBpcyBtaXNzaW5nJyB9KTtcbiAgICAvLyB9XG4gICAgaWYgKGZpbmFsUmV2aWV3LnBob3Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF4aW9zLnBvc3QoJy9yZXZpZXdzJywgZmluYWxSZXZpZXcpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZygnMXN0OiAnLCBkYXRhKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZ2V0UmV2aWV3cyhwcm9kdWN0SWQpKVxuICAgICAgICAudGhlbigoKSA9PiBvbkNsb3NlKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWxSZXZpZXcucGhvdG9zLm1hcCgocGhvdG8pID0+IHtcbiAgICAgICAgaWYgKHBob3RvLnNpemUgPiAxMDAwMDApIHtcbiAgICAgICAgICBzZXRFcnJvcih7IC4uLmVycm9yLCBwaG90b1NpemU6ICcqVGhlIGltYWdlcyBzZWxlY3RlZCBhcmUgaW52YWxpZCBvciB1bmFibGUgdG8gYmUgdXBsb2FkZWQnIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIG5hbWU6IHBob3RvLm5hbWUsXG4gICAgICAgICAgZGF0YTogJycsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0b0Jhc2U2NChwaG90bylcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiBwYXlsb2FkLmRhdGEgPSByZXN1bHQuc3BsaXQoJywnKVsxXSlcbiAgICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KCcvdXBsb2FkX2ltYWdlcycsIHBheWxvYWQpKVxuICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgZmluYWxSZXZpZXcucGhvdG9zID0gcmVzdWx0cztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KCcvcmV2aWV3cycsIGZpbmFsUmV2aWV3KSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKCcyc3Q6ICcsIGRhdGEpKVxuICAgICAgICAudGhlbigoKSA9PiBnZXRSZXZpZXdzKHByb2R1Y3RJZCkpXG4gICAgICAgIC50aGVuKCgpID0+IG9uQ2xvc2UoKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Q2hhcmFjdGVyQ291bnQoNTAgLSB2YWx1ZS5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgaWYgKHJldmlldy5waG90b3MubGVuZ3RoIDwgNSkge1xuICAgICAgc2V0UmV2aWV3KHtcbiAgICAgICAgLi4ucmV2aWV3LFxuICAgICAgICBwaG90b3M6IFsuLi5yZXZpZXcucGhvdG9zLCBlLnRhcmdldC5maWxlc1swXV0sXG4gICAgICB9KTtcbiAgICAgIHNldFRodW1ibmFpbHMoW1xuICAgICAgICAuLi50aHVtYm5haWxzLFxuICAgICAgICBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIChtZXRhUmV2aWV3cyAmJiByZXZpZXcgJiYgcmV2aWV3LnBob3RvcylcbiAgICAgID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgLTE1MHZoKScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgICAgIDxoMz5Xcml0ZSBZb3VyIFJldmlldzwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFib3V0IHRoZSB7bmFtZX1cbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwicmV2aWV3LW1vZGFsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIlwiXG4gICAgICAgICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0+T3ZlcmFsbCBSYXRpbmc6ICo8L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtSc3R5bGVzLnN0YXJSYXRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aXZlU3RhcnMgcmV2aWV3PXtyZXZpZXd9IHNldFJldmlldz17c2V0UmV2aWV3fSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5Xb3VsZCB5b3UgcmVjb21tZW5kIHRoaXMgcHJvZHVjdD8gKjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiWWVzXCIgbmFtZT1cInJlY29tbWVuZFwiIG9uQ2xpY2s9eygpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgcmVjb21tZW5kOiB0cnVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJZZXNcIj5ZZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiTm9cIiBuYW1lPVwicmVjb21tZW5kXCIgb25DbGljaz17KCkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByZWNvbW1lbmQ6IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJOb1wiPk5vPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyaXN0aWNzXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJpc3RpY3M9e21ldGFSZXZpZXdzLmNoYXJhY3RlcmlzdGljc31cbiAgICAgICAgICAgICAgICAgIGNoYXJPYmplY3Q9e2NoYXJPYmplY3R9XG4gICAgICAgICAgICAgICAgICBzZXRSZXZpZXc9e3NldFJldmlld31cbiAgICAgICAgICAgICAgICAgIHJldmlldz17cmV2aWV3fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+UmV2aWV3IFRpdGxlOjwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBzdW1tYXJ5OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBCZXN0IHB1cmNoYXNlIGV2ZXIhXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlJldmlldyBCb2R5OiAqPC9wPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBib2R5OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ291bnRDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiNTBcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xSW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoeSBkaWQgeW91IGxpa2UgdGhlIHByb2R1Y3Qgb3Igbm90P1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSc3R5bGVzLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NoYXJhY3RlckNvdW50IDw9IDAgPyAnTWluaW11bSBDaGFyYWN0ZXJzIFJlYWNoZWQnIDogYE1pbmltdW0gcmVxdWlyZWQgY2hhcmFjdGVycyBsZWZ0OiAke2NoYXJhY3RlckNvdW50fWB9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPldoYXQgaXMgeW91ciBuaWNrbmFtZT8gKjwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSc3R5bGVzLm1vZGFsSW5wdXR9XG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2MFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IGphY2tzb24xMSFcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57cmV2aWV3Lm5hbWUubGVuZ3RoID4gMCA/ICdGb3IgcHJpdmFjeSByZWFzb25zLCBkbyBub3QgdXNlIHlvdXIgZnVsbCBuYW1lIG9yIGVtYWlsIGFkZHJlc3MnIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxwPldoYXQgaXMgeW91ciBlbWFpbD8gKjwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTFAZW1haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3Jldmlldy5lbWFpbC5sZW5ndGggPiAwID8gJ0ZvciBhdXRoZW50aWNhdGlvbiByZWFzb25zLCB5b3Ugd2lsbCBub3QgYmUgZW1haWxlZCcgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7cmV2aWV3LnBob3Rvcy5sZW5ndGggPCA1ID8gPGlucHV0IHZhbHVlPVwiXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImZpbGVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7dGh1bWJuYWlscy5tYXAoKHBob3RvKSA9PiA8aW1nIGFsdD17cGhvdG99IGtleT17cGhvdG99IGNsYXNzTmFtZT17YCR7UnN0eWxlcy5pbWdUaHVtYm5haWx9ICR7UnN0eWxlcy5yZXZpZXdQaG90b31gfSBzcmM9e3Bob3RvfSAvPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtSc3R5bGVzLmNvbW1lbnR9PiogTWFuZGF0b3J5IEZpZWxkczwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3IucGhvdG9TaXplfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvci5taXNzaW5nRmllbGRzfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdCBSZXZpZXdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1Jldmlld3MubW9kdWxlLmNzcyc7XG5pbXBvcnQgSGVscGZ1bCBmcm9tICcuLi9IZWxwZnVsJztcbmltcG9ydCBFeHBhbmRlZFBob3RvcyBmcm9tICcuLi9FeHBhbmRlZFBob3Rvcyc7XG5cbmNvbnN0IFJldmlld1RlbXBsYXRlID0gKHsgcmV2aWV3IH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXZpZXdUZW1wbGF0ZX0+XG4gICAgICAgIDxTdGFyUmF0aW5nIHJhdGluZz17cmV2aWV3LnJhdGluZ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVN1bW1hcnl9PntyZXZpZXcuc3VtbWFyeX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZUJvZHl9IHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcgfX0+e3Jldmlldy5ib2R5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlVXNlckRhdGVCYXJ9PlxuICAgICAgICAgIDxVc2VyRGF0ZUJhciByZXZpZXc9e3Jldmlld30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVIZWxwZnVsUmVwb3J0QmFyfT5cbiAgICAgICAgICA8SGVscGZ1bCByZXZpZXdfaWQ9e3Jldmlldy5yZXZpZXdfaWR9IGhlbHBmdWxuZXNzPXtyZXZpZXcuaGVscGZ1bG5lc3N9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHJldmlldy5yZXNwb25zZSlcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVSZXNwb25zZUZyb21TZWxsZXJ9PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICcwcHgnLCBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzEwcHggMTBweCAwIDEwcHgnLCBmb250U2l6ZTogJzE1cHgnIH19PlJlc3BvbnNlIGZyb20gc2VsbGVyOjwvcD5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JywgcGFkZGluZzogJzEwcHgnLCBmb250U2l6ZTogJzE1cHgnIH19PntyZXZpZXcucmVzcG9uc2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZUltYWdlc30+XG4gICAgICAgICAge3Jldmlldy5waG90b3MubWFwKChwaG90bywgaWQpID0+IDxFeHBhbmRlZFBob3RvcyBwaG90bz17cGhvdG99IGtleT17aWR9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsocmV2aWV3LnJlY29tbWVuZClcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVSZWNvbW1lbmRzQmFyfSBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAgICAgICAmIzEwMDAzOyBZZXMsIEkgcmVjb21tZW5kIHRoaXMgcHJvZHVjdFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU3RhclJhdGluZyA9ICh7IHJhdGluZyB9KSA9PiB7XG4gIGNvbnN0IHN0YXJQZXJjZW50YWdlID0gKHJhdGluZyAvIDUpICogMTAwO1xuICBjb25zdCByb3VuZGVkUGVyY2VudGFnZSA9IChNYXRoLnJvdW5kKHN0YXJQZXJjZW50YWdlICogNSkgLyA1KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ30gc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ1RvcH0gc3R5bGU9e3sgd2lkdGg6IHJvdW5kZWRQZXJjZW50YWdlIH19PlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyUmF0aW5nQm90dG9tfT5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFVzZXJEYXRlQmFyID0gKHsgcmV2aWV3IH0pID0+IHtcbiAgY29uc3QgZ2V0RGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgZGF0ZUFyciA9IGRhdGUuc2xpY2UoMCwgZGF0ZS5pbmRleE9mKCdUJykpLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVBcnIuc2hpZnQoKTtcbiAgICBkYXRlQXJyLnB1c2goeWVhcik7XG4gICAgcmV0dXJuIGRhdGVBcnIuam9pbignLScpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGUgPSBnZXREYXRlKHJldmlldy5kYXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMCwgZm9udFN0eWxlOiAnaXRhbGljJ319PiYjMTAwMDM7IFZlcmlmaWVkIFB1cmNoYXNlcjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRhdGVCYXJ9PntyZXZpZXcucmV2aWV3ZXJfbmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRhdGVCYXJ9PntkYXRlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJldmlld1RlbXBsYXRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJhdGluZ0JyZWFrZG93biBmcm9tICcuL1JhdGluZ0JyZWFrZG93bic7XG5pbXBvcnQgUmV2aWV3VGVtcGxhdGUgZnJvbSAnLi9SZXZpZXdUZW1wbGF0ZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJldmlld3NNb2RhbCBmcm9tICcuL1Jldmlld01vZGFsJztcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4uL1N0YXJSYXRpbmcnO1xuXG5jb25zdCBSZXZpZXdzID0gKHsgcHJvZHVjdElkLCBuYW1lLCBoYW5kbGVSZXZpZXdBdmVyYWdlIH0pID0+IHtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGlzcGxheWVkUmV2aWV3cywgc2V0RGlzcGxheWVkUmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFttZXRhUmV2aWV3cywgc2V0TWV0YVJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ3JlbGV2YW50Jyk7XG4gIGNvbnN0IFttb3JlQnV0dG9uLCBzZXRNb3JlQnV0dG9uXSA9IHVzZVN0YXRlKCdNb3JlIFJldmlld3MnKTtcblxuICBjb25zdCBjaGFyT2JqZWN0ID0ge1xuICAgIFNpemU6IHtcbiAgICAgIDE6IFwiQSBzaXplIHRvbyBzbWFsbFwiLFxuICAgICAgMjogXCIxLzIgYSBzaXplIHRvbyBzbWFsbFwiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIjEvMiBhIHNpemUgdG9vIGJpZ1wiLFxuICAgICAgNTogXCJBIHNpemUgdG9vIHdpZGVcIixcbiAgICB9LFxuICAgIFdpZHRoOiB7XG4gICAgICAxOiBcIlRvbyBuYXJyb3dcIixcbiAgICAgIDI6IFwiU2xpZ2h0bHkgbmFycm93XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiU2xpZ2h0bHkgd2lkZVwiLFxuICAgICAgNTogXCJUb28gd2lkZVwiLFxuICAgIH0sXG4gICAgQ29tZm9ydDoge1xuICAgICAgMTogXCJVbmNvbWZvcnRhYmxlXCIsXG4gICAgICAyOiBcIlNsaWdodGx5IHVuY29tZm9ydGFibGVcIixcbiAgICAgIDM6IFwiT2tcIixcbiAgICAgIDQ6IFwiQ29tZm9ydGFibGVcIixcbiAgICAgIDU6IFwiUGVyZmVjdFwiXG4gICAgfSxcbiAgICBRdWFsaXR5OiB7XG4gICAgICAxOiBcIlBvb3JcIixcbiAgICAgIDI6IFwiQmVsb3cgYXZlcmFnZVwiLFxuICAgICAgMzogXCJXaGF0IEkgZXhwZWN0ZWRcIixcbiAgICAgIDQ6IFwiUHJldHR5IGdyZWF0XCIsXG4gICAgICA1OiBcIlBlcmZlY3RcIixcbiAgICB9LFxuICAgIExlbmd0aDoge1xuICAgICAgMTogXCJSdW5zIHNob3J0XCIsXG4gICAgICAyOiBcIlJ1bnMgc2xpZ2h0bHkgc2hvcnRcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCJSdW5zIHNsaWdodGx5IGxvbmdcIixcbiAgICAgIDU6IFwiUnVucyBsb25nXCIsXG4gICAgfSxcbiAgICBGaXQ6IHtcbiAgICAgIDE6IFwiUnVucyB0aWdodFwiLFxuICAgICAgMjogXCJSdW5zIHNsaWdodGx5IHRpZ2h0XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiUnVucyBzbGlnaHRseSBsb25nXCIsXG4gICAgICA1OiBcIlJ1bnMgbG9uZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZ2V0UmV2aWV3cyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHJldmlld3NVUkwgPSBgL3Jldmlld3Mvc29ydC8ke2lkfS8ke3NvcnR9YDtcbiAgICBheGlvcy5nZXQocmV2aWV3c1VSTClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRSZXZpZXdzKGRhdGEpO1xuICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldERpc3BsYXllZFJldmlld3MoZGF0YS5zbGljZSgwLCAyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9O1xuXG4gIGNvbnN0IGdldE1ldGFSZXZpZXdzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgbWV0YVJldmlld3NVUkwgPSBgL3Jldmlld3MvbWV0YS8ke2lkfWA7XG4gICAgYXhpb3MuZ2V0KG1ldGFSZXZpZXdzVVJMKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHNldE1ldGFSZXZpZXdzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFJldmlld3MocHJvZHVjdElkKTtcbiAgICBzZXRFeHBhbmRlZChleHBhbmRlZCk7XG4gIH0sIFtzb3J0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXRhUmV2aWV3cyhwcm9kdWN0SWQpO1xuICAgIGdldFJldmlld3MocHJvZHVjdElkKTtcbiAgfSwgW3Byb2R1Y3RJZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGV4cGFuZGVkKVxuICAgID8gc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdzKVxuICAgIDogc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdzLnNsaWNlKDAsIDIpKVxuICB9LCBbZXhwYW5kZWRdKTtcblxuICBjb25zdCBoYW5kbGVTdGFyRmlsdGVycyA9IChmaWx0ZXJzKSA9PiB7XG4gICAgY29uc3QgcmV2aWV3QXJyYXkgPSBbXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cy5zbGljZSgwLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgcmV2aWV3cy5maWx0ZXIoKHJldmlldykgPT4ge1xuICAgICAgICAgIGlmIChyZXZpZXcucmF0aW5nID09PSBOdW1iZXIoZmlsdGVyKSkgcmV2aWV3QXJyYXkucHVzaChyZXZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdBcnJheSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vcmVCdXR0b24gPSAoKSA9PiB7XG4gICAgKGRpc3BsYXllZFJldmlld3MubGVuZ3RoIDw9IDIpXG4gICAgICA/IHNldE1vcmVCdXR0b24oJ01vcmUgUmV2aWV3cycpXG4gICAgICA6IHNldE1vcmVCdXR0b24oJ1Nob3cgTGVzcyBSZXZpZXdzJyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVNb3JlQnV0dG9uKCk7XG4gIH0sIFtkaXNwbGF5ZWRSZXZpZXdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICAobWV0YVJldmlld3MgJiYgcmV2aWV3cyAmJiBwcm9kdWN0SWQpXG4gICAgICA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50QnJlYWtkb3dufT5cbiAgICAgICAgICAgIDxSYXRpbmdCcmVha2Rvd25cbiAgICAgICAgICAgICAgcmV2aWV3cz17cmV2aWV3c31cbiAgICAgICAgICAgICAgbWV0YVJldmlld3M9e21ldGFSZXZpZXdzfVxuICAgICAgICAgICAgICBoYW5kbGVTdGFyRmlsdGVycz17aGFuZGxlU3RhckZpbHRlcnN9XG4gICAgICAgICAgICAgIGhhbmRsZVJldmlld0F2ZXJhZ2U9e2hhbmRsZVJldmlld0F2ZXJhZ2V9XG4gICAgICAgICAgICAgIGNoYXJPYmplY3Q9e2NoYXJPYmplY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50SGVhZGVyfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogJ2NlbnRlcicsIHBhZGRpbmdMZWZ0OiAnMjBweCcgfX1cbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzb3J0LW9uLWRyb3Bkb3duXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU29ydCBvbjpcbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldFNvcnQoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlJlbGV2YW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5IZWxwZnVsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5OZXdlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heEhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fSBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRJbmRpdmlkdWFsUmV2aWV3fT5cbiAgICAgICAgICAgIHtkaXNwbGF5ZWRSZXZpZXdzLm1hcCgocmV2aWV3LCBpZCkgPT4gKFxuICAgICAgICAgICAgICA8UmV2aWV3VGVtcGxhdGUgcmV2aWV3PXtyZXZpZXd9IGtleT17aWR9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEZvb3Rlcn0+XG4gICAgICAgICAgICB7cmV2aWV3cy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bW9yZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+QWRkIFJldmlldyAgKyA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxSZXZpZXdzTW9kYWxcbiAgICAgICAgICAgICAgcHJvZHVjdElkPXtwcm9kdWN0SWR9XG4gICAgICAgICAgICAgIGdldFJldmlld3M9e2dldFJldmlld3N9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgbWV0YVJldmlld3M9e21ldGFSZXZpZXdzfVxuICAgICAgICAgICAgICBjaGFyT2JqZWN0PXtjaGFyT2JqZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9