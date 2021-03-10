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
        gridTemplateColumns: 'repeat(5, 30%)',
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

    var promises = [];

    if (!validEmailRegex.test(finalReview.email)) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        email: '*You must enter a valid email'
      }));
      return;
    }

    if (finalReview.body.length < 50 || finalReview.rating === '' || finalReview.recommend === '' || finalReview.name === '' || Object.keys(finalReview.characteristics) !== Object.keys(metaReviews.characteristics)) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        missingFields: '*One or more mandatory fields is missing'
      }));
      return;
    }

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
      }).then(function () {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/reviews', finalReview);
      }).then(function () {
        return getReviews(productId);
      }).then(function () {
        return onClose();
      })["catch"](console.log);
    });
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
    getReviews(20101);
    setExpanded(expanded);
  }, [sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getMetaReviews(20101);
    getReviews(20101);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZC5qcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGFuZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlbHBmdWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9DaGFyYWN0ZXJpc3RpY3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9JbnRlcmFjdGl2ZVN0YXJzLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Jldmlld3MvUmV2aWV3TW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9SZXZpZXdUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzL1Jldmlld3MuanN4Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhck9iamVjdCIsInNldFJldmlldyIsInJldmlldyIsImNoYXJzIiwic2V0Q2hhcnMiLCJoYW5kbGVDaGFyYWN0ZXJpc3RpY3MiLCJ2YWx1ZSIsInRhcmdldCIsImFyciIsInNwbGl0IiwicmF0aW5nIiwiaWQiLCJuZXdDaGFyYWN0ZXJpc3RpY3MiLCJOdW1iZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwieCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJqdXN0aWZ5U2VsZiIsIkludGVyYWN0aXZlU3RhcnMiLCJzZXRSYXRpbmciLCJob3ZlciIsInNldEhvdmVyIiwic2V0VmFsdWUiLCJkZXNjcmlwdGlvbk9iaiIsImhhbmRsZVZhbHVlIiwiaW5kZXgiLCJBcnJheSIsInN0YXIiLCJjb21tZW50IiwiUmV2aWV3c01vZGFsIiwicHJvZHVjdElkIiwib25DbG9zZSIsIm9wZW4iLCJnZXRSZXZpZXdzIiwibmFtZSIsIm1ldGFSZXZpZXdzIiwicHJvZHVjdF9pZCIsInN1bW1hcnkiLCJib2R5IiwicmVjb21tZW5kIiwiZW1haWwiLCJwaG90b3MiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsInBob3RvU2l6ZSIsIm1pc3NpbmdGaWVsZHMiLCJlcnJvciIsInNldEVycm9yIiwiY2hhcmFjdGVyQ291bnQiLCJzZXRDaGFyYWN0ZXJDb3VudCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaW5hbFJldmlldyIsInByb21pc2VzIiwidGVzdCIsImxlbmd0aCIsImtleXMiLCJzaXplIiwicGF5bG9hZCIsImRhdGEiLCJwcm9taXNlIiwicHVzaCIsImFsbCIsInJlc3VsdHMiLCJoYW5kbGVDb3VudENoYW5nZSIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWF4SGVpZ2h0IiwidHJhbnNmb3JtIiwibW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsIm1hcmdpbiIsIlJzdHlsZXMiLCJzdGFyUmF0aW5nIiwiZmluZVByaW50IiwibW9kYWxCdXR0b24iLCJSZXZpZXdUZW1wbGF0ZSIsInJldmlld1RlbXBsYXRlIiwidGVtcGxhdGVTdW1tYXJ5IiwidGVtcGxhdGVVc2VyRGF0ZUJhciIsInRlbXBsYXRlSGVscGZ1bFJlcG9ydEJhciIsInJlc3BvbnNlIiwidGVtcGxhdGVSZXNwb25zZUZyb21TZWxsZXIiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsInRlbXBsYXRlSW1hZ2VzIiwicGFkZGluZ1JpZ2h0IiwiU3RhclJhdGluZyIsInN0YXJQZXJjZW50YWdlIiwicm91bmRlZFBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwic3RhclJhdGluZ0JvdHRvbSIsIlVzZXJEYXRlQmFyIiwiZ2V0RGF0ZSIsImRhdGUiLCJkYXRlQXJyIiwic2xpY2UiLCJpbmRleE9mIiwieWVhciIsInNoaWZ0Iiwiam9pbiIsImZvbnRTdHlsZSIsInVzZXJEYXRlQmFyIiwicmV2aWV3ZXJfbmFtZSIsIlJldmlld3MiLCJoYW5kbGVSZXZpZXdBdmVyYWdlIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJkaXNwbGF5ZWRSZXZpZXdzIiwic2V0RGlzcGxheWVkUmV2aWV3cyIsInNldE1ldGFSZXZpZXdzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic29ydCIsInNldFNvcnQiLCJtb3JlQnV0dG9uIiwic2V0TW9yZUJ1dHRvbiIsIlNpemUiLCJXaWR0aCIsIkNvbWZvcnQiLCJRdWFsaXR5IiwiTGVuZ3RoIiwiRml0IiwicmV2aWV3c1VSTCIsImdldE1ldGFSZXZpZXdzIiwibWV0YVJldmlld3NVUkwiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGFyRmlsdGVycyIsImZpbHRlcnMiLCJyZXZpZXdBcnJheSIsImZpbHRlciIsImhhbmRsZU1vcmVCdXR0b24iLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRCcmVha2Rvd24iLCJhbGlnblNlbGYiLCJwYWRkaW5nTGVmdCIsIm92ZXJmbG93WSIsInBhcmVudEluZGl2aWR1YWxSZXZpZXciLCJwYXJlbnRGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEI7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0pDLCtDQUFRLENBQUMsS0FBRCxDQURKO0FBQUE7QUFBQSxNQUM3QkMsUUFENkI7QUFBQSxNQUNuQkMsV0FEbUI7O0FBR3BDLFNBQ0VILEtBQUssZ0JBRUQ7QUFBTSxhQUFTLEVBQUVFLFFBQVEsR0FBR0UsaUZBQUgsR0FBeUI7QUFBbEQsS0FDSSxDQUFDRixRQUFGLGdCQUVHO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxPQUFHLEVBQUVGLEtBQUssQ0FBQ0ssR0FBTixHQUFZTCxLQUFLLENBQUNLLEdBQWxCLEdBQXdCTCxLQUYvQjtBQUdFLE9BQUcsRUFBQyxRQUhOO0FBSUUsYUFBUyxFQUFFSSxpRkFKYjtBQUtFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsS0FMWDtBQU1FLGFBQVMsRUFBRTtBQUFBLGFBQU1D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LFFBQUksRUFBRUQsTUFKUjtBQUtFLFFBQUksRUFBRWhHLElBTFI7QUFNRSxlQUFXLEVBQUVDLFdBTmY7QUFPRSxjQUFVLEVBQUUxQztBQVBkLElBZkYsQ0E1QkYsQ0FGSixHQXlESSxJQTFETjtBQTRERCxDQWpMRDs7QUFtTEEsaUVBQWVrSSxPQUFmLEUiLCJmaWxlIjoiY2xpZW50X3NyY19jb21wb25lbnRzX3Jldmlld3NfUmV2aWV3c19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRhdGEgPSB7XG5cdFwiYm9keVwiOiBcIjxwYXRoIGNsYXNzPVxcXCJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTFcXFwiIGQ9XFxcIk01LjkyIDJhMSAxIDAgMCAwLTEgMXYzMGExIDEgMCAwIDAgMiAwVjNhMSAxIDAgMCAwLTEtMXpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPjxwYXRoIGNsYXNzPVxcXCJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTJcXFwiIGQ9XFxcIk0zMC41IDMuODJhMSAxIDAgMCAwLTEgMGExNC45IDE0LjkgMCAwIDEtNi4xMyAxLjE2YTEzLjExIDEzLjExIDAgMCAxLTUuMTgtMS40OUExMi43OCAxMi43OCAwIDAgMCAxMy4yIDJhMTAuODYgMTAuODYgMCAwIDAtNC4yLjg1VjIwYTguOCA4LjggMCAwIDEgNC4yNS0xLjA4YTExLjIyIDExLjIyIDAgMCAxIDQuMiAxLjI4YTE0Ljg0IDE0Ljg0IDAgMCAwIDYgMS42NmExNi43OSAxNi43OSAwIDAgMCA3LTEuMzdhMSAxIDAgMCAwIC41NS0uODlWNC42N2ExIDEgMCAwIDAtLjUtLjg1elxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIi8+XCIsXG5cdFwid2lkdGhcIjogMzYsXG5cdFwiaGVpZ2h0XCI6IDM2XG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBFeHBhbmRlZFBob3RvcyA9ICh7IHBob3RvIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICBwaG90b1xuICAgICAgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBzdHlsZXMub3ZlcmxheVBob3RvIDogJyd9PlxuICAgICAgICAgIHsoIWV4cGFuZGVkKVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nVGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVkUGhvdG9zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEljb24sIElubGluZUljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgZmxhZ1NvbGlkIGZyb20gJ0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZCc7XG5cblxuY29uc3QgSGVscGZ1bCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGhlbHBmdWxuZXNzIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShoZWxwZnVsbmVzcyk7XG4gIGNvbnN0IFtyZXBvcnRlZCwgc2V0UmVwb3J0ZWRdID0gdXNlU3RhdGUoJ1JlcG9ydCcpO1xuICBjb25zdCBbaXNSZXBvcnRlZCwgc2V0SXNSZXBvcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnQgPSAoZSkgPT4ge1xuICAgIHNldENvdW50KGhlbHBmdWxuZXNzICsgMSk7XG5cbiAgICBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBjb25zdCB7IHJldmlld19pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cmV2aWV3X2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnF1ZXN0aW9uX2lkKSB7XG4gICAgICBjb25zdCB7IHF1ZXN0aW9uX2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3FhL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uX2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFuc3dlcl9pZCkge1xuICAgICAgY29uc3QgeyBhbnN3ZXJfaWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcWEvYW5zd2Vycy8ke2Fuc3dlcl9pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcG9ydCA9ICgpID0+IHtcbiAgICBzZXRSZXBvcnRlZCgnUmVwb3J0ZWQnKTtcbiAgICBzZXRJc1JlcG9ydGVkKHRydWUpO1xuICAgIGlmIChwcm9wcy5hbnN3ZXJfaWQpIHtcbiAgICAgIGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHtwcm9wcy5hbnN3ZXJfaWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cHJvcHMucmV2aWV3X2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MucHV0KGAvcWEvcXVlc3Rpb25zLyR7cHJvcHMucXVlc3Rpb25faWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bH0+XG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGVscGZ1bFRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsfT5XYXMgdGhpcyBoZWxwZnVsPzwvZGl2PlxuICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZUNvdW50fSBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsQnV0dG9ufSB2YWx1ZT1cInllc1wiPlllczwvYnV0dG9uPlxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtY291bnRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWxwZnVsfSAke3N0eWxlcy5oZWxwZnVsQ291bnR9YH0+XG4gICAgICAgIChcbiAgICAgICAge2NvdW50fVxuICAgICAgICApXG4gICAgICAgIHsnICd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJyZXBvcnQtYnV0dG9uXCIgY2xhc3NOYW1lPXtpc1JlcG9ydGVkID8gc3R5bGVzLnJlcG9ydGVkVHJ1ZSA6IHN0eWxlcy5yZXBvcnRlZH0gb25DbGljaz17cmVwb3J0fSB0eXBlPVwic3VibWl0XCI+e3JlcG9ydGVkfTwvYnV0dG9uPlxuICAgICAge2lzUmVwb3J0ZWQgPyA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGFnfSBpY29uPXtmbGFnU29saWR9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBmdWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoYXJhY3RlcmlzdGljcyA9ICh7IGNoYXJhY3RlcmlzdGljcywgY2hhck9iamVjdCwgc2V0UmV2aWV3LCByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbY2hhcnMsIHNldENoYXJzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGFyYWN0ZXJpc3RpY3MgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGFyciA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgY29uc3QgcmF0aW5nID0gYXJyWzBdO1xuICAgIGNvbnN0IGlkID0gYXJyWzFdO1xuICAgIGNvbnN0IG5ld0NoYXJhY3RlcmlzdGljcyA9IGNoYXJzO1xuICAgIG5ld0NoYXJhY3RlcmlzdGljc1tpZF0gPSBOdW1iZXIocmF0aW5nKTtcbiAgICBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIGNoYXJhY3RlcmlzdGljczogbmV3Q2hhcmFjdGVyaXN0aWNzIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgKGNoYXJhY3RlcmlzdGljcylcbiAgICAgID8gT2JqZWN0LmVudHJpZXMoY2hhcmFjdGVyaXN0aWNzKS5tYXAoKHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3hbMV0uaWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFyYWN0ZXJpc3RpY3N9IGRhdGEtdGVzdGlkPVwiY2hhcmFjdGVyaXN0aWMtbWFwXCI+XG4gICAgICAgICAgPHA+e3hbMF19ICo8L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoNSwgMzAlKScsIGZvbnRTaXplOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gYXV0bycsIGdyaWRDb2x1bW46ICcxLzInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycsIGp1c3RpZnlTZWxmOiAnY2VudGVyJyB9fSBodG1sRm9yPVwib25lXCI+e2NoYXJPYmplY3RbeFswXV1bMV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzIvMycgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJ0d29cIj57Y2hhck9iamVjdFt4WzBdXVsyXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AyLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnMy80JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cInRocmVlXCI+e2NoYXJPYmplY3RbeFswXV1bM119PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMy0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzQvNScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmb3VyXCI+e2NoYXJPYmplY3RbeFswXV1bNF19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNC0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzUvNicgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmaXZlXCI+e2NoYXJPYmplY3RbeFswXV1bNV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbnRlcmFjdGl2ZVN0YXJzID0gKHsgcmV2aWV3LCBzZXRSZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uT2JqID0ge1xuICAgIDE6ICdQb29yJyxcbiAgICAyOiAnRmFpcicsXG4gICAgMzogJ0F2ZXJhZ2UnLFxuICAgIDQ6ICdHb29kJyxcbiAgICA1OiAnR3JlYXQnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZhbHVlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0VmFsdWUoZGVzY3JpcHRpb25PYmpbaW5kZXhdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiPlxuICAgICAge1suLi5BcnJheSg1KV0ubWFwKChzdGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5kZXggPD0gKGhvdmVyIHx8IHJhdGluZykgPyBzdHlsZXMub24gOiBzdHlsZXMub2ZmfSAke3N0eWxlcy5idXR0b259YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmF0aW5nKGluZGV4KTtcbiAgICAgICAgICAgICAgaGFuZGxlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSYXRpbmcocmF0aW5nKTtcbiAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByYXRpbmc6IGluZGV4IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3RpZD1cImludGVyYWN0aXZlLXN0YXJzXCI+4piFPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT57dmFsdWV9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJhY3RpdmVTdGFycztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENoYXJhY3RlcmlzdGljcyBmcm9tICcuL0NoYXJhY3RlcmlzdGljcyc7XG5pbXBvcnQgSW50ZXJhY3RpdmVTdGFycyBmcm9tICcuL0ludGVyYWN0aXZlU3RhcnMnO1xuXG5jb25zdCBSZXZpZXdzTW9kYWwgPSAoe1xuICBwcm9kdWN0SWQsIG9uQ2xvc2UsIG9wZW4sIGdldFJldmlld3MsIG5hbWUsIG1ldGFSZXZpZXdzLCBjaGFyT2JqZWN0XG59KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZSh7XG4gICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgIHJhdGluZzogJycsXG4gICAgc3VtbWFyeTogJycsXG4gICAgYm9keTogJycsXG4gICAgcmVjb21tZW5kOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9zOiBbXSxcbiAgICBjaGFyYWN0ZXJpc3RpY3M6IHt9LFxuICB9KTtcbiAgY29uc3QgW3RodW1ibmFpbHMsIHNldFRodW1ibmFpbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9TaXplOiAnJyxcbiAgICBtaXNzaW5nRmllbGRzOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJDb3VudCwgc2V0Q2hhcmFjdGVyQ291bnRdID0gdXNlU3RhdGUoNTApO1xuXG4gIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IFJlZ0V4cChcbiAgICAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pXG4gICk7XG5cbiAgY29uc3QgdG9CYXNlNjQgPSAoZmlsZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbmFsUmV2aWV3ID0geyAuLi5yZXZpZXcgfTtcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgaWYgKCF2YWxpZEVtYWlsUmVnZXgudGVzdChmaW5hbFJldmlldy5lbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKHsgLi4uZXJyb3IsIGVtYWlsOiAnKllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmaW5hbFJldmlldy5ib2R5Lmxlbmd0aCA8IDUwIHx8IGZpbmFsUmV2aWV3LnJhdGluZyA9PT0gJycgfHwgZmluYWxSZXZpZXcucmVjb21tZW5kID09PSAnJyB8fCBmaW5hbFJldmlldy5uYW1lID09PSAnJyB8fCBPYmplY3Qua2V5cyhmaW5hbFJldmlldy5jaGFyYWN0ZXJpc3RpY3MpICE9PSBPYmplY3Qua2V5cyhtZXRhUmV2aWV3cy5jaGFyYWN0ZXJpc3RpY3MpKSB7XG4gICAgICBzZXRFcnJvcih7IC4uLmVycm9yLCBtaXNzaW5nRmllbGRzOiAnKk9uZSBvciBtb3JlIG1hbmRhdG9yeSBmaWVsZHMgaXMgbWlzc2luZycgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmluYWxSZXZpZXcucGhvdG9zLm1hcCgocGhvdG8pID0+IHtcbiAgICAgIGlmIChwaG90by5zaXplID4gMTAwMDAwKSB7XG4gICAgICAgIHNldEVycm9yKHsgLi4uZXJyb3IsIHBob3RvU2l6ZTogJypUaGUgaW1hZ2VzIHNlbGVjdGVkIGFyZSBpbnZhbGlkIG9yIHVuYWJsZSB0byBiZSB1cGxvYWRlZCcgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG5hbWU6IHBob3RvLm5hbWUsXG4gICAgICAgIGRhdGE6ICcnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0b0Jhc2U2NChwaG90bylcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcGF5bG9hZC5kYXRhID0gcmVzdWx0LnNwbGl0KCcsJylbMV0pXG4gICAgICAgIC50aGVuKCgpID0+IGF4aW9zLnBvc3QoJy91cGxvYWRfaW1hZ2VzJywgcGF5bG9hZCkpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBmaW5hbFJldmlldy5waG90b3MgPSByZXN1bHRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KCcvcmV2aWV3cycsIGZpbmFsUmV2aWV3KSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZ2V0UmV2aWV3cyhwcm9kdWN0SWQpKVxuICAgICAgICAudGhlbigoKSA9PiBvbkNsb3NlKCkpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ291bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldENoYXJhY3RlckNvdW50KDUwIC0gdmFsdWUubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGlmIChyZXZpZXcucGhvdG9zLmxlbmd0aCA8IDUpIHtcbiAgICAgIHNldFJldmlldyh7XG4gICAgICAgIC4uLnJldmlldyxcbiAgICAgICAgcGhvdG9zOiBbLi4ucmV2aWV3LnBob3RvcywgZS50YXJnZXQuZmlsZXNbMF1dLFxuICAgICAgfSk7XG4gICAgICBzZXRUaHVtYm5haWxzKFtcbiAgICAgICAgLi4udGh1bWJuYWlscyxcbiAgICAgICAgVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSksXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAobWV0YVJldmlld3MgJiYgcmV2aWV3ICYmIHJldmlldy5waG90b3MpXG4gICAgICA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e29wZW4gPyBzdHlsZXMub3ZlcmxheSA6ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScgOiAndHJhbnNsYXRlKC01MCUsIC0xNTB2aCknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgICAgICA8aDM+V3JpdGUgWW91ciBSZXZpZXc8L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBYm91dCB0aGUge25hbWV9XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInJldmlldy1tb2RhbFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY3Rpb249XCJcIlxuICAgICAgICAgICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19Pk92ZXJhbGwgUmF0aW5nOiAqPC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UnN0eWxlcy5zdGFyUmF0aW5nfT5cbiAgICAgICAgICAgICAgICAgIDxJbnRlcmFjdGl2ZVN0YXJzIHJldmlldz17cmV2aWV3fSBzZXRSZXZpZXc9e3NldFJldmlld30gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+V291bGQgeW91IHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIlllc1wiIG5hbWU9XCJyZWNvbW1lbmRcIiBvbkNsaWNrPXsoKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIHJlY29tbWVuZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiWWVzXCI+WWVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIk5vXCIgbmFtZT1cInJlY29tbWVuZFwiIG9uQ2xpY2s9eygpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgcmVjb21tZW5kOiBmYWxzZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiTm9cIj5ObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcmlzdGljc1xuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyaXN0aWNzPXttZXRhUmV2aWV3cy5jaGFyYWN0ZXJpc3RpY3N9XG4gICAgICAgICAgICAgICAgICBjaGFyT2JqZWN0PXtjaGFyT2JqZWN0fVxuICAgICAgICAgICAgICAgICAgc2V0UmV2aWV3PXtzZXRSZXZpZXd9XG4gICAgICAgICAgICAgICAgICByZXZpZXc9e3Jldmlld31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlJldmlldyBUaXRsZTo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgc3VtbWFyeTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogQmVzdCBwdXJjaGFzZSBldmVyIVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD5SZXZpZXcgQm9keTogKjwvcD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJldmlldyh7IC4uLnJldmlldywgYm9keTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvdW50Q2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMDBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucUlucHV0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaHkgZGlkIHlvdSBsaWtlIHRoZSBwcm9kdWN0IG9yIG5vdD9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5jb21tZW50fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXJDb3VudCA8PSAwID8gJ01pbmltdW0gQ2hhcmFjdGVycyBSZWFjaGVkJyA6IGBNaW5pbXVtIHJlcXVpcmVkIGNoYXJhY3RlcnMgbGVmdDogJHtjaGFyYWN0ZXJDb3VudH1gfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgbmlja25hbWU/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTEhXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3Jldmlldy5uYW1lLmxlbmd0aCA+IDAgPyAnRm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgZW1haWw/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja3NvbjExQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntyZXZpZXcuZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAge3Jldmlldy5waG90b3MubGVuZ3RoIDwgNSA/IDxpbnB1dCB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAge3RodW1ibmFpbHMubWFwKChwaG90bykgPT4gPGltZyBhbHQ9e3Bob3RvfSBrZXk9e3Bob3RvfSBjbGFzc05hbWU9e2Ake1JzdHlsZXMuaW1nVGh1bWJuYWlsfSAke1JzdHlsZXMucmV2aWV3UGhvdG99YH0gc3JjPXtwaG90b30gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UnN0eWxlcy5jb21tZW50fT4qIE1hbmRhdG9yeSBGaWVsZHM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3IuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e2Vycm9yLnBob3RvU2l6ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3IubWlzc2luZ0ZpZWxkc308L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXQgUmV2aWV3XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICAgIDogbnVsbFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3c01vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlbHBmdWwgZnJvbSAnLi4vSGVscGZ1bCc7XG5pbXBvcnQgRXhwYW5kZWRQaG90b3MgZnJvbSAnLi4vRXhwYW5kZWRQaG90b3MnO1xuXG5jb25zdCBSZXZpZXdUZW1wbGF0ZSA9ICh7IHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3VGVtcGxhdGV9PlxuICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9e3Jldmlldy5yYXRpbmd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVTdW1tYXJ5fT57cmV2aWV3LnN1bW1hcnl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVCb2R5fSBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnIH19PntyZXZpZXcuYm9keX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVVzZXJEYXRlQmFyfT5cbiAgICAgICAgICA8VXNlckRhdGVCYXIgcmV2aWV3PXtyZXZpZXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlSGVscGZ1bFJlcG9ydEJhcn0+XG4gICAgICAgICAgPEhlbHBmdWwgcmV2aWV3X2lkPXtyZXZpZXcucmV2aWV3X2lkfSBoZWxwZnVsbmVzcz17cmV2aWV3LmhlbHBmdWxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhyZXZpZXcucmVzcG9uc2UpXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlUmVzcG9uc2VGcm9tU2VsbGVyfT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JywgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcxMHB4IDEwcHggMCAxMHB4JywgZm9udFNpemU6ICcxNXB4JyB9fT5SZXNwb25zZSBmcm9tIHNlbGxlcjo8L3A+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzBweCcsIHBhZGRpbmc6ICcxMHB4JywgZm9udFNpemU6ICcxNXB4JyB9fT57cmV2aWV3LnJlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVJbWFnZXN9PlxuICAgICAgICAgIHtyZXZpZXcucGhvdG9zLm1hcCgocGhvdG8sIGlkKSA9PiA8RXhwYW5kZWRQaG90b3MgcGhvdG89e3Bob3RvfSBrZXk9e2lkfSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHJldmlldy5yZWNvbW1lbmQpXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlUmVjb21tZW5kc0Jhcn0gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgICAgICAgJiMxMDAwMzsgWWVzLCBJIHJlY29tbWVuZCB0aGlzIHByb2R1Y3RcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFN0YXJSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xuICBjb25zdCBzdGFyUGVyY2VudGFnZSA9IChyYXRpbmcgLyA1KSAqIDEwMDtcbiAgY29uc3Qgcm91bmRlZFBlcmNlbnRhZ2UgPSAoTWF0aC5yb3VuZChzdGFyUGVyY2VudGFnZSAqIDUpIC8gNSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJSYXRpbmd9IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnbGVmdCcgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJSYXRpbmdUb3B9IHN0eWxlPXt7IHdpZHRoOiByb3VuZGVkUGVyY2VudGFnZSB9fT5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ0JvdHRvbX0+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBVc2VyRGF0ZUJhciA9ICh7IHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IGdldERhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVBcnIgPSBkYXRlLnNsaWNlKDAsIGRhdGUuaW5kZXhPZignVCcpKS5zcGxpdCgnLScpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlQXJyLnNoaWZ0KCk7XG4gICAgZGF0ZUFyci5wdXNoKHllYXIpO1xuICAgIHJldHVybiBkYXRlQXJyLmpvaW4oJy0nKTtcbiAgfTtcblxuICBjb25zdCBkYXRlID0gZ2V0RGF0ZShyZXZpZXcuZGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTAsIGZvbnRTdHlsZTogJ2l0YWxpYyd9fT4mIzEwMDAzOyBWZXJpZmllZCBQdXJjaGFzZXI8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEYXRlQmFyfT57cmV2aWV3LnJldmlld2VyX25hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEYXRlQmFyfT57ZGF0ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSZXZpZXdUZW1wbGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSYXRpbmdCcmVha2Rvd24gZnJvbSAnLi9SYXRpbmdCcmVha2Rvd24nO1xuaW1wb3J0IFJldmlld1RlbXBsYXRlIGZyb20gJy4vUmV2aWV3VGVtcGxhdGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUmV2aWV3cy5tb2R1bGUuY3NzJztcbmltcG9ydCBSZXZpZXdzTW9kYWwgZnJvbSAnLi9SZXZpZXdNb2RhbCc7XG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICcuLi9TdGFyUmF0aW5nJztcblxuY29uc3QgUmV2aWV3cyA9ICh7IHByb2R1Y3RJZCwgbmFtZSwgaGFuZGxlUmV2aWV3QXZlcmFnZSB9KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3BsYXllZFJldmlld3MsIHNldERpc3BsYXllZFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWV0YVJldmlld3MsIHNldE1ldGFSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdyZWxldmFudCcpO1xuICBjb25zdCBbbW9yZUJ1dHRvbiwgc2V0TW9yZUJ1dHRvbl0gPSB1c2VTdGF0ZSgnTW9yZSBSZXZpZXdzJyk7XG5cbiAgY29uc3QgY2hhck9iamVjdCA9IHtcbiAgICBTaXplOiB7XG4gICAgICAxOiBcIkEgc2l6ZSB0b28gc21hbGxcIixcbiAgICAgIDI6IFwiMS8yIGEgc2l6ZSB0b28gc21hbGxcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCIxLzIgYSBzaXplIHRvbyBiaWdcIixcbiAgICAgIDU6IFwiQSBzaXplIHRvbyB3aWRlXCIsXG4gICAgfSxcbiAgICBXaWR0aDoge1xuICAgICAgMTogXCJUb28gbmFycm93XCIsXG4gICAgICAyOiBcIlNsaWdodGx5IG5hcnJvd1wiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIlNsaWdodGx5IHdpZGVcIixcbiAgICAgIDU6IFwiVG9vIHdpZGVcIixcbiAgICB9LFxuICAgIENvbWZvcnQ6IHtcbiAgICAgIDE6IFwiVW5jb21mb3J0YWJsZVwiLFxuICAgICAgMjogXCJTbGlnaHRseSB1bmNvbWZvcnRhYmxlXCIsXG4gICAgICAzOiBcIk9rXCIsXG4gICAgICA0OiBcIkNvbWZvcnRhYmxlXCIsXG4gICAgICA1OiBcIlBlcmZlY3RcIlxuICAgIH0sXG4gICAgUXVhbGl0eToge1xuICAgICAgMTogXCJQb29yXCIsXG4gICAgICAyOiBcIkJlbG93IGF2ZXJhZ2VcIixcbiAgICAgIDM6IFwiV2hhdCBJIGV4cGVjdGVkXCIsXG4gICAgICA0OiBcIlByZXR0eSBncmVhdFwiLFxuICAgICAgNTogXCJQZXJmZWN0XCIsXG4gICAgfSxcbiAgICBMZW5ndGg6IHtcbiAgICAgIDE6IFwiUnVucyBzaG9ydFwiLFxuICAgICAgMjogXCJSdW5zIHNsaWdodGx5IHNob3J0XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiUnVucyBzbGlnaHRseSBsb25nXCIsXG4gICAgICA1OiBcIlJ1bnMgbG9uZ1wiLFxuICAgIH0sXG4gICAgRml0OiB7XG4gICAgICAxOiBcIlJ1bnMgdGlnaHRcIixcbiAgICAgIDI6IFwiUnVucyBzbGlnaHRseSB0aWdodFwiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIlJ1bnMgc2xpZ2h0bHkgbG9uZ1wiLFxuICAgICAgNTogXCJSdW5zIGxvbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGdldFJldmlld3MgPSAoaWQpID0+IHtcbiAgICBjb25zdCByZXZpZXdzVVJMID0gYC9yZXZpZXdzL3NvcnQvJHtpZH0vJHtzb3J0fWA7XG4gICAgYXhpb3MuZ2V0KHJldmlld3NVUkwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0UmV2aWV3cyhkYXRhKTtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKGRhdGEuc2xpY2UoMCwgMikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXRhUmV2aWV3cyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG1ldGFSZXZpZXdzVVJMID0gYC9yZXZpZXdzL21ldGEvJHtpZH1gO1xuICAgIGF4aW9zLmdldChtZXRhUmV2aWV3c1VSTClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRNZXRhUmV2aWV3cyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRSZXZpZXdzKDIwMTAxKTtcbiAgICBzZXRFeHBhbmRlZChleHBhbmRlZCk7XG4gIH0sIFtzb3J0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXRhUmV2aWV3cygyMDEwMSk7XG4gICAgZ2V0UmV2aWV3cygyMDEwMSk7XG4gIH0sIFtwcm9kdWN0SWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChleHBhbmRlZClcbiAgICA/IHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cylcbiAgICA6IHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cy5zbGljZSgwLCAyKSlcbiAgfSwgW2V4cGFuZGVkXSk7XG5cbiAgY29uc3QgaGFuZGxlU3RhckZpbHRlcnMgPSAoZmlsdGVycykgPT4ge1xuICAgIGNvbnN0IHJldmlld0FycmF5ID0gW107XG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKHJldmlld3Muc2xpY2UoMCwgMikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIHJldmlld3MuZmlsdGVyKChyZXZpZXcpID0+IHtcbiAgICAgICAgICBpZiAocmV2aWV3LnJhdGluZyA9PT0gTnVtYmVyKGZpbHRlcikpIHJldmlld0FycmF5LnB1c2gocmV2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldERpc3BsYXllZFJldmlld3MocmV2aWV3QXJyYXkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3JlQnV0dG9uID0gKCkgPT4ge1xuICAgIChkaXNwbGF5ZWRSZXZpZXdzLmxlbmd0aCA8PSAyKVxuICAgICAgPyBzZXRNb3JlQnV0dG9uKCdNb3JlIFJldmlld3MnKVxuICAgICAgOiBzZXRNb3JlQnV0dG9uKCdTaG93IExlc3MgUmV2aWV3cycpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlTW9yZUJ1dHRvbigpO1xuICB9LCBbZGlzcGxheWVkUmV2aWV3c10pO1xuXG4gIHJldHVybiAoXG4gICAgKG1ldGFSZXZpZXdzICYmIHJldmlld3MgJiYgcHJvZHVjdElkKVxuICAgICAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEJyZWFrZG93bn0+XG4gICAgICAgICAgICA8UmF0aW5nQnJlYWtkb3duXG4gICAgICAgICAgICAgIHJldmlld3M9e3Jldmlld3N9XG4gICAgICAgICAgICAgIG1ldGFSZXZpZXdzPXttZXRhUmV2aWV3c31cbiAgICAgICAgICAgICAgaGFuZGxlU3RhckZpbHRlcnM9e2hhbmRsZVN0YXJGaWx0ZXJzfVxuICAgICAgICAgICAgICBoYW5kbGVSZXZpZXdBdmVyYWdlPXtoYW5kbGVSZXZpZXdBdmVyYWdlfVxuICAgICAgICAgICAgICBjaGFyT2JqZWN0PXtjaGFyT2JqZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEhlYWRlcn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6ICdjZW50ZXInLCBwYWRkaW5nTGVmdDogJzIwcHgnIH19XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic29ydC1vbi1kcm9wZG93blwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNvcnQgb246XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5SZWxldmFudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGVscGZ1bDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+TmV3ZXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6ICc4MDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50SW5kaXZpZHVhbFJldmlld30+XG4gICAgICAgICAgICB7ZGlzcGxheWVkUmV2aWV3cy5tYXAoKHJldmlldywgaWQpID0+IChcbiAgICAgICAgICAgICAgPFJldmlld1RlbXBsYXRlIHJldmlldz17cmV2aWV3fSBrZXk9e2lkfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRGb290ZXJ9PlxuICAgICAgICAgICAge3Jldmlld3MubGVuZ3RoID4gMVxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21vcmVCdXR0b259XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBSZXZpZXcgICsgPC9idXR0b24+XG4gICAgICAgICAgICA8UmV2aWV3c01vZGFsXG4gICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxuICAgICAgICAgICAgICBnZXRSZXZpZXdzPXtnZXRSZXZpZXdzfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIG1ldGFSZXZpZXdzPXttZXRhUmV2aWV3c31cbiAgICAgICAgICAgICAgY2hhck9iamVjdD17Y2hhck9iamVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==