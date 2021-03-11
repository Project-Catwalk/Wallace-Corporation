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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2VudHlwby9tYWduaWZ5aW5nLWdsYXNzLmpzIiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvQW5zd2VyLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL0Fuc3dlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1FBLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1FBU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1F1ZXN0aW9uLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1F1ZXN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3M/ZWRmNyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsImFuc3dlciIsImJvZHkiLCJhbnN3ZXJlcl9uYW1lIiwiZGF0ZSIsImlkIiwiaGVscGZ1bG5lc3MiLCJwaG90b3MiLCJnZXRQcm9wZXJEYXRlIiwid2VpcmREYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInNwbGl0IiwieWVhciIsInNoaWZ0IiwicHVzaCIsImpvaW4iLCJxYXN0eWxlcyIsImFuc3dlckJvZHkiLCJhbnN3ZXJQaG90b3MiLCJtYXAiLCJwaG90byIsImlkeCIsInVzZXJBbmREYXRlIiwiQW5zd2VyTW9kYWwiLCJvcGVuIiwib25DbG9zZSIsInF1ZXN0aW9uX2lkIiwiZ2V0UXVlc3Rpb25zIiwicHJvZHVjdElkIiwidXNlU3RhdGUiLCJzZXRBbnN3ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInRodW1ibmFpbHMiLCJzZXRUaHVtYm5haWxzIiwic2V0UGhvdG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsImNsZWFyRm9ybSIsImUiLCJ0b0Jhc2U2NCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlckluZm8iLCJuYW1lIiwidGVzdCIsInByb21pc2VzIiwicGF5bG9hZCIsImRhdGEiLCJwcm9taXNlIiwidGhlbiIsImF4aW9zIiwiYWxsIiwicmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3R5bGVzIiwidHJhbnNmb3JtIiwibW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsInZhbHVlIiwiZmluZVByaW50IiwibW9kYWxCdXR0b24iLCJRQSIsImlzT3BlbiIsInNldElzT3BlbiIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImRpc3BsYXllZFF1ZXN0aW9ucyIsInNldERpc3BsYXllZFF1ZXN0aW9ucyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzZWFyY2hpbmciLCJzZXRTZWFyY2hpbmciLCJtb3JlUXVlc3Rpb25zQnV0dG9uIiwic2V0TW9yZVF1ZXN0aW9uc0J1dHRvbiIsInNvcnRRdWVzdGlvbnMiLCJxdWVzdGlvbkFyciIsImNoZWNrZWQiLCJpIiwicXVlc3Rpb25faGVscGZ1bG5lc3MiLCJ0bXAiLCJzb3J0ZWQiLCJ1c2VFZmZlY3QiLCJpbmNyZWFzZU51bU9mUXVlc3Rpb25zIiwic2VhcmNoUXVlc3Rpb25zIiwiZm91bmQiLCJmaWx0ZXIiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX2JvZHkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYm9yZGVyIiwiaGVhZGVyQm94IiwicWFoZWFkZXIiLCJzZWFyY2giLCJxYVNlY3Rpb24iLCJidXR0b25zIiwiUUFTZWFyY2hCYXIiLCJzZWFyY2hCYXJTZWN0aW9uIiwibWFnbmlmeWluZ0dsYXNzIiwiUXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyTGlzdCIsInNldEFuc3dlckxpc3QiLCJkaXNwbGF5ZWRBbnN3ZXJzIiwic2V0RGlzcGxheWVkQW5zd2VycyIsInNlZU1vcmVBbnN3ZXJzVGV4dCIsInNldFNlZU1vcmVBbnN3ZXJzVGV4dCIsInNvcnRBbnN3ZXJzQnlTZWxsZXIiLCJhbnN3ZXJBcnIiLCJzZWxsZXJNZXNzYWdlcyIsIm90aGVyTWVzc2FnZXMiLCJjb25jYXQiLCJzb3J0QW5zd2Vyc0J5SGVscGZ1bG5lc3MiLCJzb3J0ZWRBbnN3ZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic2hvd01vcmVBbnN3ZXJzIiwicXVlc3Rpb25BbmRBbnN3ZXIiLCJxdWVzdGlvbkdyaWQiLCJxIiwicXVlc3Rpb25Cb2R5IiwicXVlc3Rpb25IZWxwZnVsIiwiYW5zd2VyR3JpZCIsImEiLCJRdWVzdGlvbk1vZGFsIiwic2V0UXVlc3Rpb24iLCJxdWVzdGlvbkluZm8iLCJwcm9kdWN0X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFB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c0IsZ0NBQWdDLHFCQUFxQix3QkFBd0IsdUJBQXVCLGdCQUFnQiw0QkFBNEIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsd0JBQXdCLGlEQUFpRCwwQkFBMEIsTUFBTSxtQ0FBbUMsd0JBQXdCLDBCQUEwQixNQUFNLHNDQUFzQyxrQkFBa0Isb0NBQW9DLHVCQUF1QixHQUFHLFFBQVEsdUJBQXVCLDhCQUE4QixHQUFHLGFBQWEsdUJBQXVCLG1CQUFtQixzQkFBc0IsMkJBQTJCLEdBQUcsNEJBQTRCLGdDQUFnQyxHQUFHLHNCQUFzQixLQUFLLHFCQUFxQixvQkFBb0IsOEJBQThCLGtCQUFrQixHQUFHLHNCQUFzQixLQUFLLGVBQWUsa0JBQWtCLHVCQUF1QixHQUFHLG9CQUFvQixtQkFBbUIsa0JBQWtCLEdBQUcsNEJBQTRCLHVCQUF1QixxQkFBcUIsaUJBQWlCLDRCQUE0QixrQkFBa0IsR0FBRyxrQ0FBa0MsbUJBQW1CLEdBQUcsK0JBQStCLGVBQWUsR0FBRyxzQ0FBc0Msb0JBQW9CLHNCQUFzQixzQkFBc0IsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsbUJBQW1CLGlCQUFpQiw0QkFBNEIsR0FBRyxxQkFBcUI7QUFDejdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN3RDtBQUMvRixZQUFrRzs7QUFFbEc7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJeEIsaUVBQWUsK0ZBQWMsTUFBTSxFIiwiZmlsZSI6ImNsaWVudF9zcmNfY29tcG9uZW50c19xYV9RQV9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRhdGEgPSB7XG5cdFwiYm9keVwiOiBcIjxwYXRoIGQ9XFxcIk0xNy41NDUgMTUuNDY3bC0zLjc3OS0zLjc3OWE2LjE1IDYuMTUgMCAwIDAgLjg5OC0zLjIxYzAtMy40MTctMi45NjEtNi4zNzctNi4zNzgtNi4zNzdBNi4xODUgNi4xODUgMCAwIDAgMi4xIDguMjg3YzAgMy40MTYgMi45NjEgNi4zNzcgNi4zNzcgNi4zNzdhNi4xNSA2LjE1IDAgMCAwIDMuMTE1LS44NDRsMy43OTkgMy44MDFhLjk1My45NTMgMCAwIDAgMS4zNDYgMGwuOTQzLS45NDNjLjM3MS0uMzcxLjIzNi0uODQtLjEzNS0xLjIxMXpNNC4wMDQgOC4yODdhNC4yODIgNC4yODIgMCAwIDEgNC4yODItNC4yODNjMi4zNjYgMCA0LjQ3NCAyLjEwNyA0LjQ3NCA0LjQ3NGE0LjI4NCA0LjI4NCAwIDAgMS00LjI4MyA0LjI4M2MtMi4zNjYtLjAwMS00LjQ3My0yLjEwOS00LjQ3My00LjQ3NHpcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPlwiLFxuXHRcIndpZHRoXCI6IDIwLFxuXHRcImhlaWdodFwiOiAyMFxufTtcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbHBmdWwgZnJvbSAnLi4vSGVscGZ1bCc7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcbmltcG9ydCBFeHBhbmRlZFBob3RvcyBmcm9tICcuLi9FeHBhbmRlZFBob3Rvcyc7XG5cbmNvbnN0IEFuc3dlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFuc3dlciB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYm9keSwgYW5zd2VyZXJfbmFtZSwgZGF0ZSwgaWQsIGhlbHBmdWxuZXNzLCBwaG90b3MgfSA9IGFuc3dlcjtcblxuICBjb25zdCBnZXRQcm9wZXJEYXRlID0gKHdlaXJkRGF0ZSkgPT4ge1xuICAgIGxldCBkYXRlQXJyID0gd2VpcmREYXRlLnNsaWNlKDAsIHdlaXJkRGF0ZS5pbmRleE9mKCdUJykpLnNwbGl0KCctJyk7XG4gICAgbGV0IHllYXIgPSBkYXRlQXJyLnNoaWZ0KCk7XG4gICAgZGF0ZUFyci5wdXNoKHllYXIpO1xuICAgIHJldHVybiBkYXRlQXJyLmpvaW4oJy0nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJ9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJCb2R5fSA+e2JvZHl9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlclBob3Rvc30+XG4gICAgICAgIHtwaG90b3MubWFwKChwaG90bywgaWR4KSA9PiA8RXhwYW5kZWRQaG90b3Mga2V5PXtpZHh9IHBob3RvPXtwaG90b30gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3Fhc3R5bGVzLnVzZXJBbmREYXRlfT5ieSB7YW5zd2VyZXJfbmFtZX0sIHtnZXRQcm9wZXJEYXRlKGRhdGUpfTwvcD5cbiAgICAgICAgPEhlbHBmdWwgY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJIZWxwZnVsfSBhbnN3ZXJfaWQ9e2lkfSBoZWxwZnVsbmVzcz17aGVscGZ1bG5lc3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9BcHAubW9kdWxlLmNzcyc7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcbmltcG9ydCBFeHBhbmRlZFBob3RvcyBmcm9tICcuLi9FeHBhbmRlZFBob3Rvcyc7XG5cbmZ1bmN0aW9uIEFuc3dlck1vZGFsKHtvcGVuLCBvbkNsb3NlLCBxdWVzdGlvbl9pZCwgZ2V0UXVlc3Rpb25zLCBwcm9kdWN0SWR9KSB7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RodW1ibmFpbHMsIHNldFRodW1ibmFpbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBSZWdFeHAoXG4gICAgL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaVxuICApO1xuXG4gIGNvbnN0IGNsZWFyRm9ybSA9IChlKSA9PiB7XG4gICAgc2V0QW5zd2VyKCcnKTtcbiAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgc2V0RW1haWwoJycpO1xuICAgIHNldFRodW1ibmFpbHMoW10pO1xuICAgIHNldFBob3RvcyhbXSk7XG4gIH07XG5cbiAgY29uc3QgdG9CYXNlNjQgPSBmaWxlID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFuc3dlckluZm8gPSB7XG4gICAgICBib2R5OiBhbnN3ZXIsXG4gICAgICBuYW1lOiB1c2VybmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBob3RvczogW10sXG4gICAgfTtcblxuICAgIGlmICghdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBzZXRFcnJvcignKllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3QgcGhvdG8gb2YgcGhvdG9zKSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lOiBwaG90by5uYW1lLFxuICAgICAgICBkYXRhOiAnJyxcbiAgICAgIH0gXG5cbiAgICAgIGNvbnN0IHByb21pc2UgPSB0b0Jhc2U2NChwaG90bylcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcGF5bG9hZC5kYXRhID0gcmVzdWx0LnNwbGl0KCcsJylbMV0pXG4gICAgICAgIC50aGVuKCgpID0+IGF4aW9zLnBvc3QoYC91cGxvYWRfaW1hZ2VzYCwgcGF5bG9hZCkpXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtyZXR1cm4gZGF0YX0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgIH1cblxuICBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigocmVzdWx0cykgPT4gYW5zd2VySW5mby5waG90b3MgPSByZXN1bHRzKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KGAvcWEvcXVlc3Rpb25zLyR7cXVlc3Rpb25faWR9L2Fuc3dlcnNgLCBhbnN3ZXJJbmZvKVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZ2V0UXVlc3Rpb25zKDIwMTExKSlcbiAgICAudGhlbigoKSA9PiBjbGVhckZvcm0oKSlcbiAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuXG4gICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgaWYgKHBob3Rvcy5sZW5ndGggPCA1KSB7XG4gICAgICBzZXRQaG90b3MoW1xuICAgICAgICAuLi5waG90b3MsXG4gICAgICAgIGUudGFyZ2V0LmZpbGVzWzBdLFxuICAgICAgXSk7XG4gICAgICBzZXRUaHVtYm5haWxzKFtcbiAgICAgICAgLi4udGh1bWJuYWlscyxcbiAgICAgICAgVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSksXG4gICAgICBdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgfX0gXG4gICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9IFxuICAgICAgPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgLTE1MHZoKSdcbiAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cbiAgICAgICAgICA8aDM+QWRkIGFuIEFuc3dlcjwvaDM+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8cD5Zb3VyIEFuc3dlciAqPC9wPlxuICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtdGVzdGlkPVwiYW5zd2VyLWlucHV0XCIgdmFsdWU9e2Fuc3dlcn0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtzdHlsZXMucUlucHV0fSBtYXhMZW5ndGg9XCIxMDAwXCIgLz5cbiAgICAgICAgICAgIDxwPldoYXQgaXMgeW91ciBuaWNrbmFtZT8gKjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXRlc3RpZD1cImFuc3dlci11c2VybmFtZS1pbnB1dFwiIHZhbHVlPXt1c2VybmFtZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3Fhc3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrNTQzIVwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9Pnt1c2VybmFtZS5sZW5ndGggPiAwID8gJ0ZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzcycgOiAnJ308L3A+XG4gICAgICAgICAgICA8cD5Zb3VyIEVtYWlsICo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS10ZXN0aWQ9XCJhbnN3ZXItZW1haWwtaW5wdXRcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtxYXN0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja0BlbWFpbC5jb21cIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3Bob3Rvcy5sZW5ndGggPCA1ID8gPGlucHV0IGRhdGEtdGVzdGlkPVwiYW5zd2VyLXBob3RvLXVwbG9hZFwiIHZhbHVlPXsnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImZpbGVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIHt0aHVtYm5haWxzLm1hcCgocGhvdG8sIGlkeCkgPT4gPEV4cGFuZGVkUGhvdG9zIGtleT17aWR4fSBwaG90bz17cGhvdG99IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFuc3dlci1tb2RhbC1zdWJtaXQtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnV0dG9ufT5TdWJtaXQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvcn08L3A+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuc3dlck1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcbmltcG9ydCBRQVNlYXJjaEJhciBmcm9tICcuL1FBU2VhcmNoQmFyLmpzeCdcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuL1F1ZXN0aW9uJztcbmltcG9ydCBRdWVzdGlvbk1vZGFsIGZyb20gJy4vUXVlc3Rpb25Nb2RhbCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBRQSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3BsYXllZFF1ZXN0aW9ucywgc2V0RGlzcGxheWVkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hpbmcsIHNldFNlYXJjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb3JlUXVlc3Rpb25zQnV0dG9uLCBzZXRNb3JlUXVlc3Rpb25zQnV0dG9uXSA9IHVzZVN0YXRlKCdNb3JlIEFuc3dlcmVkIFF1ZXN0aW9ucycpO1xuXG4gIGNvbnN0IHNvcnRRdWVzdGlvbnMgPSAocXVlc3Rpb25BcnIpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBxdWVzdGlvbkFyci5sZW5ndGg7XG4gICAgbGV0IGNoZWNrZWQ7XG4gICAgZG8ge1xuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uQXJyW2ldLnF1ZXN0aW9uX2hlbHBmdWxuZXNzIDwgcXVlc3Rpb25BcnJbaSArIDFdLnF1ZXN0aW9uX2hlbHBmdWxuZXNzKSB7XG4gICAgICAgICAgY29uc3QgdG1wID0gcXVlc3Rpb25BcnJbaV07XG4gICAgICAgICAgcXVlc3Rpb25BcnJbaV0gPSBxdWVzdGlvbkFycltpICsgMV07XG4gICAgICAgICAgcXVlc3Rpb25BcnJbaSArIDFdID0gdG1wO1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB3aGlsZSAoY2hlY2tlZCk7XG4gICAgcmV0dXJuIHF1ZXN0aW9uQXJyO1xuICB9O1xuXG4gIGNvbnN0IGdldFF1ZXN0aW9ucyA9IChpZCkgPT4ge1xuICAgIGF4aW9zLmdldChgL3FhL3F1ZXN0aW9ucy8ke2lkfWApXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ZWQgPSBzb3J0UXVlc3Rpb25zKHJlc3VsdHMuZGF0YSk7XG4gICAgICAgIHNldFF1ZXN0aW9ucyhzb3J0ZWQpO1xuICAgICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMoc29ydGVkLnNsaWNlKDAsIDQpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UXVlc3Rpb25zKDIwMTExKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMocXVlc3Rpb25zKTtcbiAgICAgIHNldE1vcmVRdWVzdGlvbnNCdXR0b24oJ1Nob3cgTGVzcyBRdWVzdGlvbnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHF1ZXN0aW9ucy5zbGljZSgwLCA0KSk7XG4gICAgICBzZXRNb3JlUXVlc3Rpb25zQnV0dG9uKCdNb3JlIEFuc3dlcmVkIFF1ZXN0aW9ucycpO1xuICAgIH1cbiAgfSwgW2V4cGFuZGVkXSk7XG5cbiAgY29uc3QgaW5jcmVhc2VOdW1PZlF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFF1ZXN0aW9ucyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gMykge1xuICAgICAgc2V0U2VhcmNoaW5nKHRydWUpO1xuICAgICAgY29uc3QgZm91bmQgPSBxdWVzdGlvbnMuZmlsdGVyKHF1ZXN0aW9uID0+IHF1ZXN0aW9uLnF1ZXN0aW9uX2JvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMoZm91bmQpO1xuICAgIH0gZWxzZSBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMocXVlc3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgIHNldERpc3BsYXllZFF1ZXN0aW9ucyhxdWVzdGlvbnMuc2xpY2UoMCwgMikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5ib3JkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmhlYWRlckJveH0+XG4gICAgICAgIDxoMiBkYXRhLXRlc3RpZD1cInFhLWhlYWRpbmdcIiBjbGFzc05hbWU9e3Fhc3R5bGVzLnFhaGVhZGVyfT5RdWVzdGlvbnMgJiBBbnN3ZXJzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxRQVNlYXJjaEJhciBzZWFyY2hRdWVzdGlvbnM9e3NlYXJjaFF1ZXN0aW9uc30gLz5cbiAgICAgICAge3F1ZXN0aW9ucy5sZW5ndGggPT09IDAgPyA8YnV0dG9uIGRhdGEtdGVzdGlkPVwiYWRkLWEtcXVlc3Rpb24tYnV0dG9uXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5mb290ZXJCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+QWRkIEEgUXVlc3Rpb24gKyA8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucWFTZWN0aW9ufT5cbiAgICAgICAge2Rpc3BsYXllZFF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpZHgpID0+IDxRdWVzdGlvbiBrZXk9e2lkeH0gcHJvZHVjdElkPXtwcm9kdWN0SWR9IGdldFF1ZXN0aW9ucz17Z2V0UXVlc3Rpb25zfSBxdWVzdGlvbj17cXVlc3Rpb259IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICB7c2VhcmNoaW5nID8gbnVsbCA6IDxidXR0b24gZGF0YS10ZXN0aWQ9XCJzaG93LW1vcmUtcXVlc3Rpb25zLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXtpbmNyZWFzZU51bU9mUXVlc3Rpb25zfSA+e21vcmVRdWVzdGlvbnNCdXR0b259PC9idXR0b24+fVxuICAgICAgICB7cXVlc3Rpb25zLmxlbmd0aCA+IDAgPyA8YnV0dG9uIGRhdGEtdGVzdGlkPVwiYWRkLWEtcXVlc3Rpb24tYnV0dG9uXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5mb290ZXJCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+QWRkIEEgUXVlc3Rpb24gKyA8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPFF1ZXN0aW9uTW9kYWwgcHJvZHVjdElkPXtwcm9kdWN0SWR9IGdldFF1ZXN0aW9ucz17Z2V0UXVlc3Rpb25zfSBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSBvcGVuPXtpc09wZW59PjwvUXVlc3Rpb25Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUUE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxYXN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3MnO1xuaW1wb3J0IHsgSWNvbiwgSW5saW5lSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3MgZnJvbSAnQGljb25pZnktaWNvbnMvZW50eXBvL21hZ25pZnlpbmctZ2xhc3MnO1xuXG5jb25zdCBRQVNlYXJjaEJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2VhcmNoUXVlc3Rpb25zfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5zZWFyY2hCYXJTZWN0aW9ufT5cbiAgICAgICAgPEljb24gY2xhc3NOYW1lPXtxYXN0eWxlcy5tYWduaWZ5aW5nR2xhc3N9IGljb249e21hZ25pZnlpbmdHbGFzc30gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2VhcmNoUXVlc3Rpb25zKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3Fhc3R5bGVzLnNlYXJjaEJhcn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBRdWVzdGlvbnMuLi5cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRQVNlYXJjaEJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuc3dlciBmcm9tICcuL0Fuc3dlcic7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcbmltcG9ydCBIZWxwZnVsIGZyb20gJy4uL0hlbHBmdWwnO1xuaW1wb3J0IEFuc3dlck1vZGFsIGZyb20gJy4vQW5zd2VyTW9kYWwnO1xuXG5jb25zdCBRdWVzdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXN0aW9uLCBnZXRRdWVzdGlvbnMsIHByb2R1Y3RJZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcXVlc3Rpb25fYm9keSwgYW5zd2VycywgcXVlc3Rpb25faWQsIHF1ZXN0aW9uX2hlbHBmdWxuZXNzIH0gPSBxdWVzdGlvbjtcbiAgY29uc3QgW2Fuc3dlckxpc3QsIHNldEFuc3dlckxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGlzcGxheWVkQW5zd2Vycywgc2V0RGlzcGxheWVkQW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VlTW9yZUFuc3dlcnNUZXh0LCBzZXRTZWVNb3JlQW5zd2Vyc1RleHRdID0gdXNlU3RhdGUoJ1NlZSBNb3JlIEFuc3dlcnMnKVxuXG4gIGNvbnN0IHNvcnRBbnN3ZXJzQnlTZWxsZXIgPSAoYW5zd2VyQXJyKSA9PiB7XG4gICAgbGV0IHNlbGxlck1lc3NhZ2VzID0gYW5zd2VyQXJyLmZpbHRlcihhbnN3ZXIgPT4gYW5zd2VyLmFuc3dlcmVyX25hbWUgPT09ICdTZWxsZXInKTtcbiAgICBsZXQgb3RoZXJNZXNzYWdlcyA9IGFuc3dlckFyci5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5hbnN3ZXJlcl9uYW1lICE9PSAnU2VsbGVyJyk7XG4gICAgcmV0dXJuIHNlbGxlck1lc3NhZ2VzLmNvbmNhdChvdGhlck1lc3NhZ2VzKTtcbiAgfTtcblxuICBjb25zdCBzb3J0QW5zd2Vyc0J5SGVscGZ1bG5lc3MgPSAoYW5zd2VyQXJyKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gYW5zd2VyQXJyLmxlbmd0aDtcbiAgICBsZXQgY2hlY2tlZDtcbiAgICBkbyB7XG4gICAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoYW5zd2VyQXJyW2ldLmhlbHBmdWxuZXNzIDwgYW5zd2VyQXJyW2kgKyAxXS5oZWxwZnVsbmVzcykge1xuICAgICAgICAgIGNvbnN0IHRtcCA9IGFuc3dlckFycltpXTtcbiAgICAgICAgICBhbnN3ZXJBcnJbaV0gPSBhbnN3ZXJBcnJbaSArIDFdO1xuICAgICAgICAgIGFuc3dlckFycltpICsgMV0gPSB0bXA7XG4gICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlIChjaGVja2VkKTtcbiAgICByZXR1cm4gc29ydEFuc3dlcnNCeVNlbGxlcihhbnN3ZXJBcnIpO1xuICB9O1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBbnN3ZXJzID0gc29ydEFuc3dlcnNCeUhlbHBmdWxuZXNzKE9iamVjdC52YWx1ZXMoYW5zd2VycykpO1xuICAgIHNldEFuc3dlckxpc3Qoc29ydGVkQW5zd2Vycyk7XG4gIH0sIFtxdWVzdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGlzcGxheWVkQW5zd2VycyhhbnN3ZXJMaXN0LnNsaWNlKDAsIDIpKTtcbiAgfSwgW2Fuc3dlckxpc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgc2V0RGlzcGxheWVkQW5zd2VycyhhbnN3ZXJMaXN0KTtcbiAgICAgIHNldFNlZU1vcmVBbnN3ZXJzVGV4dCgnQ29sbGFwc2UgQW5zd2VycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREaXNwbGF5ZWRBbnN3ZXJzKGFuc3dlckxpc3Quc2xpY2UoMCwgMikpO1xuICAgICAgc2V0U2VlTW9yZUFuc3dlcnNUZXh0KCdTZWUgTW9yZSBBbnN3ZXJzJyk7XG4gICAgfVxuICB9LCBbZXhwYW5kZWRdKTtcblxuICBjb25zdCBzaG93TW9yZUFuc3dlcnMgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5xdWVzdGlvbkFuZEFuc3dlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb25HcmlkfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17cWFzdHlsZXMucX0+UTo8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb259PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb25Cb2R5fSA+e3F1ZXN0aW9uX2JvZHl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnF1ZXN0aW9uSGVscGZ1bH0+XG4gICAgICAgICAgPEhlbHBmdWwgcXVlc3Rpb25faWQ9e3F1ZXN0aW9uX2lkfSBoZWxwZnVsbmVzcz17cXVlc3Rpb25faGVscGZ1bG5lc3N9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFkZC1hbnN3ZXItYnV0dG9uXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5hZGRBbnN3ZXJCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0gdHlwZT1cImJ1dHRvblwiPkFkZCBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJNb2RhbCBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH0gZ2V0UXVlc3Rpb25zPXtnZXRRdWVzdGlvbnN9IHF1ZXN0aW9uX2lkPXtxdWVzdGlvbl9pZH0gb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gb3Blbj17aXNPcGVufT48L0Fuc3dlck1vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VyR3JpZH0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e3Fhc3R5bGVzLmF9PkE6PC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlckxpc3R9PlxuICAgICAgICAgIHtkaXNwbGF5ZWRBbnN3ZXJzLm1hcCgoYW5zd2VyLCBpZHgpID0+IDxBbnN3ZXIga2V5PXtpZHh9IGFuc3dlcj17YW5zd2VyfSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YW5zd2VyTGlzdC5sZW5ndGggPiAyID8gPGJ1dHRvbiBkYXRhLXRlc3RpZD1cInNob3ctbW9yZS1hbnN3ZXJzLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuc2hvd01vcmVBbnN3ZXJzQnV0dG9ufSBvbkNsaWNrPXtzaG93TW9yZUFuc3dlcnN9PntzZWVNb3JlQW5zd2Vyc1RleHR9PC9idXR0b24+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9BcHAubW9kdWxlLmNzcyc7XG5pbXBvcnQgcWFzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzJztcblxuZnVuY3Rpb24gUXVlc3Rpb25Nb2RhbCh7IG9wZW4sIG9uQ2xvc2UsIGdldFF1ZXN0aW9ucywgcHJvZHVjdElkIH0pIHtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgIC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2lcbiAgKTtcblxuICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgc2V0UXVlc3Rpb24oJycpO1xuICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICBzZXRFbWFpbCgnJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHF1ZXN0aW9uSW5mbyA9IHtcbiAgICAgIGJvZHk6IHF1ZXN0aW9uLFxuICAgICAgbmFtZTogdXNlcm5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgfTtcbiAgICBpZiAoIXZhbGlkRW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgc2V0RXJyb3IoJypZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF4aW9zLnBvc3QoJy9xYS9xdWVzdGlvbnMnLCBxdWVzdGlvbkluZm8pXG4gICAgICAudGhlbigoKSA9PiBnZXRRdWVzdGlvbnMoMjAxMTEpKVxuICAgICAgLnRoZW4oKCkgPT4gY2xlYXJGb3JtKCkpXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgfX0gXG4gICAgICAgIGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tb3ZlcmxheVwiXG4gICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9XG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgLTE1MHZoKSdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGgzPkFzayBZb3VyIFF1ZXN0aW9uIGFib3V0IHRoZSBQcm9kdWN0PC9oMz5cbiAgICAgICAgICA8cCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb2R5fT5cbiAgICAgICAgICA8Zm9ybSBpZD1cInF1ZXN0aW9uRm9ybVwiIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxwPlF1ZXN0aW9uICo8L3A+XG4gICAgICAgICAgICA8dGV4dGFyZWEgZGF0YS10ZXN0aWQ9XCJxdWVzdGlvbi1pbnB1dFwiIHZhbHVlPXtxdWVzdGlvbn0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfSBtYXhMZW5ndGg9XCIxMDAwXCIgY2xhc3NOYW1lPXtzdHlsZXMucUlucHV0fSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8cD5XaGF0IGlzIHlvdXIgbmlja25hbWU/ICo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS10ZXN0aWQ9XCJxdWVzdGlvbi11c2VybmFtZS1pbnB1dFwiIHZhbHVlPXt1c2VybmFtZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3Fhc3R5bGVzLm1vZGFsSW5wdXR9IG1heExlbmd0aD1cIjYwXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlOiBqYWNrc29uMTEhXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57dXNlcm5hbWUubGVuZ3RoID4gMCA/ICdGb3IgcHJpdmFjeSByZWFzb25zLCBkbyBub3QgdXNlIHlvdXIgZnVsbCBuYW1lIG9yIGVtYWlsIGFkZHJlc3MnIDogJyd9PC9wPlxuICAgICAgICAgICAgPHA+WW91ciBFbWFpbCAqPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tZW1haWwtaW5wdXRcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGU6IGphY2tzb24xMSFAZ21haWwuY29tXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17cWFzdHlsZXMubW9kYWxJbnB1dH0gbWF4TGVuZ3RoPVwiNjBcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlbWFpbC5sZW5ndGggPiAwID8gJ0ZvciBhdXRoZW50aWNhdGlvbiByZWFzb25zLCB5b3Ugd2lsbCBub3QgYmUgZW1haWxlZCcgOiAnJ308L3A+XG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tbW9kYWwtc3VibWl0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ1dHRvbn0+U3VibWl0IFF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvcn08L3A+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbk1vZGFsO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuXzM4X1ZYRzEwTWp1LU9kMTREZmcxVWMge1xcbiAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmF5IDFweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHBhZGRpbmctdG9wOiAzJTtcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4vKiBIRUFESU5HICYgU0VBUkNIICovXFxuXFxuLl8zTElZN19OdVpZY0lwOVhiYl9CUnNNIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xcbiAgLyogbWFyZ2luOiAwOyAqL1xcbiAgLyogbWFyZ2luLXRvcDogMjAlOyAqL1xcbn1cXG5cXG4ubVREYnpRMWllUXl6eFVlMnJMdWZmIHtcXG4gIFxcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjhiZWI5LCB3aGl0ZSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiZWI5N2U7XFxuICBtYXJnaW4tbGVmdDogLTEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLl8zZGlDX2dRaG1DN0N1cEZ4ampIOWJvIHtcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLl8xWnB5dzYySWVLbTY0ZDV5X1FqWU1vIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgdGhpbjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLl8yZGZHZ083eE44R2xzVk53V19HZzJMIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBsaW5lLWhlaWdodDogMjAlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBRICYgQSAqL1xcbi5waTc0cnpsMHBIZXpGbGh0R0hFWXoge1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4vKiBRICYgQSBHUklEICovXFxuLl8zWm83MUJPRmVLdVNnMjdkNXp2NDdiIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDEwZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uXzF0dGlMODVuQ2hvZm4tOWM4ZW1PVUQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uXzI4ejBxdHhHUUk0OTFtVmFXNFBfYTAge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uXzNlU2ZjeDdYbnVOUkRjOUtQbVlNSHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5fM0N2QUpXZEphcTQ3SUR1V2tRRGdNdCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cXG4gIHdpZHRoOiAxMDAlXFxufVxcblxcbi5fMzlxN3B2blcyY1RISWtIZWY2Z0JEUCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5fMzlxN3B2blcyY1RISWtIZWY2Z0JEUDpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuXFxuLl8zOVpKd2ZhT21fZjlLMUx3dnFhRHFHIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgLyogbWFyZ2luLXJpZ2h0OiAxNXB4OyAqL1xcbn1cXG5cXG4uXzM5Wkp3ZmFPbV9mOUsxTHd2cWFEcUc6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogbWFyZ2luLXJpZ2h0OiAxNXB4OyAqL1xcbn1cXG5cXG4vKiBBTlNXRVIgR1JJRCAqL1xcblxcbi5fMmYxV1laaXk3WEJZcUdJNFYzYzhCTyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBmcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLl8za1JaSTNjd1hsX0g2eXp1WF9hSVJuIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC4yZW07XFxufVxcblxcbi5fM2VyTGswS3FNSk1BbUs4SVNscVVKbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgcGFkZGluZzogMWVtIDAgMWVtIDFlbTtcXG59XFxuXFxuLl8zZXJMazBLcU1KTUFtSzhJU2xxVUpuOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2ViZWI0YjtcXG59XFxuXFxuXFxuLyogLmFuc3dlckJvZHkge1xcblxcbn0gKi9cXG5cXG4uS2dvQlE2MEVKT1NUOUFON3VyOHlSIHtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGNvbG9yOiByZ2IoMTI4LCAxMjcsIDEyNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiAuYW5zd2VyUGhvdG9zIHtcXG5cXG59ICovXFxuXFxuLklVS2tGXy1GYnppS2dqTE9sbmVGYiB7XFxuICBtYXJnaW46IC43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uXzFibmg5dWQyd1ZnZXhDVDAydEVBbDIge1xcbiAgZm9udC1zaXplOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uXzFfajlsajdSdUt6X004QWZlNExoWTYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLl8xX2o5bGo3UnVLel9NOEFmZTRMaFk2OmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG4vKiBNT0RBTFMgKi9cXG5cXG4uXzFKRy1CU1ZTY0E1bEIzUGJrRXFmRS0ge1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLyogRk9PVEVSICYgQlVUVE9OUyAqL1xcbi5fMlE2OEpjOWVhTFZGaG03RElGMHhXYSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBncmlkLXJvdy1zdGFydDogMztcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4uXzFubXdmUGhWUjd2NW5uRW5BcHZpdmI6aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5fMW5td2ZQaFZSN3Y1bm5FbkFwdml2YiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY2xpZW50L3NyYy9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSwyREFBMkQ7RUFDM0QsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQjtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7O0FBR0E7O0dBRUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxXQUFXOztBQUVYO0VBQ0UsVUFBVTtBQUNaOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvcmRlciB7XFxuICBib3JkZXItdG9wOiBzb2xpZCBsaWdodGdyYXkgMXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmF5IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgcGFkZGluZy10b3A6IDMlO1xcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxufVxcblxcbi8qIEhFQURJTkcgJiBTRUFSQ0ggKi9cXG5cXG4ucWFoZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7XFxuICAvKiBtYXJnaW46IDA7ICovXFxuICAvKiBtYXJnaW4tdG9wOiAyMCU7ICovXFxufVxcblxcbi5oZWFkZXJCb3gge1xcbiAgXFxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOGJlYjksIHdoaXRlKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGJlYjk3ZTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4ubWFnbmlmeWluZ0dsYXNzIHtcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnNlYXJjaEJhclNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgZ3JleSB0aGluO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBsaW5lLWhlaWdodDogMjAlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBRICYgQSAqL1xcbi5xYVNlY3Rpb24ge1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4vKiBRICYgQSBHUklEICovXFxuLnF1ZXN0aW9uR3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxMGZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnEge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ucXVlc3Rpb25Cb2R5IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucXVlc3Rpb25IZWxwZnVsIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICAvKiBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xcbiAgd2lkdGg6IDEwMCVcXG59XFxuXFxuLmFkZEFuc3dlckJ1dHRvbiB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hZGRBbnN3ZXJCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5xdWVzdGlvbkFuZEFuc3dlciB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAuNXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLnF1ZXN0aW9uQW5kQW5zd2VyOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLyogQU5TV0VSIEdSSUQgKi9cXG5cXG4uYW5zd2VyR3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjBmcjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmEge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjJlbTtcXG59XFxuXFxuLmFuc3dlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgcGFkZGluZzogMWVtIDAgMWVtIDFlbTtcXG59XFxuXFxuLmFuc3dlcjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlYmViNGI7XFxufVxcblxcblxcbi8qIC5hbnN3ZXJCb2R5IHtcXG5cXG59ICovXFxuXFxuLnVzZXJBbmREYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGNvbG9yOiByZ2IoMTI4LCAxMjcsIDEyNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiAuYW5zd2VyUGhvdG9zIHtcXG5cXG59ICovXFxuXFxuLnBob3RvIHtcXG4gIG1hcmdpbjogLjc1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5hbnN3ZXJIZWxwZnVsIHtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNob3dNb3JlQW5zd2Vyc0J1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2hvd01vcmVBbnN3ZXJzQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG4vKiBNT0RBTFMgKi9cXG5cXG4ubW9kYWxJbnB1dCB7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4vKiBGT09URVIgJiBCVVRUT05TICovXFxuLmJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLmZvb3RlckJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuXFxuLmZvb3RlckJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYm9yZGVyXCI6IFwiXzM4X1ZYRzEwTWp1LU9kMTREZmcxVWNcIixcblx0XCJxYWhlYWRlclwiOiBcIl8zTElZN19OdVpZY0lwOVhiYl9CUnNNXCIsXG5cdFwiaGVhZGVyQm94XCI6IFwibVREYnpRMWllUXl6eFVlMnJMdWZmXCIsXG5cdFwibWFnbmlmeWluZ0dsYXNzXCI6IFwiXzNkaUNfZ1FobUM3Q3VwRnhqakg5Ym9cIixcblx0XCJzZWFyY2hCYXJTZWN0aW9uXCI6IFwiXzFacHl3NjJJZUttNjRkNXlfUWpZTW9cIixcblx0XCJzZWFyY2hCYXJcIjogXCJfMmRmR2dPN3hOOEdsc1ZOd1dfR2cyTFwiLFxuXHRcInFhU2VjdGlvblwiOiBcInBpNzRyemwwcEhlekZsaHRHSEVZelwiLFxuXHRcInF1ZXN0aW9uR3JpZFwiOiBcIl8zWm83MUJPRmVLdVNnMjdkNXp2NDdiXCIsXG5cdFwicVwiOiBcIl8xdHRpTDg1bkNob2ZuLTljOGVtT1VEXCIsXG5cdFwicXVlc3Rpb25cIjogXCJfMjh6MHF0eEdRSTQ5MW1WYVc0UF9hMFwiLFxuXHRcInF1ZXN0aW9uQm9keVwiOiBcIl8zZVNmY3g3WG51TlJEYzlLUG1ZTUhzXCIsXG5cdFwicXVlc3Rpb25IZWxwZnVsXCI6IFwiXzNDdkFKV2RKYXE0N0lEdVdrUURnTXRcIixcblx0XCJhZGRBbnN3ZXJCdXR0b25cIjogXCJfMzlxN3B2blcyY1RISWtIZWY2Z0JEUFwiLFxuXHRcInF1ZXN0aW9uQW5kQW5zd2VyXCI6IFwiXzM5Wkp3ZmFPbV9mOUsxTHd2cWFEcUdcIixcblx0XCJhbnN3ZXJHcmlkXCI6IFwiXzJmMVdZWml5N1hCWXFHSTRWM2M4Qk9cIixcblx0XCJhXCI6IFwiXzNrUlpJM2N3WGxfSDZ5enVYX2FJUm5cIixcblx0XCJhbnN3ZXJcIjogXCJfM2VyTGswS3FNSk1BbUs4SVNscVVKblwiLFxuXHRcInVzZXJBbmREYXRlXCI6IFwiS2dvQlE2MEVKT1NUOUFON3VyOHlSXCIsXG5cdFwicGhvdG9cIjogXCJJVUtrRl8tRmJ6aUtnakxPbG5lRmJcIixcblx0XCJhbnN3ZXJIZWxwZnVsXCI6IFwiXzFibmg5dWQyd1ZnZXhDVDAydEVBbDJcIixcblx0XCJzaG93TW9yZUFuc3dlcnNCdXR0b25cIjogXCJfMV9qOWxqN1J1S3pfTThBZmU0TGhZNlwiLFxuXHRcIm1vZGFsSW5wdXRcIjogXCJfMUpHLUJTVlNjQTVsQjNQYmtFcWZFLVwiLFxuXHRcImJ1dHRvbnNcIjogXCJfMlE2OEpjOWVhTFZGaG03RElGMHhXYVwiLFxuXHRcImZvb3RlckJ1dHRvblwiOiBcIl8xbm13ZlBoVlI3djVubkVuQXB2aXZiXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUUEubW9kdWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9