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
  }, "by", answerer_name, ",", getProperDate(date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpful__WEBPACK_IMPORTED_MODULE_1__.default, {
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
    value: "",
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
    type: "submit",
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
    type: "submit",
    "data-testid": "show-more-questions-button",
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_1__.default.footerButton,
    onClick: increaseNumOfQuestions
  }, moreQuestionsButton), questions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
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
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_icons_entypo_magnifying_glass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify-icons/entypo/magnifying-glass */ "./node_modules/@iconify-icons/entypo/magnifying-glass.js");
/* harmony import */ var _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styleComponents/QA.modules.css */ "./client/src/styleComponents/QA.modules.css");





var QASearchBar = function QASearchBar(props) {
  var searchQuestions = props.searchQuestions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__.default.searchBarSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__.default.magnifyingGlass,
    icon: _iconify_icons_entypo_magnifying_glass__WEBPACK_IMPORTED_MODULE_2__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    "data-testid": "search-input",
    type: "search",
    onChange: function onChange(e) {
      return searchQuestions(e.target.value);
    },
    className: _styleComponents_QA_modules_css__WEBPACK_IMPORTED_MODULE_3__.default.searchBar,
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
    type: "button",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vbm9kZV9tb2R1bGVzL0BpY29uaWZ5LWljb25zL2VudHlwby9tYWduaWZ5aW5nLWdsYXNzLmpzIiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcWEvQW5zd2VyLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL0Fuc3dlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1FBLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1FBU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1F1ZXN0aW9uLmpzeCIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3FhL1F1ZXN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovL3dhbGxhY2UtY29ycG9yYXRpb24vLi9jbGllbnQvc3JjL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyIsIndlYnBhY2s6Ly93YWxsYWNlLWNvcnBvcmF0aW9uLy4vY2xpZW50L3NyYy9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3M/ZWRmNyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsImFuc3dlciIsImJvZHkiLCJhbnN3ZXJlcl9uYW1lIiwiZGF0ZSIsImlkIiwiaGVscGZ1bG5lc3MiLCJwaG90b3MiLCJnZXRQcm9wZXJEYXRlIiwid2VpcmREYXRlIiwiZGF0ZUFyciIsInNsaWNlIiwiaW5kZXhPZiIsInNwbGl0IiwieWVhciIsInNoaWZ0IiwicHVzaCIsImpvaW4iLCJxYXN0eWxlcyIsImFuc3dlckJvZHkiLCJhbnN3ZXJQaG90b3MiLCJtYXAiLCJwaG90byIsImlkeCIsInVzZXJBbmREYXRlIiwiQW5zd2VyTW9kYWwiLCJvcGVuIiwib25DbG9zZSIsInF1ZXN0aW9uX2lkIiwiZ2V0UXVlc3Rpb25zIiwicHJvZHVjdElkIiwidXNlU3RhdGUiLCJzZXRBbnN3ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInRodW1ibmFpbHMiLCJzZXRUaHVtYm5haWxzIiwic2V0UGhvdG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsInZhbGlkRW1haWxSZWdleCIsIlJlZ0V4cCIsImNsZWFyRm9ybSIsImUiLCJ0b0Jhc2U2NCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlckluZm8iLCJuYW1lIiwidGVzdCIsInByb21pc2VzIiwicGF5bG9hZCIsImRhdGEiLCJwcm9taXNlIiwidGhlbiIsImF4aW9zIiwiYWxsIiwicmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3R5bGVzIiwidHJhbnNmb3JtIiwibW9kYWwiLCJtb2RhbEhlYWRlciIsIm1vZGFsQm9keSIsInZhbHVlIiwiZmluZVByaW50IiwibW9kYWxCdXR0b24iLCJRQSIsImlzT3BlbiIsInNldElzT3BlbiIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImRpc3BsYXllZFF1ZXN0aW9ucyIsInNldERpc3BsYXllZFF1ZXN0aW9ucyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJzZWFyY2hpbmciLCJzZXRTZWFyY2hpbmciLCJtb3JlUXVlc3Rpb25zQnV0dG9uIiwic2V0TW9yZVF1ZXN0aW9uc0J1dHRvbiIsInNvcnRRdWVzdGlvbnMiLCJxdWVzdGlvbkFyciIsImNoZWNrZWQiLCJpIiwicXVlc3Rpb25faGVscGZ1bG5lc3MiLCJ0bXAiLCJzb3J0ZWQiLCJ1c2VFZmZlY3QiLCJpbmNyZWFzZU51bU9mUXVlc3Rpb25zIiwic2VhcmNoUXVlc3Rpb25zIiwiZm91bmQiLCJmaWx0ZXIiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX2JvZHkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYm9yZGVyIiwiaGVhZGVyQm94IiwicWFoZWFkZXIiLCJzZWFyY2giLCJxYVNlY3Rpb24iLCJidXR0b25zIiwiUUFTZWFyY2hCYXIiLCJzZWFyY2hCYXJTZWN0aW9uIiwibWFnbmlmeWluZ0dsYXNzIiwiUXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyTGlzdCIsInNldEFuc3dlckxpc3QiLCJkaXNwbGF5ZWRBbnN3ZXJzIiwic2V0RGlzcGxheWVkQW5zd2VycyIsInNlZU1vcmVBbnN3ZXJzVGV4dCIsInNldFNlZU1vcmVBbnN3ZXJzVGV4dCIsInNvcnRBbnN3ZXJzQnlTZWxsZXIiLCJhbnN3ZXJBcnIiLCJzZWxsZXJNZXNzYWdlcyIsIm90aGVyTWVzc2FnZXMiLCJjb25jYXQiLCJzb3J0QW5zd2Vyc0J5SGVscGZ1bG5lc3MiLCJzb3J0ZWRBbnN3ZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic2hvd01vcmVBbnN3ZXJzIiwicXVlc3Rpb25BbmRBbnN3ZXIiLCJxdWVzdGlvbkdyaWQiLCJxIiwicXVlc3Rpb25Cb2R5IiwicXVlc3Rpb25IZWxwZnVsIiwiYW5zd2VyR3JpZCIsImEiLCJRdWVzdGlvbk1vZGFsIiwic2V0UXVlc3Rpb24iLCJxdWVzdGlvbkluZm8iLCJwcm9kdWN0X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDaEJDLE1BRGdCLEdBQ0xELEtBREssQ0FDaEJDLE1BRGdCO0FBQUEsTUFFaEJDLElBRmdCLEdBRXVDRCxNQUZ2QyxDQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxhQUZVLEdBRXVDRixNQUZ2QyxDQUVWRSxhQUZVO0FBQUEsTUFFS0MsSUFGTCxHQUV1Q0gsTUFGdkMsQ0FFS0csSUFGTDtBQUFBLE1BRVdDLEVBRlgsR0FFdUNKLE1BRnZDLENBRVdJLEVBRlg7QUFBQSxNQUVlQyxXQUZmLEdBRXVDTCxNQUZ2QyxDQUVlSyxXQUZmO0FBQUEsTUFFNEJDLE1BRjVCLEdBRXVDTixNQUZ2QyxDQUU0Qk0sTUFGNUI7O0FBSXhCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ25DLFFBQUlDLE9BQU8sR0FBR0QsU0FBUyxDQUFDRSxLQUFWLENBQWdCLENBQWhCLEVBQW1CRixTQUFTLENBQUNHLE9BQVYsQ0FBa0IsR0FBbEIsQ0FBbkIsRUFBMkNDLEtBQTNDLENBQWlELEdBQWpELENBQWQ7QUFDQSxRQUFJQyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0ssS0FBUixFQUFYO0FBQ0FMLFdBQU8sQ0FBQ00sSUFBUixDQUFhRixJQUFiO0FBQ0EsV0FBT0osT0FBTyxDQUFDTyxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMkVBQWVqQjtBQUEvQixrQkFDRTtBQUFNLGFBQVMsRUFBRWlCLCtFQUFtQkM7QUFBcEMsS0FBd0NqQixJQUF4QyxDQURGLGVBRUU7QUFBSyxhQUFTLEVBQUVnQixpRkFBcUJFO0FBQXJDLEtBQ0diLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLHdCQUFnQixpREFBQyxvREFBRDtBQUFnQixTQUFHLEVBQUVBLEdBQXJCO0FBQTBCLFdBQUssRUFBRUQ7QUFBakMsTUFBaEI7QUFBQSxHQUFYLENBREgsQ0FGRixlQUtFLDJFQUNFO0FBQUcsYUFBUyxFQUFFSixnRkFBb0JNO0FBQWxDLFdBRUdyQixhQUZILE9BSUdLLGFBQWEsQ0FBQ0osSUFBRCxDQUpoQixDQURGLGVBT0UsaURBQUMsNkNBQUQ7QUFBUyxhQUFTLEVBQUVjLGtGQUFwQjtBQUE0QyxhQUFTLEVBQUViLEVBQXZEO0FBQTJELGVBQVcsRUFBRUM7QUFBeEUsSUFQRixDQUxGLENBREY7QUFpQkQsQ0E1QkQ7O0FBOEJBLGlFQUFlUCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTMEIsV0FBVCxPQUE0RTtBQUFBLE1BQXREQyxJQUFzRCxRQUF0REEsSUFBc0Q7QUFBQSxNQUFoREMsT0FBZ0QsUUFBaERBLE9BQWdEO0FBQUEsTUFBdkNDLFdBQXVDLFFBQXZDQSxXQUF1QztBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0FBQUEsa0JBQzlDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0M7QUFBQTtBQUFBLE1BQ25FOUIsTUFEbUU7QUFBQSxNQUMzRCtCLFNBRDJEOztBQUFBLG1CQUUxQ0QsK0NBQVEsQ0FBQyxFQUFELENBRmtDO0FBQUE7QUFBQSxNQUVuRUUsUUFGbUU7QUFBQSxNQUV6REMsV0FGeUQ7O0FBQUEsbUJBR2hESCwrQ0FBUSxDQUFDLEVBQUQsQ0FId0M7QUFBQTtBQUFBLE1BR25FSSxLQUhtRTtBQUFBLE1BRzVEQyxRQUg0RDs7QUFBQSxtQkFJdENMLCtDQUFRLENBQUMsRUFBRCxDQUo4QjtBQUFBO0FBQUEsTUFJbkVNLFVBSm1FO0FBQUEsTUFJdkRDLGFBSnVEOztBQUFBLG1CQUs5Q1AsK0NBQVEsQ0FBQyxFQUFELENBTHNDO0FBQUE7QUFBQSxNQUtuRXhCLE1BTG1FO0FBQUEsTUFLM0RnQyxTQUwyRDs7QUFBQSxvQkFNaERSLCtDQUFRLENBQUMsRUFBRCxDQU53QztBQUFBO0FBQUEsTUFNbkVTLEtBTm1FO0FBQUEsTUFNNURDLFFBTjREOztBQVExRSxNQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FDNUIsd0hBRDRCLENBQTlCOztBQUlBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QmIsYUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBRSxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsaUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDQUMsYUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNELEdBTkQ7O0FBUUEsTUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFdBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMxREMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxVQUFNTSxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFlBQU0sQ0FBQ0UsYUFBUCxDQUFxQlIsSUFBckI7O0FBQ0FNLFlBQU0sQ0FBQ0csTUFBUCxHQUFnQjtBQUFBLGVBQU1QLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDSSxNQUFSLENBQWI7QUFBQSxPQUFoQjs7QUFDQUosWUFBTSxDQUFDSyxPQUFQLEdBQWlCLFVBQUFsQixLQUFLO0FBQUEsZUFBSVUsTUFBTSxDQUFDVixLQUFELENBQVY7QUFBQSxPQUF0QjtBQUNELEtBTjBCLENBQVY7QUFBQSxHQUFqQjs7QUFRQSxNQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNlLGNBQUY7QUFDQSxRQUFJQyxVQUFVLEdBQUc7QUFDZjNELFVBQUksRUFBRUQsTUFEUztBQUVmNkQsVUFBSSxFQUFFN0IsUUFGUztBQUdmRSxXQUFLLEVBQUVBLEtBSFE7QUFJZjVCLFlBQU0sRUFBRTtBQUpPLEtBQWpCOztBQU9BLFFBQUksQ0FBQ21DLGVBQWUsQ0FBQ3FCLElBQWhCLENBQXFCNUIsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ00sY0FBUSxDQUFDLCtCQUFELENBQVI7QUFDQTtBQUNEOztBQUVELFFBQU11QixRQUFRLEdBQUcsRUFBakI7O0FBZDBCLCtDQWdCTnpELE1BaEJNO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBZ0JmZSxLQWhCZTtBQWlCeEIsWUFBTTJDLE9BQU8sR0FBRztBQUNkSCxjQUFJLEVBQUV4QyxLQUFLLENBQUN3QyxJQURFO0FBRWRJLGNBQUksRUFBRTtBQUZRLFNBQWhCO0FBS0EsWUFBTUMsT0FBTyxHQUFHckIsUUFBUSxDQUFDeEIsS0FBRCxDQUFSLENBQ2I4QyxJQURhLENBQ1IsVUFBQ1gsTUFBRDtBQUFBLGlCQUFZUSxPQUFPLENBQUNDLElBQVIsR0FBZVQsTUFBTSxDQUFDNUMsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBM0I7QUFBQSxTQURRLEVBRWJ1RCxJQUZhLENBRVI7QUFBQSxpQkFBTUMsaURBQUEsbUJBQTZCSixPQUE3QixDQUFOO0FBQUEsU0FGUSxFQUdiRyxJQUhhLENBR1IsaUJBQVk7QUFBQSxjQUFWRixJQUFVLFNBQVZBLElBQVU7QUFBQyxpQkFBT0EsSUFBUDtBQUFZLFNBSGpCLFdBSVBmLE9BQU8sQ0FBQ0MsR0FKRCxDQUFoQjtBQUtBWSxnQkFBUSxDQUFDaEQsSUFBVCxDQUFjbUQsT0FBZDtBQTNCd0I7O0FBZ0IxQiwwREFBNEI7QUFBQTtBQVkzQjtBQTVCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE4QjVCbkIsV0FBTyxDQUFDc0IsR0FBUixDQUFZTixRQUFaLEVBQ0dJLElBREgsQ0FDUSxVQUFDRyxPQUFEO0FBQUEsYUFBYVYsVUFBVSxDQUFDdEQsTUFBWCxHQUFvQmdFLE9BQWpDO0FBQUEsS0FEUixFQUVHSCxJQUZILENBRVEsWUFBTTtBQUNWLGFBQU9DLGlEQUFBLHlCQUE0QnpDLFdBQTVCLGVBQW1EaUMsVUFBbkQsQ0FBUDtBQUNELEtBSkgsRUFLR08sSUFMSCxDQUtRO0FBQUEsYUFBTXZDLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FMUixFQU1HdUMsSUFOSCxDQU1RO0FBQUEsYUFBTXhCLFNBQVMsRUFBZjtBQUFBLEtBTlIsV0FPU08sT0FBTyxDQUFDQyxHQVBqQjtBQVFDLEdBdENEOztBQXdDQSxNQUFNb0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzNCLENBQUQsRUFBTztBQUMxQk0sV0FBTyxDQUFDQyxHQUFSLENBQVlQLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBWjs7QUFDQSxRQUFJbkUsTUFBTSxDQUFDb0UsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQnBDLGVBQVMsOEJBQ0poQyxNQURJLElBRVBzQyxDQUFDLENBQUM0QixNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBRk8sR0FBVDtBQUlBcEMsbUJBQWEsOEJBQ1JELFVBRFEsSUFFWHVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQmhDLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBcEIsQ0FGVyxHQUFiO0FBSUQ7QUFDRixHQVpEOztBQWNBLHNCQUNFLGlIQUNFO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IvQyxhQUFPO0FBQ1BpQixlQUFTO0FBQ1YsS0FKSDtBQUtFLGFBQVMsRUFBRWxCLElBQUksR0FBR29ELDRFQUFILEdBQW9CO0FBTHJDLElBREYsZUFRRTtBQUFLLFNBQUssRUFBRTtBQUNWQyxlQUFTLEVBQUVyRCxJQUFJLEdBQUcsdUJBQUgsR0FBNkI7QUFEbEMsS0FBWjtBQUdFLGFBQVMsRUFBRW9ELDBFQUFZRTtBQUh6QixrQkFLRTtBQUFLLGFBQVMsRUFBRUYsZ0ZBQWtCRztBQUFsQyxrQkFDRSw2RUFERixlQUVFO0FBQ0UsYUFBUyxFQUFFSCwrRUFEYjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNibkQsYUFBTztBQUNQaUIsZUFBUztBQUNWO0FBTEgsU0FGRixDQUxGLGVBaUJFO0FBQUssYUFBUyxFQUFFa0MsOEVBQWdCSTtBQUFoQyxrQkFDRTtBQUFNLFdBQU8sRUFBQyxxQkFBZDtBQUFvQyxZQUFRLEVBQUUsa0JBQUNyQyxDQUFEO0FBQUEsYUFBT2MsWUFBWSxDQUFDZCxDQUFELENBQW5CO0FBQUEsS0FBOUM7QUFBc0UsVUFBTSxFQUFDO0FBQTdFLGtCQUNFLDRFQURGLGVBRUU7QUFBVSxtQkFBWSxjQUF0QjtBQUFxQyxTQUFLLEVBQUU1QyxNQUE1QztBQUFvRCxZQUFRLEVBQUMsVUFBN0Q7QUFBd0UsWUFBUSxFQUFFLGtCQUFDNEMsQ0FBRDtBQUFBLGFBQU9iLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDNEIsTUFBRixDQUFTVSxLQUFWLENBQWhCO0FBQUEsS0FBbEY7QUFBb0gsYUFBUyxFQUFFTCwyRUFBL0g7QUFBOEksYUFBUyxFQUFDO0FBQXhKLElBRkYsZUFHRSx1RkFIRixlQUlFO0FBQU8sbUJBQVksdUJBQW5CO0FBQTJDLFNBQUssRUFBRTdDLFFBQWxEO0FBQTRELFlBQVEsRUFBQyxVQUFyRTtBQUFnRixZQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxhQUFPWCxXQUFXLENBQUNXLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU1UsS0FBVixDQUFsQjtBQUFBLEtBQTFGO0FBQThILGFBQVMsRUFBRWpFLCtFQUF6STtBQUE4SixRQUFJLEVBQUMsTUFBbks7QUFBMEssZUFBVyxFQUFDO0FBQXRMLElBSkYsZUFLRTtBQUFHLGFBQVMsRUFBRTRELDhFQUFnQk07QUFBOUIsS0FBaUNuRCxRQUFRLENBQUMwQyxNQUFULEdBQWtCLENBQWxCLEdBQXNCLGlFQUF0QixHQUEwRixFQUEzSCxDQUxGLGVBTUUsMkVBTkYsZUFPRTtBQUFPLG1CQUFZLG9CQUFuQjtBQUF3QyxTQUFLLEVBQUV4QyxLQUEvQztBQUFzRCxZQUFRLEVBQUMsVUFBL0Q7QUFBMEUsWUFBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsYUFBT1QsUUFBUSxDQUFDUyxDQUFDLENBQUM0QixNQUFGLENBQVNVLEtBQVYsQ0FBZjtBQUFBLEtBQXBGO0FBQXFILGFBQVMsRUFBRWpFLCtFQUFoSTtBQUFxSixRQUFJLEVBQUMsTUFBMUo7QUFBaUssZUFBVyxFQUFDO0FBQTdLLElBUEYsZUFRRTtBQUFHLGFBQVMsRUFBRTRELDhFQUFnQk07QUFBOUIsS0FBaUNqRCxLQUFLLENBQUN3QyxNQUFOLEdBQWUsQ0FBZixHQUFtQixxREFBbkIsR0FBMkUsRUFBNUcsQ0FSRixlQVNFLDhEQUNHcEUsTUFBTSxDQUFDb0UsTUFBUCxHQUFnQixDQUFoQixnQkFBb0I7QUFBTyxtQkFBWSxxQkFBbkI7QUFBeUMsU0FBSyxFQUFDLEVBQS9DO0FBQWtELFlBQVEsRUFBRUgsWUFBNUQ7QUFBMEUsUUFBSSxFQUFDO0FBQS9FLElBQXBCLEdBQStHLElBRGxILEVBRUduQyxVQUFVLENBQUNoQixHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsd0JBQWdCLGlEQUFDLG9EQUFEO0FBQWdCLFNBQUcsRUFBRUEsR0FBckI7QUFBMEIsV0FBSyxFQUFFRDtBQUFqQyxNQUFoQjtBQUFBLEdBQWYsQ0FGSCxDQVRGLGVBYUU7QUFBUSxtQkFBWSw0QkFBcEI7QUFBaUQsUUFBSSxFQUFDLFFBQXREO0FBQStELGFBQVMsRUFBRXdELGdGQUFrQk87QUFBNUYscUJBYkYsZUFjRTtBQUFHLGFBQVMsRUFBRVAsOEVBQWdCTTtBQUE5QixLQUFpQzVDLEtBQWpDLENBZEYsQ0FERixDQWpCRixDQVJGLENBREY7QUErQ0Q7O0FBRUQsaUVBQWVmLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTZELEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUN0RixLQUFELEVBQVc7QUFBQSxrQkFDUStCLCtDQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBO0FBQUEsTUFDYndELE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUFBLE1BRVoxRCxTQUZZLEdBRUU5QixLQUZGLENBRVo4QixTQUZZOztBQUFBLG1CQUljQywrQ0FBUSxDQUFDLEVBQUQsQ0FKdEI7QUFBQTtBQUFBLE1BSWIwRCxTQUphO0FBQUEsTUFJRkMsWUFKRTs7QUFBQSxtQkFLZ0MzRCwrQ0FBUSxDQUFDLEVBQUQsQ0FMeEM7QUFBQTtBQUFBLE1BS2I0RCxrQkFMYTtBQUFBLE1BS09DLHFCQUxQOztBQUFBLG1CQU1ZN0QsK0NBQVEsQ0FBQyxLQUFELENBTnBCO0FBQUE7QUFBQSxNQU1iOEQsUUFOYTtBQUFBLE1BTUhDLFdBTkc7O0FBQUEsbUJBT2MvRCwrQ0FBUSxDQUFDLEtBQUQsQ0FQdEI7QUFBQTtBQUFBLE1BT2JnRSxTQVBhO0FBQUEsTUFPRkMsWUFQRTs7QUFBQSxvQkFRa0NqRSwrQ0FBUSxDQUFDLHlCQUFELENBUjFDO0FBQUE7QUFBQSxNQVFia0UsbUJBUmE7QUFBQSxNQVFRQyxzQkFSUjs7QUFVcEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxXQUFELEVBQWlCO0FBQ3JDLFFBQU16QixNQUFNLEdBQUd5QixXQUFXLENBQUN6QixNQUEzQjtBQUNBLFFBQUkwQixPQUFKOztBQUNBLE9BQUc7QUFDREEsYUFBTyxHQUFHLEtBQVY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHM0IsTUFBTSxHQUFHLENBQTdCLEVBQWdDMkIsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxZQUFJRixXQUFXLENBQUNFLENBQUQsQ0FBWCxDQUFlQyxvQkFBZixHQUFzQ0gsV0FBVyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFYLENBQW1CQyxvQkFBN0QsRUFBbUY7QUFDakYsY0FBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNFLENBQUQsQ0FBdkI7QUFDQUYscUJBQVcsQ0FBQ0UsQ0FBRCxDQUFYLEdBQWlCRixXQUFXLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQTVCO0FBQ0FGLHFCQUFXLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQVgsR0FBcUJFLEdBQXJCO0FBQ0FILGlCQUFPLEdBQUcsSUFBVjtBQUNEO0FBQ0Y7QUFDRixLQVZELFFBVVNBLE9BVlQ7O0FBV0EsV0FBT0QsV0FBUDtBQUNELEdBZkQ7O0FBaUJBLE1BQU12RSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDeEIsRUFBRCxFQUFRO0FBQzNCZ0Usb0RBQUEseUJBQTJCaEUsRUFBM0IsR0FDRytELElBREgsQ0FDUSxVQUFDRyxPQUFELEVBQWE7QUFDakIsVUFBTWtDLE1BQU0sR0FBR04sYUFBYSxDQUFDNUIsT0FBTyxDQUFDTCxJQUFULENBQTVCO0FBQ0F3QixrQkFBWSxDQUFDZSxNQUFELENBQVo7QUFDQWIsMkJBQXFCLENBQUNhLE1BQU0sQ0FBQzlGLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUQsQ0FBckI7QUFDRCxLQUxILFdBTVN3QyxPQUFPLENBQUNDLEdBTmpCO0FBT0QsR0FSRDs7QUFVQXNELGtEQUFTLENBQUMsWUFBTTtBQUNkN0UsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUE2RSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYixRQUFKLEVBQWM7QUFDWkQsMkJBQXFCLENBQUNILFNBQUQsQ0FBckI7QUFDQVMsNEJBQXNCLENBQUMscUJBQUQsQ0FBdEI7QUFDRCxLQUhELE1BR087QUFDTE4sMkJBQXFCLENBQUNILFNBQVMsQ0FBQzlFLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxDQUFyQjtBQUNBdUYsNEJBQXNCLENBQUMseUJBQUQsQ0FBdEI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDTCxRQUFELENBUk0sQ0FBVDs7QUFVQSxNQUFNYyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDbkNiLGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1lLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3pCLEtBQUQsRUFBVztBQUNqQyxRQUFJQSxLQUFLLENBQUNSLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJxQixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFVBQU1hLEtBQUssR0FBR3BCLFNBQVMsQ0FBQ3FCLE1BQVYsQ0FDWixVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxXQUF2QixHQUFxQ0MsUUFBckMsQ0FBOEMvQixLQUFLLENBQUM4QixXQUFOLEVBQTlDLENBQWQ7QUFBQSxPQURZLENBQWQ7QUFHQXJCLDJCQUFxQixDQUFDaUIsS0FBRCxDQUFyQjtBQUNELEtBTkQsTUFNTyxJQUFJaEIsUUFBSixFQUFjO0FBQ25CRyxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSiwyQkFBcUIsQ0FBQ0gsU0FBRCxDQUFyQjtBQUNELEtBSE0sTUFHQTtBQUNMTyxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSiwyQkFBcUIsQ0FBQ0gsU0FBUyxDQUFDOUUsS0FBVixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFELENBQXJCO0FBQ0Q7QUFDRixHQWREOztBQWdCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU8sMkVBQWVpRztBQUEvQixrQkFDRTtBQUFLLGFBQVMsRUFBRWpHLDhFQUFrQmtHO0FBQWxDLGtCQUNFO0FBQUksbUJBQVksWUFBaEI7QUFBNkIsYUFBUyxFQUFFbEcsNkVBQWlCbUc7QUFBekQsMkJBREYsQ0FERixlQUlFO0FBQUssYUFBUyxFQUFFbkcsMkVBQWVvRztBQUEvQixrQkFDRSxpREFBQyxxREFBRDtBQUFhLG1CQUFlLEVBQUVWO0FBQTlCLElBREYsRUFFR25CLFNBQVMsQ0FBQ2QsTUFBVixLQUFxQixDQUFyQixnQkFBeUI7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBWSx1QkFBbEM7QUFBMEQsYUFBUyxFQUFFekQsaUZBQXJFO0FBQTRGLFdBQU8sRUFBRTtBQUFBLGFBQU1zRSxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUE7QUFBckcseUJBQXpCLEdBQWtMLElBRnJMLENBSkYsZUFRRTtBQUFLLGFBQVMsRUFBRXRFLDhFQUFrQnFHO0FBQWxDLEtBQ0c1QixrQkFBa0IsQ0FBQ3RFLEdBQW5CLENBQ0MsVUFBQzBGLFFBQUQsRUFBV3hGLEdBQVg7QUFBQSx3QkFDRSxpREFBQyw4Q0FBRDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLGVBQVMsRUFBRU8sU0FGYjtBQUdFLGtCQUFZLEVBQUVELFlBSGhCO0FBSUUsY0FBUSxFQUFFa0Y7QUFKWixNQURGO0FBQUEsR0FERCxDQURILENBUkYsZUFvQkU7QUFBSyxhQUFTLEVBQUU3Riw0RUFBZ0JzRztBQUFoQyxLQUNHekIsU0FBUyxHQUFHLElBQUgsZ0JBQVU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBWSw0QkFBbEM7QUFBK0QsYUFBUyxFQUFFN0UsaUZBQTFFO0FBQWlHLFdBQU8sRUFBRXlGO0FBQTFHLEtBQW9JVixtQkFBcEksQ0FEdEIsRUFFR1IsU0FBUyxDQUFDZCxNQUFWLEdBQW1CLENBQW5CLGdCQUF1QjtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFZLHVCQUFsQztBQUEwRCxhQUFTLEVBQUV6RCxpRkFBckU7QUFBNEYsV0FBTyxFQUFFO0FBQUEsYUFBTXNFLFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQTtBQUFyRyx5QkFBdkIsR0FBZ0wsSUFGbkwsZUFHRSxpREFBQyxtREFBRDtBQUNFLGFBQVMsRUFBRTFELFNBRGI7QUFFRSxnQkFBWSxFQUFFRCxZQUZoQjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU0yRCxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FIWDtBQUlFLFFBQUksRUFBRUQ7QUFKUixJQUhGLENBcEJGLENBREY7QUFpQ0QsQ0F4R0Q7O0FBMEdBLGlFQUFlRCxFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN6SCxLQUFELEVBQVc7QUFBQSxNQUN0QjRHLGVBRHNCLEdBQ0g1RyxLQURHLENBQ3RCNEcsZUFEc0I7QUFHN0Isc0JBQ0UsaUhBQ0U7QUFBSyxhQUFTLEVBQUUxRixxRkFBeUJ3RztBQUF6QyxrQkFDRSxpREFBQyxnREFBRDtBQUFNLGFBQVMsRUFBRXhHLG9GQUFqQjtBQUEyQyxRQUFJLEVBQUV5RywyRUFBZUE7QUFBaEUsSUFERixlQUVFO0FBQ0UsbUJBQVksY0FEZDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsWUFBUSxFQUFFLGtCQUFDOUUsQ0FBRDtBQUFBLGFBQU8rRCxlQUFlLENBQUMvRCxDQUFDLENBQUM0QixNQUFGLENBQVNVLEtBQVYsQ0FBdEI7QUFBQSxLQUhaO0FBSUUsYUFBUyxFQUFFakUsOEVBSmI7QUFLRSxlQUFXLEVBQUM7QUFMZCxJQUZGLENBREYsQ0FERjtBQWNELENBakJEOztBQW1CQSxpRUFBZXVHLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDNUgsS0FBRCxFQUFXO0FBQUEsTUFDbEIrRyxRQURrQixHQUNvQi9HLEtBRHBCLENBQ2xCK0csUUFEa0I7QUFBQSxNQUNSbEYsWUFEUSxHQUNvQjdCLEtBRHBCLENBQ1I2QixZQURRO0FBQUEsTUFDTUMsU0FETixHQUNvQjlCLEtBRHBCLENBQ004QixTQUROO0FBQUEsTUFFbEJrRixhQUZrQixHQUU0Q0QsUUFGNUMsQ0FFbEJDLGFBRmtCO0FBQUEsTUFFSGEsT0FGRyxHQUU0Q2QsUUFGNUMsQ0FFSGMsT0FGRztBQUFBLE1BRU1qRyxXQUZOLEdBRTRDbUYsUUFGNUMsQ0FFTW5GLFdBRk47QUFBQSxNQUVtQjJFLG9CQUZuQixHQUU0Q1EsUUFGNUMsQ0FFbUJSLG9CQUZuQjs7QUFBQSxrQkFHVXhFLCtDQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBO0FBQUEsTUFHbkIrRixVQUhtQjtBQUFBLE1BR1BDLGFBSE87O0FBQUEsbUJBSXNCaEcsK0NBQVEsQ0FBQyxFQUFELENBSjlCO0FBQUE7QUFBQSxNQUluQmlHLGdCQUptQjtBQUFBLE1BSURDLG1CQUpDOztBQUFBLG1CQUtFbEcsK0NBQVEsQ0FBQyxLQUFELENBTFY7QUFBQTtBQUFBLE1BS25Cd0QsTUFMbUI7QUFBQSxNQUtYQyxTQUxXOztBQUFBLG1CQU1NekQsK0NBQVEsQ0FBQyxLQUFELENBTmQ7QUFBQTtBQUFBLE1BTW5COEQsUUFObUI7QUFBQSxNQU1UQyxXQU5TOztBQUFBLG1CQU8wQi9ELCtDQUFRLENBQUMsa0JBQUQsQ0FQbEM7QUFBQTtBQUFBLE1BT25CbUcsa0JBUG1CO0FBQUEsTUFPQ0MscUJBUEQ7O0FBUzFCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3pDLFFBQUlDLGNBQWMsR0FBR0QsU0FBUyxDQUFDdkIsTUFBVixDQUFpQixVQUFBN0csTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0UsYUFBUCxLQUF5QixRQUE3QjtBQUFBLEtBQXZCLENBQXJCO0FBQ0EsUUFBSW9JLGFBQWEsR0FBR0YsU0FBUyxDQUFDdkIsTUFBVixDQUFpQixVQUFBN0csTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0UsYUFBUCxLQUF5QixRQUE3QjtBQUFBLEtBQXZCLENBQXBCO0FBQ0EsV0FBT21JLGNBQWMsQ0FBQ0UsTUFBZixDQUFzQkQsYUFBdEIsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDSixTQUFELEVBQWU7QUFDOUMsUUFBTTFELE1BQU0sR0FBRzBELFNBQVMsQ0FBQzFELE1BQXpCO0FBQ0EsUUFBSTBCLE9BQUo7O0FBQ0EsT0FBRztBQUNEQSxhQUFPLEdBQUcsS0FBVjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUczQixNQUFNLEdBQUcsQ0FBN0IsRUFBZ0MyQixDQUFDLEVBQWpDLEVBQXFDO0FBQ25DLFlBQUkrQixTQUFTLENBQUMvQixDQUFELENBQVQsQ0FBYWhHLFdBQWIsR0FBMkIrSCxTQUFTLENBQUMvQixDQUFDLEdBQUcsQ0FBTCxDQUFULENBQWlCaEcsV0FBaEQsRUFBNkQ7QUFDM0QsY0FBTWtHLEdBQUcsR0FBRzZCLFNBQVMsQ0FBQy9CLENBQUQsQ0FBckI7QUFDQStCLG1CQUFTLENBQUMvQixDQUFELENBQVQsR0FBZStCLFNBQVMsQ0FBQy9CLENBQUMsR0FBRyxDQUFMLENBQXhCO0FBQ0ErQixtQkFBUyxDQUFDL0IsQ0FBQyxHQUFHLENBQUwsQ0FBVCxHQUFtQkUsR0FBbkI7QUFDQUgsaUJBQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRjtBQUNGLEtBVkQsUUFVU0EsT0FWVDs7QUFXQSxXQUFPK0IsbUJBQW1CLENBQUNDLFNBQUQsQ0FBMUI7QUFDRCxHQWZEOztBQWlCQTNCLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1nQyxhQUFhLEdBQUdELHdCQUF3QixDQUFDRSxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsT0FBZCxDQUFELENBQTlDO0FBQ0FFLGlCQUFhLENBQUNXLGFBQUQsQ0FBYjtBQUNELEdBSFEsRUFHTixDQUFDM0IsUUFBRCxDQUhNLENBQVQ7QUFLQUwsa0RBQVMsQ0FBQyxZQUFNO0FBQ2R1Qix1QkFBbUIsQ0FBQ0gsVUFBVSxDQUFDbkgsS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFELENBQW5CO0FBQ0QsR0FGUSxFQUVOLENBQUNtSCxVQUFELENBRk0sQ0FBVDtBQUlBcEIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWIsUUFBSixFQUFjO0FBQ1pvQyx5QkFBbUIsQ0FBQ0gsVUFBRCxDQUFuQjtBQUNBSywyQkFBcUIsQ0FBQyxrQkFBRCxDQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMRix5QkFBbUIsQ0FBQ0gsVUFBVSxDQUFDbkgsS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFELENBQW5CO0FBQ0F3SCwyQkFBcUIsQ0FBQyxrQkFBRCxDQUFyQjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUN0QyxRQUFELENBUk0sQ0FBVDs7QUFVQSxNQUFNZ0QsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCL0MsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUUzRSxzRkFBMEI0SDtBQUExQyxrQkFDRTtBQUFLLGFBQVMsRUFBRTVILGlGQUFxQjZIO0FBQXJDLGtCQUNFO0FBQUksYUFBUyxFQUFFN0gsc0VBQVU4SDtBQUF6QixVQURGLGVBRUU7QUFBSyxhQUFTLEVBQUU5SCw2RUFBaUI2RjtBQUFqQyxrQkFDRTtBQUFHLGFBQVMsRUFBRTdGLGlGQUFxQitIO0FBQW5DLEtBQXVDakMsYUFBdkMsQ0FERixDQUZGLGVBS0U7QUFBSyxhQUFTLEVBQUU5RixvRkFBd0JnSTtBQUF4QyxrQkFDRSxpREFBQyw2Q0FBRDtBQUFTLGVBQVcsRUFBRXRILFdBQXRCO0FBQW1DLGVBQVcsRUFBRTJFO0FBQWhELElBREYsZUFFRTtBQUFRLG1CQUFZLG1CQUFwQjtBQUF3QyxhQUFTLEVBQUVyRixvRkFBbkQ7QUFBNkUsV0FBTyxFQUFFO0FBQUEsYUFBTXNFLFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUF0RjtBQUE2RyxRQUFJLEVBQUM7QUFBbEgsa0JBRkYsQ0FMRixlQVNFLGlEQUFDLGlEQUFEO0FBQ0UsYUFBUyxFQUFFMUQsU0FEYjtBQUVFLGdCQUFZLEVBQUVELFlBRmhCO0FBR0UsZUFBVyxFQUFFRCxXQUhmO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTTRELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUpYO0FBS0UsUUFBSSxFQUFFRDtBQUxSLElBVEYsQ0FERixlQWtCRTtBQUFLLGFBQVMsRUFBRXJFLCtFQUFtQmlJO0FBQW5DLGtCQUNFO0FBQUksYUFBUyxFQUFFakksc0VBQVVrSTtBQUF6QixVQURGLGVBRUU7QUFBSyxhQUFTLEVBQUVsSSwrRUFBbUI0RztBQUFuQyxLQUNHRSxnQkFBZ0IsQ0FBQzNHLEdBQWpCLENBQXFCLFVBQUNwQixNQUFELEVBQVNzQixHQUFUO0FBQUEsd0JBQWlCLGlEQUFDLDRDQUFEO0FBQVEsU0FBRyxFQUFFQSxHQUFiO0FBQWtCLFlBQU0sRUFBRXRCO0FBQTFCLE1BQWpCO0FBQUEsR0FBckIsQ0FESCxDQUZGLEVBS0c2SCxVQUFVLENBQUNuRCxNQUFYLEdBQW9CLENBQXBCLGdCQUF3QjtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFZLDBCQUFsQztBQUE2RCxhQUFTLEVBQUV6RCwwRkFBeEU7QUFBd0csV0FBTyxFQUFFMkg7QUFBakgsS0FBbUlYLGtCQUFuSSxDQUF4QixHQUEwTCxJQUw3TCxDQWxCRixDQURGO0FBNEJELENBbkZEOztBQXFGQSxpRUFBZU4sUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTeUIsYUFBVCxPQUFtRTtBQUFBLE1BQTFDM0gsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcENDLE9BQW9DLFFBQXBDQSxPQUFvQztBQUFBLE1BQTNCRSxZQUEyQixRQUEzQkEsWUFBMkI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ2pDQywrQ0FBUSxDQUFDLEVBQUQsQ0FEeUI7QUFBQTtBQUFBLE1BQzFEZ0YsUUFEMEQ7QUFBQSxNQUNoRHVDLFdBRGdEOztBQUFBLG1CQUVqQ3ZILCtDQUFRLENBQUMsRUFBRCxDQUZ5QjtBQUFBO0FBQUEsTUFFMURFLFFBRjBEO0FBQUEsTUFFaERDLFdBRmdEOztBQUFBLG1CQUd2Q0gsK0NBQVEsQ0FBQyxFQUFELENBSCtCO0FBQUE7QUFBQSxNQUcxREksS0FIMEQ7QUFBQSxNQUduREMsUUFIbUQ7O0FBQUEsbUJBSXZDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FKK0I7QUFBQTtBQUFBLE1BSTFEUyxLQUowRDtBQUFBLE1BSW5EQyxRQUptRDs7QUFNakUsTUFBTUMsZUFBZSxHQUFHQyxNQUFNLENBQzVCLHdIQUQ0QixDQUE5Qjs7QUFJQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCMEcsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBcEgsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFNdUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNlLGNBQUY7QUFDQSxRQUFJMkYsWUFBWSxHQUFHO0FBQ2pCckosVUFBSSxFQUFFNkcsUUFEVztBQUVqQmpELFVBQUksRUFBRTdCLFFBRlc7QUFHakJFLFdBQUssRUFBRUEsS0FIVTtBQUlqQnFILGdCQUFVLEVBQUUxSDtBQUpLLEtBQW5COztBQU1BLFFBQUksQ0FBQ1ksZUFBZSxDQUFDcUIsSUFBaEIsQ0FBcUI1QixLQUFyQixDQUFMLEVBQWtDO0FBQ2hDTSxjQUFRLENBQUMsK0JBQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0Q0QixxREFBQSxDQUFXLGVBQVgsRUFBNEJrRixZQUE1QixFQUNHbkYsSUFESCxDQUNRO0FBQUEsYUFBTXZDLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FEUixFQUVHdUMsSUFGSCxDQUVRO0FBQUEsYUFBTXhCLFNBQVMsRUFBZjtBQUFBLEtBRlIsV0FHU08sT0FBTyxDQUFDQyxHQUhqQjtBQUlELEdBaEJEOztBQW1CQSxzQkFDRSxpSEFDRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiekIsYUFBTztBQUNQaUIsZUFBUztBQUNWLEtBSkg7QUFLRSxtQkFBWSxrQkFMZDtBQU1FLGFBQVMsRUFBRWxCLElBQUksR0FBR29ELDRFQUFILEdBQW9CO0FBTnJDLElBREYsZUFTRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUVyRCxJQUFJLEdBQUcsdUJBQUgsR0FBNkI7QUFEdkMsS0FEVDtBQUlFLGFBQVMsRUFBRW9ELDBFQUFZRTtBQUp6QixrQkFNRTtBQUFLLGFBQVMsRUFBRUYsZ0ZBQWtCRztBQUFsQyxrQkFDRSxtR0FERixlQUVFO0FBQ0UsYUFBUyxFQUFFSCwrRUFEYjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNibkQsYUFBTztBQUNQaUIsZUFBUztBQUNWO0FBTEgsU0FGRixDQU5GLGVBa0JFO0FBQUssYUFBUyxFQUFFa0MsOEVBQWdCSTtBQUFoQyxrQkFDRTtBQUFNLE1BQUUsRUFBQyxjQUFUO0FBQXdCLFlBQVEsRUFBRSxrQkFBQ3JDLENBQUQ7QUFBQSxhQUFPYyxZQUFZLENBQUNkLENBQUQsQ0FBbkI7QUFBQSxLQUFsQztBQUEwRCxVQUFNLEVBQUM7QUFBakUsa0JBQ0UseUVBREYsZUFFRTtBQUFVLG1CQUFZLGdCQUF0QjtBQUF1QyxTQUFLLEVBQUVrRSxRQUE5QztBQUF3RCxZQUFRLEVBQUMsVUFBakU7QUFBNEUsWUFBUSxFQUFFLGtCQUFDbEUsQ0FBRDtBQUFBLGFBQU95RyxXQUFXLENBQUN6RyxDQUFDLENBQUM0QixNQUFGLENBQVNVLEtBQVYsQ0FBbEI7QUFBQSxLQUF0RjtBQUEwSCxhQUFTLEVBQUMsTUFBcEk7QUFBMkksYUFBUyxFQUFFTCwyRUFBdEo7QUFBcUssUUFBSSxFQUFDO0FBQTFLLElBRkYsZUFHRSx1RkFIRixlQUlFO0FBQU8sbUJBQVkseUJBQW5CO0FBQTZDLFNBQUssRUFBRTdDLFFBQXBEO0FBQThELFlBQVEsRUFBQyxVQUF2RTtBQUFrRixZQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxhQUFPWCxXQUFXLENBQUNXLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU1UsS0FBVixDQUFsQjtBQUFBLEtBQTVGO0FBQWdJLGFBQVMsRUFBRWpFLCtFQUEzSTtBQUFnSyxhQUFTLEVBQUMsSUFBMUs7QUFBK0ssZUFBVyxFQUFDLHFCQUEzTDtBQUFpTixRQUFJLEVBQUM7QUFBdE4sSUFKRixlQUtFO0FBQUcsYUFBUyxFQUFFNEQsOEVBQWdCTTtBQUE5QixLQUFpQ25ELFFBQVEsQ0FBQzBDLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsaUVBQXRCLEdBQTBGLEVBQTNILENBTEYsZUFNRSwyRUFORixlQU9FO0FBQU8sbUJBQVksc0JBQW5CO0FBQTBDLFNBQUssRUFBRXhDLEtBQWpEO0FBQXdELFlBQVEsRUFBQyxVQUFqRTtBQUE0RSxlQUFXLEVBQUMsK0JBQXhGO0FBQXdILFlBQVEsRUFBRSxrQkFBQ1UsQ0FBRDtBQUFBLGFBQU9ULFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDNEIsTUFBRixDQUFTVSxLQUFWLENBQWY7QUFBQSxLQUFsSTtBQUFtSyxhQUFTLEVBQUVqRSwrRUFBOUs7QUFBbU0sYUFBUyxFQUFDLElBQTdNO0FBQWtOLFFBQUksRUFBQztBQUF2TixJQVBGLGVBUUU7QUFBRyxhQUFTLEVBQUU0RCw4RUFBZ0JNO0FBQTlCLEtBQWlDakQsS0FBSyxDQUFDd0MsTUFBTixHQUFlLENBQWYsR0FBbUIscURBQW5CLEdBQTJFLEVBQTVHLENBUkYsZUFTRSw2REFURixlQVVFO0FBQVEsbUJBQVksOEJBQXBCO0FBQW1ELFFBQUksRUFBQyxRQUF4RDtBQUFpRSxhQUFTLEVBQUVHLGdGQUFrQk87QUFBOUYsdUJBVkYsZUFXRTtBQUFHLGFBQVMsRUFBRVAsOEVBQWdCTTtBQUE5QixLQUFpQzVDLEtBQWpDLENBWEYsQ0FERixDQWxCRixDQVRGLENBREY7QUE4Q0Q7O0FBRUQsaUVBQWU2RyxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSxvQ0FBb0MsdUNBQXVDLG9CQUFvQix1QkFBdUIsbUJBQW1CLG9CQUFvQix1QkFBdUIsc0JBQXNCLEdBQUcsd0RBQXdELHdDQUF3QyxpQkFBaUIsMEJBQTBCLE1BQU0sNEJBQTRCLGlFQUFpRSxtQ0FBbUMsc0JBQXNCLHNCQUFzQixtQkFBbUIsc0JBQXNCLEdBQUcsOEJBQThCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEdBQUcsOEJBQThCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDRCQUE0QixlQUFlLHFCQUFxQix3QkFBd0IsR0FBRyw4QkFBOEIsZUFBZSxxQkFBcUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsNEJBQTRCLEdBQUcseUNBQXlDLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEdBQUcsZ0RBQWdELGtCQUFrQix5Q0FBeUMsd0JBQXdCLEdBQUcsOEJBQThCLHVCQUF1Qix1QkFBdUIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixzQkFBc0IsR0FBRyw4QkFBOEIsdUJBQXVCLDBCQUEwQixrQ0FBa0MseUJBQXlCLG9CQUFvQixpQ0FBaUMscUJBQXFCLDhCQUE4QixnQ0FBZ0MscUJBQXFCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLDRCQUE0QixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyw4QkFBOEIsaURBQWlELDBCQUEwQixNQUFNLHlDQUF5Qyx3QkFBd0IsMEJBQTBCLE1BQU0sbURBQW1ELGtCQUFrQixvQ0FBb0MsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1Qiw4QkFBOEIsR0FBRyw4QkFBOEIsdUJBQXVCLG1CQUFtQixzQkFBc0IsMkJBQTJCLEdBQUcsNkNBQTZDLGdDQUFnQyxHQUFHLHNCQUFzQixLQUFLLCtCQUErQixvQkFBb0IsOEJBQThCLGtCQUFrQixHQUFHLHNCQUFzQixLQUFLLCtCQUErQixrQkFBa0IsdUJBQXVCLEdBQUcsOEJBQThCLG1CQUFtQixrQkFBa0IsR0FBRyw4QkFBOEIsdUJBQXVCLHFCQUFxQixpQkFBaUIsNEJBQTRCLGtCQUFrQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyw0Q0FBNEMsZUFBZSxHQUFHLHNEQUFzRCxvQkFBb0Isc0JBQXNCLHNCQUFzQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyw4QkFBOEIsaUJBQWlCLDRCQUE0QixHQUFHLFNBQVMsNEdBQTRHLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxtQ0FBbUMsb0NBQW9DLHVDQUF1QyxvQkFBb0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLHlDQUF5Qyx3Q0FBd0MsaUJBQWlCLDBCQUEwQixNQUFNLGdCQUFnQixpRUFBaUUsbUNBQW1DLHNCQUFzQixzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0Qiw0QkFBNEIsZUFBZSxxQkFBcUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGVBQWUscUJBQXFCLHVCQUF1QixrQkFBa0IsaUJBQWlCLDRCQUE0QixHQUFHLDZCQUE2Qix1QkFBdUIsdUJBQXVCLG9CQUFvQixHQUFHLHFDQUFxQyxrQkFBa0IseUNBQXlDLHdCQUF3QixHQUFHLFFBQVEsdUJBQXVCLHVCQUF1QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsbUJBQW1CLHVCQUF1QixzQkFBc0IsR0FBRyxzQkFBc0IsdUJBQXVCLDBCQUEwQixrQ0FBa0MseUJBQXlCLG9CQUFvQixpQ0FBaUMscUJBQXFCLHNCQUFzQixnQ0FBZ0MscUJBQXFCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLDRCQUE0QixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyx3QkFBd0IsaURBQWlELDBCQUEwQixNQUFNLG1DQUFtQyx3QkFBd0IsMEJBQTBCLE1BQU0sc0NBQXNDLGtCQUFrQixvQ0FBb0MsdUJBQXVCLEdBQUcsUUFBUSx1QkFBdUIsOEJBQThCLEdBQUcsYUFBYSx1QkFBdUIsbUJBQW1CLHNCQUFzQiwyQkFBMkIsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsc0JBQXNCLEtBQUsscUJBQXFCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLEdBQUcsc0JBQXNCLEtBQUssZUFBZSxrQkFBa0IsdUJBQXVCLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0IsR0FBRyw0QkFBNEIsdUJBQXVCLHFCQUFxQixpQkFBaUIsNEJBQTRCLGtCQUFrQixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRywrQkFBK0IsZUFBZSxHQUFHLHNDQUFzQyxvQkFBb0Isc0JBQXNCLHNCQUFzQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxtQkFBbUIsaUJBQWlCLDRCQUE0QixHQUFHLHFCQUFxQjtBQUN6N1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3dEO0FBQy9GLFlBQWtHOztBQUVsRzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUl4QixpRUFBZSwrRkFBYyxNQUFNLEUiLCJmaWxlIjoiY2xpZW50X3NyY19jb21wb25lbnRzX3FhX1FBX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGF0YSA9IHtcblx0XCJib2R5XCI6IFwiPHBhdGggZD1cXFwiTTE3LjU0NSAxNS40NjdsLTMuNzc5LTMuNzc5YTYuMTUgNi4xNSAwIDAgMCAuODk4LTMuMjFjMC0zLjQxNy0yLjk2MS02LjM3Ny02LjM3OC02LjM3N0E2LjE4NSA2LjE4NSAwIDAgMCAyLjEgOC4yODdjMCAzLjQxNiAyLjk2MSA2LjM3NyA2LjM3NyA2LjM3N2E2LjE1IDYuMTUgMCAwIDAgMy4xMTUtLjg0NGwzLjc5OSAzLjgwMWEuOTUzLjk1MyAwIDAgMCAxLjM0NiAwbC45NDMtLjk0M2MuMzcxLS4zNzEuMjM2LS44NC0uMTM1LTEuMjExek00LjAwNCA4LjI4N2E0LjI4MiA0LjI4MiAwIDAgMSA0LjI4Mi00LjI4M2MyLjM2NiAwIDQuNDc0IDIuMTA3IDQuNDc0IDQuNDc0YTQuMjg0IDQuMjg0IDAgMCAxLTQuMjgzIDQuMjgzYy0yLjM2Ni0uMDAxLTQuNDczLTIuMTA5LTQuNDczLTQuNDc0elxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIi8+XCIsXG5cdFwid2lkdGhcIjogMjAsXG5cdFwiaGVpZ2h0XCI6IDIwXG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVscGZ1bCBmcm9tICcuLi9IZWxwZnVsJztcbmltcG9ydCBxYXN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3MnO1xuaW1wb3J0IEV4cGFuZGVkUGhvdG9zIGZyb20gJy4uL0V4cGFuZGVkUGhvdG9zJztcblxuY29uc3QgQW5zd2VyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYW5zd2VyIH0gPSBwcm9wcztcbiAgY29uc3QgeyBib2R5LCBhbnN3ZXJlcl9uYW1lLCBkYXRlLCBpZCwgaGVscGZ1bG5lc3MsIHBob3RvcyB9ID0gYW5zd2VyO1xuXG4gIGNvbnN0IGdldFByb3BlckRhdGUgPSAod2VpcmREYXRlKSA9PiB7XG4gICAgbGV0IGRhdGVBcnIgPSB3ZWlyZERhdGUuc2xpY2UoMCwgd2VpcmREYXRlLmluZGV4T2YoJ1QnKSkuc3BsaXQoJy0nKTtcbiAgICBsZXQgeWVhciA9IGRhdGVBcnIuc2hpZnQoKTtcbiAgICBkYXRlQXJyLnB1c2goeWVhcik7XG4gICAgcmV0dXJuIGRhdGVBcnIuam9pbignLScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlcn0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlckJvZHl9ID57Ym9keX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VyUGhvdG9zfT5cbiAgICAgICAge3Bob3Rvcy5tYXAoKHBob3RvLCBpZHgpID0+IDxFeHBhbmRlZFBob3RvcyBrZXk9e2lkeH0gcGhvdG89e3Bob3RvfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17cWFzdHlsZXMudXNlckFuZERhdGV9PlxuICAgICAgICAgIGJ5XG4gICAgICAgICAge2Fuc3dlcmVyX25hbWV9XG4gICAgICAgICAgLFxuICAgICAgICAgIHtnZXRQcm9wZXJEYXRlKGRhdGUpfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxIZWxwZnVsIGNsYXNzTmFtZT17cWFzdHlsZXMuYW5zd2VySGVscGZ1bH0gYW5zd2VyX2lkPXtpZH0gaGVscGZ1bG5lc3M9e2hlbHBmdWxuZXNzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXI7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvQXBwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgRXhwYW5kZWRQaG90b3MgZnJvbSAnLi4vRXhwYW5kZWRQaG90b3MnO1xuXG5mdW5jdGlvbiBBbnN3ZXJNb2RhbCh7b3Blbiwgb25DbG9zZSwgcXVlc3Rpb25faWQsIGdldFF1ZXN0aW9ucywgcHJvZHVjdElkfSkge1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0aHVtYm5haWxzLCBzZXRUaHVtYm5haWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgIC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2lcbiAgKTtcblxuICBjb25zdCBjbGVhckZvcm0gPSAoZSkgPT4ge1xuICAgIHNldEFuc3dlcignJyk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgICBzZXRUaHVtYm5haWxzKFtdKTtcbiAgICBzZXRQaG90b3MoW10pO1xuICB9O1xuXG4gIGNvbnN0IHRvQmFzZTY0ID0gKGZpbGUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFuc3dlckluZm8gPSB7XG4gICAgICBib2R5OiBhbnN3ZXIsXG4gICAgICBuYW1lOiB1c2VybmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBob3RvczogW10sXG4gICAgfTtcblxuICAgIGlmICghdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBzZXRFcnJvcignKllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBwaG90byBvZiBwaG90b3MpIHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG5hbWU6IHBob3RvLm5hbWUsXG4gICAgICAgIGRhdGE6ICcnLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9taXNlID0gdG9CYXNlNjQocGhvdG8pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHBheWxvYWQuZGF0YSA9IHJlc3VsdC5zcGxpdCgnLCcpWzFdKVxuICAgICAgICAudGhlbigoKSA9PiBheGlvcy5wb3N0KGAvdXBsb2FkX2ltYWdlc2AsIHBheWxvYWQpKVxuICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7cmV0dXJuIGRhdGF9KVxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKHJlc3VsdHMpID0+IGFuc3dlckluZm8ucGhvdG9zID0gcmVzdWx0cylcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gYXhpb3MucG9zdChgL3FhL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uX2lkfS9hbnN3ZXJzYCwgYW5zd2VySW5mbylcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IGdldFF1ZXN0aW9ucygyMDExMSkpXG4gICAgLnRoZW4oKCkgPT4gY2xlYXJGb3JtKCkpXG4gICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICBpZiAocGhvdG9zLmxlbmd0aCA8IDUpIHtcbiAgICAgIHNldFBob3RvcyhbXG4gICAgICAgIC4uLnBob3RvcyxcbiAgICAgICAgZS50YXJnZXQuZmlsZXNbMF0sXG4gICAgICBdKTtcbiAgICAgIHNldFRodW1ibmFpbHMoW1xuICAgICAgICAuLi50aHVtYm5haWxzLFxuICAgICAgICBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9XG4gICAgICAvPlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICB0cmFuc2Zvcm06IG9wZW4gPyAndHJhbnNsYXRlKC01MCUsIC01MCUpJyA6ICd0cmFuc2xhdGUoLTUwJSwgLTE1MHZoKSdcbiAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSGVhZGVyfT5cbiAgICAgICAgICA8aDM+QWRkIGFuIEFuc3dlcjwvaDM+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8cD5Zb3VyIEFuc3dlciAqPC9wPlxuICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtdGVzdGlkPVwiYW5zd2VyLWlucHV0XCIgdmFsdWU9e2Fuc3dlcn0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtzdHlsZXMucUlucHV0fSBtYXhMZW5ndGg9XCIxMDAwXCIgLz5cbiAgICAgICAgICAgIDxwPldoYXQgaXMgeW91ciBuaWNrbmFtZT8gKjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXRlc3RpZD1cImFuc3dlci11c2VybmFtZS1pbnB1dFwiIHZhbHVlPXt1c2VybmFtZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3Fhc3R5bGVzLm1vZGFsSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBqYWNrNTQzIVwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9Pnt1c2VybmFtZS5sZW5ndGggPiAwID8gJ0ZvciBwcml2YWN5IHJlYXNvbnMsIGRvIG5vdCB1c2UgeW91ciBmdWxsIG5hbWUgb3IgZW1haWwgYWRkcmVzcycgOiAnJ308L3A+XG4gICAgICAgICAgICA8cD5Zb3VyIEVtYWlsICo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS10ZXN0aWQ9XCJhbnN3ZXItZW1haWwtaW5wdXRcIiB2YWx1ZT17ZW1haWx9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtxYXN0eWxlcy5tb2RhbElucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogamFja0BlbWFpbC5jb21cIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3Bob3Rvcy5sZW5ndGggPCA1ID8gPGlucHV0IGRhdGEtdGVzdGlkPVwiYW5zd2VyLXBob3RvLXVwbG9hZFwiIHZhbHVlPVwiXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImZpbGVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIHt0aHVtYm5haWxzLm1hcCgocGhvdG8sIGlkeCkgPT4gPEV4cGFuZGVkUGhvdG9zIGtleT17aWR4fSBwaG90bz17cGhvdG99IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFuc3dlci1tb2RhbC1zdWJtaXQtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnV0dG9ufT5TdWJtaXQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maW5lUHJpbnR9PntlcnJvcn08L3A+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJNb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5pbXBvcnQgUUFTZWFyY2hCYXIgZnJvbSAnLi9RQVNlYXJjaEJhci5qc3gnXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9RdWVzdGlvbic7XG5pbXBvcnQgUXVlc3Rpb25Nb2RhbCBmcm9tICcuL1F1ZXN0aW9uTW9kYWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUUEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRRdWVzdGlvbnMsIHNldERpc3BsYXllZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoaW5nLCBzZXRTZWFyY2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9yZVF1ZXN0aW9uc0J1dHRvbiwgc2V0TW9yZVF1ZXN0aW9uc0J1dHRvbl0gPSB1c2VTdGF0ZSgnTW9yZSBBbnN3ZXJlZCBRdWVzdGlvbnMnKTtcblxuICBjb25zdCBzb3J0UXVlc3Rpb25zID0gKHF1ZXN0aW9uQXJyKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gcXVlc3Rpb25BcnIubGVuZ3RoO1xuICAgIGxldCBjaGVja2VkO1xuICAgIGRvIHtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChxdWVzdGlvbkFycltpXS5xdWVzdGlvbl9oZWxwZnVsbmVzcyA8IHF1ZXN0aW9uQXJyW2kgKyAxXS5xdWVzdGlvbl9oZWxwZnVsbmVzcykge1xuICAgICAgICAgIGNvbnN0IHRtcCA9IHF1ZXN0aW9uQXJyW2ldO1xuICAgICAgICAgIHF1ZXN0aW9uQXJyW2ldID0gcXVlc3Rpb25BcnJbaSArIDFdO1xuICAgICAgICAgIHF1ZXN0aW9uQXJyW2kgKyAxXSA9IHRtcDtcbiAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gd2hpbGUgKGNoZWNrZWQpO1xuICAgIHJldHVybiBxdWVzdGlvbkFycjtcbiAgfTtcblxuICBjb25zdCBnZXRRdWVzdGlvbnMgPSAoaWQpID0+IHtcbiAgICBheGlvcy5nZXQoYC9xYS9xdWVzdGlvbnMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydGVkID0gc29ydFF1ZXN0aW9ucyhyZXN1bHRzLmRhdGEpO1xuICAgICAgICBzZXRRdWVzdGlvbnMoc29ydGVkKTtcbiAgICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHNvcnRlZC5zbGljZSgwLCA0KSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFF1ZXN0aW9ucygyMDExMSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgc2V0RGlzcGxheWVkUXVlc3Rpb25zKHF1ZXN0aW9ucyk7XG4gICAgICBzZXRNb3JlUXVlc3Rpb25zQnV0dG9uKCdTaG93IExlc3MgUXVlc3Rpb25zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc3BsYXllZFF1ZXN0aW9ucyhxdWVzdGlvbnMuc2xpY2UoMCwgNCkpO1xuICAgICAgc2V0TW9yZVF1ZXN0aW9uc0J1dHRvbignTW9yZSBBbnN3ZXJlZCBRdWVzdGlvbnMnKTtcbiAgICB9XG4gIH0sIFtleHBhbmRlZF0pO1xuXG4gIGNvbnN0IGluY3JlYXNlTnVtT2ZRdWVzdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hRdWVzdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID49IDMpIHtcbiAgICAgIHNldFNlYXJjaGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IGZvdW5kID0gcXVlc3Rpb25zLmZpbHRlcihcbiAgICAgICAgKHF1ZXN0aW9uKSA9PiBxdWVzdGlvbi5xdWVzdGlvbl9ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMoZm91bmQpO1xuICAgIH0gZWxzZSBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICBzZXREaXNwbGF5ZWRRdWVzdGlvbnMocXVlc3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgIHNldERpc3BsYXllZFF1ZXN0aW9ucyhxdWVzdGlvbnMuc2xpY2UoMCwgMikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5ib3JkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmhlYWRlckJveH0+XG4gICAgICAgIDxoMiBkYXRhLXRlc3RpZD1cInFhLWhlYWRpbmdcIiBjbGFzc05hbWU9e3Fhc3R5bGVzLnFhaGVhZGVyfT5RdWVzdGlvbnMgJiBBbnN3ZXJzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxRQVNlYXJjaEJhciBzZWFyY2hRdWVzdGlvbnM9e3NlYXJjaFF1ZXN0aW9uc30gLz5cbiAgICAgICAge3F1ZXN0aW9ucy5sZW5ndGggPT09IDAgPyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD1cImFkZC1hLXF1ZXN0aW9uLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBBIFF1ZXN0aW9uICsgPC9idXR0b24+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnFhU2VjdGlvbn0+XG4gICAgICAgIHtkaXNwbGF5ZWRRdWVzdGlvbnMubWFwKFxuICAgICAgICAgIChxdWVzdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8UXVlc3Rpb25cbiAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxuICAgICAgICAgICAgICBnZXRRdWVzdGlvbnM9e2dldFF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgIHtzZWFyY2hpbmcgPyBudWxsIDogPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9XCJzaG93LW1vcmUtcXVlc3Rpb25zLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXtpbmNyZWFzZU51bU9mUXVlc3Rpb25zfSA+e21vcmVRdWVzdGlvbnNCdXR0b259PC9idXR0b24+fVxuICAgICAgICB7cXVlc3Rpb25zLmxlbmd0aCA+IDAgPyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD1cImFkZC1hLXF1ZXN0aW9uLWJ1dHRvblwiIGNsYXNzTmFtZT17cWFzdHlsZXMuZm9vdGVyQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9PkFkZCBBIFF1ZXN0aW9uICsgPC9idXR0b24+IDogbnVsbH1cbiAgICAgICAgPFF1ZXN0aW9uTW9kYWxcbiAgICAgICAgICBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH1cbiAgICAgICAgICBnZXRRdWVzdGlvbnM9e2dldFF1ZXN0aW9uc31cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUUE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3MgZnJvbSAnQGljb25pZnktaWNvbnMvZW50eXBvL21hZ25pZnlpbmctZ2xhc3MnO1xuaW1wb3J0IHFhc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlQ29tcG9uZW50cy9RQS5tb2R1bGVzLmNzcyc7XG5cbmNvbnN0IFFBU2VhcmNoQmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZWFyY2hRdWVzdGlvbnN9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnNlYXJjaEJhclNlY3Rpb259PlxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3Fhc3R5bGVzLm1hZ25pZnlpbmdHbGFzc30gaWNvbj17bWFnbmlmeWluZ0dsYXNzfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZWFyY2hRdWVzdGlvbnMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17cWFzdHlsZXMuc2VhcmNoQmFyfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFF1ZXN0aW9ucy4uLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBU2VhcmNoQmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5zd2VyIGZyb20gJy4vQW5zd2VyJztcbmltcG9ydCBxYXN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3MnO1xuaW1wb3J0IEhlbHBmdWwgZnJvbSAnLi4vSGVscGZ1bCc7XG5pbXBvcnQgQW5zd2VyTW9kYWwgZnJvbSAnLi9BbnN3ZXJNb2RhbCc7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlc3Rpb24sIGdldFF1ZXN0aW9ucywgcHJvZHVjdElkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBxdWVzdGlvbl9ib2R5LCBhbnN3ZXJzLCBxdWVzdGlvbl9pZCwgcXVlc3Rpb25faGVscGZ1bG5lc3MgfSA9IHF1ZXN0aW9uO1xuICBjb25zdCBbYW5zd2VyTGlzdCwgc2V0QW5zd2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNwbGF5ZWRBbnN3ZXJzLCBzZXREaXNwbGF5ZWRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWVNb3JlQW5zd2Vyc1RleHQsIHNldFNlZU1vcmVBbnN3ZXJzVGV4dF0gPSB1c2VTdGF0ZSgnU2VlIE1vcmUgQW5zd2VycycpXG5cbiAgY29uc3Qgc29ydEFuc3dlcnNCeVNlbGxlciA9IChhbnN3ZXJBcnIpID0+IHtcbiAgICBsZXQgc2VsbGVyTWVzc2FnZXMgPSBhbnN3ZXJBcnIuZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIuYW5zd2VyZXJfbmFtZSA9PT0gJ1NlbGxlcicpO1xuICAgIGxldCBvdGhlck1lc3NhZ2VzID0gYW5zd2VyQXJyLmZpbHRlcihhbnN3ZXIgPT4gYW5zd2VyLmFuc3dlcmVyX25hbWUgIT09ICdTZWxsZXInKTtcbiAgICByZXR1cm4gc2VsbGVyTWVzc2FnZXMuY29uY2F0KG90aGVyTWVzc2FnZXMpO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRBbnN3ZXJzQnlIZWxwZnVsbmVzcyA9IChhbnN3ZXJBcnIpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBhbnN3ZXJBcnIubGVuZ3RoO1xuICAgIGxldCBjaGVja2VkO1xuICAgIGRvIHtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChhbnN3ZXJBcnJbaV0uaGVscGZ1bG5lc3MgPCBhbnN3ZXJBcnJbaSArIDFdLmhlbHBmdWxuZXNzKSB7XG4gICAgICAgICAgY29uc3QgdG1wID0gYW5zd2VyQXJyW2ldO1xuICAgICAgICAgIGFuc3dlckFycltpXSA9IGFuc3dlckFycltpICsgMV07XG4gICAgICAgICAgYW5zd2VyQXJyW2kgKyAxXSA9IHRtcDtcbiAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gd2hpbGUgKGNoZWNrZWQpO1xuICAgIHJldHVybiBzb3J0QW5zd2Vyc0J5U2VsbGVyKGFuc3dlckFycik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBbnN3ZXJzID0gc29ydEFuc3dlcnNCeUhlbHBmdWxuZXNzKE9iamVjdC52YWx1ZXMoYW5zd2VycykpO1xuICAgIHNldEFuc3dlckxpc3Qoc29ydGVkQW5zd2Vycyk7XG4gIH0sIFtxdWVzdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGlzcGxheWVkQW5zd2VycyhhbnN3ZXJMaXN0LnNsaWNlKDAsIDIpKTtcbiAgfSwgW2Fuc3dlckxpc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgc2V0RGlzcGxheWVkQW5zd2VycyhhbnN3ZXJMaXN0KTtcbiAgICAgIHNldFNlZU1vcmVBbnN3ZXJzVGV4dCgnQ29sbGFwc2UgQW5zd2VycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREaXNwbGF5ZWRBbnN3ZXJzKGFuc3dlckxpc3Quc2xpY2UoMCwgMikpO1xuICAgICAgc2V0U2VlTW9yZUFuc3dlcnNUZXh0KCdTZWUgTW9yZSBBbnN3ZXJzJyk7XG4gICAgfVxuICB9LCBbZXhwYW5kZWRdKTtcblxuICBjb25zdCBzaG93TW9yZUFuc3dlcnMgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5xdWVzdGlvbkFuZEFuc3dlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb25HcmlkfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17cWFzdHlsZXMucX0+UTo8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb259PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cWFzdHlsZXMucXVlc3Rpb25Cb2R5fSA+e3F1ZXN0aW9uX2JvZHl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLnF1ZXN0aW9uSGVscGZ1bH0+XG4gICAgICAgICAgPEhlbHBmdWwgcXVlc3Rpb25faWQ9e3F1ZXN0aW9uX2lkfSBoZWxwZnVsbmVzcz17cXVlc3Rpb25faGVscGZ1bG5lc3N9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cImFkZC1hbnN3ZXItYnV0dG9uXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5hZGRBbnN3ZXJCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0gdHlwZT1cImJ1dHRvblwiPkFkZCBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJNb2RhbFxuICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxuICAgICAgICAgIGdldFF1ZXN0aW9ucz17Z2V0UXVlc3Rpb25zfVxuICAgICAgICAgIHF1ZXN0aW9uX2lkPXtxdWVzdGlvbl9pZH1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Fhc3R5bGVzLmFuc3dlckdyaWR9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtxYXN0eWxlcy5hfT5BOjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxYXN0eWxlcy5hbnN3ZXJMaXN0fT5cbiAgICAgICAgICB7ZGlzcGxheWVkQW5zd2Vycy5tYXAoKGFuc3dlciwgaWR4KSA9PiA8QW5zd2VyIGtleT17aWR4fSBhbnN3ZXI9e2Fuc3dlcn0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Fuc3dlckxpc3QubGVuZ3RoID4gMiA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtdGVzdGlkPVwic2hvdy1tb3JlLWFuc3dlcnMtYnV0dG9uXCIgY2xhc3NOYW1lPXtxYXN0eWxlcy5zaG93TW9yZUFuc3dlcnNCdXR0b259IG9uQ2xpY2s9e3Nob3dNb3JlQW5zd2Vyc30+e3NlZU1vcmVBbnN3ZXJzVGV4dH08L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVDb21wb25lbnRzL0FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCBxYXN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZUNvbXBvbmVudHMvUUEubW9kdWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBRdWVzdGlvbk1vZGFsKHsgb3Blbiwgb25DbG9zZSwgZ2V0UXVlc3Rpb25zLCBwcm9kdWN0SWQgfSkge1xuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBSZWdFeHAoXG4gICAgL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaVxuICApO1xuXG4gIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBzZXRRdWVzdGlvbignJyk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcXVlc3Rpb25JbmZvID0ge1xuICAgICAgYm9keTogcXVlc3Rpb24sXG4gICAgICBuYW1lOiB1c2VybmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZCxcbiAgICB9O1xuICAgIGlmICghdmFsaWRFbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG4gICAgICBzZXRFcnJvcignKllvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXhpb3MucG9zdCgnL3FhL3F1ZXN0aW9ucycsIHF1ZXN0aW9uSW5mbylcbiAgICAgIC50aGVuKCgpID0+IGdldFF1ZXN0aW9ucygyMDExMSkpXG4gICAgICAudGhlbigoKSA9PiBjbGVhckZvcm0oKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tb3ZlcmxheVwiXG4gICAgICAgIGNsYXNzTmFtZT17b3BlbiA/IHN0eWxlcy5vdmVybGF5IDogJyd9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknIDogJ3RyYW5zbGF0ZSgtNTAlLCAtMTUwdmgpJ1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGgzPkFzayBZb3VyIFF1ZXN0aW9uIGFib3V0IHRoZSBQcm9kdWN0PC9oMz5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQm9keX0+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJxdWVzdGlvbkZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8cD5RdWVzdGlvbiAqPC9wPlxuICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtdGVzdGlkPVwicXVlc3Rpb24taW5wdXRcIiB2YWx1ZT17cXVlc3Rpb259IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX0gbWF4TGVuZ3RoPVwiMTAwMFwiIGNsYXNzTmFtZT17c3R5bGVzLnFJbnB1dH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPHA+V2hhdCBpcyB5b3VyIG5pY2tuYW1lPyAqPC9wPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtdGVzdGlkPVwicXVlc3Rpb24tdXNlcm5hbWUtaW5wdXRcIiB2YWx1ZT17dXNlcm5hbWV9IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtxYXN0eWxlcy5tb2RhbElucHV0fSBtYXhMZW5ndGg9XCI2MFwiIHBsYWNlaG9sZGVyPVwiZXhhbXBsZTogamFja3NvbjExIVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbmVQcmludH0+e3VzZXJuYW1lLmxlbmd0aCA+IDAgPyAnRm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNzJyA6ICcnfTwvcD5cbiAgICAgICAgICAgIDxwPllvdXIgRW1haWwgKjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLXRlc3RpZD1cInF1ZXN0aW9uLWVtYWlsLWlucHV0XCIgdmFsdWU9e2VtYWlsfSByZXF1aXJlZD1cInJlcXVpcmVkXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlOiBqYWNrc29uMTEhQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3Fhc3R5bGVzLm1vZGFsSW5wdXR9IG1heExlbmd0aD1cIjYwXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZW1haWwubGVuZ3RoID4gMCA/ICdGb3IgYXV0aGVudGljYXRpb24gcmVhc29ucywgeW91IHdpbGwgbm90IGJlIGVtYWlsZWQnIDogJyd9PC9wPlxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRlc3RpZD1cInF1ZXN0aW9uLW1vZGFsLXN1Ym1pdC1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdXR0b259PlN1Ym1pdCBRdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmluZVByaW50fT57ZXJyb3J9PC9wPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Nb2RhbDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zOF9WWEcxME1qdS1PZDE0RGZnMVVjIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCBsaWdodGdyYXkgMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuLyogSEVBRElORyAmIFNFQVJDSCAqL1xcblxcbi5fM0xJWTdfTnVaWWNJcDlYYmJfQlJzTSB7XFxuICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjtcXG4gIC8qIG1hcmdpbjogMDsgKi9cXG4gIC8qIG1hcmdpbi10b3A6IDIwJTsgKi9cXG59XFxuXFxuLm1URGJ6UTFpZVF5enhVZTJyTHVmZiB7XFxuICBcXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4YmViOSwgd2hpdGUpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YmViOTdlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi5fM2RpQ19nUWhtQzdDdXBGeGpqSDlibyB7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5fMVpweXc2MkllS202NGQ1eV9RallNbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCBncmV5IHRoaW47XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5fMmRmR2dPN3hOOEdsc1ZOd1dfR2cyTCB7XFxuICB3aWR0aDogOTUlO1xcbiAgbGluZS1oZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogUSAmIEEgKi9cXG4ucGk3NHJ6bDBwSGV6RmxodEdIRVl6IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLyogUSAmIEEgR1JJRCAqL1xcbi5fM1pvNzFCT0ZlS3VTZzI3ZDV6djQ3YiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxMGZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLl8xdHRpTDg1bkNob2ZuLTljOGVtT1VEIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLl8yOHowcXR4R1FJNDkxbVZhVzRQX2EwIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLl8zZVNmY3g3WG51TlJEYzlLUG1ZTUhzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uXzNDdkFKV2RKYXE0N0lEdVdrUURnTXQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG4uXzM5cTdwdm5XMmNUSElrSGVmNmdCRFAge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uXzM5cTdwdm5XMmNUSElrSGVmNmdCRFA6aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5fMzlaSndmYU9tX2Y5SzFMd3ZxYURxRyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAuNXB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLl8zOVpKd2ZhT21fZjlLMUx3dnFhRHFHOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cXG59XFxuXFxuLyogQU5TV0VSIEdSSUQgKi9cXG5cXG4uXzJmMVdZWml5N1hCWXFHSTRWM2M4Qk8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5fM2tSWkkzY3dYbF9INnl6dVhfYUlSbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuMmVtO1xcbn1cXG5cXG4uXzNlckxrMEtxTUpNQW1LOElTbHFVSm4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XFxufVxcblxcbi5fM2VyTGswS3FNSk1BbUs4SVNscVVKbjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlYmViNGI7XFxufVxcblxcblxcbi8qIC5hbnN3ZXJCb2R5IHtcXG5cXG59ICovXFxuXFxuLktnb0JRNjBFSk9TVDlBTjd1cjh5UiB7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBjb2xvcjogcmdiKDEyOCwgMTI3LCAxMjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLmFuc3dlclBob3RvcyB7XFxuXFxufSAqL1xcblxcbi5JVUtrRl8tRmJ6aUtnakxPbG5lRmIge1xcbiAgbWFyZ2luOiAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLl8xYm5oOXVkMndWZ2V4Q1QwMnRFQWwyIHtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLl8xX2o5bGo3UnVLel9NOEFmZTRMaFk2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5fMV9qOWxqN1J1S3pfTThBZmU0TGhZNjpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuLyogTU9EQUxTICovXFxuXFxuLl8xSkctQlNWU2NBNWxCM1Bia0VxZkUtIHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi8qIEZPT1RFUiAmIEJVVFRPTlMgKi9cXG4uXzJRNjhKYzllYUxWRmhtN0RJRjB4V2Ege1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG59XFxuXFxuLl8xbm13ZlBoVlI3djVubkVuQXB2aXZiOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG5cXG4uXzFubXdmUGhWUjd2NW5uRW5BcHZpdmIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NsaWVudC9zcmMvc3R5bGVDb21wb25lbnRzL1FBLm1vZHVsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsMkRBQTJEO0VBQzNELDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0I7QUFDRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7OztBQUdBOztHQUVHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsV0FBVzs7QUFFWDtFQUNFLFVBQVU7QUFDWjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib3JkZXIge1xcbiAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmF5IDFweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHBhZGRpbmctdG9wOiAzJTtcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG4vKiBIRUFESU5HICYgU0VBUkNIICovXFxuXFxuLnFhaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmO1xcbiAgLyogbWFyZ2luOiAwOyAqL1xcbiAgLyogbWFyZ2luLXRvcDogMjAlOyAqL1xcbn1cXG5cXG4uaGVhZGVyQm94IHtcXG4gIFxcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjhiZWI5LCB3aGl0ZSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiZWI5N2U7XFxuICBtYXJnaW4tbGVmdDogLTEwJTtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLm1hZ25pZnlpbmdHbGFzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hCYXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgdGhpbjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICB3aWR0aDogOTUlO1xcbiAgbGluZS1oZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogUSAmIEEgKi9cXG4ucWFTZWN0aW9uIHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLyogUSAmIEEgR1JJRCAqL1xcbi5xdWVzdGlvbkdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMTBmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5xIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLnF1ZXN0aW9uQm9keSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnF1ZXN0aW9uSGVscGZ1bCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cXG4gIHdpZHRoOiAxMDAlXFxufVxcblxcbi5hZGRBbnN3ZXJCdXR0b24ge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWRkQW5zd2VyQnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJCNjk0O1xcbn1cXG5cXG4ucXVlc3Rpb25BbmRBbnN3ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgLjVweCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi5xdWVzdGlvbkFuZEFuc3dlcjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXFxufVxcblxcbi8qIEFOU1dFUiBHUklEICovXFxuXFxuLmFuc3dlckdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5hIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC4yZW07XFxufVxcblxcbi5hbnN3ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAxZW07XFxufVxcblxcbi5hbnN3ZXI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWJlYjRiO1xcbn1cXG5cXG5cXG4vKiAuYW5zd2VyQm9keSB7XFxuXFxufSAqL1xcblxcbi51c2VyQW5kRGF0ZSB7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBjb2xvcjogcmdiKDEyOCwgMTI3LCAxMjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogLmFuc3dlclBob3RvcyB7XFxuXFxufSAqL1xcblxcbi5waG90byB7XFxuICBtYXJnaW46IC43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYW5zd2VySGVscGZ1bCB7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaG93TW9yZUFuc3dlcnNCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNob3dNb3JlQW5zd2Vyc0J1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI0YyQjY5NDtcXG59XFxuLyogTU9EQUxTICovXFxuXFxuLm1vZGFsSW5wdXQge1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLyogRk9PVEVSICYgQlVUVE9OUyAqL1xcbi5idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi5mb290ZXJCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNGMkI2OTQ7XFxufVxcblxcbi5mb290ZXJCdXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJvcmRlclwiOiBcIl8zOF9WWEcxME1qdS1PZDE0RGZnMVVjXCIsXG5cdFwicWFoZWFkZXJcIjogXCJfM0xJWTdfTnVaWWNJcDlYYmJfQlJzTVwiLFxuXHRcImhlYWRlckJveFwiOiBcIm1URGJ6UTFpZVF5enhVZTJyTHVmZlwiLFxuXHRcIm1hZ25pZnlpbmdHbGFzc1wiOiBcIl8zZGlDX2dRaG1DN0N1cEZ4ampIOWJvXCIsXG5cdFwic2VhcmNoQmFyU2VjdGlvblwiOiBcIl8xWnB5dzYySWVLbTY0ZDV5X1FqWU1vXCIsXG5cdFwic2VhcmNoQmFyXCI6IFwiXzJkZkdnTzd4TjhHbHNWTndXX0dnMkxcIixcblx0XCJxYVNlY3Rpb25cIjogXCJwaTc0cnpsMHBIZXpGbGh0R0hFWXpcIixcblx0XCJxdWVzdGlvbkdyaWRcIjogXCJfM1pvNzFCT0ZlS3VTZzI3ZDV6djQ3YlwiLFxuXHRcInFcIjogXCJfMXR0aUw4NW5DaG9mbi05YzhlbU9VRFwiLFxuXHRcInF1ZXN0aW9uXCI6IFwiXzI4ejBxdHhHUUk0OTFtVmFXNFBfYTBcIixcblx0XCJxdWVzdGlvbkJvZHlcIjogXCJfM2VTZmN4N1hudU5SRGM5S1BtWU1Ic1wiLFxuXHRcInF1ZXN0aW9uSGVscGZ1bFwiOiBcIl8zQ3ZBSldkSmFxNDdJRHVXa1FEZ010XCIsXG5cdFwiYWRkQW5zd2VyQnV0dG9uXCI6IFwiXzM5cTdwdm5XMmNUSElrSGVmNmdCRFBcIixcblx0XCJxdWVzdGlvbkFuZEFuc3dlclwiOiBcIl8zOVpKd2ZhT21fZjlLMUx3dnFhRHFHXCIsXG5cdFwiYW5zd2VyR3JpZFwiOiBcIl8yZjFXWVppeTdYQllxR0k0VjNjOEJPXCIsXG5cdFwiYVwiOiBcIl8za1JaSTNjd1hsX0g2eXp1WF9hSVJuXCIsXG5cdFwiYW5zd2VyXCI6IFwiXzNlckxrMEtxTUpNQW1LOElTbHFVSm5cIixcblx0XCJ1c2VyQW5kRGF0ZVwiOiBcIktnb0JRNjBFSk9TVDlBTjd1cjh5UlwiLFxuXHRcInBob3RvXCI6IFwiSVVLa0ZfLUZiemlLZ2pMT2xuZUZiXCIsXG5cdFwiYW5zd2VySGVscGZ1bFwiOiBcIl8xYm5oOXVkMndWZ2V4Q1QwMnRFQWwyXCIsXG5cdFwic2hvd01vcmVBbnN3ZXJzQnV0dG9uXCI6IFwiXzFfajlsajdSdUt6X004QWZlNExoWTZcIixcblx0XCJtb2RhbElucHV0XCI6IFwiXzFKRy1CU1ZTY0E1bEIzUGJrRXFmRS1cIixcblx0XCJidXR0b25zXCI6IFwiXzJRNjhKYzllYUxWRmhtN0RJRjB4V2FcIixcblx0XCJmb290ZXJCdXR0b25cIjogXCJfMW5td2ZQaFZSN3Y1bm5FbkFwdml2YlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1FBLm1vZHVsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==