(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: addTodoAction, selectTodoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodoAction\", function() { return addTodoAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectTodoAction\", function() { return selectTodoAction; });\nfunction addTodoAction(data) {\n  return {\n    type: 'ADD_TODO',\n    payload: data\n  };\n}\n;\nfunction selectTodoAction(data) {\n  return {\n    type: 'SELECT_TODO',\n    payload: data\n  };\n}\n;\n\n//# sourceURL=webpack:///./actions/index.js?");

/***/ }),

/***/ "./page/app.jsx":
/*!**********************!*\
  !*** ./page/app.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index.js */ \"./actions/index.js\");\n/* harmony import */ var _sass_page_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/page/app.scss */ \"./sass/page/app.scss\");\n/* harmony import */ var _sass_page_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_page_app_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar ComponentOne = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../component/componentOne.jsx */ \"./component/componentOne.jsx\"));\n});\nvar ComponentTwo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../component/componentTwo.jsx */ \"./component/componentTwo.jsx\"));\n});\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props, context) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props, context));\n    _this.state = {\n      todoValue: '',\n      showComponentOne: false,\n      showComponentTwo: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"_handleTodoChange\",\n    value: function _handleTodoChange(e) {\n      this.setState({\n        todoValue: e.target.value\n      });\n    }\n  }, {\n    key: \"_addTodoClick\",\n    value: function _addTodoClick() {\n      this.props.actions.addTodoAction(this.state.todoValue);\n      this.setState({\n        todoValue: ''\n      });\n    }\n  }, {\n    key: \"_timeFormat\",\n    value: function _timeFormat(time) {\n      var _date = new Date(time);\n\n      var _month = _date.getMonth() + 1;\n\n      var _day = _date.getDate();\n\n      return _month + '月' + _day + '日';\n    }\n  }, {\n    key: \"_todoClick\",\n    value: function _todoClick(i) {\n      this.props.actions.selectTodoAction(i);\n    }\n  }, {\n    key: \"showComponent\",\n    value: function showComponent(name, number) {\n      this.setState(_defineProperty({}, name, !this.state[name]));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var todoValue = this.state.todoValue;\n      var store = this.props.store;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"input\",\n        placeholder: \"\\u8BF7\\u8F93\\u5165TODO\\u5185\\u5BB9\",\n        value: todoValue,\n        onChange: function onChange(e) {\n          return _this2._handleTodoChange(e);\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"btn\",\n        onClick: function onClick() {\n          return _this2._addTodoClick();\n        }\n      }, \"\\u6309\\u94AE\")), store.todoList.map(function (item, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"item\",\n          key: i,\n          onClick: function onClick() {\n            return _this2._todoClick(i);\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"flex\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: item.isSelect ? 'item-select' : 'item-un-select'\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: item.isSelect ? 'item-todo-active' : 'item-todo'\n        }, item.todo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"item-time\"\n        }, _this2._timeFormat(item.time)));\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this2.showComponent('showComponentOne', 1);\n        }\n      }, \"\\u663E\\u793A/\\u9690\\u85CF\\u7EC4\\u4EF61\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this2.showComponent('showComponentTwo', 2);\n        }\n      }, \"\\u663E\\u793A/\\u9690\\u85CF\\u7EC4\\u4EF62\"), this.state.showComponentOne && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n        fallback: null\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentOne, null)), this.state.showComponentTwo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n        fallback: null\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentTwo, null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    store: state\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(_actions_index_js__WEBPACK_IMPORTED_MODULE_3__, dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(App));\n\n//# sourceURL=webpack:///./page/app.jsx?");

/***/ }),

/***/ "./sass/page/app.scss":
/*!****************************!*\
  !*** ./sass/page/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/page/app.scss?");

/***/ })

}]);