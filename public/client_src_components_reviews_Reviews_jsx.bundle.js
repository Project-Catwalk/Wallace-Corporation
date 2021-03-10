(self["webpackChunkwallace_corporation"] = self["webpackChunkwallace_corporation"] || []).push([["client_src_components_reviews_Reviews_jsx"],{

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@iconify-icons/clarity/flag-solid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@iconify-icons/clarity/flag-solid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0V4cGFuZGVkUGhvdG9zLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlbHBmdWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9DaGFyYWN0ZXJpc3RpY3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9JbnRlcmFjdGl2ZVN0YXJzLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Jldmlld3MvUmV2aWV3TW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcmV2aWV3cy9SZXZpZXdUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzL1Jldmlld3MuanN4Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwiY2hhck9iamVjdCIsInNldFJldmlldyIsInJldmlldyIsImNoYXJzIiwic2V0Q2hhcnMiLCJoYW5kbGVDaGFyYWN0ZXJpc3RpY3MiLCJ2YWx1ZSIsInRhcmdldCIsImFyciIsInNwbGl0IiwicmF0aW5nIiwiaWQiLCJuZXdDaGFyYWN0ZXJpc3RpY3MiLCJOdW1iZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwieCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJqdXN0aWZ5U2VsZiIsIkludGVyYWN0aXZlU3RhcnMiLCJzZXRSYXRpbmciLCJob3ZlciIsInNldEhvdmVyIiwic2V0VmFsdWUiLCJkZXNjcmlwdGlvbk9iaiIsImhhbmRsZVZhbHVlIiwiaW5kZXgiLCJBcnJheSIsInN0YXIiLCJjb21tZW50IiwiUmV2aWV3c01vZGFsIiwicHJvZHVjdElkIiwib25DbG9zZSIsIm9wZW4iLCJnZXRSZXZpZXdzIiwibmFtZSIsIm1ldGFSZXZpZXdzIiwicHJvZHVjdF9pZCIsInN1bW1hcnkiLCJib2R5IiwicmVjb21tZW5kIiwiZW1haWwiLCJwaG90b3MiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsInBob3RvU2l6ZSIsIm1pc3NpbmdGaWVsZHMiLCJlcnJvciIsInNldEVycm9yIiwiY2hhcmFjdGVyQ291bnQiLCJzZXRDaGFyYWN0ZXJDb3VudCIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaW5hbFJldmlldyIsInByb21pc2VzIiwidGVzdCIsImxlbmd0aCIsImtleXMiLCJzaXplIiwicGF5bG9hZCIsImRhdGEiLCJwcm9taXNlIiwicHVzaCIsImFsbCIsInJlc3VsdHMiLCJoYW5kbGVDb3VudENoYW5nZSIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWF4SGVpZ2h0IiwidHJhbnNmb3JtIiwibW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsIm1hcmdpbiIsIlJzdHlsZXMiLCJzdGFyUmF0aW5nIiwiZmluZVByaW50IiwibW9kYWxCdXR0b24iLCJSZXZpZXdUZW1wbGF0ZSIsInJldmlld1RlbXBsYXRlIiwidGVtcGxhdGVTdW1tYXJ5IiwidGVtcGxhdGVVc2VyRGF0ZUJhciIsInRlbXBsYXRlSGVscGZ1bFJlcG9ydEJhciIsInJlc3BvbnNlIiwidGVtcGxhdGVSZXNwb25zZUZyb21TZWxsZXIiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsInRlbXBsYXRlSW1hZ2VzIiwicGFkZGluZ1JpZ2h0IiwiU3RhclJhdGluZyIsInN0YXJQZXJjZW50YWdlIiwicm91bmRlZFBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwic3RhclJhdGluZ0JvdHRvbSIsIlVzZXJEYXRlQmFyIiwiZ2V0RGF0ZSIsImRhdGUiLCJkYXRlQXJyIiwic2xpY2UiLCJpbmRleE9mIiwieWVhciIsInNoaWZ0Iiwiam9pbiIsImZvbnRTdHlsZSIsInVzZXJEYXRlQmFyIiwicmV2aWV3ZXJfbmFtZSIsIlJldmlld3MiLCJoYW5kbGVSZXZpZXdBdmVyYWdlIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJkaXNwbGF5ZWRSZXZpZXdzIiwic2V0RGlzcGxheWVkUmV2aWV3cyIsInNldE1ldGFSZXZpZXdzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic29ydCIsInNldFNvcnQiLCJtb3JlQnV0dG9uIiwic2V0TW9yZUJ1dHRvbiIsIlNpemUiLCJXaWR0aCIsIkNvbWZvcnQiLCJRdWFsaXR5IiwiTGVuZ3RoIiwiRml0IiwicmV2aWV3c1VSTCIsImdldE1ldGFSZXZpZXdzIiwibWV0YVJldmlld3NVUkwiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGFyRmlsdGVycyIsImZpbHRlcnMiLCJyZXZpZXdBcnJheSIsImZpbHRlciIsImhhbmRsZU1vcmVCdXR0b24iLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRCcmVha2Rvd24iLCJhbGlnblNlbGYiLCJwYWRkaW5nTGVmdCIsIm92ZXJmbG93WSIsInBhcmVudEluZGl2aWR1YWxSZXZpZXciLCJwYXJlbnRGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEtBQUQsQ0FESjtBQUFBO0FBQUEsTUFDN0JDLFFBRDZCO0FBQUEsTUFDbkJDLFdBRG1COztBQUdwQyxTQUNFSCxLQUFLLGdCQUVEO0FBQU0sYUFBUyxFQUFFRSxRQUFRLEdBQUdFLGlGQUFILEdBQXlCO0FBQWxELEtBQ0ksQ0FBQ0YsUUFBRixnQkFFRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksaUZBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBO0FBTmIsSUFGSCxnQkFZRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFH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ZmlsZSI6ImNsaWVudF9zcmNfY29tcG9uZW50c19yZXZpZXdzX1Jldmlld3NfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBFeHBhbmRlZFBob3RvcyA9ICh7IHBob3RvIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICBwaG90b1xuICAgICAgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBzdHlsZXMub3ZlcmxheVBob3RvIDogJyd9PlxuICAgICAgICAgIHsoIWV4cGFuZGVkKVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nVGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnVybCA/IHBob3RvLnVybCA6IHBob3RvfVxuICAgICAgICAgICAgICAgIGFsdD1cInJldmlld1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApXG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVkUGhvdG9zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEljb24sIElubGluZUljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgZmxhZ1NvbGlkIGZyb20gJ0BpY29uaWZ5LWljb25zL2NsYXJpdHkvZmxhZy1zb2xpZCc7XG5cblxuY29uc3QgSGVscGZ1bCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGhlbHBmdWxuZXNzIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShoZWxwZnVsbmVzcyk7XG4gIGNvbnN0IFtyZXBvcnRlZCwgc2V0UmVwb3J0ZWRdID0gdXNlU3RhdGUoJ1JlcG9ydCcpO1xuICBjb25zdCBbaXNSZXBvcnRlZCwgc2V0SXNSZXBvcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnQgPSAoZSkgPT4ge1xuICAgIHNldENvdW50KGhlbHBmdWxuZXNzICsgMSk7XG5cbiAgICBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBjb25zdCB7IHJldmlld19pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cmV2aWV3X2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnF1ZXN0aW9uX2lkKSB7XG4gICAgICBjb25zdCB7IHF1ZXN0aW9uX2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3FhL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uX2lkfS9oZWxwZnVsYClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFuc3dlcl9pZCkge1xuICAgICAgY29uc3QgeyBhbnN3ZXJfaWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcWEvYW5zd2Vycy8ke2Fuc3dlcl9pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcG9ydCA9ICgpID0+IHtcbiAgICBzZXRSZXBvcnRlZCgnUmVwb3J0ZWQnKTtcbiAgICBzZXRJc1JlcG9ydGVkKHRydWUpO1xuICAgIGlmIChwcm9wcy5hbnN3ZXJfaWQpIHtcbiAgICAgIGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHtwcm9wcy5hbnN3ZXJfaWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMucmV2aWV3X2lkKSB7XG4gICAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cHJvcHMucmV2aWV3X2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MucHV0KGAvcWEvcXVlc3Rpb25zLyR7cHJvcHMucXVlc3Rpb25faWR9L3JlcG9ydGApXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bH0+XG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiaGVscGZ1bFRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsfT5XYXMgdGhpcyBoZWxwZnVsPzwvZGl2PlxuICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZUNvdW50fSBjbGFzc05hbWU9e3N0eWxlcy5oZWxwZnVsQnV0dG9ufSB2YWx1ZT1cInllc1wiPlllczwvYnV0dG9uPlxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhlbHBmdWwtY291bnRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWxwZnVsfSAke3N0eWxlcy5oZWxwZnVsQ291bnR9YH0+XG4gICAgICAgIChcbiAgICAgICAge2NvdW50fVxuICAgICAgICApXG4gICAgICAgIHsnICd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJyZXBvcnQtYnV0dG9uXCIgY2xhc3NOYW1lPXtpc1JlcG9ydGVkID8gc3R5bGVzLnJlcG9ydGVkVHJ1ZSA6IHN0eWxlcy5yZXBvcnRlZH0gb25DbGljaz17cmVwb3J0fSB0eXBlPVwic3VibWl0XCI+e3JlcG9ydGVkfTwvYnV0dG9uPlxuICAgICAge2lzUmVwb3J0ZWQgPyA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGFnfSBpY29uPXtmbGFnU29saWR9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBmdWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENoYXJhY3RlcmlzdGljcyA9ICh7IGNoYXJhY3RlcmlzdGljcywgY2hhck9iamVjdCwgc2V0UmV2aWV3LCByZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbY2hhcnMsIHNldENoYXJzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGFyYWN0ZXJpc3RpY3MgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGFyciA9IHZhbHVlLnNwbGl0KCctJyk7XG4gICAgY29uc3QgcmF0aW5nID0gYXJyWzBdO1xuICAgIGNvbnN0IGlkID0gYXJyWzFdO1xuICAgIGNvbnN0IG5ld0NoYXJhY3RlcmlzdGljcyA9IGNoYXJzO1xuICAgIG5ld0NoYXJhY3RlcmlzdGljc1tpZF0gPSBOdW1iZXIocmF0aW5nKTtcbiAgICBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIGNoYXJhY3RlcmlzdGljczogbmV3Q2hhcmFjdGVyaXN0aWNzIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgKGNoYXJhY3RlcmlzdGljcylcbiAgICAgID8gT2JqZWN0LmVudHJpZXMoY2hhcmFjdGVyaXN0aWNzKS5tYXAoKHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3hbMV0uaWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFyYWN0ZXJpc3RpY3N9IGRhdGEtdGVzdGlkPVwiY2hhcmFjdGVyaXN0aWMtbWFwXCI+XG4gICAgICAgICAgPHA+e3hbMF19ICo8L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoNSwgMzAlKScsIGZvbnRTaXplOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gYXV0bycsIGdyaWRDb2x1bW46ICcxLzInIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZ3JpZFJvdzogJzIvMycsIGp1c3RpZnlTZWxmOiAnY2VudGVyJyB9fSBodG1sRm9yPVwib25lXCI+e2NoYXJPYmplY3RbeFswXV1bMV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzIvMycgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJ0d29cIj57Y2hhck9iamVjdFt4WzBdXVsyXX08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e3hbMF19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2AyLSR7eFsxXS5pZH1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRSb3c6ICcxLzInLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvIGF1dG8nLCBncmlkQ29sdW1uOiAnMy80JyB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGdyaWRSb3c6ICcyLzMnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicgfX0gaHRtbEZvcj1cInRocmVlXCI+e2NoYXJPYmplY3RbeFswXV1bM119PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgMy0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzQvNScgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmb3VyXCI+e2NoYXJPYmplY3RbeFswXV1bNF19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNC0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byBhdXRvJywgZ3JpZENvbHVtbjogJzUvNicgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBncmlkUm93OiAnMi8zJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19IGh0bWxGb3I9XCJmaXZlXCI+e2NoYXJPYmplY3RbeFswXV1bNV19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXt4WzBdfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtgNS0ke3hbMV0uaWR9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBncmlkUm93OiAnMS8yJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbnRlcmFjdGl2ZVN0YXJzID0gKHsgcmV2aWV3LCBzZXRSZXZpZXcgfSkgPT4ge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uT2JqID0ge1xuICAgIDE6ICdQb29yJyxcbiAgICAyOiAnRmFpcicsXG4gICAgMzogJ0F2ZXJhZ2UnLFxuICAgIDQ6ICdHb29kJyxcbiAgICA1OiAnR3JlYXQnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZhbHVlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0VmFsdWUoZGVzY3JpcHRpb25PYmpbaW5kZXhdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiPlxuICAgICAge1suLi5BcnJheSg1KV0ubWFwKChzdGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5kZXggPD0gKGhvdmVyIHx8IHJhdGluZykgPyBzdHlsZXMub24gOiBzdHlsZXMub2ZmfSAke3N0eWxlcy5idXR0b259YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0UmF0aW5nKGluZGV4KTtcbiAgICAgICAgICAgICAgaGFuZGxlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSYXRpbmcocmF0aW5nKTtcbiAgICAgICAgICAgICAgc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCByYXRpbmc6IGluZGV4IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIocmF0aW5nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXRlc3RpZD1cImludGVyYWN0aXZlLXN0YXJzXCI+4piFPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT57dmFsdWV9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJhY3RpdmVTdGFycztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENoYXJhY3RlcmlzdGljcyBmcm9tICcuL0NoYXJhY3RlcmlzdGljcyc7XG5pbXBvcnQgSW50ZXJhY3RpdmVTdGFycyBmcm9tICcuL0ludGVyYWN0aXZlU3RhcnMnO1xuXG5jb25zdCBSZXZpZXdzTW9kYWwgPSAoe1xuICBwcm9kdWN0SWQsIG9uQ2xvc2UsIG9wZW4sIGdldFJldmlld3MsIG5hbWUsIG1ldGFSZXZpZXdzLCBjaGFyT2JqZWN0XG59KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZSh7XG4gICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgIHJhdGluZzogJycsXG4gICAgc3VtbWFyeTogJycsXG4gICAgYm9keTogJycsXG4gICAgcmVjb21tZW5kOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9zOiBbXSxcbiAgICBjaGFyYWN0ZXJpc3RpY3M6IHt9LFxuICB9KTtcbiAgY29uc3QgW3RodW1ibmFpbHMsIHNldFRodW1ibmFpbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGhvdG9TaXplOiAnJyxcbiAgICBtaXNzaW5nRmllbGRzOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJDb3VudCwgc2V0Q2hhcmFjdGVyQ291bnRdID0gdXNlU3RhdGUoNTApO1xuXG4gIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IFJlZ0V4cChcbiAgICAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pXG4gICk7XG5cbiAgY29uc3QgdG9CYXNlNjQgPSAoZmlsZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbmFsUmV2aWV3ID0geyAuLi5yZXZpZXcgfTtcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgaWYgKCF2YWxpZEVtYWlsUmVnZXgudGVzdChmaW5hbFJldmlldy5lbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKHsgLi4uZXJyb3IsIGVtYWlsOiAnKllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmaW5hbFJldmlldy5ib2R5Lmxlbmd0aCA8IDUwIHx8IGZpbmFsUmV2aWV3LnJhdGluZyA9PT0gJycgfHwgZmluYWxSZXZpZXcucmVjb21tZW5kID09PSAnJyB8fCBmaW5hbFJldmlldy5uYW1lID09PSAnJyB8fCBPYmplY3Qua2V5cyhmaW5hbFJldmlldy5jaGFyYWN0ZXJpc3RpY3MpICE9PSBPYmplY3Qua2V5cyhtZXRhUmV2aWV3cy5jaGFyYWN0ZXJpc3RpY3MpKSB7XG4gICAgICBzZXRFcnJvcih7IC4uLmVycm9yLCBtaXNzaW5nRmllbGRzOiAnKk9uZSBvciBtb3JlIG1hbmRhdG9yeSBmaWVsZHMgaXMgbWlzc2luZycgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmluYWxSZXZpZXcucGhvdG9zLm1hcCgocGhvdG8pID0+IHtcbiAgICAgIGlmIChwaG90by5zaXplID4gMTAwMDAwKSB7XG4gICAgICAgIHNldEVycm9yKHsgLi4uZXJyb3IsIHBob3RvU2l6ZTogJypUaGUgaW1hZ2VzIHNlbGVjdGVkIGFyZSBpbnZhbGlkIG9yIHVuYWJsZSB0byBiZSB1cGxvYWRlZCcgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG5hbWU6IHBob3RvLm5hbWUsXG4gICAgICAgIGRhdGE6ICcnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0b0Jhc2U2NChwaG90bylcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcGF5bG9hZC5kYXRhID0gcmVzdWx0LnNwbGl0KCcsJylbMV0pXG4gICAgICAgIC50aGVuKCgpID0+IGF4aW9zLnBvc3QoJy91cGxvYWRfaW1hZ2VzJywgcGF5bG9hZCkpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBmaW5hbFJldmlldy5waG90b3MgPSByZXN1bHRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KCcvcmV2aWV3cycsIGZpbmFsUmV2aWV3KSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZ2V0UmV2aWV3cyhwcm9kdWN0SWQpKVxuICAgICAgICAudGhlbigoKSA9PiBvbkNsb3NlKCkpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ291bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldENoYXJhY3RlckNvdW50KDUwIC0gdmFsdWUubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGlmIChyZXZpZXcucGhvdG9zLmxlbmd0aCA8IDUpIHtcbiAgICAgIHNldFJldmlldyh7XG4gICAgICAgIC4uLnJldmlldyxcbiAgICAgICAgcGhvdG9zOiBbLi4ucmV2aWV3LnBob3RvcywgZS50YXJnZXQuZmlsZXNbMF1dLFxuICAgICAgfSk7XG4gICAgICBzZXRUaHVtYm5haWxzKFtcbiAgICAgICAgLi4udGh1bWJuYWlscyxcbiAgICAgICAgVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSksXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAobWV0YVJldmlld3MgJiYgcmV2aWV3ICYmIHJldmlldy5waG90b3MpXG4gICAgICA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e29wZW4gPyBzdHlsZXMub3ZlcmxheSA6ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScgOiAndHJhbnNsYXRlKC01MCUsIC0xNTB2aCknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgICAgICA8aDM+V3JpdGUgWW91ciBSZXZpZXc8L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBYm91dCB0aGUge25hbWV9XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInJldmlldy1tb2RhbFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY3Rpb249XCJcIlxuICAgICAgICAgICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19Pk92ZXJhbGwgUmF0aW5nOiAqPC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17UnN0eWxlcy5zdGFyUmF0aW5nfT5cbiAgICAgICAgICAgICAgICAgIDxJbnRlcmFjdGl2ZVN0YXJzIHJldmlldz17cmV2aWV3fSBzZXRSZXZpZXc9e3NldFJldmlld30gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+V291bGQgeW91IHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIlllc1wiIG5hbWU9XCJyZWNvbW1lbmRcIiBvbkNsaWNrPXsoKSA9PiBzZXRSZXZpZXcoeyAuLi5yZXZpZXcsIHJlY29tbWVuZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiWWVzXCI+WWVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIk5vXCIgbmFtZT1cInJlY29tbWVuZFwiIG9uQ2xpY2s9eygpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgcmVjb21tZW5kOiBmYWxzZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiTm9cIj5ObzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcmlzdGljc1xuICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyaXN0aWNzPXttZXRhUmV2aWV3cy5jaGFyYWN0ZXJpc3RpY3N9XG4gICAgICAgICAgICAgICAgICBjaGFyT2JqZWN0PXtjaGFyT2JqZWN0fVxuICAgICAgICAgICAgICAgICAgc2V0UmV2aWV3PXtzZXRSZXZpZXd9XG4gICAgICAgICAgICAgICAgICByZXZpZXc9e3Jldmlld31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlJldmlldyBUaXRsZTo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlldyh7IC4uLnJldmlldywgc3VtbWFyeTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogQmVzdCBwdXJjaGFzZSBldmVyIVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD5SZXZpZXcgQm9keTogKjwvcD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJldmlldyh7IC4uLnJldmlldywgYm9keTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvdW50Q2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMDBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucUlucHV0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaHkgZGlkIHlvdSBsaWtlIHRoZSBwcm9kdWN0IG9yIG5vdD9cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5jb21tZW50fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXJDb3VudCA8PSAwID8gJ01pbmltdW0gQ2hhcmFjdGVycyBSZWFjaGVkJyA6IGBNaW5pbXVtIHJlcXVpcmVkIGNoYXJhY3RlcnMgbGVmdDogJHtjaGFyYWN0ZXJDb3VudH1gfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgbmlja25hbWU/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17UnN0eWxlcy5tb2RhbElucHV0fVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrc29uMTEhXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3Jldmlldy5uYW1lLmxlbmd0aCA+IDAgPyAnRm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgZW1haWw/ICo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV2aWV3KHsgLi4ucmV2aWV3LCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1JzdHlsZXMubW9kYWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja3NvbjExQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntyZXZpZXcuZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAge3Jldmlldy5waG90b3MubGVuZ3RoIDwgNSA/IDxpbnB1dCB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAge3RodW1ibmFpbHMubWFwKChwaG90bykgPT4gPGltZyBhbHQ9e3Bob3RvfSBrZXk9e3Bob3RvfSBjbGFzc05hbWU9e2Ake1JzdHlsZXMuaW1nVGh1bWJuYWlsfSAke1JzdHlsZXMucmV2aWV3UGhvdG99YH0gc3JjPXtwaG90b30gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17UnN0eWxlcy5jb21tZW50fT4qIE1hbmRhdG9yeSBGaWVsZHM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3IuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e2Vycm9yLnBob3RvU2l6ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3IubWlzc2luZ0ZpZWxkc308L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXQgUmV2aWV3XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICAgIDogbnVsbFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3c01vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9SZXZpZXdzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlbHBmdWwgZnJvbSAnLi4vSGVscGZ1bCc7XG5pbXBvcnQgRXhwYW5kZWRQaG90b3MgZnJvbSAnLi4vRXhwYW5kZWRQaG90b3MnO1xuXG5jb25zdCBSZXZpZXdUZW1wbGF0ZSA9ICh7IHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3VGVtcGxhdGV9PlxuICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9e3Jldmlldy5yYXRpbmd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVTdW1tYXJ5fT57cmV2aWV3LnN1bW1hcnl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVCb2R5fSBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnIH19PntyZXZpZXcuYm9keX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZW1wbGF0ZVVzZXJEYXRlQmFyfT5cbiAgICAgICAgICA8VXNlckRhdGVCYXIgcmV2aWV3PXtyZXZpZXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlSGVscGZ1bFJlcG9ydEJhcn0+XG4gICAgICAgICAgPEhlbHBmdWwgcmV2aWV3X2lkPXtyZXZpZXcucmV2aWV3X2lkfSBoZWxwZnVsbmVzcz17cmV2aWV3LmhlbHBmdWxuZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhyZXZpZXcucmVzcG9uc2UpXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlUmVzcG9uc2VGcm9tU2VsbGVyfT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JywgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcxMHB4IDEwcHggMCAxMHB4JywgZm9udFNpemU6ICcxNXB4JyB9fT5SZXNwb25zZSBmcm9tIHNlbGxlcjo8L3A+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzBweCcsIHBhZGRpbmc6ICcxMHB4JywgZm9udFNpemU6ICcxNXB4JyB9fT57cmV2aWV3LnJlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcGxhdGVJbWFnZXN9PlxuICAgICAgICAgIHtyZXZpZXcucGhvdG9zLm1hcCgocGhvdG8sIGlkKSA9PiA8RXhwYW5kZWRQaG90b3MgcGhvdG89e3Bob3RvfSBrZXk9e2lkfSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHJldmlldy5yZWNvbW1lbmQpXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlbXBsYXRlUmVjb21tZW5kc0Jhcn0gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgICAgICAgJiMxMDAwMzsgWWVzLCBJIHJlY29tbWVuZCB0aGlzIHByb2R1Y3RcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFN0YXJSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xuICBjb25zdCBzdGFyUGVyY2VudGFnZSA9IChyYXRpbmcgLyA1KSAqIDEwMDtcbiAgY29uc3Qgcm91bmRlZFBlcmNlbnRhZ2UgPSAoTWF0aC5yb3VuZChzdGFyUGVyY2VudGFnZSAqIDUpIC8gNSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJSYXRpbmd9IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnbGVmdCcgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJSYXRpbmdUb3B9IHN0eWxlPXt7IHdpZHRoOiByb3VuZGVkUGVyY2VudGFnZSB9fT5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhclJhdGluZ0JvdHRvbX0+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgICA8c3Bhbj7imIU8L3NwYW4+XG4gICAgICAgIDxzcGFuPuKYhTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+4piFPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBVc2VyRGF0ZUJhciA9ICh7IHJldmlldyB9KSA9PiB7XG4gIGNvbnN0IGdldERhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVBcnIgPSBkYXRlLnNsaWNlKDAsIGRhdGUuaW5kZXhPZignVCcpKS5zcGxpdCgnLScpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlQXJyLnNoaWZ0KCk7XG4gICAgZGF0ZUFyci5wdXNoKHllYXIpO1xuICAgIHJldHVybiBkYXRlQXJyLmpvaW4oJy0nKTtcbiAgfTtcblxuICBjb25zdCBkYXRlID0gZ2V0RGF0ZShyZXZpZXcuZGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTAsIGZvbnRTdHlsZTogJ2l0YWxpYyd9fT4mIzEwMDAzOyBWZXJpZmllZCBQdXJjaGFzZXI8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEYXRlQmFyfT57cmV2aWV3LnJldmlld2VyX25hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEYXRlQmFyfT57ZGF0ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSZXZpZXdUZW1wbGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSYXRpbmdCcmVha2Rvd24gZnJvbSAnLi9SYXRpbmdCcmVha2Rvd24nO1xuaW1wb3J0IFJldmlld1RlbXBsYXRlIGZyb20gJy4vUmV2aWV3VGVtcGxhdGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUmV2aWV3cy5tb2R1bGUuY3NzJztcbmltcG9ydCBSZXZpZXdzTW9kYWwgZnJvbSAnLi9SZXZpZXdNb2RhbCc7XG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICcuLi9TdGFyUmF0aW5nJztcblxuY29uc3QgUmV2aWV3cyA9ICh7IHByb2R1Y3RJZCwgbmFtZSwgaGFuZGxlUmV2aWV3QXZlcmFnZSB9KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3BsYXllZFJldmlld3MsIHNldERpc3BsYXllZFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWV0YVJldmlld3MsIHNldE1ldGFSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKCdyZWxldmFudCcpO1xuICBjb25zdCBbbW9yZUJ1dHRvbiwgc2V0TW9yZUJ1dHRvbl0gPSB1c2VTdGF0ZSgnTW9yZSBSZXZpZXdzJyk7XG5cbiAgY29uc3QgY2hhck9iamVjdCA9IHtcbiAgICBTaXplOiB7XG4gICAgICAxOiBcIkEgc2l6ZSB0b28gc21hbGxcIixcbiAgICAgIDI6IFwiMS8yIGEgc2l6ZSB0b28gc21hbGxcIixcbiAgICAgIDM6IFwiUGVyZmVjdFwiLFxuICAgICAgNDogXCIxLzIgYSBzaXplIHRvbyBiaWdcIixcbiAgICAgIDU6IFwiQSBzaXplIHRvbyB3aWRlXCIsXG4gICAgfSxcbiAgICBXaWR0aDoge1xuICAgICAgMTogXCJUb28gbmFycm93XCIsXG4gICAgICAyOiBcIlNsaWdodGx5IG5hcnJvd1wiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIlNsaWdodGx5IHdpZGVcIixcbiAgICAgIDU6IFwiVG9vIHdpZGVcIixcbiAgICB9LFxuICAgIENvbWZvcnQ6IHtcbiAgICAgIDE6IFwiVW5jb21mb3J0YWJsZVwiLFxuICAgICAgMjogXCJTbGlnaHRseSB1bmNvbWZvcnRhYmxlXCIsXG4gICAgICAzOiBcIk9rXCIsXG4gICAgICA0OiBcIkNvbWZvcnRhYmxlXCIsXG4gICAgICA1OiBcIlBlcmZlY3RcIlxuICAgIH0sXG4gICAgUXVhbGl0eToge1xuICAgICAgMTogXCJQb29yXCIsXG4gICAgICAyOiBcIkJlbG93IGF2ZXJhZ2VcIixcbiAgICAgIDM6IFwiV2hhdCBJIGV4cGVjdGVkXCIsXG4gICAgICA0OiBcIlByZXR0eSBncmVhdFwiLFxuICAgICAgNTogXCJQZXJmZWN0XCIsXG4gICAgfSxcbiAgICBMZW5ndGg6IHtcbiAgICAgIDE6IFwiUnVucyBzaG9ydFwiLFxuICAgICAgMjogXCJSdW5zIHNsaWdodGx5IHNob3J0XCIsXG4gICAgICAzOiBcIlBlcmZlY3RcIixcbiAgICAgIDQ6IFwiUnVucyBzbGlnaHRseSBsb25nXCIsXG4gICAgICA1OiBcIlJ1bnMgbG9uZ1wiLFxuICAgIH0sXG4gICAgRml0OiB7XG4gICAgICAxOiBcIlJ1bnMgdGlnaHRcIixcbiAgICAgIDI6IFwiUnVucyBzbGlnaHRseSB0aWdodFwiLFxuICAgICAgMzogXCJQZXJmZWN0XCIsXG4gICAgICA0OiBcIlJ1bnMgc2xpZ2h0bHkgbG9uZ1wiLFxuICAgICAgNTogXCJSdW5zIGxvbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGdldFJldmlld3MgPSAoaWQpID0+IHtcbiAgICBjb25zdCByZXZpZXdzVVJMID0gYC9yZXZpZXdzL3NvcnQvJHtpZH0vJHtzb3J0fWA7XG4gICAgYXhpb3MuZ2V0KHJldmlld3NVUkwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0UmV2aWV3cyhkYXRhKTtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgc2V0RGlzcGxheWVkUmV2aWV3cyhkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKGRhdGEuc2xpY2UoMCwgMikpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXRhUmV2aWV3cyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG1ldGFSZXZpZXdzVVJMID0gYC9yZXZpZXdzL21ldGEvJHtpZH1gO1xuICAgIGF4aW9zLmdldChtZXRhUmV2aWV3c1VSTClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBzZXRNZXRhUmV2aWV3cyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRSZXZpZXdzKDIwMTAxKTtcbiAgICBzZXRFeHBhbmRlZChleHBhbmRlZCk7XG4gIH0sIFtzb3J0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXRhUmV2aWV3cygyMDEwMSk7XG4gICAgZ2V0UmV2aWV3cygyMDEwMSk7XG4gIH0sIFtwcm9kdWN0SWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChleHBhbmRlZClcbiAgICA/IHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cylcbiAgICA6IHNldERpc3BsYXllZFJldmlld3MocmV2aWV3cy5zbGljZSgwLCAyKSlcbiAgfSwgW2V4cGFuZGVkXSk7XG5cbiAgY29uc3QgaGFuZGxlU3RhckZpbHRlcnMgPSAoZmlsdGVycykgPT4ge1xuICAgIGNvbnN0IHJldmlld0FycmF5ID0gW107XG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXREaXNwbGF5ZWRSZXZpZXdzKHJldmlld3Muc2xpY2UoMCwgMikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIHJldmlld3MuZmlsdGVyKChyZXZpZXcpID0+IHtcbiAgICAgICAgICBpZiAocmV2aWV3LnJhdGluZyA9PT0gTnVtYmVyKGZpbHRlcikpIHJldmlld0FycmF5LnB1c2gocmV2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNldERpc3BsYXllZFJldmlld3MocmV2aWV3QXJyYXkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3JlQnV0dG9uID0gKCkgPT4ge1xuICAgIChkaXNwbGF5ZWRSZXZpZXdzLmxlbmd0aCA8PSAyKVxuICAgICAgPyBzZXRNb3JlQnV0dG9uKCdNb3JlIFJldmlld3MnKVxuICAgICAgOiBzZXRNb3JlQnV0dG9uKCdTaG93IExlc3MgUmV2aWV3cycpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlTW9yZUJ1dHRvbigpO1xuICB9LCBbZGlzcGxheWVkUmV2aWV3c10pO1xuXG4gIHJldHVybiAoXG4gICAgKG1ldGFSZXZpZXdzICYmIHJldmlld3MgJiYgcHJvZHVjdElkKVxuICAgICAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEJyZWFrZG93bn0+XG4gICAgICAgICAgICA8UmF0aW5nQnJlYWtkb3duXG4gICAgICAgICAgICAgIHJldmlld3M9e3Jldmlld3N9XG4gICAgICAgICAgICAgIG1ldGFSZXZpZXdzPXttZXRhUmV2aWV3c31cbiAgICAgICAgICAgICAgaGFuZGxlU3RhckZpbHRlcnM9e2hhbmRsZVN0YXJGaWx0ZXJzfVxuICAgICAgICAgICAgICBoYW5kbGVSZXZpZXdBdmVyYWdlPXtoYW5kbGVSZXZpZXdBdmVyYWdlfVxuICAgICAgICAgICAgICBjaGFyT2JqZWN0PXtjaGFyT2JqZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudEhlYWRlcn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6ICdjZW50ZXInLCBwYWRkaW5nTGVmdDogJzIwcHgnIH19XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic29ydC1vbi1kcm9wZG93blwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNvcnQgb246XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5SZWxldmFudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGVscGZ1bDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+TmV3ZXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6ICc4MDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gY2xhc3NOYW1lPXtzdHlsZXMucGFyZW50SW5kaXZpZHVhbFJldmlld30+XG4gICAgICAgICAgICB7ZGlzcGxheWVkUmV2aWV3cy5tYXAoKHJldmlldywgaWQpID0+IChcbiAgICAgICAgICAgICAgPFJldmlld1RlbXBsYXRlIHJldmlldz17cmV2aWV3fSBrZXk9e2lkfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnRGb290ZXJ9PlxuICAgICAgICAgICAge3Jldmlld3MubGVuZ3RoID4gMVxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21vcmVCdXR0b259XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBSZXZpZXcgICsgPC9idXR0b24+XG4gICAgICAgICAgICA8UmV2aWV3c01vZGFsXG4gICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxuICAgICAgICAgICAgICBnZXRSZXZpZXdzPXtnZXRSZXZpZXdzfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIG1ldGFSZXZpZXdzPXttZXRhUmV2aWV3c31cbiAgICAgICAgICAgICAgY2hhck9iamVjdD17Y2hhck9iamVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==