(self["webpackChunkwallace_corporation"] = self["webpackChunkwallace_corporation"] || []).push([["client_src_components_qa_QA_jsx"],{

/***/ "./node_modules/@iconify-icons/entypo/magnifying-glass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iconify-icons/entypo/magnifying-glass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
	"body": "<path d=\"M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z\" fill=\"currentColor\"/>",
	"width": 20,
	"height": 20
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

/***/ "./client/src/components/qa/Answer.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/qa/Answer.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helpful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpful */ "./client/src/components/Helpful.jsx");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
/* harmony import */ var _ExpandedPhotos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExpandedPhotos */ "./client/src/components/ExpandedPhotos.jsx");





var Answer = function Answer(props) {
  var answer = props.answer;
  var body = answer.body,
      answerer_name = answer.answerer_name,
      date = answer.date,
      id = answer.id,
      helpfulness = answer.helpfulness,
      photos = answer.photos;

  var getProperDate = function getProperDate(weirdDate) {
    var dateArr = weirdDate.slice(0, weirdDate.indexOf('T')).split('-');
    var year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answerBody
  }, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answerPhotos
  }, photos.map(function (photo, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExpandedPhotos__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: idx,
      photo: photo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.userAndDate
  }, "by ", answerer_name, ", ", getProperDate(date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpful__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answerHelpful,
    answer_id: id,
    helpfulness: helpfulness
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Answer);

/***/ }),

/***/ "./client/src/components/qa/AnswerModal.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/qa/AnswerModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleComponents/App.module.css */ "./client/src/styleComponents/App.module.css");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
/* harmony import */ var _ExpandedPhotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ExpandedPhotos */ "./client/src/components/ExpandedPhotos.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AnswerModal(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      question_id = _ref.question_id,
      getQuestions = _ref.getQuestions,
      productId = _ref.productId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      answer = _useState2[0],
      setAnswer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      thumbnails = _useState8[0],
      setThumbnails = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      photos = _useState10[0],
      setPhotos = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  var clearForm = function clearForm(e) {
    setAnswer('');
    setUsername('');
    setEmail('');
    setThumbnails([]);
    setPhotos([]);
  };

  var toBase64 = function toBase64(file) {
    return new Promise(function (resolve, reject) {
      console.log(file);
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
    var answerInfo = {
      body: answer,
      name: username,
      email: email,
      photos: []
    };

    if (!validEmailRegex.test(email)) {
      setError('*You must enter a valid email');
      return;
    }

    var promises = [];

    var _iterator = _createForOfIteratorHelper(photos),
        _step;

    try {
      var _loop = function _loop() {
        var photo = _step.value;
        var payload = {
          name: photo.name,
          data: ''
        };
        var promise = toBase64(photo).then(function (result) {
          return payload.data = result.split(',')[1];
        }).then(function () {
          return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/upload_images", payload);
        }).then(function (_ref2) {
          var data = _ref2.data;
          return data;
        })["catch"](console.log);
        promises.push(promise);
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    Promise.all(promises).then(function (results) {
      return answerInfo.photos = results;
    }).then(function () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/qa/questions/".concat(question_id, "/answers"), answerInfo);
    }).then(function () {
      return getQuestions(20111);
    }).then(function () {
      return clearForm();
    })["catch"](console.log);
  };

  var handleChange = function handleChange(e) {
    console.log(e.target.files[0]);

    if (photos.length < 5) {
      setPhotos([].concat(_toConsumableArray(photos), [e.target.files[0]]));
      setThumbnails([].concat(_toConsumableArray(thumbnails), [URL.createObjectURL(e.target.files[0])]));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      onClose();
      clearForm();
    },
    className: open ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.overlay : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
    },
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Add an Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.closeModal,
    onClick: function onClick() {
      onClose();
      clearForm();
    }
  }, "x")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    encType: "multipart/form-data",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    action: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Your Answer *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    "data-testid": "answer-input",
    value: answer,
    required: "required",
    onChange: function onChange(e) {
      return setAnswer(e.target.value);
    },
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.qInput,
    maxLength: "1000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "What is your nickname? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "answer-username-input",
    value: username,
    required: "required",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__.default.modalInput,
    type: "text",
    placeholder: "Example: jack543!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.finePrint
  }, username.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Your Email *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "answer-email-input",
    value: email,
    required: "required",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__.default.modalInput,
    type: "text",
    placeholder: "Example: jack@email.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.finePrint
  }, email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, photos.length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "answer-photo-upload",
    value: '',
    onChange: handleChange,
    type: "file"
  }) : null, thumbnails.map(function (photo, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExpandedPhotos__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: idx,
      photo: photo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    "data-testid": "answer-modal-submit-button",
    type: "submit",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.modalButton
  }, "Submit Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_2__.default.finePrint
  }, error)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerModal);

/***/ }),

/***/ "./client/src/components/qa/QA.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/qa/QA.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
/* harmony import */ var _QASearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QASearchBar.jsx */ "./client/src/components/qa/QASearchBar.jsx");
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./client/src/components/qa/Question.jsx");
/* harmony import */ var _QuestionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionModal */ "./client/src/components/qa/QuestionModal.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var QA = function QA(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var productId = props.productId;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      questions = _useState4[0],
      setQuestions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      displayedQuestions = _useState6[0],
      setDisplayedQuestions = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      expanded = _useState8[0],
      setExpanded = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      searching = _useState10[0],
      setSearching = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('More Answered Questions'),
      _useState12 = _slicedToArray(_useState11, 2),
      moreQuestionsButton = _useState12[0],
      setMoreQuestionsButton = _useState12[1];

  var sortQuestions = function sortQuestions(questionArr) {
    var length = questionArr.length;
    var checked;

    do {
      checked = false;

      for (var i = 0; i < length - 1; i++) {
        if (questionArr[i].question_helpfulness < questionArr[i + 1].question_helpfulness) {
          var tmp = questionArr[i];
          questionArr[i] = questionArr[i + 1];
          questionArr[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);

    return questionArr;
  };

  var getQuestions = function getQuestions(id) {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("/qa/questions/".concat(id)).then(function (results) {
      var sorted = sortQuestions(results.data);
      setQuestions(sorted);
      setDisplayedQuestions(sorted.slice(0, 4));
    })["catch"](console.log);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getQuestions(20111);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (expanded) {
      setDisplayedQuestions(questions);
      setMoreQuestionsButton('Show Less Questions');
    } else {
      setDisplayedQuestions(questions.slice(0, 4));
      setMoreQuestionsButton('More Answered Questions');
    }
  }, [expanded]);

  var increaseNumOfQuestions = function increaseNumOfQuestions() {
    setExpanded(!expanded);
  };

  var searchQuestions = function searchQuestions(value) {
    if (value.length >= 3) {
      setSearching(true);
      var found = questions.filter(function (question) {
        return question.question_body.toLowerCase().includes(value.toLowerCase());
      });
      setDisplayedQuestions(found);
    } else if (expanded) {
      setSearching(false);
      setDisplayedQuestions(questions);
    } else {
      setSearching(false);
      setDisplayedQuestions(questions.slice(0, 2));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.border
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.headerBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    "data-testid": "qa-heading",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.qaheader
  }, "Questions & Answers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QASearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    searchQuestions: searchQuestions
  }), questions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "add-a-question-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.footerButton,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Add A Question + ") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.qaSection
  }, displayedQuestions.map(function (question, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Question__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: idx,
      productId: productId,
      getQuestions: getQuestions,
      question: question
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.buttons
  }, searching ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "show-more-questions-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.footerButton,
    onClick: increaseNumOfQuestions
  }, moreQuestionsButton), questions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "add-a-question-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.footerButton,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Add A Question + ") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionModal__WEBPACK_IMPORTED_MODULE_4__.default, {
    productId: productId,
    getQuestions: getQuestions,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    open: isOpen
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QA);

/***/ }),

/***/ "./client/src/components/qa/QASearchBar.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/qa/QASearchBar.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_icons_entypo_magnifying_glass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify-icons/entypo/magnifying-glass */ "./node_modules/@iconify-icons/entypo/magnifying-glass.js");





var QASearchBar = function QASearchBar(props) {
  var searchQuestions = props.searchQuestions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.searchBarSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.magnifyingGlass,
    icon: _iconify_icons_entypo_magnifying_glass__WEBPACK_IMPORTED_MODULE_3__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    "data-testid": "search-input",
    type: "search",
    onChange: function onChange(e) {
      return searchQuestions(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.searchBar,
    placeholder: "Search Questions..."
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QASearchBar);

/***/ }),

/***/ "./client/src/components/qa/Question.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/qa/Question.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answer */ "./client/src/components/qa/Answer.jsx");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
/* harmony import */ var _Helpful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helpful */ "./client/src/components/Helpful.jsx");
/* harmony import */ var _AnswerModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnswerModal */ "./client/src/components/qa/AnswerModal.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Question = function Question(props) {
  var question = props.question,
      getQuestions = props.getQuestions,
      productId = props.productId;
  var question_body = question.question_body,
      answers = question.answers,
      question_id = question.question_id,
      question_helpfulness = question.question_helpfulness;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      answerList = _useState2[0],
      setAnswerList = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      displayedAnswers = _useState4[0],
      setDisplayedAnswers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      expanded = _useState8[0],
      setExpanded = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('See More Answers'),
      _useState10 = _slicedToArray(_useState9, 2),
      seeMoreAnswersText = _useState10[0],
      setSeeMoreAnswersText = _useState10[1];

  var sortAnswersBySeller = function sortAnswersBySeller(answerArr) {
    var sellerMessages = answerArr.filter(function (answer) {
      return answer.answerer_name === 'Seller';
    });
    var otherMessages = answerArr.filter(function (answer) {
      return answer.answerer_name !== 'Seller';
    });
    return sellerMessages.concat(otherMessages);
  };

  var sortAnswersByHelpfulness = function sortAnswersByHelpfulness(answerArr) {
    var length = answerArr.length;
    var checked;

    do {
      checked = false;

      for (var i = 0; i < length - 1; i++) {
        if (answerArr[i].helpfulness < answerArr[i + 1].helpfulness) {
          var tmp = answerArr[i];
          answerArr[i] = answerArr[i + 1];
          answerArr[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);

    return sortAnswersBySeller(answerArr);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var sortedAnswers = sortAnswersByHelpfulness(Object.values(answers));
    setAnswerList(sortedAnswers);
  }, [question]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDisplayedAnswers(answerList.slice(0, 2));
  }, [answerList]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (expanded) {
      setDisplayedAnswers(answerList);
      setSeeMoreAnswersText('Collapse Answers');
    } else {
      setDisplayedAnswers(answerList.slice(0, 2));
      setSeeMoreAnswersText('See More Answers');
    }
  }, [expanded]);

  var showMoreAnswers = function showMoreAnswers() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.questionAndAnswer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.questionGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.q
  }, "Q:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.question
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.questionBody
  }, question_body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.questionHelpful
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpful__WEBPACK_IMPORTED_MODULE_3__.default, {
    question_id: question_id,
    helpfulness: question_helpfulness
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "add-answer-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.addAnswerButton,
    onClick: function onClick() {
      return setIsOpen(true);
    },
    type: "button"
  }, "Add Answer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnswerModal__WEBPACK_IMPORTED_MODULE_4__.default, {
    productId: productId,
    getQuestions: getQuestions,
    question_id: question_id,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    open: isOpen
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answerGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.a
  }, "A:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.answerList
  }, displayedAnswers.map(function (answer, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Answer__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: idx,
      answer: answer
    });
  })), answerList.length > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": "show-more-answers-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_2__.default.showMoreAnswersButton,
    onClick: showMoreAnswers
  }, seeMoreAnswersText) : null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ }),

/***/ "./client/src/components/qa/QuestionModal.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/qa/QuestionModal.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styleComponents/App.module.css */ "./client/src/styleComponents/App.module.css");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function QuestionModal(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      getQuestions = _ref.getQuestions,
      productId = _ref.productId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  var clearForm = function clearForm() {
    setQuestion('');
    setUsername('');
    setEmail('');
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var questionInfo = {
      body: question,
      name: username,
      email: email,
      product_id: productId
    };

    if (!validEmailRegex.test(email)) {
      setError('*You must enter a valid email');
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().post('/qa/questions', questionInfo).then(function () {
      return getQuestions(20111);
    }).then(function () {
      return clearForm();
    })["catch"](console.log);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      onClose();
      clearForm();
    },
    "data-testid": "question-overlay",
    className: open ? _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.overlay : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -150vh)'
    },
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Ask Your Question about the Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.closeModal,
    onClick: function onClick() {
      onClose();
      clearForm();
    }
  }, "x")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    id: "questionForm",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    action: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Question *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    "data-testid": "question-input",
    value: question,
    required: "required",
    onChange: function onChange(e) {
      return setQuestion(e.target.value);
    },
    maxLength: "1000",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.qInput,
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "What is your nickname? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "question-username-input",
    value: username,
    required: "required",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_4__.default.modalInput,
    maxLength: "60",
    placeholder: "example: jackson11!",
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, username.length > 0 ? 'For privacy reasons, do not use your full name or email address' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Your Email *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "question-email-input",
    value: email,
    required: "required",
    placeholder: "example: jackson11!@gmail.com",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_4__.default.modalInput,
    maxLength: "60",
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, email.length > 0 ? 'For authentication reasons, you will not be emailed' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    "data-testid": "question-modal-submit-button",
    type: "submit",
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.modalButton
  }, "Submit Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: _styleComponents_App_module_css__WEBPACK_IMPORTED_MODULE_3__.default.finePrint
  }, error)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionModal);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/styleComponents/QA.modules.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/styleComponents/QA.modules.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._38_VXG10Mju-Od14Dfg1Uc {\n  border-top: solid lightgray 1px;\n  border-bottom: solid lightgray 1px;\n  margin-left: 5%;\n  margin-right: 15px;\n  margin-top: 5%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  margin-bottom: 5%;\n}\n\n/* HEADING & SEARCH */\n\n._3LIY7_NuZYcIp9Xbb_BRsM {\n  font-family: 'Rajdhani', sans-serif;\n  /* margin: 0; */\n  /* margin-top: 20%; */\n}\n\n.mTDbzQ1ieQyzxUe2rLuff {\n  \n  /* background: linear-gradient(to right, #f8beb9, white); */\n  background-color: #f8beb97e;\n  margin-left: -10%;\n  padding-left: 10%;\n  max-width: 25%;\n  margin-bottom: 3%;\n}\n\n._3diC_gQhmC7CupFxjjH9bo {\n  padding-left: 1%;\n  height: 20px;\n  width: 20px;\n}\n\n._1Zpyw62IeKm64d5y_QjYMo {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border: solid grey thin;\n  width: 50%;\n  min-width: 400px;\n  border-radius: 15px;\n}\n\n._2dfGgO7xN8GlsVNwW_Gg2L {\n  width: 95%;\n  line-height: 20%;\n  padding: 10px 10px;\n  outline: none;\n  border: none;\n  background: transparent;\n}\n\n/* Q & A */\n.pi74rzl0pHezFlhtGHEYz {\n  max-height: 1000px;\n  overflow-y: scroll;\n  margin-top: 2em;\n}\n\n/* Q & A GRID */\n._3Zo71BOFeKuSg27d5zv47b {\n  display: grid;\n  grid-template-columns: 1fr 10fr 10fr;\n  align-items: center;\n}\n\n._1ttiL85nChofn-9c8emOUD {\n  grid-column: 1 / 2;\n  align-self: center;\n}\n\n._28z0qtxGQI491mVaW4P_a0 {\n  grid-column: 2 / 3;\n}\n\n._3eSfcx7XnuNRDc9KPmYMHs {\n  grid-column: 2 / 3;\n  font-weight: bold;\n}\n\n._3CvAJWdJaq47IDuWkQDgMt {\n  grid-column: 3 / 4;\n  /* align-self: center; */\n  /* justify-content: center; */\n  padding-left: 20%;\n  display: inline;\n  /* align-content: flex-start; */\n  width: 100%\n}\n\n._39q7pvnW2cTHIkHef6gBDP {\n  border-left: 1px solid gray;\n  border-top: none;\n  border-bottom: none;\n  border-right: none;\n  color: blue;\n  background: transparent;\n}\n\n._39q7pvnW2cTHIkHef6gBDP:hover {\n  color: #F2B694;\n}\n\n._39ZJwfaOm_f9K1LwvqaDqG {\n  border-bottom: solid .5px rgb(190, 190, 190);\n  /* margin-right: 15px; */\n}\n\n._39ZJwfaOm_f9K1LwvqaDqG:last-child {\n  border-bottom: none;\n  /* margin-right: 15px; */\n}\n\n/* ANSWER GRID */\n\n._2f1WYZiy7XBYqGI4V3c8BO {\n  display: grid;\n  grid-template-columns: 1fr 20fr;\n  margin-bottom: 1em;\n}\n\n._3kRZI3cwXl_H6yzuX_aIRn {\n  grid-column: 1 / 2;\n  margin-block-start: 0.2em;\n}\n\n._3erLk0KqMJMAmK8ISlqUJn {\n  grid-column: 2 / 3;\n  margin-top: 1%;\n  margin-bottom: 2%;\n  padding: 1em 0 1em 1em;\n}\n\n._3erLk0KqMJMAmK8ISlqUJn:nth-child(odd) {\n  background-color: #d7ebeb4b;\n}\n\n\n/* .answerBody {\n\n} */\n\n.KgoBQ60EJOST9AN7ur8yR {\n  font-size: .8em;\n  color: rgb(128, 127, 127);\n  display: flex;\n}\n\n/* .answerPhotos {\n\n} */\n\n.IUKkF_-FbziKgjLOlneFb {\n  margin: .75em;\n  border-radius: 50%;\n}\n\n._1bnh9ud2wVgexCT02tEAl2 {\n  font-size: 8px;\n  display: flex;\n}\n\n._1_j9lj7RuKz_M8Afe4LhY6 {\n  grid-column: 2 / 3;\n  text-align: left;\n  border: none;\n  background: transparent;\n  outline: none;\n}\n\n._1_j9lj7RuKz_M8Afe4LhY6:hover {\n  color: #F2B694;\n}\n/* MODALS */\n\n._1JG-BSVScA5lB3PbkEqfE- {\n  width: 75%;\n}\n\n/* FOOTER & BUTTONS */\n._2Q68Jc9eaLVFhm7DIF0xWa {\n  margin-top: 1em;\n  grid-row-start: 3;\n  margin-bottom: 2%;\n}\n\n._1nmwfPhVR7v5nnEnApvivb:hover {\n  color: #F2B694;\n}\n\n._1nmwfPhVR7v5nnEnApvivb {\n  border: none;\n  background: transparent;\n}\n", "",{"version":3,"sources":["webpack://./client/src/styleComponents/QA.modules.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;EACE,mCAAmC;EACnC,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,2DAA2D;EAC3D,2BAA2B;EAC3B,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;EACf,+BAA+B;EAC/B;AACF;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,4CAA4C;EAC5C,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;;AAGA;;GAEG;;AAEH;EACE,eAAe;EACf,yBAAyB;EACzB,aAAa;AACf;;AAEA;;GAEG;;AAEH;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;AACA,WAAW;;AAEX;EACE,UAAU;AACZ;;AAEA,qBAAqB;AACrB;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB","sourcesContent":[".border {\n  border-top: solid lightgray 1px;\n  border-bottom: solid lightgray 1px;\n  margin-left: 5%;\n  margin-right: 15px;\n  margin-top: 5%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  margin-bottom: 5%;\n}\n\n/* HEADING & SEARCH */\n\n.qaheader {\n  font-family: 'Rajdhani', sans-serif;\n  /* margin: 0; */\n  /* margin-top: 20%; */\n}\n\n.headerBox {\n  \n  /* background: linear-gradient(to right, #f8beb9, white); */\n  background-color: #f8beb97e;\n  margin-left: -10%;\n  padding-left: 10%;\n  max-width: 25%;\n  margin-bottom: 3%;\n}\n\n.magnifyingGlass {\n  padding-left: 1%;\n  height: 20px;\n  width: 20px;\n}\n\n.searchBarSection {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border: solid grey thin;\n  width: 50%;\n  min-width: 400px;\n  border-radius: 15px;\n}\n\n.searchBar {\n  width: 95%;\n  line-height: 20%;\n  padding: 10px 10px;\n  outline: none;\n  border: none;\n  background: transparent;\n}\n\n/* Q & A */\n.qaSection {\n  max-height: 1000px;\n  overflow-y: scroll;\n  margin-top: 2em;\n}\n\n/* Q & A GRID */\n.questionGrid {\n  display: grid;\n  grid-template-columns: 1fr 10fr 10fr;\n  align-items: center;\n}\n\n.q {\n  grid-column: 1 / 2;\n  align-self: center;\n}\n\n.question {\n  grid-column: 2 / 3;\n}\n\n.questionBody {\n  grid-column: 2 / 3;\n  font-weight: bold;\n}\n\n.questionHelpful {\n  grid-column: 3 / 4;\n  /* align-self: center; */\n  /* justify-content: center; */\n  padding-left: 20%;\n  display: inline;\n  /* align-content: flex-start; */\n  width: 100%\n}\n\n.addAnswerButton {\n  border-left: 1px solid gray;\n  border-top: none;\n  border-bottom: none;\n  border-right: none;\n  color: blue;\n  background: transparent;\n}\n\n.addAnswerButton:hover {\n  color: #F2B694;\n}\n\n.questionAndAnswer {\n  border-bottom: solid .5px rgb(190, 190, 190);\n  /* margin-right: 15px; */\n}\n\n.questionAndAnswer:last-child {\n  border-bottom: none;\n  /* margin-right: 15px; */\n}\n\n/* ANSWER GRID */\n\n.answerGrid {\n  display: grid;\n  grid-template-columns: 1fr 20fr;\n  margin-bottom: 1em;\n}\n\n.a {\n  grid-column: 1 / 2;\n  margin-block-start: 0.2em;\n}\n\n.answer {\n  grid-column: 2 / 3;\n  margin-top: 1%;\n  margin-bottom: 2%;\n  padding: 1em 0 1em 1em;\n}\n\n.answer:nth-child(odd) {\n  background-color: #d7ebeb4b;\n}\n\n\n/* .answerBody {\n\n} */\n\n.userAndDate {\n  font-size: .8em;\n  color: rgb(128, 127, 127);\n  display: flex;\n}\n\n/* .answerPhotos {\n\n} */\n\n.photo {\n  margin: .75em;\n  border-radius: 50%;\n}\n\n.answerHelpful {\n  font-size: 8px;\n  display: flex;\n}\n\n.showMoreAnswersButton {\n  grid-column: 2 / 3;\n  text-align: left;\n  border: none;\n  background: transparent;\n  outline: none;\n}\n\n.showMoreAnswersButton:hover {\n  color: #F2B694;\n}\n/* MODALS */\n\n.modalInput {\n  width: 75%;\n}\n\n/* FOOTER & BUTTONS */\n.buttons {\n  margin-top: 1em;\n  grid-row-start: 3;\n  margin-bottom: 2%;\n}\n\n.footerButton:hover {\n  color: #F2B694;\n}\n\n.footerButton {\n  border: none;\n  background: transparent;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"border": "_38_VXG10Mju-Od14Dfg1Uc",
	"qaheader": "_3LIY7_NuZYcIp9Xbb_BRsM",
	"headerBox": "mTDbzQ1ieQyzxUe2rLuff",
	"magnifyingGlass": "_3diC_gQhmC7CupFxjjH9bo",
	"searchBarSection": "_1Zpyw62IeKm64d5y_QjYMo",
	"searchBar": "_2dfGgO7xN8GlsVNwW_Gg2L",
	"qaSection": "pi74rzl0pHezFlhtGHEYz",
	"questionGrid": "_3Zo71BOFeKuSg27d5zv47b",
	"q": "_1ttiL85nChofn-9c8emOUD",
	"question": "_28z0qtxGQI491mVaW4P_a0",
	"questionBody": "_3eSfcx7XnuNRDc9KPmYMHs",
	"questionHelpful": "_3CvAJWdJaq47IDuWkQDgMt",
	"addAnswerButton": "_39q7pvnW2cTHIkHef6gBDP",
	"questionAndAnswer": "_39ZJwfaOm_f9K1LwvqaDqG",
	"answerGrid": "_2f1WYZiy7XBYqGI4V3c8BO",
	"a": "_3kRZI3cwXl_H6yzuX_aIRn",
	"answer": "_3erLk0KqMJMAmK8ISlqUJn",
	"userAndDate": "KgoBQ60EJOST9AN7ur8yR",
	"photo": "IUKkF_-FbziKgjLOlneFb",
	"answerHelpful": "_1bnh9ud2wVgexCT02tEAl2",
	"showMoreAnswersButton": "_1_j9lj7RuKz_M8Afe4LhY6",
	"modalInput": "_1JG-BSVScA5lB3PbkEqfE-",
	"buttons": "_2Q68Jc9eaLVFhm7DIF0xWa",
	"footerButton": "_1nmwfPhVR7v5nnEnApvivb"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/src/styleComponents/QA.modules.css":
/*!***************************************************!*\
  !*** ./client/src/styleComponents/QA.modules.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./QA.modules.css */ "./node_modules/css-loader/dist/cjs.js!./client/src/styleComponents/QA.modules.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2VudHlwby9tYWduaWZ5aW5nLWdsYXNzLmpzIiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRXhwYW5kZWRQaG90b3MuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVscGZ1bC5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9xYS9BbnN3ZXIuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvQW5zd2VyTW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvUUEuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvUUFTZWFyY2hCYXIuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvUXVlc3Rpb24uanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvUXVlc3Rpb25Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vd2FsbGFjZS1jb3Jwb3JhdGlvbi8uL2NsaWVudC9zcmMvc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzIiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcz9lZGY3Il0sIm5hbWVzIjpbIkV4cGFuZGVkUGhvdG9zIiwicGhvdG8iLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzdHlsZXMiLCJ1cmwiLCJIZWxwZnVsIiwicHJvcHMiLCJoZWxwZnVsbmVzcyIsImNvdW50Iiwic2V0Q291bnQiLCJyZXBvcnRlZCIsInNldFJlcG9ydGVkIiwiaXNSZXBvcnRlZCIsInNldElzUmVwb3J0ZWQiLCJoYW5kbGVDb3VudCIsImUiLCJyZXZpZXdfaWQiLCJheGlvcyIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfaWQiLCJyZXBvcnQiLCJoZWxwZnVsIiwiZmxhZ1NvbGlkIiwiQW5zd2VyIiwiYW5zd2VyIiwiYm9keSIsImFuc3dlcmVyX25hbWUiLCJkYXRlIiwiaWQiLCJwaG90b3MiLCJnZXRQcm9wZXJEYXRlIiwid2VpcmREYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInNwbGl0IiwieWVhciIsInNoaWZ0IiwicHVzaCIsImpvaW4iLCJxYXN0eWxlcyIsImFuc3dlckJvZHkiLCJhbnN3ZXJQaG90b3MiLCJtYXAiLCJpZHgiLCJ1c2VyQW5kRGF0ZSIsIkFuc3dlck1vZGFsIiwib3BlbiIsIm9uQ2xvc2UiLCJnZXRRdWVzdGlvbnMiLCJwcm9kdWN0SWQiLCJzZXRBbnN3ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInRodW1ibmFpbHMiLCJzZXRUaHVtYm5haWxzIiwic2V0UGhvdG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsImNsZWFyRm9ybSIsInRvQmFzZTY0IiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbnN3ZXJJbmZvIiwibmFtZSIsInRlc3QiLCJwcm9taXNlcyIsInBheWxvYWQiLCJkYXRhIiwicHJvbWlzZSIsImFsbCIsInJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInRyYW5zZm9ybSIsIm1vZGFsIiwibW9kYWxIZWFkZXIiLCJtb2RhbEJvZHkiLCJ2YWx1ZSIsImZpbmVQcmludCIsIm1vZGFsQnV0dG9uIiwiUUEiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJkaXNwbGF5ZWRRdWVzdGlvbnMiLCJzZXREaXNwbGF5ZWRRdWVzdGlvbnMiLCJzZWFyY2hpbmciLCJzZXRTZWFyY2hpbmciLCJtb3JlUXVlc3Rpb25zQnV0dG9uIiwic2V0TW9yZVF1ZXN0aW9uc0J1dHRvbiIsInNvcnRRdWVzdGlvbnMiLCJxdWVzdGlvbkFyciIsImNoZWNrZWQiLCJpIiwicXVlc3Rpb25faGVscGZ1bG5lc3MiLCJ0bXAiLCJzb3J0ZWQiLCJ1c2VFZmZlY3QiLCJpbmNyZWFzZU51bU9mUXVlc3Rpb25zIiwic2VhcmNoUXVlc3Rpb25zIiwiZm91bmQiLCJmaWx0ZXIiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX2JvZHkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYm9yZGVyIiwiaGVhZGVyQm94IiwicWFoZWFkZXIiLCJzZWFyY2giLCJxYVNlY3Rpb24iLCJidXR0b25zIiwiUUFTZWFyY2hCYXIiLCJzZWFyY2hCYXJTZWN0aW9uIiwibWFnbmlmeWluZ0dsYXNzIiwiUXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyTGlzdCIsInNldEFuc3dlckxpc3QiLCJkaXNwbGF5ZWRBbnN3ZXJzIiwic2V0RGlzcGxheWVkQW5zd2VycyIsInNlZU1vcmVBbnN3ZXJzVGV4dCIsInNldFNlZU1vcmVBbnN3ZXJzVGV4dCIsInNvcnRBbnN3ZXJzQnlTZWxsZXIiLCJhbnN3ZXJBcnIiLCJzZWxsZXJNZXNzYWdlcyIsIm90aGVyTWVzc2FnZXMiLCJjb25jYXQiLCJzb3J0QW5zd2Vyc0J5SGVscGZ1bG5lc3MiLCJzb3J0ZWRBbnN3ZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic2hvd01vcmVBbnN3ZXJzIiwicXVlc3Rpb25BbmRBbnN3ZXIiLCJxdWVzdGlvbkdyaWQiLCJxIiwicXVlc3Rpb25Cb2R5IiwicXVlc3Rpb25IZWxwZnVsIiwiYW5zd2VyR3JpZCIsImEiLCJRdWVzdGlvbk1vZGFsIiwic2V0UXVlc3Rpb24iLCJxdWVzdGlvbkluZm8iLCJwcm9kdWN0X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNKQywrQ0FBUSxDQUFDLEtBQUQsQ0FESjtBQUFBO0FBQUEsTUFDN0JDLFFBRDZCO0FBQUEsTUFDbkJDLFdBRG1COztBQUdwQyxTQUNFSCxLQUFLLGdCQUVEO0FBQU0sYUFBUyxFQUFFRSxRQUFRLEdBQUdFLGlGQUFILEdBQXlCO0FBQWxELEtBQ0ksQ0FBQ0YsUUFBRixnQkFFRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3QkwsS0FGL0I7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLGFBQVMsRUFBRUksaUZBSmI7QUFLRSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBTFg7QUFNRSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBO0FBTmIsSUFGSCxnQkFZRztBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNLLEdBQU4sR0FBWUwsS0FBSyxDQUFDSyxHQUFsQixHQUF3Qkws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QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJeEIsaUVBQWUsK0ZBQWMsTUFBTSxFIiwiZmlsZSI6ImNsaWVudF9zcmNfY29tcG9uZW50c19xYV9RQV9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRhdGEgPSB7XG5cdFwiYm9keVwiOiBcIjxwYXRoIGQ9XFxcIk0xNy41NDUgMTUuNDY3bC0zLjc3OS0zLjc3OWE2LjE1IDYuMTUgMCAwIDAgLjg5OC0zLjIxYzAtMy40MTctMi45NjEtNi4zNzctNi4zNzgtNi4zNzdBNi4xODUgNi4xODUgMCAwIDAgMi4xIDguMjg3YzAgMy40MTYgMi45NjEgNi4zNzcgNi4zNzcgNi4zNzdhNi4xNSA2LjE1IDAgMCAwIDMuMTE1LS44NDRsMy43OTkgMy44MDFhLjk1My45NTMgMCAwIDAgMS4zNDYgMGwuOTQzLS45NDNjLjM3MS0uMzcxLjIzNi0uODQtLjEzNS0xLjIxMXpNNC4wMDQgOC4yODdhNC4yODIgNC4yODIgMCAwIDEgNC4yODItNC4yODNjMi4zNjYgMCA0LjQ3NCAyLjEwNyA0LjQ3NCA0LjQ3NGE0LjI4NCA0LjI4NCAwIDAgMS00LjI4MyA0LjI4M2MtMi4zNjYtLjAwMS00LjQ3My0yLjEwOS00LjQ3My00LjQ3NHpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPlwiLFxuXHRcIndpZHRoXCI6IDIwLFxuXHRcImhlaWdodFwiOiAyMFxufTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcblxuY29uc3QgRXhwYW5kZWRQaG90b3MgPSAoeyBwaG90byB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgcGhvdG9cbiAgICAgID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2V4cGFuZGVkID8gc3R5bGVzLm92ZXJsYXlQaG90byA6ICcnfT5cbiAgICAgICAgICB7KCFleHBhbmRlZClcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmwgPyBwaG90by51cmwgOiBwaG90b31cbiAgICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ1RodW1ibmFpbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgc3JjPXtwaG90by51cmwgPyBwaG90by51cmwgOiBwaG90b31cbiAgICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRlZFBob3RvcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJY29uLCBJbmxpbmVJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IGZsYWdTb2xpZCBmcm9tICdAaWNvbmlmeS1pY29ucy9jbGFyaXR5L2ZsYWctc29saWQnO1xuXG5cbmNvbnN0IEhlbHBmdWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBoZWxwZnVsbmVzcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoaGVscGZ1bG5lc3MpO1xuICBjb25zdCBbcmVwb3J0ZWQsIHNldFJlcG9ydGVkXSA9IHVzZVN0YXRlKCdSZXBvcnQnKTtcbiAgY29uc3QgW2lzUmVwb3J0ZWQsIHNldElzUmVwb3J0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50ID0gKGUpID0+IHtcbiAgICBzZXRDb3VudChoZWxwZnVsbmVzcyArIDEpO1xuXG4gICAgaWYgKHByb3BzLnJldmlld19pZCkge1xuICAgICAgY29uc3QgeyByZXZpZXdfaWQgfSA9IHByb3BzO1xuICAgICAgYXhpb3MucHV0KGAvcmV2aWV3cy8ke3Jldmlld19pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5xdWVzdGlvbl9pZCkge1xuICAgICAgY29uc3QgeyBxdWVzdGlvbl9pZCB9ID0gcHJvcHM7XG4gICAgICBheGlvcy5wdXQoYC9xYS9xdWVzdGlvbnMvJHtxdWVzdGlvbl9pZH0vaGVscGZ1bGApXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IGNvbnNvbGUubG9nKHN0YXR1cy5zdGF0dXMpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5hbnN3ZXJfaWQpIHtcbiAgICAgIGNvbnN0IHsgYW5zd2VyX2lkIH0gPSBwcm9wcztcbiAgICAgIGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHthbnN3ZXJfaWR9L2hlbHBmdWxgKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXBvcnQgPSAoKSA9PiB7XG4gICAgc2V0UmVwb3J0ZWQoJ1JlcG9ydGVkJyk7XG4gICAgc2V0SXNSZXBvcnRlZCh0cnVlKTtcbiAgICBpZiAocHJvcHMuYW5zd2VyX2lkKSB7XG4gICAgICBheGlvcy5wdXQoYC9xYS9hbnN3ZXJzLyR7cHJvcHMuYW5zd2VyX2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJldmlld19pZCkge1xuICAgICAgYXhpb3MucHV0KGAvcmV2aWV3cy8ke3Byb3BzLnJldmlld19pZH0vcmVwb3J0YClcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coc3RhdHVzLnN0YXR1cykpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zLnB1dChgL3FhL3F1ZXN0aW9ucy8ke3Byb3BzLnF1ZXN0aW9uX2lkfS9yZXBvcnRgKVxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhzdGF0dXMuc3RhdHVzKSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlbHBmdWx9PlxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImhlbHBmdWxUZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bH0+V2FzIHRoaXMgaGVscGZ1bD88L2Rpdj5cbiAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJoZWxwZnVsLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVDb3VudH0gY2xhc3NOYW1lPXtzdHlsZXMuaGVscGZ1bEJ1dHRvbn0gdmFsdWU9XCJ5ZXNcIj5ZZXM8L2J1dHRvbj5cbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJoZWxwZnVsLWNvdW50XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVscGZ1bH0gJHtzdHlsZXMuaGVscGZ1bENvdW50fWB9PlxuICAgICAgICAoXG4gICAgICAgIHtjb3VudH1cbiAgICAgICAgKVxuICAgICAgICB7JyAnfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGRhdGEtdGVzdGlkPVwicmVwb3J0LWJ1dHRvblwiIGNsYXNzTmFtZT17aXNSZXBvcnRlZCA/IHN0eWxlcy5yZXBvcnRlZFRydWUgOiBzdHlsZXMucmVwb3J0ZWR9IG9uQ2xpY2s9e3JlcG9ydH0gdHlwZT1cInN1Ym1pdFwiPntyZXBvcnRlZH08L2J1dHRvbj5cbiAgICAgIHtpc1JlcG9ydGVkID8gPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ30gaWNvbj17ZmxhZ1NvbGlkfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwZnVsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxwZnVsIGZyb20gJy4uL0hlbHBmdWwnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgRXhwYW5kZWRQaG90b3MgZnJvbSAnLi4vRXhwYW5kZWRQaG90b3MnO1xuXG5jb25zdCBBbnN3ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhbnN3ZXIgfSA9IHByb3BzO1xuICBjb25zdCB7IGJvZHksIGFuc3dlcmVyX25hbWUsIGRhdGUsIGlkLCBoZWxwZnVsbmVzcywgcGhvdG9zIH0gPSBhbnN3ZXI7XG5cbiAgY29uc3QgZ2V0UHJvcGVyRGF0ZSA9ICh3ZWlyZERhdGUpID0+IHtcbiAgICBsZXQgZGF0ZUFyciA9IHdlaXJkRGF0ZS5zbGljZSgwLCB3ZWlyZERhdGUuaW5kZXhPZignVCcpKS5zcGxpdCgnLScpO1xuICAgIGxldCB5ZWFyID0gZGF0ZUFyci5zaGlmdCgpO1xuICAgIGRhdGVBcnIucHVzaCh5ZWFyKTtcbiAgICByZXR1cm4gZGF0ZUFyci5qb2luKCctJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VyfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VyQm9keX0gPntib2R5fTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJQaG90b3N9PlxuICAgICAgICB7cGhvdG9zLm1hcCgocGhvdG8sIGlkeCkgPT4gPEV4cGFuZGVkUGhvdG9zIGtleT17aWR4fSBwaG90bz17cGhvdG99IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtxYXN0eWxlcy51c2VyQW5kRGF0ZX0+Ynkge2Fuc3dlcmVyX25hbWV9LCB7Z2V0UHJvcGVyRGF0ZShkYXRlKX08L3A+XG4gICAgICAgIDxIZWxwZnVsIGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VySGVscGZ1bH0gYW5zd2VyX2lkPXtpZH0gaGVscGZ1bG5lc3M9e2hlbHBmdWxuZXNzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXI7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgRXhwYW5kZWRQaG90b3MgZnJvbSAnLi4vRXhwYW5kZWRQaG90b3MnO1xuXG5mdW5jdGlvbiBBbnN3ZXJNb2RhbCh7b3Blbiwgb25DbG9zZSwgcXVlc3Rpb25faWQsIGdldFF1ZXN0aW9ucywgcHJvZHVjdElkfSkge1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0aHVtYm5haWxzLCBzZXRUaHVtYm5haWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgIC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2lcbiAgKTtcblxuICBjb25zdCBjbGVhckZvcm0gPSAoZSkgPT4ge1xuICAgIHNldEFuc3dlcignJyk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgICBzZXRUaHVtYm5haWxzKFtdKTtcbiAgICBzZXRQaG90b3MoW10pO1xuICB9O1xuXG4gIGNvbnN0IHRvQmFzZTY0ID0gZmlsZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhbnN3ZXJJbmZvID0ge1xuICAgICAgYm9keTogYW5zd2VyLFxuICAgICAgbmFtZTogdXNlcm5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwaG90b3M6IFtdLFxuICAgIH07XG5cbiAgICBpZiAoIXZhbGlkRW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgc2V0RXJyb3IoJypZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IHBob3RvIG9mIHBob3Rvcykge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgbmFtZTogcGhvdG8ubmFtZSxcbiAgICAgICAgZGF0YTogJycsXG4gICAgICB9IFxuXG4gICAgICBjb25zdCBwcm9taXNlID0gdG9CYXNlNjQocGhvdG8pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHBheWxvYWQuZGF0YSA9IHJlc3VsdC5zcGxpdCgnLCcpWzFdKVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KGAvdXBsb2FkX2ltYWdlc2AsIHBheWxvYWQpKVxuICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7cmV0dXJuIGRhdGF9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKHJlc3VsdHMpID0+IGFuc3dlckluZm8ucGhvdG9zID0gcmVzdWx0cylcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gYXhpb3MucG9zdChgL3FhL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uX2lkfS9hbnN3ZXJzYCwgYW5zd2VySW5mbylcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IGdldFF1ZXN0aW9ucygyMDExMSkpXG4gICAgLnRoZW4oKCkgPT4gY2xlYXJGb3JtKCkpXG4gICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcblxuICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIGlmIChwaG90b3MubGVuZ3RoIDwgNSkge1xuICAgICAgc2V0UGhvdG9zKFtcbiAgICAgICAgLi4ucGhvdG9zLFxuICAgICAgICBlLnRhcmdldC5maWxlc1swXSxcbiAgICAgIF0pO1xuICAgICAgc2V0VGh1bWJuYWlscyhbXG4gICAgICAgIC4uLnRodW1ibmFpbHMsXG4gICAgICAgIFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pLFxuICAgICAgXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIH19IFxuICAgICAgICBjbGFzc05hbWU9e29wZW4gPyBzdHlsZXMub3ZlcmxheSA6ICcnfSBcbiAgICAgID5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScgOiAndHJhbnNsYXRlKC01MCUsIC0xNTB2aCknXG4gICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGgzPkFkZCBhbiBBbnN3ZXI8L2gzPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB4XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJvZHl9PlxuICAgICAgICAgIDxmb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPHA+WW91ciBBbnN3ZXIgKjwvcD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBkYXRhLXRlc3RpZD1cImFuc3dlci1pbnB1dFwiIHZhbHVlPXthbnN3ZXJ9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldEFuc3dlcihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLnFJbnB1dH0gbWF4TGVuZ3RoPVwiMTAwMFwiIC8+XG4gICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgbmlja25hbWU/ICo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS10ZXN0aWQ9XCJhbnN3ZXItdXNlcm5hbWUtaW5wdXRcIiB2YWx1ZT17dXNlcm5hbWV9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtxYXN0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFjazU0MyFcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57dXNlcm5hbWUubGVuZ3RoID4gMCA/ICdGb3IgcHJpdmFjeSByZWFzb25zLCBkbyBub3QgdXNlIHlvdXIgZnVsbCBuYW1lIG9yIGVtYWlsIGFkZHJlc3MnIDogJyd9PC9wPlxuICAgICAgICAgICAgPHA+WW91ciBFbWFpbCAqPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtdGVzdGlkPVwiYW5zd2VyLWVtYWlsLWlucHV0XCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZD1cInJlcXVpcmVkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17cWFzdHlsZXMubW9kYWxJbnB1dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IGphY2tAZW1haWwuY29tXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e2VtYWlsLmxlbmd0aCA+IDAgPyAnRm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMsIHlvdSB3aWxsIG5vdCBiZSBlbWFpbGVkJyA6ICcnfTwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtwaG90b3MubGVuZ3RoIDwgNSA/IDxpbnB1dCBkYXRhLXRlc3RpZD1cImFuc3dlci1waG90by11cGxvYWRcIiB2YWx1ZT17Jyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICB7dGh1bWJuYWlscy5tYXAoKHBob3RvLCBpZHgpID0+IDxFeHBhbmRlZFBob3RvcyBrZXk9e2lkeH0gcGhvdG89e3Bob3RvfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJhbnN3ZXItbW9kYWwtc3VibWl0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ1dHRvbn0+U3VibWl0IEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3J9PC9wPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgUUFTZWFyY2hCYXIgZnJvbSAnLi9RQVNlYXJjaEJhci5qc3gnXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9RdWVzdGlvbic7XG5pbXBvcnQgUXVlc3Rpb25Nb2RhbCBmcm9tICcuL1F1ZXN0aW9uTW9kYWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUUEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRRdWVzdGlvbnMsIHNldERpc3BsYXllZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoaW5nLCBzZXRTZWFyY2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9yZVF1ZXN0aW9uc0J1dHRvbiwgc2V0TW9yZVF1ZXN0aW9uc0J1dHRvbl0gPSB1c2VTdGF0ZSgnTW9yZSBBbnN3ZXJlZCBRdWVzdGlvbnMnKTtcblxuICBjb25zdCBzb3J0UXVlc3Rpb25zID0gKHF1ZXN0aW9uQXJyKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gcXVlc3Rpb25BcnIubGVuZ3RoO1xuICAgIGxldCBjaGVja2VkO1xuICAgIGRvIHtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbkFycltpXS5xdWVzdGlvbl9oZWxwZnVsbmVzcyA8IHF1ZXN0aW9uQXJyW2kgKyAxXS5xdWVzdGlvbl9oZWxwZnVsbmVzcykge1xuICAgICAgICAgIGNvbnN0IHRtcCA9IHF1ZXN0aW9uQXJyW2ldO1xuICAgICAgICAgIHF1ZXN0aW9uQXJyW2ldID0gcXVlc3Rpb25BcnJbaSArIDFdO1xuICAgICAgICAgIHF1ZXN0aW9uQXJyW2kgKyAxXSA9IHRtcDtcbiAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gd2hpbGUgKGNoZWNrZWQpO1xuICAgIHJldHVybiBxdWVzdGlvbkFycjtcbiAgfTtcblxuICBjb25zdCBnZXRRdWVzdGlvbnMgPSAoaWQpID0+IHtcbiAgICBheGlvcy5nZXQoYC9xYS9xdWVzdGlvbnMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkID0gc29ydFF1ZXN0aW9ucyhyZXN1bHRzLmRhdGEpO1xuICAgICAgICBzZXRRdWVzdGlvbnMoc29ydGVkKTtcbiAgICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHNvcnRlZC5zbGljZSgwLCA0KSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFF1ZXN0aW9ucygyMDExMSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHF1ZXN0aW9ucyk7XG4gICAgICBzZXRNb3JlUXVlc3Rpb25zQnV0dG9uKCdTaG93IExlc3MgUXVlc3Rpb25zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc3BsYXllZFF1ZXN0aW9ucyhxdWVzdGlvbnMuc2xpY2UoMCwgNCkpO1xuICAgICAgc2V0TW9yZVF1ZXN0aW9uc0J1dHRvbignTW9yZSBBbnN3ZXJlZCBRdWVzdGlvbnMnKTtcbiAgICB9XG4gIH0sIFtleHBhbmRlZF0pO1xuXG4gIGNvbnN0IGluY3JlYXNlTnVtT2ZRdWVzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hRdWVzdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID49IDMpIHtcbiAgICAgIHNldFNlYXJjaGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IGZvdW5kID0gcXVlc3Rpb25zLmZpbHRlcihxdWVzdGlvbiA9PiBxdWVzdGlvbi5xdWVzdGlvbl9ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKGZvdW5kKTtcbiAgICB9IGVsc2UgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBzZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHF1ZXN0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMocXVlc3Rpb25zLnNsaWNlKDAsIDIpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuYm9yZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5oZWFkZXJCb3h9PlxuICAgICAgICA8aDIgZGF0YS10ZXN0aWQ9XCJxYS1oZWFkaW5nXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5xYWhlYWRlcn0+UXVlc3Rpb25zICYgQW5zd2VyczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8UUFTZWFyY2hCYXIgc2VhcmNoUXVlc3Rpb25zPXtzZWFyY2hRdWVzdGlvbnN9IC8+XG4gICAgICAgIHtxdWVzdGlvbnMubGVuZ3RoID09PSAwID8gPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFkZC1hLXF1ZXN0aW9uLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBBIFF1ZXN0aW9uICsgPC9idXR0b24+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnFhU2VjdGlvbn0+XG4gICAgICAgIHtkaXNwbGF5ZWRRdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaWR4KSA9PiA8UXVlc3Rpb24ga2V5PXtpZHh9IHByb2R1Y3RJZD17cHJvZHVjdElkfSBnZXRRdWVzdGlvbnM9e2dldFF1ZXN0aW9uc30gcXVlc3Rpb249e3F1ZXN0aW9ufSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5idXR0b25zfT5cbiAgICAgICAge3NlYXJjaGluZyA/IG51bGwgOiA8YnV0dG9uIGRhdGEtdGVzdGlkPVwic2hvdy1tb3JlLXF1ZXN0aW9ucy1idXR0b25cIiBjbGFzc05hbWU9e3Fhc3R5bGVzLmZvb3RlckJ1dHRvbn0gb25DbGljaz17aW5jcmVhc2VOdW1PZlF1ZXN0aW9uc30gPnttb3JlUXVlc3Rpb25zQnV0dG9ufTwvYnV0dG9uPn1cbiAgICAgICAge3F1ZXN0aW9ucy5sZW5ndGggPiAwID8gPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFkZC1hLXF1ZXN0aW9uLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBBIFF1ZXN0aW9uICsgPC9idXR0b24+IDogbnVsbH1cbiAgICAgIDxRdWVzdGlvbk1vZGFsIHByb2R1Y3RJZD17cHJvZHVjdElkfSBnZXRRdWVzdGlvbnM9e2dldFF1ZXN0aW9uc30gb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gb3Blbj17aXNPcGVufT48L1F1ZXN0aW9uTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcbmltcG9ydCB7IEljb24sIElubGluZUljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgbWFnbmlmeWluZ0dsYXNzIGZyb20gJ0BpY29uaWZ5LWljb25zL2VudHlwby9tYWduaWZ5aW5nLWdsYXNzJztcblxuY29uc3QgUUFTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NlYXJjaFF1ZXN0aW9uc30gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuc2VhcmNoQmFyU2VjdGlvbn0+XG4gICAgICAgIDxJY29uIGNsYXNzTmFtZT17cWFzdHlsZXMubWFnbmlmeWluZ0dsYXNzfSBpY29uPXttYWduaWZ5aW5nR2xhc3N9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNlYXJjaFF1ZXN0aW9ucyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtxYXN0eWxlcy5zZWFyY2hCYXJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUXVlc3Rpb25zLi4uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUUFTZWFyY2hCYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbnN3ZXIgZnJvbSAnLi9BbnN3ZXInO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgSGVscGZ1bCBmcm9tICcuLi9IZWxwZnVsJztcbmltcG9ydCBBbnN3ZXJNb2RhbCBmcm9tICcuL0Fuc3dlck1vZGFsJztcblxuY29uc3QgUXVlc3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVzdGlvbiwgZ2V0UXVlc3Rpb25zLCBwcm9kdWN0SWQgfSA9IHByb3BzO1xuICBjb25zdCB7IHF1ZXN0aW9uX2JvZHksIGFuc3dlcnMsIHF1ZXN0aW9uX2lkLCBxdWVzdGlvbl9oZWxwZnVsbmVzcyB9ID0gcXVlc3Rpb247XG4gIGNvbnN0IFthbnN3ZXJMaXN0LCBzZXRBbnN3ZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3BsYXllZEFuc3dlcnMsIHNldERpc3BsYXllZEFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlZU1vcmVBbnN3ZXJzVGV4dCwgc2V0U2VlTW9yZUFuc3dlcnNUZXh0XSA9IHVzZVN0YXRlKCdTZWUgTW9yZSBBbnN3ZXJzJylcblxuICBjb25zdCBzb3J0QW5zd2Vyc0J5U2VsbGVyID0gKGFuc3dlckFycikgPT4ge1xuICAgIGxldCBzZWxsZXJNZXNzYWdlcyA9IGFuc3dlckFyci5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5hbnN3ZXJlcl9uYW1lID09PSAnU2VsbGVyJyk7XG4gICAgbGV0IG90aGVyTWVzc2FnZXMgPSBhbnN3ZXJBcnIuZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIuYW5zd2VyZXJfbmFtZSAhPT0gJ1NlbGxlcicpO1xuICAgIHJldHVybiBzZWxsZXJNZXNzYWdlcy5jb25jYXQob3RoZXJNZXNzYWdlcyk7XG4gIH07XG5cbiAgY29uc3Qgc29ydEFuc3dlcnNCeUhlbHBmdWxuZXNzID0gKGFuc3dlckFycikgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGFuc3dlckFyci5sZW5ndGg7XG4gICAgbGV0IGNoZWNrZWQ7XG4gICAgZG8ge1xuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYgKGFuc3dlckFycltpXS5oZWxwZnVsbmVzcyA8IGFuc3dlckFycltpICsgMV0uaGVscGZ1bG5lc3MpIHtcbiAgICAgICAgICBjb25zdCB0bXAgPSBhbnN3ZXJBcnJbaV07XG4gICAgICAgICAgYW5zd2VyQXJyW2ldID0gYW5zd2VyQXJyW2kgKyAxXTtcbiAgICAgICAgICBhbnN3ZXJBcnJbaSArIDFdID0gdG1wO1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB3aGlsZSAoY2hlY2tlZCk7XG4gICAgcmV0dXJuIHNvcnRBbnN3ZXJzQnlTZWxsZXIoYW5zd2VyQXJyKTtcbiAgfTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkQW5zd2VycyA9IHNvcnRBbnN3ZXJzQnlIZWxwZnVsbmVzcyhPYmplY3QudmFsdWVzKGFuc3dlcnMpKTtcbiAgICBzZXRBbnN3ZXJMaXN0KHNvcnRlZEFuc3dlcnMpO1xuICB9LCBbcXVlc3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERpc3BsYXllZEFuc3dlcnMoYW5zd2VyTGlzdC5zbGljZSgwLCAyKSk7XG4gIH0sIFthbnN3ZXJMaXN0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHNldERpc3BsYXllZEFuc3dlcnMoYW5zd2VyTGlzdCk7XG4gICAgICBzZXRTZWVNb3JlQW5zd2Vyc1RleHQoJ0NvbGxhcHNlIEFuc3dlcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzcGxheWVkQW5zd2VycyhhbnN3ZXJMaXN0LnNsaWNlKDAsIDIpKTtcbiAgICAgIHNldFNlZU1vcmVBbnN3ZXJzVGV4dCgnU2VlIE1vcmUgQW5zd2VycycpO1xuICAgIH1cbiAgfSwgW2V4cGFuZGVkXSk7XG5cbiAgY29uc3Qgc2hvd01vcmVBbnN3ZXJzID0gKCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb25BbmRBbnN3ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnF1ZXN0aW9uR3JpZH0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e3Fhc3R5bGVzLnF9PlE6PC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnF1ZXN0aW9ufT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3Fhc3R5bGVzLnF1ZXN0aW9uQm9keX0gPntxdWVzdGlvbl9ib2R5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5xdWVzdGlvbkhlbHBmdWx9PlxuICAgICAgICAgIDxIZWxwZnVsIHF1ZXN0aW9uX2lkPXtxdWVzdGlvbl9pZH0gaGVscGZ1bG5lc3M9e3F1ZXN0aW9uX2hlbHBmdWxuZXNzfSAvPlxuICAgICAgICAgIDxidXR0b24gZGF0YS10ZXN0aWQ9XCJhZGQtYW5zd2VyLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuYWRkQW5zd2VyQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9IHR5cGU9XCJidXR0b25cIj5BZGQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VyTW9kYWwgcHJvZHVjdElkPXtwcm9kdWN0SWR9IGdldFF1ZXN0aW9ucz17Z2V0UXVlc3Rpb25zfSBxdWVzdGlvbl9pZD17cXVlc3Rpb25faWR9IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9IG9wZW49e2lzT3Blbn0+PC9BbnN3ZXJNb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlckdyaWR9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtxYXN0eWxlcy5hfT5BOjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJMaXN0fT5cbiAgICAgICAgICB7ZGlzcGxheWVkQW5zd2Vycy5tYXAoKGFuc3dlciwgaWR4KSA9PiA8QW5zd2VyIGtleT17aWR4fSBhbnN3ZXI9e2Fuc3dlcn0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Fuc3dlckxpc3QubGVuZ3RoID4gMiA/IDxidXR0b24gZGF0YS10ZXN0aWQ9XCJzaG93LW1vcmUtYW5zd2Vycy1idXR0b25cIiBjbGFzc05hbWU9e3Fhc3R5bGVzLnNob3dNb3JlQW5zd2Vyc0J1dHRvbn0gb25DbGljaz17c2hvd01vcmVBbnN3ZXJzfT57c2VlTW9yZUFuc3dlcnNUZXh0fTwvYnV0dG9uPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIFF1ZXN0aW9uTW9kYWwoeyBvcGVuLCBvbkNsb3NlLCBnZXRRdWVzdGlvbnMsIHByb2R1Y3RJZCB9KSB7XG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHZhbGlkRW1haWxSZWdleCA9IFJlZ0V4cChcbiAgICAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pXG4gICk7XG5cbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIHNldFF1ZXN0aW9uKCcnKTtcbiAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgc2V0RW1haWwoJycpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBxdWVzdGlvbkluZm8gPSB7XG4gICAgICBib2R5OiBxdWVzdGlvbixcbiAgICAgIG5hbWU6IHVzZXJuYW1lLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgIH07XG4gICAgaWYgKCF2YWxpZEVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKCcqWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBheGlvcy5wb3N0KCcvcWEvcXVlc3Rpb25zJywgcXVlc3Rpb25JbmZvKVxuICAgICAgLnRoZW4oKCkgPT4gZ2V0UXVlc3Rpb25zKDIwMTExKSlcbiAgICAgIC50aGVuKCgpID0+IGNsZWFyRm9ybSgpKVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIH19IFxuICAgICAgICBkYXRhLXRlc3RpZD1cInF1ZXN0aW9uLW92ZXJsYXlcIlxuICAgICAgICBjbGFzc05hbWU9e29wZW4gPyBzdHlsZXMub3ZlcmxheSA6ICcnfVxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScgOiAndHJhbnNsYXRlKC01MCUsIC0xNTB2aCknXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgIDxoMz5Bc2sgWW91ciBRdWVzdGlvbiBhYm91dCB0aGUgUHJvZHVjdDwvaDM+XG4gICAgICAgICAgPHAgXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU1vZGFsfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJxdWVzdGlvbkZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8cD5RdWVzdGlvbiAqPC9wPlxuICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtdGVzdGlkPVwicXVlc3Rpb24taW5wdXRcIiB2YWx1ZT17cXVlc3Rpb259IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX0gbWF4TGVuZ3RoPVwiMTAwMFwiIGNsYXNzTmFtZT17c3R5bGVzLnFJbnB1dH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPHA+V2hhdCBpcyB5b3VyIG5pY2tuYW1lPyAqPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tdXNlcm5hbWUtaW5wdXRcIiB2YWx1ZT17dXNlcm5hbWV9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtxYXN0eWxlcy5tb2RhbElucHV0fSBtYXhMZW5ndGg9XCI2MFwiIHBsYWNlaG9sZGVyPVwiZXhhbXBsZTogamFja3NvbjExIVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3VzZXJuYW1lLmxlbmd0aCA+IDAgPyAnRm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgIDxwPllvdXIgRW1haWwgKjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXRlc3RpZD1cInF1ZXN0aW9uLWVtYWlsLWlucHV0XCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZD1cInJlcXVpcmVkXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlOiBqYWNrc29uMTEhQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3Fhc3R5bGVzLm1vZGFsSW5wdXR9IG1heExlbmd0aD1cIjYwXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cInF1ZXN0aW9uLW1vZGFsLXN1Ym1pdC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdXR0b259PlN1Ym1pdCBRdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3J9PC9wPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Nb2RhbDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zOF9WWEcxME1qdS1PZDE0RGZnMVVjIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCBsaWdodGdyYXkgMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuLyogSEVBRElORyAmIFNFQVJDSCAqL1xcblxcbi5fM0xJWTdfTnVaWWNJcDlYYmJfQlJzTSB7XFxuICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjtcXG4gIC8qIG1hcmdpbjogMDsgKi9cXG4gIC8qIG1hcmdpbi10b3A6IDIwJTsgKi9cXG59XFxuXFxuLm1URGJ6UTFpZVF5enhVZTJyTHVmZiB7XFxuICBcXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4YmViOSwgd2hpdGUpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YmViOTdlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi5fM2RpQ19nUWhtQzdDdXBGeGpqSDlibyB7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5fMVpweXc2MkllS202NGQ1eV9RallNbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IHRoaW47XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5fMmRmR2dPN3hOOEdsc1ZOd1dfR2cyTCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbGluZS1oZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogUSAmIEEgKi9cXG4ucGk3NHJ6bDBwSGV6RmxodEdIRVl6IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLyogUSAmIEEgR1JJRCAqL1xcbi5fM1pvNzFCT0ZlS3VTZzI3ZDV6djQ3YiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxMGZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLl8xdHRpTDg1bkNob2ZuLTljOGVtT1VEIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLl8yOHowcXR4R1FJNDkxbVZhVzRQX2EwIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLl8zZVNmY3g3WG51TlJEYzlLUG1ZTUhzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uXzNDdkFKV2RKYXE0N0lEdVdrUURnTXQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG4uXzM5cTdwdm5XMmNUSElrSGVmNmdCRFAge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uXzM5cTdwdm5XMmNUSElrSGVmNmdCRFA6aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5fMzlaSndmYU9tX2Y5SzFMd3ZxYURxRyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAuNXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLl8zOVpKd2ZhT21fZjlLMUx3dnFhRHFHOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLyogQU5TV0VSIEdSSUQgKi9cXG5cXG4uXzJmMVdZWml5N1hCWXFHSTRWM2M4Qk8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5fM2tSWkkzY3dYbF9INnl6dVhfYUlSbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuMmVtO1xcbn1cXG5cXG4uXzNlckxrMEtxTUpNQW1LOElTbHFVSm4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XFxufVxcblxcbi5fM2VyTGswS3FNSk1BbUs4SVNscVVKbjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlYmViNGI7XFxufVxcblxcblxcbi8qIC5hbnN3ZXJCb2R5IHtcXG5cXG59ICovXFxuXFxuLktnb0JRNjBFSk9TVDlBTjd1cjh5UiB7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBjb2xvcjogcmdiKDEyOCwgMTI3LCAxMjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLmFuc3dlclBob3RvcyB7XFxuXFxufSAqL1xcblxcbi5JVUtrRl8tRmJ6aUtnakxPbG5lRmIge1xcbiAgbWFyZ2luOiAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLl8xYm5oOXVkMndWZ2V4Q1QwMnRFQWwyIHtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLl8xX2o5bGo3UnVLel9NOEFmZTRMaFk2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5fMV9qOWxqN1J1S3pfTThBZmU0TGhZNjpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuLyogTU9EQUxTICovXFxuXFxuLl8xSkctQlNWU2NBNWxCM1Bia0VxZkUtIHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi8qIEZPT1RFUiAmIEJVVFRPTlMgKi9cXG4uXzJRNjhKYzllYUxWRmhtN0RJRjB4V2Ege1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLl8xbm13ZlBoVlI3djVubkVuQXB2aXZiOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG5cXG4uXzFubXdmUGhWUjd2NW5uRW5BcHZpdmIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsMkRBQTJEO0VBQzNELDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0I7QUFDRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7OztBQUdBOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsV0FBVzs7QUFFWDtFQUNFLFVBQVU7QUFDWjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib3JkZXIge1xcbiAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmF5IDFweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHBhZGRpbmctdG9wOiAzJTtcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4vKiBIRUFESU5HICYgU0VBUkNIICovXFxuXFxuLnFhaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xcbiAgLyogbWFyZ2luOiAwOyAqL1xcbiAgLyogbWFyZ2luLXRvcDogMjAlOyAqL1xcbn1cXG5cXG4uaGVhZGVyQm94IHtcXG4gIFxcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjhiZWI5LCB3aGl0ZSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiZWI5N2U7XFxuICBtYXJnaW4tbGVmdDogLTEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLm1hZ25pZnlpbmdHbGFzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hCYXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgdGhpbjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICB3aWR0aDogOTUlO1xcbiAgbGluZS1oZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogUSAmIEEgKi9cXG4ucWFTZWN0aW9uIHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLyogUSAmIEEgR1JJRCAqL1xcbi5xdWVzdGlvbkdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMTBmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5xIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnF1ZXN0aW9uQm9keSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnF1ZXN0aW9uSGVscGZ1bCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cXG4gIHdpZHRoOiAxMDAlXFxufVxcblxcbi5hZGRBbnN3ZXJCdXR0b24ge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkQW5zd2VyQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG5cXG4ucXVlc3Rpb25BbmRBbnN3ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgLjVweCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi5xdWVzdGlvbkFuZEFuc3dlcjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi8qIEFOU1dFUiBHUklEICovXFxuXFxuLmFuc3dlckdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5hIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC4yZW07XFxufVxcblxcbi5hbnN3ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XFxufVxcblxcbi5hbnN3ZXI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWJlYjRiO1xcbn1cXG5cXG5cXG4vKiAuYW5zd2VyQm9keSB7XFxuXFxufSAqL1xcblxcbi51c2VyQW5kRGF0ZSB7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBjb2xvcjogcmdiKDEyOCwgMTI3LCAxMjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLmFuc3dlclBob3RvcyB7XFxuXFxufSAqL1xcblxcbi5waG90byB7XFxuICBtYXJnaW46IC43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYW5zd2VySGVscGZ1bCB7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaG93TW9yZUFuc3dlcnNCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNob3dNb3JlQW5zd2Vyc0J1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuLyogTU9EQUxTICovXFxuXFxuLm1vZGFsSW5wdXQge1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLyogRk9PVEVSICYgQlVUVE9OUyAqL1xcbi5idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi5mb290ZXJCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5mb290ZXJCdXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJvcmRlclwiOiBcIl8zOF9WWEcxME1qdS1PZDE0RGZnMVVjXCIsXG5cdFwicWFoZWFkZXJcIjogXCJfM0xJWTdfTnVaWWNJcDlYYmJfQlJzTVwiLFxuXHRcImhlYWRlckJveFwiOiBcIm1URGJ6UTFpZVF5enhVZTJyTHVmZlwiLFxuXHRcIm1hZ25pZnlpbmdHbGFzc1wiOiBcIl8zZGlDX2dRaG1DN0N1cEZ4ampIOWJvXCIsXG5cdFwic2VhcmNoQmFyU2VjdGlvblwiOiBcIl8xWnB5dzYySWVLbTY0ZDV5X1FqWU1vXCIsXG5cdFwic2VhcmNoQmFyXCI6IFwiXzJkZkdnTzd4TjhHbHNWTndXX0dnMkxcIixcblx0XCJxYVNlY3Rpb25cIjogXCJwaTc0cnpsMHBIZXpGbGh0R0hFWXpcIixcblx0XCJxdWVzdGlvbkdyaWRcIjogXCJfM1pvNzFCT0ZlS3VTZzI3ZDV6djQ3YlwiLFxuXHRcInFcIjogXCJfMXR0aUw4NW5DaG9mbi05YzhlbU9VRFwiLFxuXHRcInF1ZXN0aW9uXCI6IFwiXzI4ejBxdHhHUUk0OTFtVmFXNFBfYTBcIixcblx0XCJxdWVzdGlvbkJvZHlcIjogXCJfM2VTZmN4N1hudU5SRGM5S1BtWU1Ic1wiLFxuXHRcInF1ZXN0aW9uSGVscGZ1bFwiOiBcIl8zQ3ZBSldkSmFxNDdJRHVXa1FEZ010XCIsXG5cdFwiYWRkQW5zd2VyQnV0dG9uXCI6IFwiXzM5cTdwdm5XMmNUSElrSGVmNmdCRFBcIixcblx0XCJxdWVzdGlvbkFuZEFuc3dlclwiOiBcIl8zOVpKd2ZhT21fZjlLMUx3dnFhRHFHXCIsXG5cdFwiYW5zd2VyR3JpZFwiOiBcIl8yZjFXWVppeTdYQllxR0k0VjNjOEJPXCIsXG5cdFwiYVwiOiBcIl8za1JaSTNjd1hsX0g2eXp1WF9hSVJuXCIsXG5cdFwiYW5zd2VyXCI6IFwiXzNlckxrMEtxTUpNQW1LOElTbHFVSm5cIixcblx0XCJ1c2VyQW5kRGF0ZVwiOiBcIktnb0JRNjBFSk9TVDlBTjd1cjh5UlwiLFxuXHRcInBob3RvXCI6IFwiSVVLa0ZfLUZiemlLZ2pMT2xuZUZiXCIsXG5cdFwiYW5zd2VySGVscGZ1bFwiOiBcIl8xYm5oOXVkMndWZ2V4Q1QwMnRFQWwyXCIsXG5cdFwic2hvd01vcmVBbnN3ZXJzQnV0dG9uXCI6IFwiXzFfajlsajdSdUt6X004QWZlNExoWTZcIixcblx0XCJtb2RhbElucHV0XCI6IFwiXzFKRy1CU1ZTY0E1bEIzUGJrRXFmRS1cIixcblx0XCJidXR0b25zXCI6IFwiXzJRNjhKYzllYUxWRmhtN0RJRjB4V2FcIixcblx0XCJmb290ZXJCdXR0b25cIjogXCJfMW5td2ZQaFZSN3Y1bm5FbkFwdml2YlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1FBLm1vZHVsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==