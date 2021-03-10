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
      onChange: handleCharacteristics
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bolder'
      }
    }, x[0], " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3'
      },
      htmlFor: "one"
    }, charObject[x[0]][1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "1-".concat(x[1].id),
      style: {
        gridRow: '1/2'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3'
      },
      htmlFor: "two"
    }, charObject[x[0]][2]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "2-".concat(x[1].id),
      style: {
        gridRow: '1/2'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3'
      },
      htmlFor: "three"
    }, charObject[x[0]][3]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "3-".concat(x[1].id),
      style: {
        gridRow: '1/2'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3'
      },
      htmlFor: "four"
    }, charObject[x[0]][4]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "4-".concat(x[1].id),
      style: {
        gridRow: '1/2'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        gridRow: '2/3'
      },
      htmlFor: "five"
    }, charObject[x[0]][5]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      name: x[0],
      value: "5-".concat(x[1].id),
      style: {
        gridRow: '1/2'
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2605"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      margin: '5px',
      fontSize: '12px',
      fontStyle: 'italic'
    }
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
    rating: 0,
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
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
    console.log(finalReview);

    if (!validEmailRegex.test(finalReview.email)) {
      setError('*You must enter a valid email');
      return;
    }

    finalReview.photos.map(function (photo) {
      if (photo.size > 100000) {
        setError('*The images selected are invalid or unable to be uploaded.');
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
  }; // const clearForm = () => {
  //   setReview(state);
  // };


  return metaReviews && review && review.photos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      maxHeight: '100%'
    },
    role: "presentation",
    onClick: function onClick() {
      onClose();
      clearForm();
    },
    className: open ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.overlay : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
    },
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "About the ", name, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    role: "presentation",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.closeModal,
    onClick: function onClick() {
      onClose(); // clearForm();
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
      fontSize: '14px'
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
    type: "text"
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
    style: {
      margin: '5px',
      fontSize: '12px',
      fontStyle: 'italic'
    }
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
    placeholder: "Example: jackson11!"
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
    placeholder: "Example: jackson11@email.com"
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
    style: {
      margin: '5px',
      fontSize: '12px',
      fontStyle: 'italic'
    }
  }, "* Mandatory Fields"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
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
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateBody
  }, review.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateUserDateBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserDateBar, {
    review: review
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateHelpfulReportBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpful__WEBPACK_IMPORTED_MODULE_2__.default, {
    review_id: review.review_id,
    helpfulness: review.helpfulness
  })), review.response && review.response !== 'null' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateResponseFromSeller
  }, review.response) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateImages
  }, review.photos.map(function (photo, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExpandedPhotos__WEBPACK_IMPORTED_MODULE_3__.default, {
      photo: photo,
      key: id
    });
  })), review.recommend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_Reviews_module_css__WEBPACK_IMPORTED_MODULE_1__.default.templateRecommendsBar
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
    getReviews(20103);
    setExpanded(expanded);
  }, [sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getMetaReviews(20103);
    getReviews(20103);
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZC5qcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGFuZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlbHBmdWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9DaGFyYWN0ZXJpc3RpY3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9JbnRlcmFjdGl2ZVN0YXJzLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Jldmlld3MvUmV2aWV3TW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9SZXZpZXdUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzL1Jldmlld3MuanN4Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhck9iamVjdCIsInNldFJldmlldyIsInJldmlldyIsImNoYXJzIiwic2V0Q2hhcnMiLCJoYW5kbGVDaGFyYWN0ZXJpc3RpY3MiLCJ2YWx1ZSIsInRhcmdldCIsImFyciIsInNwbGl0IiwicmF0aW5nIiwiaWQiLCJuZXdDaGFyYWN0ZXJpc3RpY3MiLCJOdW1iZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwieCIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFJvdyIsIkludGVyYWN0aXZlU3RhcnMiLCJzZXRSYXRpbmciLCJob3ZlciIsInNldEhvdmVyIiwic2V0VmFsdWUiLCJkZXNjcmlwdGlvbk9iaiIsImhhbmRsZVZhbHVlIiwiaW5kZXgiLCJBcnJheSIsInN0YXIiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsIlJldmlld3NNb2RhbCIsInByb2R1Y3RJZCIsIm9uQ2xvc2UiLCJvcGVuIiwiZ2V0UmV2aWV3cyIsIm5hbWUiLCJtZXRhUmV2aWV3cyIsInByb2R1Y3RfaWQiLCJzdW1tYXJ5IiwiYm9keSIsInJlY29tbWVuZCIsImVtYWlsIiwicGhvdG9zIiwidGh1bWJuYWlscyIsInNldFRodW1ibmFpbHMiLCJlcnJvciIsInNldEVycm9yIiwiY2hhcmFjdGVyQ291bnQiLCJzZXRDaGFyYWN0ZXJDb3VudCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaW5hbFJldmlldyIsInByb21pc2VzIiwidGVzdCIsInNpemUiLCJwYXlsb2FkIiwiZGF0YSIsInByb21pc2UiLCJwdXNoIiwiYWxsIiwicmVzdWx0cyIsImhhbmRsZUNvdW50Q2hhbmdlIiwibGVuZ3RoIiwiaGFuZGxlQ2hhbmdlIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJtYXhIZWlnaHQiLCJjbGVhckZvcm0iLCJ0cmFuc2Zvcm0iLCJtb2RhbCIsIm1vZGFsSGVhZGVyIiwibW9kYWxCb2R5IiwiUnN0eWxlcyIsInN0YXJSYXRpbmciLCJmaW5lUHJpbnQiLCJtb2RhbEJ1dHRvbiIsIlJldmlld1RlbXBsYXRlIiwicmV2aWV3VGVtcGxhdGUiLCJ0ZW1wbGF0ZVN1bW1hcnkiLCJ0ZW1wbGF0ZUJvZHkiLCJ0ZW1wbGF0ZVVzZXJEYXRlQmFyIiwidGVtcGxhdGVIZWxwZnVsUmVwb3J0QmFyIiwicmVzcG9uc2UiLCJ0ZW1wbGF0ZVJlc3BvbnNlRnJvbVNlbGxlciIsInRlbXBsYXRlSW1hZ2VzIiwidGVtcGxhdGVSZWNvbW1lbmRzQmFyIiwiU3RhclJhdGluZyIsInN0YXJQZXJjZW50YWdlIiwicm91bmRlZFBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJ3aWR0aCIsInN0YXJSYXRpbmdCb3R0b20iLCJVc2VyRGF0ZUJhciIsImdldERhdGUiLCJkYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInllYXIiLCJzaGlmdCIsImpvaW4iLCJ1c2VyRGF0ZUJhciIsInJldmlld2VyX25hbWUiLCJSZXZpZXdzIiwiaGFuZGxlUmV2aWV3QXZlcmFnZSIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZGlzcGxheWVkUmV2aWV3cyIsInNldERpc3BsYXllZFJldmlld3MiLCJzZXRNZXRhUmV2aWV3cyIsImlzT3BlbiIsInNldElzT3BlbiIsInNvcnQiLCJzZXRTb3J0IiwibW9yZUJ1dHRvbiIsInNldE1vcmVCdXR0b24iLCJTaXplIiwiV2lkdGgiLCJDb21mb3J0IiwiUXVhbGl0eSIsIkxlbmd0aCIsIkZpdCIsInJldmlld3NVUkwiLCJnZXRNZXRhUmV2aWV3cyIsIm1ldGFSZXZpZXdzVVJMIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhckZpbHRlcnMiLCJmaWx0ZXJzIiwicmV2aWV3QXJyYXkiLCJmaWx0ZXIiLCJoYW5kbGVNb3JlQnV0dG9uIiwicGFyZW50Q29udGFpbmVyIiwicGFyZW50QnJlYWtkb3duIiwiYWxpZ25TZWxmIiwicGFkZGluZ0xlZnQiLCJvdmVyZmxvd1kiLCJwYXJlbnRJbmRpdmlkdWFsUmV2aWV3IiwicGFyZW50Rm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEtBQUQsQ0FESjtBQUFBO0FBQUEsTUFDN0JDLFFBRDZCO0FBQUEsTUFDbkJDLFdBRG1COztBQUdwQyxTQUNFSCxLQUFLLGdCQUVEO0FBQU0sYUFBUyxFQUFFRSxRQUFRLEdBQUdFLGlGQUFILEdBQXlCO0FBQWxELEtBQ0ksQ0FBQ0YsUUFBRixnQkFFRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksaUZBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBO0FBTmIsSUFGSCxnQkFZRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksMEVBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBO0FBTmIsSUFiTixDQUZDLEdBMEJELElBM0JOO0FBNkJELENBaENEOztBQWtDQSxpRUFBZUgsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNqQkMsV0FEaUIsR0FDREQsS0FEQyxDQUNqQkMsV0FEaUI7O0FBQUEsa0JBRUNQLCtDQUFRLENBQUNPLFdBQUQsQ0FGVDtBQUFBO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFBQSxtQkFHT1QsK0NBQVEsQ0FBQyxRQUFELENBSGY7QUFBQTtBQUFBLE1BR2xCVSxRQUhrQjtBQUFBLE1BR1JDLFdBSFE7O0FBQUEsbUJBSVdYLCtDQUFRLENBQUMsS0FBRCxDQUpuQjtBQUFBO0FBQUEsTUFJbEJZLFVBSmtCO0FBQUEsTUFJTkMsYUFKTTs7QUFNekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCTixZQUFRLENBQUNGLFdBQVcsR0FBRyxDQUFmLENBQVI7O0FBRUEsUUFBSUQsS0FBSyxDQUFDVSxTQUFWLEVBQXFCO0FBQUEsVUFDWEEsU0FEVyxHQUNHVixLQURILENBQ1hVLFNBRFc7QUFFbkJDLHNEQUFBLG9CQUFzQkQsU0FBdEIsZUFDR0UsSUFESCxDQUNRLFVBQUNDLE1BQUQ7QUFBQSxlQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDQSxNQUFuQixDQUFaO0FBQUEsT0FEUixXQUVTLFVBQUNHLEdBQUQ7QUFBQSxlQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixDQUFUO0FBQUEsT0FGVDtBQUdELEtBTEQsTUFLTyxJQUFJaEIsS0FBSyxDQUFDaUIsV0FBVixFQUF1QjtBQUFBLFVBQ3BCQSxXQURvQixHQUNKakIsS0FESSxDQUNwQmlCLFdBRG9CO0FBRTVCTixzREFBQSx5QkFBMkJNLFdBQTNCLGVBQ0dMLElBREgsQ0FDUSxVQUFDQyxNQUFEO0FBQUEsZUFBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0EsTUFBbkIsQ0FBWjtBQUFBLE9BRFIsV0FFUyxVQUFDRyxHQUFEO0FBQUEsZUFBU0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosQ0FBVDtBQUFBLE9BRlQ7QUFHRCxLQUxNLE1BS0EsSUFBSWhCLEtBQUssQ0FBQ2tCLFNBQVYsRUFBcUI7QUFBQSxVQUNsQkEsU0FEa0IsR0FDSmxCLEtBREksQ0FDbEJrQixTQURrQjtBQUUxQlAsc0RBQUEsdUJBQXlCTyxTQUF6QixlQUNHTixJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLGVBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNBLE1BQW5CLENBQVo7QUFBQSxPQURSLFdBRVMsVUFBQ0csR0FBRDtBQUFBLGVBQVNGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLENBQVQ7QUFBQSxPQUZUO0FBR0Q7QUFDRixHQW5CRDs7QUFxQkEsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQmQsZUFBVyxDQUFDLFVBQUQsQ0FBWDtBQUNBRSxpQkFBYSxDQUFDLElBQUQsQ0FBYjs7QUFDQSxRQUFJUCxLQUFLLENBQUNrQixTQUFWLEVBQXFCO0FBQ25CUCxzREFBQSx1QkFBeUJYLEtBQUssQ0FBQ2tCLFNBQS9CLGNBQ0dOLElBREgsQ0FDUTtBQUFBLGVBQU1FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNBLE1BQW5CLENBQU47QUFBQSxPQURSLFdBRVNDLE9BQU8sQ0FBQ0MsR0FGakI7QUFHRCxLQUpELE1BSU8sSUFBSWYsS0FBSyxDQUFDVSxTQUFWLEVBQXFCO0FBQzFCQyxzREFBQSxvQkFBc0JYLEtBQUssQ0FBQ1UsU0FBNUIsY0FDR0UsSUFESCxDQUNRO0FBQUEsZUFBTUUsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0EsTUFBbkIsQ0FBTjtBQUFBLE9BRFIsV0FFU0MsT0FBTyxDQUFDQyxHQUZqQjtBQUdELEtBSk0sTUFJQTtBQUNMSixzREFBQSx5QkFBMkJYLEtBQUssQ0FBQ2lCLFdBQWpDLGNBQ0dMLElBREgsQ0FDUTtBQUFBLGVBQU1FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNBLE1BQW5CLENBQU47QUFBQSxPQURSLFdBRVNDLE9BQU8sQ0FBQ0MsR0FGakI7QUFHRDtBQUNGLEdBaEJEOztBQWtCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWxCLDRFQUFjdUI7QUFBOUIsa0JBQ0U7QUFBSyxtQkFBWSxhQUFqQjtBQUErQixhQUFTLEVBQUV2Qiw0RUFBY3VCO0FBQXhELHlCQURGLGVBRUU7QUFBUSxtQkFBWSxnQkFBcEI7QUFBcUMsUUFBSSxFQUFDLFFBQTFDO0FBQW1ELFdBQU8sRUFBRVosV0FBNUQ7QUFBeUUsYUFBUyxFQUFFWCxrRkFBcEY7QUFBMEcsU0FBSyxFQUFDO0FBQWhILFdBRkYsZUFHRTtBQUFLLG1CQUFZLGVBQWpCO0FBQWlDLGFBQVMsWUFBS0EsNEVBQUwsY0FBdUJBLGlGQUF2QjtBQUExQyxVQUVHSyxLQUZILE9BSUcsR0FKSCxDQUhGLGVBU0U7QUFBUSxtQkFBWSxlQUFwQjtBQUFvQyxhQUFTLEVBQUVJLFVBQVUsR0FBR1QsaUZBQUgsR0FBeUJBLDZFQUFsRjtBQUFtRyxXQUFPLEVBQUVzQixNQUE1RztBQUFvSCxRQUFJLEVBQUM7QUFBekgsS0FBbUlmLFFBQW5JLENBVEYsRUFVR0UsVUFBVSxnQkFBRyxpREFBQyxnREFBRDtBQUFNLGFBQVMsRUFBRVQseUVBQWpCO0FBQThCLFFBQUksRUFBRXdCLHNFQUFTQTtBQUE3QyxJQUFILEdBQXVELElBVnBFLENBREY7QUFjRCxDQTNERDs7QUE2REEsaUVBQWV0QixPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7O0FBRUEsSUFBTXVCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBd0Q7QUFBQSxNQUFyREMsZUFBcUQsUUFBckRBLGVBQXFEO0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ3BEaEMsK0NBQVEsQ0FBQyxFQUFELENBRDRDO0FBQUE7QUFBQSxNQUN2RWlDLEtBRHVFO0FBQUEsTUFDaEVDLFFBRGdFOztBQUc5RSxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNwQixDQUFELEVBQU87QUFBQSxRQUMzQnFCLEtBRDJCLEdBQ2pCckIsQ0FBQyxDQUFDc0IsTUFEZSxDQUMzQkQsS0FEMkI7QUFFbkMsUUFBTUUsR0FBRyxHQUFHRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLENBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQyxDQUFELENBQWxCO0FBQ0EsUUFBTUcsRUFBRSxHQUFHSCxHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0EsUUFBTUksa0JBQWtCLEdBQUdULEtBQTNCO0FBQ0FTLHNCQUFrQixDQUFDRCxFQUFELENBQWxCLEdBQXlCRSxNQUFNLENBQUNILE1BQUQsQ0FBL0I7QUFDQVQsYUFBUyxpQ0FBTUMsTUFBTjtBQUFjSCxxQkFBZSxFQUFFYTtBQUEvQixPQUFUO0FBQ0QsR0FSRDs7QUFVQSxTQUNHYixlQUFELEdBQ0llLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlaEIsZUFBZixFQUFnQ2lCLEdBQWhDLENBQW9DLFVBQUNDLENBQUQ7QUFBQSx3QkFDcEM7QUFBSyxTQUFHLEVBQUVBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS04sRUFBZjtBQUFtQixjQUFRLEVBQUVOO0FBQTdCLG9CQUNFO0FBQUcsV0FBSyxFQUFFO0FBQUVhLGtCQUFVLEVBQUU7QUFBZDtBQUFWLE9BQXFDRCxDQUFDLENBQUMsQ0FBRCxDQUF0QyxPQURGLGVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRUUsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHNCQUFjLEVBQUU7QUFBbkM7QUFBWixvQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFRCxlQUFPLEVBQUUsTUFBWDtBQUFtQkUsd0JBQWdCLEVBQUU7QUFBckM7QUFBWixvQkFDRTtBQUFPLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFkO0FBQWtDLGFBQU8sRUFBQztBQUExQyxPQUFpRHRCLFVBQVUsQ0FBQ2lCLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVixDQUFpQixDQUFqQixDQUFqRCxDQURGLGVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUQsQ0FGVDtBQUdFLFdBQUssY0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLTixFQUFaLENBSFA7QUFJRSxXQUFLLEVBQUU7QUFBRVcsZUFBTyxFQUFFO0FBQVg7QUFKVCxNQUZGLENBREYsZUFVRTtBQUFLLFdBQUssRUFBRTtBQUFFSCxlQUFPLEVBQUUsTUFBWDtBQUFtQkUsd0JBQWdCLEVBQUUsV0FBckM7QUFBa0RELHNCQUFjLEVBQUU7QUFBbEU7QUFBWixvQkFDRTtBQUFPLFdBQUssRUFBRTtBQUFFRSxlQUFPLEVBQUU7QUFBWCxPQUFkO0FBQWtDLGFBQU8sRUFBQztBQUExQyxPQUFpRHRCLFVBQVUsQ0FBQ2lCLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVixDQUFpQixDQUFqQixDQUFqRCxDQURGLGVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUQsQ0FGVDtBQUdFLFdBQUssY0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLTixFQUFaLENBSFA7QUFJRSxXQUFLLEVBQUU7QUFBRVcsZUFBTyxFQUFFO0FBQVg7QUFKVCxNQUZGLENBVkYsZUFtQkU7QUFBSyxXQUFLLEVBQUU7QUFBRUgsZUFBTyxFQUFFLE1BQVg7QUFBbUJFLHdCQUFnQixFQUFFLFdBQXJDO0FBQWtERCxzQkFBYyxFQUFFO0FBQWxFO0FBQVosb0JBQ0U7QUFBTyxXQUFLLEVBQUU7QUFBRUUsZUFBTyxFQUFFO0FBQVgsT0FBZDtBQUFrQyxhQUFPLEVBQUM7QUFBMUMsT0FBbUR0QixVQUFVLENBQUNpQixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVYsQ0FBaUIsQ0FBakIsQ0FBbkQsQ0FERixlQUVFO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFELENBRlQ7QUFHRSxXQUFLLGNBQU9BLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS04sRUFBWixDQUhQO0FBSUUsV0FBSyxFQUFFO0FBQUVXLGVBQU8sRUFBRTtBQUFYO0FBSlQsTUFGRixDQW5CRixlQTRCRTtBQUFLLFdBQUssRUFBRTtBQUFFSCxlQUFPLEVBQUUsTUFBWDtBQUFtQkUsd0JBQWdCLEVBQUUsV0FBckM7QUFBa0RELHNCQUFjLEVBQUU7QUFBbEU7QUFBWixvQkFDRTtBQUFPLFdBQUssRUFBRTtBQUFFRSxlQUFPLEVBQUU7QUFBWCxPQUFkO0FBQWtDLGFBQU8sRUFBQztBQUExQyxPQUFrRHRCLFVBQVUsQ0FBQ2lCLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVixDQUFpQixDQUFqQixDQUFsRCxDQURGLGVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUQsQ0FGVDtBQUdFLFdBQUssY0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLTixFQUFaLENBSFA7QUFJRSxXQUFLLEVBQUU7QUFBRVcsZUFBTyxFQUFFO0FBQVg7QUFKVCxNQUZGLENBNUJGLGVBcUNFO0FBQUssV0FBSyxFQUFFO0FBQUVILGVBQU8sRUFBRSxNQUFYO0FBQW1CRSx3QkFBZ0IsRUFBRSxXQUFyQztBQUFrREQsc0JBQWMsRUFBRTtBQUFsRTtBQUFaLG9CQUNFO0FBQU8sV0FBSyxFQUFFO0FBQUVFLGVBQU8sRUFBRTtBQUFYLE9BQWQ7QUFBa0MsYUFBTyxFQUFDO0FBQTFDLE9BQWtEdEIsVUFBVSxDQUFDaUIsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFWLENBQWlCLENBQWpCLENBQWxELENBREYsZUFFRTtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBRCxDQUZUO0FBR0UsV0FBSyxjQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtOLEVBQVosQ0FIUDtBQUlFLFdBQUssRUFBRTtBQUFFVyxlQUFPLEVBQUU7QUFBWDtBQUpULE1BRkYsQ0FyQ0YsQ0FGRixDQURvQztBQUFBLEdBQXBDLENBREosR0FxREksSUF0RE47QUF3REQsQ0FyRUQ7O0FBdUVBLGlFQUFleEIsZUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7O0FBRUEsSUFBTXlCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBMkI7QUFBQSxNQUF4QnJCLE1BQXdCLFFBQXhCQSxNQUF3QjtBQUFBLE1BQWhCRCxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ3RCL0IsK0NBQVEsQ0FBQyxDQUFELENBRGM7QUFBQTtBQUFBLE1BQzNDd0MsTUFEMkM7QUFBQSxNQUNuQ2MsU0FEbUM7O0FBQUEsbUJBRXhCdEQsK0NBQVEsQ0FBQyxDQUFELENBRmdCO0FBQUE7QUFBQSxNQUUzQ3VELEtBRjJDO0FBQUEsTUFFcENDLFFBRm9DOztBQUFBLG1CQUd4QnhELCtDQUFRLENBQUMsRUFBRCxDQUhnQjtBQUFBO0FBQUEsTUFHM0NvQyxLQUgyQztBQUFBLE1BR3BDcUIsUUFIb0M7O0FBS2xELE1BQU1DLGNBQWMsR0FBRztBQUNyQixPQUFHLE1BRGtCO0FBRXJCLE9BQUcsTUFGa0I7QUFHckIsT0FBRyxTQUhrQjtBQUlyQixPQUFHLE1BSmtCO0FBS3JCLE9BQUc7QUFMa0IsR0FBdkI7O0FBUUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCSCxZQUFRLENBQUNDLGNBQWMsQ0FBQ0UsS0FBRCxDQUFmLENBQVI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssWUFBUSxFQUFDO0FBQWQsS0FDRyxtQkFBSUMsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjZixHQUFkLENBQWtCLFVBQUNnQixJQUFELEVBQU9GLEtBQVAsRUFBaUI7QUFDbENBLFNBQUssSUFBSSxDQUFUO0FBQ0Esd0JBQ0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFNBQUcsRUFBRUEsS0FGUDtBQUdFLGVBQVMsWUFBS0EsS0FBSyxLQUFLTCxLQUFLLElBQUlmLE1BQWQsQ0FBTCxHQUE2QnJDLDJFQUE3QixHQUF5Q0EsNEVBQTlDLGNBQTREQSwrRUFBNUQsQ0FIWDtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUNibUQsaUJBQVMsQ0FBQ00sS0FBRCxDQUFUO0FBQ0FELG1CQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUNELE9BUEg7QUFRRSxrQkFBWSxFQUFFLHdCQUFNO0FBQ2xCTixpQkFBUyxDQUFDZCxNQUFELENBQVQ7QUFDQVQsaUJBQVMsaUNBQU1DLE1BQU47QUFBY1EsZ0JBQU0sRUFBRW9CO0FBQXRCLFdBQVQ7QUFDRCxPQVhIO0FBWUUsa0JBQVksRUFBRTtBQUFBLGVBQU1KLFFBQVEsQ0FBQ2hCLE1BQUQsQ0FBZDtBQUFBO0FBWmhCLG9CQWNFLHdFQWRGLENBREY7QUFrQkQsR0FwQkEsQ0FESCxlQXNCRTtBQUFHLFNBQUssRUFBRTtBQUFFdUIsWUFBTSxFQUFFLEtBQVY7QUFBaUJDLGNBQVEsRUFBRSxNQUEzQjtBQUFtQ0MsZUFBUyxFQUFFO0FBQTlDO0FBQVYsS0FBcUU3QixLQUFyRSxDQXRCRixDQURGO0FBMEJELENBM0NEOztBQTZDQSxpRUFBZWlCLGdCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FFZjtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUFBLE1BRE9DLE9BQ1AsUUFET0EsT0FDUDtBQUFBLE1BRGdCQyxJQUNoQixRQURnQkEsSUFDaEI7QUFBQSxNQURzQkMsVUFDdEIsUUFEc0JBLFVBQ3RCO0FBQUEsTUFEa0NDLElBQ2xDLFFBRGtDQSxJQUNsQztBQUFBLE1BRHdDQyxXQUN4QyxRQUR3Q0EsV0FDeEM7QUFBQSxNQURxRDFDLFVBQ3JELFFBRHFEQSxVQUNyRDs7QUFBQSxrQkFDd0I5QiwrQ0FBUSxDQUFDO0FBQ25DeUUsY0FBVSxFQUFFTixTQUR1QjtBQUVuQzNCLFVBQU0sRUFBRSxDQUYyQjtBQUduQ2tDLFdBQU8sRUFBRSxFQUgwQjtBQUluQ0MsUUFBSSxFQUFFLEVBSjZCO0FBS25DQyxhQUFTLEVBQUUsRUFMd0I7QUFNbkNMLFFBQUksRUFBRSxFQU42QjtBQU9uQ00sU0FBSyxFQUFFLEVBUDRCO0FBUW5DQyxVQUFNLEVBQUUsRUFSMkI7QUFTbkNqRCxtQkFBZSxFQUFFO0FBVGtCLEdBQUQsQ0FEaEM7QUFBQTtBQUFBLE1BQ0dHLE1BREg7QUFBQSxNQUNXRCxTQURYOztBQUFBLG1CQVlnQy9CLCtDQUFRLENBQUMsRUFBRCxDQVp4QztBQUFBO0FBQUEsTUFZRytFLFVBWkg7QUFBQSxNQVllQyxhQVpmOztBQUFBLG1CQWFzQmhGLCtDQUFRLENBQUMsRUFBRCxDQWI5QjtBQUFBO0FBQUEsTUFhR2lGLEtBYkg7QUFBQSxNQWFVQyxRQWJWOztBQUFBLG1CQWN3Q2xGLCtDQUFRLENBQUMsRUFBRCxDQWRoRDtBQUFBO0FBQUEsTUFjR21GLGNBZEg7QUFBQSxNQWNtQkMsaUJBZG5COztBQWdCSixNQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FDNUIsd0hBRDRCLENBQTlCOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxXQUFVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDMUQsVUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxZQUFNLENBQUNFLGFBQVAsQ0FBcUJOLElBQXJCOztBQUNBSSxZQUFNLENBQUNHLE1BQVAsR0FBZ0I7QUFBQSxlQUFNTCxPQUFPLENBQUNFLE1BQU0sQ0FBQ0ksTUFBUixDQUFiO0FBQUEsT0FBaEI7O0FBQ0FKLFlBQU0sQ0FBQ0ssT0FBUCxHQUFpQixVQUFDaEIsS0FBRDtBQUFBLGVBQVdVLE1BQU0sQ0FBQ1YsS0FBRCxDQUFqQjtBQUFBLE9BQWpCO0FBQ0QsS0FMMEIsQ0FBVjtBQUFBLEdBQWpCOztBQU9BLE1BQU1pQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDbkYsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNvRixjQUFGOztBQUNBLFFBQU1DLFdBQVcscUJBQVFwRSxNQUFSLENBQWpCOztBQUNBLFFBQU1xRSxRQUFRLEdBQUcsRUFBakI7QUFDQWpGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZK0UsV0FBWjs7QUFDQSxRQUFJLENBQUNmLGVBQWUsQ0FBQ2lCLElBQWhCLENBQXFCRixXQUFXLENBQUN2QixLQUFqQyxDQUFMLEVBQThDO0FBQzVDSyxjQUFRLENBQUMsK0JBQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBRURrQixlQUFXLENBQUN0QixNQUFaLENBQW1CaEMsR0FBbkIsQ0FBdUIsVUFBQy9DLEtBQUQsRUFBVztBQUNoQyxVQUFJQSxLQUFLLENBQUN3RyxJQUFOLEdBQWEsTUFBakIsRUFBeUI7QUFDdkJyQixnQkFBUSxDQUFDLDREQUFELENBQVI7QUFDQTtBQUNEOztBQUNELFVBQU1zQixPQUFPLEdBQUc7QUFDZGpDLFlBQUksRUFBRXhFLEtBQUssQ0FBQ3dFLElBREU7QUFFZGtDLFlBQUksRUFBRTtBQUZRLE9BQWhCO0FBSUEsVUFBTUMsT0FBTyxHQUFHbkIsUUFBUSxDQUFDeEYsS0FBRCxDQUFSLENBQ2JtQixJQURhLENBQ1IsVUFBQzhFLE1BQUQ7QUFBQSxlQUFZUSxPQUFPLENBQUNDLElBQVIsR0FBZVQsTUFBTSxDQUFDekQsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBM0I7QUFBQSxPQURRLEVBRWJyQixJQUZhLENBRVI7QUFBQSxlQUFNRCxpREFBQSxDQUFXLGdCQUFYLEVBQTZCdUYsT0FBN0IsQ0FBTjtBQUFBLE9BRlEsRUFHYnRGLElBSGEsQ0FHUjtBQUFBLFlBQUd1RixJQUFILFNBQUdBLElBQUg7QUFBQSxlQUFjQSxJQUFkO0FBQUEsT0FIUSxXQUlQckYsT0FBTyxDQUFDQyxHQUpELENBQWhCO0FBS0FnRixjQUFRLENBQUNNLElBQVQsQ0FBY0QsT0FBZDtBQUNBakIsYUFBTyxDQUFDbUIsR0FBUixDQUFZUCxRQUFaLEVBQ0duRixJQURILENBQ1EsVUFBQzJGLE9BQUQsRUFBYTtBQUNqQlQsbUJBQVcsQ0FBQ3RCLE1BQVosR0FBcUIrQixPQUFyQjtBQUNELE9BSEgsRUFJRzNGLElBSkgsQ0FJUTtBQUFBLGVBQU1ELGlEQUFBLENBQVcsVUFBWCxFQUF1Qm1GLFdBQXZCLENBQU47QUFBQSxPQUpSLEVBS0dsRixJQUxILENBS1E7QUFBQSxlQUFNb0QsVUFBVSxDQUFDSCxTQUFELENBQWhCO0FBQUEsT0FMUixFQU1HakQsSUFOSCxDQU1RO0FBQUEsZUFBTWtELE9BQU8sRUFBYjtBQUFBLE9BTlIsV0FPU2hELE9BQU8sQ0FBQ0MsR0FQakI7QUFRRCxLQXZCRDtBQXdCRCxHQWxDRDs7QUFvQ0EsTUFBTXlGLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQy9GLENBQUQsRUFBTztBQUFBLFFBQ3ZCcUIsS0FEdUIsR0FDYnJCLENBQUMsQ0FBQ3NCLE1BRFcsQ0FDdkJELEtBRHVCO0FBRS9CZ0QscUJBQWlCLENBQUMsS0FBS2hELEtBQUssQ0FBQzJFLE1BQVosQ0FBakI7QUFDRCxHQUhEOztBQUtBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNqRyxDQUFELEVBQU87QUFDMUIsUUFBSWlCLE1BQU0sQ0FBQzhDLE1BQVAsQ0FBY2lDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJoRixlQUFTLGlDQUNKQyxNQURJO0FBRVA4QyxjQUFNLCtCQUFNOUMsTUFBTSxDQUFDOEMsTUFBYixJQUFxQi9ELENBQUMsQ0FBQ3NCLE1BQUYsQ0FBUzRFLEtBQVQsQ0FBZSxDQUFmLENBQXJCO0FBRkMsU0FBVDtBQUlBakMsbUJBQWEsOEJBQ1JELFVBRFEsSUFFWG1DLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnBHLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBUzRFLEtBQVQsQ0FBZSxDQUFmLENBQXBCLENBRlcsR0FBYjtBQUlEO0FBQ0YsR0FYRCxDQXBFSSxDQWlGSjtBQUNBO0FBQ0E7OztBQUVBLFNBQ0d6QyxXQUFXLElBQUl4QyxNQUFmLElBQXlCQSxNQUFNLENBQUM4QyxNQUFqQyxnQkFFSSxpSEFDRTtBQUNFLFNBQUssRUFBRTtBQUFFc0MsZUFBUyxFQUFFO0FBQWIsS0FEVDtBQUVFLFFBQUksRUFBQyxjQUZQO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JoRCxhQUFPO0FBQ1BpRCxlQUFTO0FBQ1YsS0FOSDtBQU9FLGFBQVMsRUFBRWhELElBQUksR0FBR2xFLDRFQUFILEdBQW9CO0FBUHJDLElBREYsZUFVRTtBQUNFLFNBQUssRUFBRTtBQUNMbUgsZUFBUyxFQUFFakQsSUFBSSxHQUFHLHVCQUFILEdBQTZCO0FBRHZDLEtBRFQ7QUFJRSxhQUFTLEVBQUVsRSwwRUFBWW9IO0FBSnpCLGtCQU1FO0FBQUssYUFBUyxFQUFFcEgsZ0ZBQWtCcUg7QUFBbEMsa0JBQ0UsaUZBREYsZUFFRSwyRUFDYWpELElBRGIsUUFGRixlQU1FO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFTLEVBQUVwRSwrRUFGYjtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNiaUUsYUFBTyxHQURNLENBRWI7QUFDRDtBQU5ILFNBTkYsQ0FORixlQXVCRTtBQUFLLGFBQVMsRUFBRWpFLDhFQUFnQnNIO0FBQWhDLGtCQUNFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDMUcsQ0FBRCxFQUFPO0FBQ2ZtRixrQkFBWSxDQUFDbkYsQ0FBRCxDQUFaO0FBQ0QsS0FISDtBQUlFLFVBQU0sRUFBQyxFQUpUO0FBS0UsV0FBTyxFQUFDLHFCQUxWO0FBTUUsU0FBSyxFQUFFO0FBQUVpRCxjQUFRLEVBQUU7QUFBWjtBQU5ULGtCQVFFO0FBQUcsU0FBSyxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWO0FBQVYseUJBUkYsZUFTRTtBQUFNLGFBQVMsRUFBRTJELG1GQUFrQkM7QUFBbkMsa0JBQ0UsaURBQUMsc0RBQUQ7QUFBa0IsVUFBTSxFQUFFM0YsTUFBMUI7QUFBa0MsYUFBUyxFQUFFRDtBQUE3QyxJQURGLENBVEYsZUFZRSxrR0FaRixlQWFFLDJFQUNFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsTUFBRSxFQUFDLEtBQXZCO0FBQTZCLFFBQUksRUFBQyxXQUFsQztBQUE4QyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLGlDQUFNQyxNQUFOO0FBQWM0QyxpQkFBUyxFQUFFO0FBQXpCLFNBQWY7QUFBQTtBQUF2RCxJQURGLGVBRUU7QUFBTyxXQUFPLEVBQUM7QUFBZixXQUZGLGVBR0U7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFFLEVBQUMsSUFBdkI7QUFBNEIsUUFBSSxFQUFDLFdBQWpDO0FBQTZDLFdBQU8sRUFBRTtBQUFBLGFBQU03QyxTQUFTLGlDQUFNQyxNQUFOO0FBQWM0QyxpQkFBUyxFQUFFO0FBQXpCLFNBQWY7QUFBQTtBQUF0RCxJQUhGLGVBSUU7QUFBTyxXQUFPLEVBQUM7QUFBZixVQUpGLENBYkYsZUFtQkUsaURBQUMscURBQUQ7QUFDRSxtQkFBZSxFQUFFSixXQUFXLENBQUMzQyxlQUQvQjtBQUVFLGNBQVUsRUFBRUMsVUFGZDtBQUdFLGFBQVMsRUFBRUMsU0FIYjtBQUlFLFVBQU0sRUFBRUM7QUFKVixJQW5CRixlQXlCRSw0RUF6QkYsZUEwQkU7QUFDRSxZQUFRLEVBQUUsa0JBQUNqQixDQUFEO0FBQUEsYUFBT2dCLFNBQVMsaUNBQU1DLE1BQU47QUFBYzBDLGVBQU8sRUFBRTNELENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0Q7QUFBaEMsU0FBaEI7QUFBQSxLQURaO0FBRUUsYUFBUyxFQUFFc0YsbUZBRmI7QUFHRSxhQUFTLEVBQUMsSUFIWjtBQUlFLGVBQVcsRUFBQyw4QkFKZDtBQUtFLFFBQUksRUFBQztBQUxQLElBMUJGLGVBaUNFLDZFQWpDRixlQWtDRTtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsWUFBUSxFQUFFLGtCQUFDM0csQ0FBRCxFQUFPO0FBQ2ZnQixlQUFTLGlDQUFNQyxNQUFOO0FBQWMyQyxZQUFJLEVBQUU1RCxDQUFDLENBQUNzQixNQUFGLENBQVNEO0FBQTdCLFNBQVQ7QUFDQTBFLHVCQUFpQixDQUFDL0YsQ0FBRCxDQUFqQjtBQUNELEtBTEg7QUFNRSxhQUFTLEVBQUMsSUFOWjtBQU9FLGFBQVMsRUFBQyxNQVBaO0FBUUUsYUFBUyxFQUFFWiwyRUFSYjtBQVNFLGVBQVcsRUFBQyxzQ0FUZDtBQVVFLFFBQUksRUFBQztBQVZQLElBbENGLGVBOENFO0FBQ0UsU0FBSyxFQUFFO0FBQUU0RCxZQUFNLEVBQUUsS0FBVjtBQUFpQkMsY0FBUSxFQUFFLE1BQTNCO0FBQW1DQyxlQUFTLEVBQUU7QUFBOUM7QUFEVCxLQUdHa0IsY0FBYyxJQUFJLENBQWxCLEdBQXNCLDRCQUF0QiwrQ0FBMEZBLGNBQTFGLENBSEgsQ0E5Q0YsZUFtREUsdUZBbkRGLGVBb0RFO0FBQ0UsWUFBUSxFQUFDLFVBRFg7QUFFRSxZQUFRLEVBQUUsa0JBQUNwRSxDQUFEO0FBQUEsYUFBT2dCLFNBQVMsaUNBQU1DLE1BQU47QUFBY3VDLFlBQUksRUFBRXhELENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0Q7QUFBN0IsU0FBaEI7QUFBQSxLQUZaO0FBR0UsYUFBUyxFQUFFc0YsbUZBSGI7QUFJRSxhQUFTLEVBQUMsSUFKWjtBQUtFLFFBQUksRUFBQyxNQUxQO0FBTUUsZUFBVyxFQUFDO0FBTmQsSUFwREYsZUE0REU7QUFBRyxhQUFTLEVBQUV2SCw4RUFBZ0J5SDtBQUE5QixLQUFpQzVGLE1BQU0sQ0FBQ3VDLElBQVAsQ0FBWXdDLE1BQVosR0FBcUIsQ0FBckIsR0FBeUIsaUVBQXpCLEdBQTZGLEVBQTlILENBNURGLGVBNkRFLG9GQTdERixlQThERTtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsWUFBUSxFQUFFLGtCQUFDaEcsQ0FBRDtBQUFBLGFBQU9nQixTQUFTLGlDQUFNQyxNQUFOO0FBQWM2QyxhQUFLLEVBQUU5RCxDQUFDLENBQUNzQixNQUFGLENBQVNEO0FBQTlCLFNBQWhCO0FBQUEsS0FGWjtBQUdFLGFBQVMsRUFBRXNGLG1GQUhiO0FBSUUsYUFBUyxFQUFDLElBSlo7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLGVBQVcsRUFBQztBQU5kLElBOURGLGVBc0VFO0FBQUcsYUFBUyxFQUFFdkgsOEVBQWdCeUg7QUFBOUIsS0FBaUM1RixNQUFNLENBQUM2QyxLQUFQLENBQWFrQyxNQUFiLEdBQXNCLENBQXRCLEdBQTBCLHFEQUExQixHQUFrRixFQUFuSCxDQXRFRixlQXVFRSw2REF2RUYsZUF3RUUsOERBQ0cvRSxNQUFNLENBQUM4QyxNQUFQLENBQWNpQyxNQUFkLEdBQXVCLENBQXZCLGdCQUEyQjtBQUFPLFNBQUssRUFBQyxFQUFiO0FBQWdCLFlBQVEsRUFBRUMsWUFBMUI7QUFBd0MsUUFBSSxFQUFDO0FBQTdDLElBQTNCLEdBQW9GLElBRHZGLEVBRUdqQyxVQUFVLENBQUNqQyxHQUFYLENBQWUsVUFBQy9DLEtBQUQ7QUFBQSx3QkFBVztBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFpQixTQUFHLEVBQUVBLEtBQXRCO0FBQTZCLGVBQVMsWUFBSzJILHFGQUFMLGNBQTZCQSxvRkFBN0IsQ0FBdEM7QUFBMEYsU0FBRyxFQUFFM0g7QUFBL0YsTUFBWDtBQUFBLEdBQWYsQ0FGSCxDQXhFRixlQTRFRTtBQUFHLFNBQUssRUFBRTtBQUFFZ0UsWUFBTSxFQUFFLEtBQVY7QUFBaUJDLGNBQVEsRUFBRSxNQUEzQjtBQUFtQ0MsZUFBUyxFQUFFO0FBQTlDO0FBQVYsMEJBNUVGLGVBNkVFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUU5RCxnRkFBa0IwSDtBQUYvQixxQkE3RUYsQ0FERixDQXZCRixDQVZGLENBRkosR0E0SEksSUE3SE47QUErSEQsQ0F0TkQ7O0FBd05BLGlFQUFlM0QsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU00RCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWdCO0FBQUEsTUFBYjlGLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDTGhDLCtDQUFRLENBQUMsS0FBRCxDQURIO0FBQUE7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBR3JDLHNCQUNFLDJFQUNFO0FBQUssYUFBUyxFQUFFQyx1RkFBcUI0SDtBQUFyQyxrQkFDRSxpREFBQyxVQUFEO0FBQVksVUFBTSxFQUFFL0YsTUFBTSxDQUFDUTtBQUEzQixJQURGLGVBRUU7QUFBSyxhQUFTLEVBQUVyQyx3RkFBc0I2SDtBQUF0QyxLQUF5Q2hHLE1BQU0sQ0FBQzBDLE9BQWhELENBRkYsZUFHRTtBQUFLLGFBQVMsRUFBRXZFLHFGQUFtQjhIO0FBQW5DLEtBQXNDakcsTUFBTSxDQUFDMkMsSUFBN0MsQ0FIRixlQUlFO0FBQUssYUFBUyxFQUFFeEUsNEZBQTBCK0g7QUFBMUMsa0JBQ0UsaURBQUMsV0FBRDtBQUFhLFVBQU0sRUFBRWxHO0FBQXJCLElBREYsQ0FKRixlQU9FO0FBQUssYUFBUyxFQUFFN0IsaUdBQStCZ0k7QUFBL0Msa0JBQ0UsaURBQUMsNkNBQUQ7QUFBUyxhQUFTLEVBQUVuRyxNQUFNLENBQUNoQixTQUEzQjtBQUFzQyxlQUFXLEVBQUVnQixNQUFNLENBQUN6QjtBQUExRCxJQURGLENBUEYsRUFVSXlCLE1BQU0sQ0FBQ29HLFFBQVAsSUFBbUJwRyxNQUFNLENBQUNvRyxRQUFQLEtBQW9CLE1BQXhDLGdCQUNHO0FBQUssYUFBUyxFQUFFakksbUdBQWlDa0k7QUFBakQsS0FBb0RyRyxNQUFNLENBQUNvRyxRQUEzRCxDQURILEdBRUcsSUFaTixlQWFFO0FBQUssYUFBUyxFQUFFakksdUZBQXFCbUk7QUFBckMsS0FDR3RHLE1BQU0sQ0FBQzhDLE1BQVAsQ0FBY2hDLEdBQWQsQ0FBa0IsVUFBQy9DLEtBQUQsRUFBUTBDLEVBQVI7QUFBQSx3QkFBZSxpREFBQyxvREFBRDtBQUFnQixXQUFLLEVBQUUxQyxLQUF2QjtBQUE4QixTQUFHLEVBQUUwQztBQUFuQyxNQUFmO0FBQUEsR0FBbEIsQ0FESCxDQWJGLEVBZ0JJVCxNQUFNLENBQUM0QyxTQUFSLGdCQUVHO0FBQUssYUFBUyxFQUFFekUsOEZBQTRCb0k7QUFBNUMsNENBRkgsR0FNRyxJQXRCTixDQURGLENBREY7QUE0QkQsQ0EvQkQ7O0FBaUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWdCO0FBQUEsTUFBYmhHLE1BQWEsU0FBYkEsTUFBYTtBQUNqQyxNQUFNaUcsY0FBYyxHQUFJakcsTUFBTSxHQUFHLENBQVYsR0FBZSxHQUF0QztBQUNBLE1BQU1rRyxpQkFBaUIsR0FBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdILGNBQWMsR0FBRyxDQUE1QixJQUFpQyxDQUE1RDtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFdEksbUZBQWhCO0FBQW1DLFNBQUssRUFBRTtBQUFFK0Msb0JBQWMsRUFBRTtBQUFsQjtBQUExQyxrQkFDRTtBQUFLLGFBQVMsRUFBRS9DLHNGQUFoQjtBQUFzQyxTQUFLLEVBQUU7QUFBRTBJLFdBQUssRUFBRUg7QUFBVDtBQUE3QyxrQkFDRSx3RUFERixlQUVFLHdFQUZGLGVBR0Usd0VBSEYsZUFJRSx3RUFKRixlQUtFLHdFQUxGLENBREYsZUFRRTtBQUFLLGFBQVMsRUFBRXZJLHlGQUF1QjJJO0FBQXZDLGtCQUNFLHdFQURGLGVBRUUsd0VBRkYsZUFHRSx3RUFIRixlQUlFLHdFQUpGLGVBS0Usd0VBTEYsQ0FSRixDQURGO0FBa0JELENBdEJEOztBQXdCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUFnQjtBQUFBLE1BQWIvRyxNQUFhLFNBQWJBLE1BQWE7O0FBQ2xDLE1BQU1nSCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDeEIsUUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWNGLElBQUksQ0FBQ0csT0FBTCxDQUFhLEdBQWIsQ0FBZCxFQUFpQzdHLEtBQWpDLENBQXVDLEdBQXZDLENBQWhCO0FBQ0EsUUFBTThHLElBQUksR0FBR0gsT0FBTyxDQUFDSSxLQUFSLEVBQWI7QUFDQUosV0FBTyxDQUFDdkMsSUFBUixDQUFhMEMsSUFBYjtBQUNBLFdBQU9ILE9BQU8sQ0FBQ0ssSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNELEdBTEQ7O0FBT0EsTUFBTU4sSUFBSSxHQUFHRCxPQUFPLENBQUNoSCxNQUFNLENBQUNpSCxJQUFSLENBQXBCO0FBRUEsc0JBQ0UsMkVBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBQ2pGLGNBQVEsRUFBRSxFQUFYO0FBQWVDLGVBQVMsRUFBRTtBQUExQjtBQUFiLGlDQURGLGVBRUU7QUFBSyxhQUFTLEVBQUU5RCxvRkFBa0JxSjtBQUFsQyxLQUFxQ3hILE1BQU0sQ0FBQ3lILGFBQTVDLENBRkYsZUFHRTtBQUFLLGFBQVMsRUFBRXRKLG9GQUFrQnFKO0FBQWxDLEtBQXFDUCxJQUFyQyxDQUhGLENBREY7QUFPRCxDQWpCRDs7QUFrQkEsaUVBQWVuQixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU00QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QztBQUFBLE1BQTNDdkYsU0FBMkMsUUFBM0NBLFNBQTJDO0FBQUEsTUFBaENJLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLE1BQTFCb0YsbUJBQTBCLFFBQTFCQSxtQkFBMEI7O0FBQUEsa0JBQzlCM0osK0NBQVEsQ0FBQyxFQUFELENBRHNCO0FBQUE7QUFBQSxNQUNyRDRKLE9BRHFEO0FBQUEsTUFDNUNDLFVBRDRDOztBQUFBLG1CQUVaN0osK0NBQVEsQ0FBQyxFQUFELENBRkk7QUFBQTtBQUFBLE1BRXJEOEosZ0JBRnFEO0FBQUEsTUFFbkNDLG1CQUZtQzs7QUFBQSxtQkFHdEIvSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIYztBQUFBO0FBQUEsTUFHckR3RSxXQUhxRDtBQUFBLE1BR3hDd0YsY0FId0M7O0FBQUEsbUJBSWhDaEssK0NBQVEsQ0FBQyxLQUFELENBSndCO0FBQUE7QUFBQSxNQUlyRGlLLE1BSnFEO0FBQUEsTUFJN0NDLFNBSjZDOztBQUFBLG1CQUs1QmxLLCtDQUFRLENBQUMsS0FBRCxDQUxvQjtBQUFBO0FBQUEsTUFLckRDLFFBTHFEO0FBQUEsTUFLM0NDLFdBTDJDOztBQUFBLG9CQU1wQ0YsK0NBQVEsQ0FBQyxVQUFELENBTjRCO0FBQUE7QUFBQSxNQU1yRG1LLElBTnFEO0FBQUEsTUFNL0NDLE9BTitDOztBQUFBLG9CQU94QnBLLCtDQUFRLENBQUMsY0FBRCxDQVBnQjtBQUFBO0FBQUEsTUFPckRxSyxVQVBxRDtBQUFBLE1BT3pDQyxhQVB5Qzs7QUFTNUQsTUFBTXhJLFVBQVUsR0FBRztBQUNqQnlJLFFBQUksRUFBRTtBQUNKLFNBQUcsa0JBREM7QUFFSixTQUFHLHNCQUZDO0FBR0osU0FBRyxTQUhDO0FBSUosU0FBRyxvQkFKQztBQUtKLFNBQUc7QUFMQyxLQURXO0FBUWpCQyxTQUFLLEVBQUU7QUFDTCxTQUFHLFlBREU7QUFFTCxTQUFHLGlCQUZFO0FBR0wsU0FBRyxTQUhFO0FBSUwsU0FBRyxlQUpFO0FBS0wsU0FBRztBQUxFLEtBUlU7QUFlakJDLFdBQU8sRUFBRTtBQUNQLFNBQUcsZUFESTtBQUVQLFNBQUcsd0JBRkk7QUFHUCxTQUFHLElBSEk7QUFJUCxTQUFHLGFBSkk7QUFLUCxTQUFHO0FBTEksS0FmUTtBQXNCakJDLFdBQU8sRUFBRTtBQUNQLFNBQUcsTUFESTtBQUVQLFNBQUcsZUFGSTtBQUdQLFNBQUcsaUJBSEk7QUFJUCxTQUFHLGNBSkk7QUFLUCxTQUFHO0FBTEksS0F0QlE7QUE2QmpCQyxVQUFNLEVBQUU7QUFDTixTQUFHLFlBREc7QUFFTixTQUFHLHFCQUZHO0FBR04sU0FBRyxTQUhHO0FBSU4sU0FBRyxvQkFKRztBQUtOLFNBQUc7QUFMRyxLQTdCUztBQW9DakJDLE9BQUcsRUFBRTtBQUNILFNBQUcsWUFEQTtBQUVILFNBQUcscUJBRkE7QUFHSCxTQUFHLFNBSEE7QUFJSCxTQUFHLG9CQUpBO0FBS0gsU0FBRztBQUxBO0FBcENZLEdBQW5COztBQTZDQSxNQUFNdEcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQzdCLEVBQUQsRUFBUTtBQUN6QixRQUFNb0ksVUFBVSwyQkFBb0JwSSxFQUFwQixjQUEwQjBILElBQTFCLENBQWhCO0FBQ0FsSixvREFBQSxDQUFVNEosVUFBVixFQUNHM0osSUFESCxDQUNRLGlCQUFjO0FBQUEsVUFBWHVGLElBQVcsU0FBWEEsSUFBVztBQUNsQm9ELGdCQUFVLENBQUNwRCxJQUFELENBQVY7O0FBQ0EsVUFBSXhHLFFBQUosRUFBYztBQUNaOEosMkJBQW1CLENBQUN0RCxJQUFELENBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xzRCwyQkFBbUIsQ0FBQ3RELElBQUksQ0FBQzBDLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFELENBQW5CO0FBQ0Q7QUFDRixLQVJILFdBU1MvSCxPQUFPLENBQUNDLEdBVGpCO0FBVUQsR0FaRDs7QUFjQSxNQUFNeUosY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDckksRUFBRCxFQUFRO0FBQzdCLFFBQU1zSSxjQUFjLDJCQUFvQnRJLEVBQXBCLENBQXBCO0FBQ0F4QixvREFBQSxDQUFVOEosY0FBVixFQUNHN0osSUFESCxDQUNRLGlCQUFjO0FBQUEsVUFBWHVGLElBQVcsU0FBWEEsSUFBVztBQUNsQnVELG9CQUFjLENBQUN2RCxJQUFELENBQWQ7QUFDRCxLQUhILFdBSVMsVUFBQ25GLEdBQUQ7QUFBQSxhQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixDQUFUO0FBQUEsS0FKVDtBQUtELEdBUEQ7O0FBU0EwSixrREFBUyxDQUFDLFlBQU07QUFDZDFHLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDQXBFLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsR0FIUSxFQUdOLENBQUNrSyxJQUFELENBSE0sQ0FBVDtBQUtBYSxrREFBUyxDQUFDLFlBQU07QUFDZEYsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQXhHLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQUhRLEVBR04sQ0FBQ0gsU0FBRCxDQUhNLENBQVQ7QUFLQTZHLGtEQUFTLENBQUMsWUFBTTtBQUNiL0ssWUFBRCxHQUNFOEosbUJBQW1CLENBQUNILE9BQUQsQ0FEckIsR0FFRUcsbUJBQW1CLENBQUNILE9BQU8sQ0FBQ1QsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBRCxDQUZyQjtBQUdELEdBSlEsRUFJTixDQUFDbEosUUFBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTWdMLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3JDLFFBQU1DLFdBQVcsR0FBRyxFQUFwQjs7QUFDQSxRQUFJRCxPQUFPLENBQUNuRSxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCZ0QseUJBQW1CLENBQUNILE9BQU8sQ0FBQ1QsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBRCxDQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMK0IsYUFBTyxDQUFDcEksR0FBUixDQUFZLFVBQUNzSSxNQUFELEVBQVk7QUFDdEJ4QixlQUFPLENBQUN3QixNQUFSLENBQWUsVUFBQ3BKLE1BQUQsRUFBWTtBQUN6QixjQUFJQSxNQUFNLENBQUNRLE1BQVAsS0FBa0JHLE1BQU0sQ0FBQ3lJLE1BQUQsQ0FBNUIsRUFBc0NELFdBQVcsQ0FBQ3hFLElBQVosQ0FBaUIzRSxNQUFqQjtBQUN2QyxTQUZEO0FBR0QsT0FKRDtBQUtBK0gseUJBQW1CLENBQUNvQixXQUFELENBQW5CO0FBQ0Q7QUFDRixHQVpEOztBQWNBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM1QnZCLG9CQUFnQixDQUFDL0MsTUFBakIsSUFBMkIsQ0FBNUIsR0FDSXVELGFBQWEsQ0FBQyxjQUFELENBRGpCLEdBRUlBLGFBQWEsQ0FBQyxtQkFBRCxDQUZqQjtBQUdELEdBSkQ7O0FBTUFVLGtEQUFTLENBQUMsWUFBTTtBQUNkSyxvQkFBZ0I7QUFDakIsR0FGUSxFQUVOLENBQUN2QixnQkFBRCxDQUZNLENBQVQ7QUFJQSxTQUNHdEYsV0FBVyxJQUFJb0YsT0FBZixJQUEwQnpGLFNBQTNCLGdCQUVJO0FBQUssYUFBUyxFQUFFaEUsd0ZBQXNCbUw7QUFBdEMsa0JBQ0U7QUFBSyxhQUFTLEVBQUVuTCx3RkFBc0JvTDtBQUF0QyxrQkFDRSxpREFBQyxxREFBRDtBQUNFLFdBQU8sRUFBRTNCLE9BRFg7QUFFRSxlQUFXLEVBQUVwRixXQUZmO0FBR0UscUJBQWlCLEVBQUV5RyxpQkFIckI7QUFJRSx1QkFBbUIsRUFBRXRCLG1CQUp2QjtBQUtFLGNBQVUsRUFBRTdIO0FBTGQsSUFERixDQURGLGVBVUU7QUFBSyxhQUFTLEVBQUUzQixxRkFBaEI7QUFBcUMsU0FBSyxFQUFFO0FBQUU4QyxhQUFPLEVBQUU7QUFBWDtBQUE1QyxrQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFdUksZUFBUyxFQUFFLFFBQWI7QUFBdUJDLGlCQUFXLEVBQUU7QUFBcEM7QUFBWiw4QkFFRTtBQUFRLFlBQVEsRUFBRSxrQkFBQzFLLENBQUQ7QUFBQSxhQUFPcUosT0FBTyxDQUFDckosQ0FBQyxDQUFDc0IsTUFBRixDQUFTRCxLQUFWLENBQWQ7QUFBQTtBQUFsQixrQkFDRSw0RUFERixlQUVFLDJFQUZGLGVBR0UsMEVBSEYsQ0FGRixDQURGLENBVkYsZUFvQkU7QUFBSyxTQUFLLEVBQUU7QUFBRWdGLGVBQVMsRUFBRSxPQUFiO0FBQXNCc0UsZUFBUyxFQUFFO0FBQWpDLEtBQVo7QUFBeUQsYUFBUyxFQUFFdkwsK0ZBQTZCd0w7QUFBakcsS0FDRzdCLGdCQUFnQixDQUFDaEgsR0FBakIsQ0FBcUIsVUFBQ2QsTUFBRCxFQUFTUyxFQUFUO0FBQUEsd0JBQ3BCLGlEQUFDLG9EQUFEO0FBQWdCLFlBQU0sRUFBRVQsTUFBeEI7QUFBZ0MsU0FBRyxFQUFFUztBQUFyQyxNQURvQjtBQUFBLEdBQXJCLENBREgsQ0FwQkYsZUF5QkU7QUFBSyxhQUFTLEVBQUV0QyxxRkFBbUJ5TDtBQUFuQyxLQUNHaEMsT0FBTyxDQUFDN0MsTUFBUixHQUFpQixDQUFqQixnQkFFRztBQUNFLGFBQVMsRUFBRTVHLHFGQURiO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYkQsaUJBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDRDtBQUxILEtBT0dvSyxVQVBILENBRkgsR0FZRyxJQWJOLGVBY0U7QUFBUSxhQUFTLEVBQUVsSyxxRkFBbkI7QUFBd0MsUUFBSSxFQUFDLFFBQTdDO0FBQXNELFdBQU8sRUFBRTtBQUFBLGFBQU0rSixTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUE7QUFBL0Qsc0JBZEYsZUFlRSxpREFBQyxpREFBRDtBQUNFLGFBQVMsRUFBRS9GLFNBRGI7QUFFRSxjQUFVLEVBQUVHLFVBRmQ7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNNEYsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBSFg7QUFJRSxRQUFJLEVBQUVELE1BSlI7QUFLRSxRQUFJLEVBQUUxRixJQUxSO0FBTUUsZUFBVyxFQUFFQyxXQU5mO0FBT0UsY0FBVSxFQUFFMUM7QUFQZCxJQWZGLENBekJGLENBRkosR0FzREksSUF2RE47QUF5REQsQ0E5S0Q7O0FBZ0xBLGlFQUFlNEgsT0FBZixFIiwiZmlsZSI6ImNsaWVudF9zcmNfY29tcG9uZW50c19yZXZpZXdzX1Jldmlld3NfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkYXRhID0ge1xuXHRcImJvZHlcIjogXCI8cGF0aCBjbGFzcz1cXFwiY2xyLWktc29saWQgY2xyLWktc29saWQtcGF0aC0xXFxcIiBkPVxcXCJNNS45MiAyYTEgMSAwIDAgMC0xIDF2MzBhMSAxIDAgMCAwIDIgMFYzYTEgMSAwIDAgMC0xLTF6XFxcIiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiLz48cGF0aCBjbGFzcz1cXFwiY2xyLWktc29saWQgY2xyLWktc29saWQtcGF0aC0yXFxcIiBkPVxcXCJNMzAuNSAzLjgyYTEgMSAwIDAgMC0xIDBhMTQuOSAxNC45IDAgMCAxLTYuMTMgMS4xNmExMy4xMSAxMy4xMSAwIDAgMS01LjE4LTEuNDlBMTIuNzggMTIuNzggMCAwIDAgMTMuMiAyYTEwLjg2IDEwLjg2IDAgMCAwLTQuMi44NVYyMGE4LjggOC44IDAgMCAxIDQuMjUtMS4wOGExMS4yMiAxMS4yMiAwIDAgMSA0LjIgMS4yOGExNC44NCAxNC44NCAwIDAgMCA2IDEuNjZhMTYuNzkgMTYuNzkgMCAwIDAgNy0xLjM3YTEgMSAwIDAgMCAuNTUtLjg5VjQuNjdhMSAxIDAgMCAwLS41LS44NXpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPlwiLFxuXHRcIndpZHRoXCI6IDM2LFxuXHRcImhlaWdodFwiOiAzNlxufTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcblxuY29uc3QgRXhwYW5kZWRQaG90b3MgPSAoeyBwaG90byB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgcGhvdG9cbiAgICAgID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2V4cGFuZGVkID8gc3R5bGVzLm92ZXJsYXlQaG90byA6ICcnfT5cbiAgICAgICAgICB7KCFleHBhbmRlZClcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmwgPyBwaG90by51cmwgOiBwaG90b31cbiAgICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ1RodW1ibmFpbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmwgPyBwaG90by51cmwgOiBwaG90b31cbiAgICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRlZFBob3RvcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJY29uLCBJbmxpbmVJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IGZsYWdTb2xpZCBmcm9tICdAaWNvbmlmeS1pY29ucy9jbGFyaXR5L2ZsYWctc29saWQnO1xuXG5cbmNvbnN0IEhlbHBmdWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBoZWxwZnVsbmVzcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoaGVscGZ1bG5lc3MpO1xuICBjb25zdCBbcmVwb3J0ZWQsIHNldFJlcG9ydGVkXSA9IHVzZVN0YXRlKCdSZXBvcnQnKTtcbiAgY29uc3QgW2lzUmVwb3J0ZWQsIHNldElzUmVwb3J0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50ID0gKGUpID0+IHtcbiAgICBzZXRDb3VudChoZWxwZnVsbmVzcyArIDEpO1xuXG4gICAgaWYgKHByb3BzLnJldmlld19pZCkge1xuICAgICAgY29uc3QgeyByZXZpZXdfaWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcmV2aWV3cy8ke3Jldmlld19pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5xdWVzdGlvbl9pZCkge1xuICAgICAgY29uc3QgeyBxdWVzdGlvbl9pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9xYS9xdWVzdGlvbnMvJHtxdWVzdGlvbl9pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5hbnN3ZXJfaWQpIHtcbiAgICAgIGNvbnN0IHsgYW5zd2VyX2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHthbnN3ZXJfaWR9L2hlbHBmdWxgKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXBvcnQgPSAoKSA9PiB7XG4gICAgc2V0UmVwb3J0ZWQoJ1JlcG9ydGVkJyk7XG4gICAgc2V0SXNSZXBvcnRlZCh0cnVlKTtcbiAgICBpZiAocHJvcHMuYW5zd2VyX2lkKSB7XG4gICAgICBheGlvcy5wdXQoYC9xYS9hbnN3ZXJzLyR7cHJvcHMuYW5zd2VyX2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJldmlld19pZCkge1xuICAgICAgYXhpb3MucHV0KGAvcmV2aWV3cy8ke3Byb3BzLnJldmlld19pZH0vcmVwb3J0YClcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zLnB1dChgL3FhL3F1ZXN0aW9ucy8ke3Byb3BzLnF1ZXN0aW9uX2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlbHBmdWx9PlxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhlbHBmdWxUZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bH0+V2FzIHRoaXMgaGVscGZ1bD88L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJoZWxwZnVsLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVDb3VudH0gY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bEJ1dHRvbn0gdmFsdWU9XCJ5ZXNcIj5ZZXM8L2J1dHRvbj5cbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoZWxwZnVsLWNvdW50XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVscGZ1bH0gJHtzdHlsZXMuaGVscGZ1bENvdW50fWB9PlxuICAgICAgICAoXG4gICAgICAgIHtjb3VudH1cbiAgICAgICAgKVxuICAgICAgICB7JyAnfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGRhdGEtdGVzdGlkPVwicmVwb3J0LWJ1dHRvblwiIGNsYXNzTmFtZT17aXNSZXBvcnRlZCA/IHN0eWxlcy5yZXBvcnRlZFRydWUgOiBzdHlsZXMucmVwb3J0ZWR9IG9uQ2xpY2s9e3JlcG9ydH0gdHlwZT1cInN1Ym1pdFwiPntyZXBvcnRlZH08L2J1dHRvbj5cbiAgICAgIHtpc1JlcG9ydGVkID8gPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ30gaWNvbj17ZmxhZ1NvbGlkfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwZnVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaGFyYWN0ZXJpc3RpY3MgPSAoeyBjaGFyYWN0ZXJpc3RpY3MsIGNoYXJPYmplY3QsIHNldFJldmlldywgcmV2aWV3IH0pID0+IHtcbiAgY29uc3QgW2NoYXJzLCBzZXRDaGFyc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhcmFjdGVyaXN0aWNzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBhcnIgPSB2YWx1ZS5zcGxpdCgnLScpO1xuICAgIGNvbnN0IHJhdGluZyA9IGFyclswXTtcbiAgICBjb25zdCBpZCA9IGFyclsxXTtcbiAgICBjb25zdCBuZXdDaGFyYWN0ZXJpc3RpY3MgPSBjaGFycztcbiAgICBuZXdDaGFyYWN0ZXJpc3RpY3NbaWRdID0gTnVtYmVyKHJhdGluZyk7XG4gICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBjaGFyYWN0ZXJpc3RpY3M6IG5ld0NoYXJhY3RlcmlzdGljcyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIChjaGFyYWN0ZXJpc3RpY3MpXG4gICAgICA/IE9iamVjdC5lbnRyaWVzKGNoYXJhY3RlcmlzdGljcykubWFwKCh4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXt4WzFdLmlkfSBvbkNoYW5nZT17aGFuZGxlQ2hhcmFjdGVyaXN0aWNzfT5cbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJyB9fT57eFswXX0gKjwvcD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnIH19IGh0bWxGb3I9XCJvbmVcIj57Y2hhck9iamVjdFt4WzBdXVsxXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AxLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycgfX0gaHRtbEZvcj1cInR3b1wiPntjaGFyT2JqZWN0W3hbMF1dWzJdfTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT17eFswXX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17YDItJHt4WzFdLmlkfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZ3JpZFJvdzogJzEvMicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJyB9fSBodG1sRm9yPVwidGhyZWVcIj57Y2hhck9iamVjdFt4WzBdXVszXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AzLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycgfX0gaHRtbEZvcj1cImZvdXJcIj57Y2hhck9iamVjdFt4WzBdXVs0XX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2A0LSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycgfX0gaHRtbEZvcj1cImZpdmVcIj57Y2hhck9iamVjdFt4WzBdXVs1XX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2A1LSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbnRlcmFjdGl2ZVN0YXJzID0gKHsgcmV2aWV3LCBzZXRSZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uT2JqID0ge1xuICAgIDE6ICdQb29yJyxcbiAgICAyOiAnRmFpcicsXG4gICAgMzogJ0F2ZXJhZ2UnLFxuICAgIDQ6ICdHb29kJyxcbiAgICA1OiAnR3JlYXQnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZhbHVlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0VmFsdWUoZGVzY3JpcHRpb25PYmpbaW5kZXhdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiPlxuICAgICAge1suLi5BcnJheSg1KV0ubWFwKChzdGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5kZXggPD0gKGhvdmVyIHx8IHJhdGluZykgPyBzdHlsZXMub24gOiBzdHlsZXMub2ZmfSAke3N0eWxlcy5idXR0b259YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmF0aW5nKGluZGV4KTtcbiAgICAgICAgICAgICAgaGFuZGxlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSYXRpbmcocmF0aW5nKTtcbiAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByYXRpbmc6IGluZGV4IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzVweCcsIGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+e3ZhbHVlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aXZlU3RhcnM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUnN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUmV2aWV3cy5tb2R1bGUuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCBDaGFyYWN0ZXJpc3RpY3MgZnJvbSAnLi9DaGFyYWN0ZXJpc3RpY3MnO1xuaW1wb3J0IEludGVyYWN0aXZlU3RhcnMgZnJvbSAnLi9JbnRlcmFjdGl2ZVN0YXJzJztcblxuY29uc3QgUmV2aWV3c01vZGFsID0gKHtcbiAgcHJvZHVjdElkLCBvbkNsb3NlLCBvcGVuLCBnZXRSZXZpZXdzLCBuYW1lLCBtZXRhUmV2aWV3cywgY2hhck9iamVjdFxufSkgPT4ge1xuICBjb25zdCBbcmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUoe1xuICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZCxcbiAgICByYXRpbmc6IDAsXG4gICAgc3VtbWFyeTogJycsXG4gICAgYm9keTogJycsXG4gICAgcmVjb21tZW5kOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9zOiBbXSxcbiAgICBjaGFyYWN0ZXJpc3RpY3M6IHt9LFxuICB9KTtcbiAgY29uc3QgW3RodW1ibmFpbHMsIHNldFRodW1ibmFpbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NoYXJhY3RlckNvdW50LCBzZXRDaGFyYWN0ZXJDb3VudF0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgIC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2lcbiAgKTtcblxuICBjb25zdCB0b0Jhc2U2NCA9IChmaWxlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmluYWxSZXZpZXcgPSB7IC4uLnJldmlldyB9O1xuICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgY29uc29sZS5sb2coZmluYWxSZXZpZXcpXG4gICAgaWYgKCF2YWxpZEVtYWlsUmVnZXgudGVzdChmaW5hbFJldmlldy5lbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKCcqWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbmFsUmV2aWV3LnBob3Rvcy5tYXAoKHBob3RvKSA9PiB7XG4gICAgICBpZiAocGhvdG8uc2l6ZSA+IDEwMDAwMCkge1xuICAgICAgICBzZXRFcnJvcignKlRoZSBpbWFnZXMgc2VsZWN0ZWQgYXJlIGludmFsaWQgb3IgdW5hYmxlIHRvIGJlIHVwbG9hZGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lOiBwaG90by5uYW1lLFxuICAgICAgICBkYXRhOiAnJyxcbiAgICAgIH07XG4gICAgICBjb25zdCBwcm9taXNlID0gdG9CYXNlNjQocGhvdG8pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHBheWxvYWQuZGF0YSA9IHJlc3VsdC5zcGxpdCgnLCcpWzFdKVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KCcvdXBsb2FkX2ltYWdlcycsIHBheWxvYWQpKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgZmluYWxSZXZpZXcucGhvdG9zID0gcmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gYXhpb3MucG9zdCgnL3Jldmlld3MnLCBmaW5hbFJldmlldykpXG4gICAgICAgIC50aGVuKCgpID0+IGdldFJldmlld3MocHJvZHVjdElkKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gb25DbG9zZSgpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRDaGFyYWN0ZXJDb3VudCg1MCAtIHZhbHVlLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBpZiAocmV2aWV3LnBob3Rvcy5sZW5ndGggPCA1KSB7XG4gICAgICBzZXRSZXZpZXcoe1xuICAgICAgICAuLi5yZXZpZXcsXG4gICAgICAgIHBob3RvczogWy4uLnJldmlldy5waG90b3MsIGUudGFyZ2V0LmZpbGVzWzBdXSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGh1bWJuYWlscyhbXG4gICAgICAgIC4uLnRodW1ibmFpbHMsXG4gICAgICAgIFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pLFxuICAgICAgXSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgLy8gICBzZXRSZXZpZXcoc3RhdGUpO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgKG1ldGFSZXZpZXdzICYmIHJldmlldyAmJiByZXZpZXcucGhvdG9zKVxuICAgICAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgLTE1MHZoKScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgICAgIDxoMz5Xcml0ZSBZb3VyIFJldmlldzwvaDM+XG4gICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICBBYm91dCB0aGUge25hbWV9XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAvLyBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIlwiXG4gICAgICAgICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0+T3ZlcmFsbCBSYXRpbmc6ICo8L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtSc3R5bGVzLnN0YXJSYXRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aXZlU3RhcnMgcmV2aWV3PXtyZXZpZXd9IHNldFJldmlldz17c2V0UmV2aWV3fSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5Xb3VsZCB5b3UgcmVjb21tZW5kIHRoaXMgcHJvZHVjdD8gKjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiWWVzXCIgbmFtZT1cInJlY29tbWVuZFwiIG9uQ2xpY2s9eygpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgcmVjb21tZW5kOiB0cnVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJZZXNcIj5ZZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiTm9cIiBuYW1lPVwicmVjb21tZW5kXCIgb25DbGljaz17KCkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByZWNvbW1lbmQ6IGZhbHNlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJOb1wiPk5vPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVyaXN0aWNzXG4gICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJpc3RpY3M9e21ldGFSZXZpZXdzLmNoYXJhY3RlcmlzdGljc31cbiAgICAgICAgICAgICAgICAgIGNoYXJPYmplY3Q9e2NoYXJPYmplY3R9XG4gICAgICAgICAgICAgICAgICBzZXRSZXZpZXc9e3NldFJldmlld31cbiAgICAgICAgICAgICAgICAgIHJldmlldz17cmV2aWV3fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+UmV2aWV3IFRpdGxlOjwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBzdW1tYXJ5OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBCZXN0IHB1cmNoYXNlIGV2ZXIhXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlJldmlldyBCb2R5OiAqPC9wPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBib2R5OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ291bnRDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiNTBcIlxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xSW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoeSBkaWQgeW91IGxpa2UgdGhlIHByb2R1Y3Qgb3Igbm90P1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JywgZm9udFNpemU6ICcxMnB4JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXJDb3VudCA8PSAwID8gJ01pbmltdW0gQ2hhcmFjdGVycyBSZWFjaGVkJyA6IGBNaW5pbXVtIHJlcXVpcmVkIGNoYXJhY3RlcnMgbGVmdDogJHtjaGFyYWN0ZXJDb3VudH1gfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgbmlja25hbWU/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTEhXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3Jldmlldy5uYW1lLmxlbmd0aCA+IDAgPyAnRm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgZW1haWw/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja3NvbjExQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntyZXZpZXcuZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAge3Jldmlldy5waG90b3MubGVuZ3RoIDwgNSA/IDxpbnB1dCB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAge3RodW1ibmFpbHMubWFwKChwaG90bykgPT4gPGltZyBhbHQ9e3Bob3RvfSBrZXk9e3Bob3RvfSBjbGFzc05hbWU9e2Ake1JzdHlsZXMuaW1nVGh1bWJuYWlsfSAke1JzdHlsZXMucmV2aWV3UGhvdG99YH0gc3JjPXtwaG90b30gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzVweCcsIGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+KiBNYW5kYXRvcnkgRmllbGRzPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0IFJldmlld1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3NNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUmV2aWV3cy5tb2R1bGUuY3NzJztcbmltcG9ydCBIZWxwZnVsIGZyb20gJy4uL0hlbHBmdWwnO1xuaW1wb3J0IEV4cGFuZGVkUGhvdG9zIGZyb20gJy4uL0V4cGFuZGVkUGhvdG9zJztcblxuY29uc3QgUmV2aWV3VGVtcGxhdGUgPSAoeyByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld1RlbXBsYXRlfT5cbiAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXtyZXZpZXcucmF0aW5nfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlU3VtbWFyeX0+e3Jldmlldy5zdW1tYXJ5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlQm9keX0+e3Jldmlldy5ib2R5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlVXNlckRhdGVCYXJ9PlxuICAgICAgICAgIDxVc2VyRGF0ZUJhciByZXZpZXc9e3Jldmlld30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVIZWxwZnVsUmVwb3J0QmFyfT5cbiAgICAgICAgICA8SGVscGZ1bCByZXZpZXdfaWQ9e3Jldmlldy5yZXZpZXdfaWR9IGhlbHBmdWxuZXNzPXtyZXZpZXcuaGVscGZ1bG5lc3N9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHJldmlldy5yZXNwb25zZSAmJiByZXZpZXcucmVzcG9uc2UgIT09ICdudWxsJylcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVSZXNwb25zZUZyb21TZWxsZXJ9PntyZXZpZXcucmVzcG9uc2V9PC9kaXY+XG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlSW1hZ2VzfT5cbiAgICAgICAgICB7cmV2aWV3LnBob3Rvcy5tYXAoKHBob3RvLCBpZCkgPT4gPEV4cGFuZGVkUGhvdG9zIHBob3RvPXtwaG90b30ga2V5PXtpZH0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhyZXZpZXcucmVjb21tZW5kKVxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVJlY29tbWVuZHNCYXJ9PlxuICAgICAgICAgICAgICAmIzEwMDAzOyBZZXMsIEkgcmVjb21tZW5kIHRoaXMgcHJvZHVjdFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU3RhclJhdGluZyA9ICh7IHJhdGluZyB9KSA9PiB7XG4gIGNvbnN0IHN0YXJQZXJjZW50YWdlID0gKHJhdGluZyAvIDUpICogMTAwO1xuICBjb25zdCByb3VuZGVkUGVyY2VudGFnZSA9IChNYXRoLnJvdW5kKHN0YXJQZXJjZW50YWdlICogNSkgLyA1KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ30gc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ1RvcH0gc3R5bGU9e3sgd2lkdGg6IHJvdW5kZWRQZXJjZW50YWdlIH19PlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyUmF0aW5nQm90dG9tfT5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFVzZXJEYXRlQmFyID0gKHsgcmV2aWV3IH0pID0+IHtcbiAgY29uc3QgZ2V0RGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgZGF0ZUFyciA9IGRhdGUuc2xpY2UoMCwgZGF0ZS5pbmRleE9mKCdUJykpLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVBcnIuc2hpZnQoKTtcbiAgICBkYXRlQXJyLnB1c2goeWVhcik7XG4gICAgcmV0dXJuIGRhdGVBcnIuam9pbignLScpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGUgPSBnZXREYXRlKHJldmlldy5kYXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxMCwgZm9udFN0eWxlOiAnaXRhbGljJ319PiYjMTAwMDM7IFZlcmlmaWVkIFB1cmNoYXNlcjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRhdGVCYXJ9PntyZXZpZXcucmV2aWV3ZXJfbmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRhdGVCYXJ9PntkYXRlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJldmlld1RlbXBsYXRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJhdGluZ0JyZWFrZG93biBmcm9tICcuL1JhdGluZ0JyZWFrZG93bic7XG5pbXBvcnQgUmV2aWV3VGVtcGxhdGUgZnJvbSAnLi9SZXZpZXdUZW1wbGF0ZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJldmlld3NNb2RhbCBmcm9tICcuL1Jldmlld01vZGFsJztcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4uL1N0YXJSYXRpbmcnO1xuXG5jb25zdCBSZXZpZXdzID0gKHsgcHJvZHVjdElkLCBuYW1lLCBoYW5kbGVSZXZpZXdBdmVyYWdlIH0pID0+IHtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGlzcGxheWVkUmV2aWV3cywgc2V0RGlzcGxheWVkUmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFttZXRhUmV2aWV3cywgc2V0TWV0YVJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ3JlbGV2YW50Jyk7XG4gIGNvbnN0IFttb3JlQnV0dG9uLCBzZXRNb3JlQnV0dG9uXSA9IHVzZVN0YXRlKCdNb3JlIFJldmlld3MnKTtcblxuICBjb25zdCBjaGFyT2JqZWN0ID0ge1xuICAgIFNpemU6IHtcbiAgICAgIDE6IFwiQSBzaXplIHRvbyBzbWFsbFwiLFxuICAgICAgMjogXCIxLzIgYSBzaXplIHRvbyBzbWFsbFwiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIjEvMiBhIHNpemUgdG9vIGJpZ1wiLFxuICAgICAgNTogXCJBIHNpemUgdG9vIHdpZGVcIixcbiAgICB9LFxuICAgIFdpZHRoOiB7XG4gICAgICAxOiBcIlRvbyBuYXJyb3dcIixcbiAgICAgIDI6IFwiU2xpZ2h0bHkgbmFycm93XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiU2xpZ2h0bHkgd2lkZVwiLFxuICAgICAgNTogXCJUb28gd2lkZVwiLFxuICAgIH0sXG4gICAgQ29tZm9ydDoge1xuICAgICAgMTogXCJVbmNvbWZvcnRhYmxlXCIsXG4gICAgICAyOiBcIlNsaWdodGx5IHVuY29tZm9ydGFibGVcIixcbiAgICAgIDM6IFwiT2tcIixcbiAgICAgIDQ6IFwiQ29tZm9ydGFibGVcIixcbiAgICAgIDU6IFwiUGVyZmVjdFwiXG4gICAgfSxcbiAgICBRdWFsaXR5OiB7XG4gICAgICAxOiBcIlBvb3JcIixcbiAgICAgIDI6IFwiQmVsb3cgYXZlcmFnZVwiLFxuICAgICAgMzogXCJXaGF0IEkgZXhwZWN0ZWRcIixcbiAgICAgIDQ6IFwiUHJldHR5IGdyZWF0XCIsXG4gICAgICA1OiBcIlBlcmZlY3RcIixcbiAgICB9LFxuICAgIExlbmd0aDoge1xuICAgICAgMTogXCJSdW5zIHNob3J0XCIsXG4gICAgICAyOiBcIlJ1bnMgc2xpZ2h0bHkgc2hvcnRcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCJSdW5zIHNsaWdodGx5IGxvbmdcIixcbiAgICAgIDU6IFwiUnVucyBsb25nXCIsXG4gICAgfSxcbiAgICBGaXQ6IHtcbiAgICAgIDE6IFwiUnVucyB0aWdodFwiLFxuICAgICAgMjogXCJSdW5zIHNsaWdodGx5IHRpZ2h0XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiUnVucyBzbGlnaHRseSBsb25nXCIsXG4gICAgICA1OiBcIlJ1bnMgbG9uZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZ2V0UmV2aWV3cyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHJldmlld3NVUkwgPSBgL3Jldmlld3Mvc29ydC8ke2lkfS8ke3NvcnR9YDtcbiAgICBheGlvcy5nZXQocmV2aWV3c1VSTClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRSZXZpZXdzKGRhdGEpO1xuICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldERpc3BsYXllZFJldmlld3MoZGF0YS5zbGljZSgwLCAyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9O1xuXG4gIGNvbnN0IGdldE1ldGFSZXZpZXdzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgbWV0YVJldmlld3NVUkwgPSBgL3Jldmlld3MvbWV0YS8ke2lkfWA7XG4gICAgYXhpb3MuZ2V0KG1ldGFSZXZpZXdzVVJMKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHNldE1ldGFSZXZpZXdzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFJldmlld3MoMjAxMDMpO1xuICAgIHNldEV4cGFuZGVkKGV4cGFuZGVkKTtcbiAgfSwgW3NvcnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1ldGFSZXZpZXdzKDIwMTAzKTtcbiAgICBnZXRSZXZpZXdzKDIwMTAzKTtcbiAgfSwgW3Byb2R1Y3RJZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGV4cGFuZGVkKVxuICAgID8gc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdzKVxuICAgIDogc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdzLnNsaWNlKDAsIDIpKVxuICB9LCBbZXhwYW5kZWRdKTtcblxuICBjb25zdCBoYW5kbGVTdGFyRmlsdGVycyA9IChmaWx0ZXJzKSA9PiB7XG4gICAgY29uc3QgcmV2aWV3QXJyYXkgPSBbXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cy5zbGljZSgwLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgcmV2aWV3cy5maWx0ZXIoKHJldmlldykgPT4ge1xuICAgICAgICAgIGlmIChyZXZpZXcucmF0aW5nID09PSBOdW1iZXIoZmlsdGVyKSkgcmV2aWV3QXJyYXkucHVzaChyZXZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhyZXZpZXdBcnJheSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vcmVCdXR0b24gPSAoKSA9PiB7XG4gICAgKGRpc3BsYXllZFJldmlld3MubGVuZ3RoIDw9IDIpXG4gICAgICA/IHNldE1vcmVCdXR0b24oJ01vcmUgUmV2aWV3cycpXG4gICAgICA6IHNldE1vcmVCdXR0b24oJ1Nob3cgTGVzcyBSZXZpZXdzJyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVNb3JlQnV0dG9uKCk7XG4gIH0sIFtkaXNwbGF5ZWRSZXZpZXdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICAobWV0YVJldmlld3MgJiYgcmV2aWV3cyAmJiBwcm9kdWN0SWQpXG4gICAgICA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50QnJlYWtkb3dufT5cbiAgICAgICAgICAgIDxSYXRpbmdCcmVha2Rvd25cbiAgICAgICAgICAgICAgcmV2aWV3cz17cmV2aWV3c31cbiAgICAgICAgICAgICAgbWV0YVJldmlld3M9e21ldGFSZXZpZXdzfVxuICAgICAgICAgICAgICBoYW5kbGVTdGFyRmlsdGVycz17aGFuZGxlU3RhckZpbHRlcnN9XG4gICAgICAgICAgICAgIGhhbmRsZVJldmlld0F2ZXJhZ2U9e2hhbmRsZVJldmlld0F2ZXJhZ2V9XG4gICAgICAgICAgICAgIGNoYXJPYmplY3Q9e2NoYXJPYmplY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50SGVhZGVyfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduU2VsZjogJ2NlbnRlcicsIHBhZGRpbmdMZWZ0OiAnMjBweCcgfX0+XG4gICAgICAgICAgICAgIFNvcnQgb246XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5SZWxldmFudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGVscGZ1bDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+TmV3ZXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6ICc4MDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50SW5kaXZpZHVhbFJldmlld30+XG4gICAgICAgICAgICB7ZGlzcGxheWVkUmV2aWV3cy5tYXAoKHJldmlldywgaWQpID0+IChcbiAgICAgICAgICAgICAgPFJldmlld1RlbXBsYXRlIHJldmlldz17cmV2aWV3fSBrZXk9e2lkfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRGb290ZXJ9PlxuICAgICAgICAgICAge3Jldmlld3MubGVuZ3RoID4gMVxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21vcmVCdXR0b259XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBSZXZpZXcgICsgPC9idXR0b24+XG4gICAgICAgICAgICA8UmV2aWV3c01vZGFsXG4gICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxuICAgICAgICAgICAgICBnZXRSZXZpZXdzPXtnZXRSZXZpZXdzfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIG1ldGFSZXZpZXdzPXttZXRhUmV2aWV3c31cbiAgICAgICAgICAgICAgY2hhck9iamVjdD17Y2hhck9iamVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==