"use strict";
(self["webpackChunkgithubdemo"] = self["webpackChunkgithubdemo"] || []).push([["src_pages_battlePage_index_js"],{

/***/ "./src/pages/battlePage/index.js":
/*!***************************************!*\
  !*** ./src/pages/battlePage/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Battle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/battlePage/index.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Battle() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sessionStorage.getItem('player1') || ''),
      _useState2 = _slicedToArray(_useState, 2),
      player1 = _useState2[0],
      setPlayer1 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sessionStorage.getItem('player2') || ''),
      _useState4 = _slicedToArray(_useState3, 2),
      player2 = _useState4[0],
      setPlayer2 = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      user1Submit = _useState6[0],
      setUser1 = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      user2Submit = _useState8[0],
      setUser2 = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      console.log('Battle页面卸载了');
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "instructions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "instruction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name"
  }, "Enter Two Github Users "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUser,
    style: {
      color: '#FFBF74',
      width: '50%',
      height: '50%',
      marginTop: '20%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name"
  }, "Battle "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFighterJet,
    style: {
      color: '#808080',
      width: '50%',
      height: '50%',
      marginTop: '20%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name"
  }, "see The Winner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrophy,
    style: {
      color: '#F4EA2A',
      width: '50%',
      height: '50%',
      marginTop: '20%'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "players"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "left"
  }, !user1Submit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "player1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: function onChange(_ref) {
      var target = _ref.target;
      setPlayer1(target.value);
    },
    value: player1,
    onKeyDown: function onKeyDown(_ref2) {
      var keyCode = _ref2.keyCode;

      if (!player1.trim()) {
        alert('此输入框为必填字段'); // eslint-disable-line no-alert

        return;
      }

      if (keyCode === 13) {
        sessionStorage.setItem('player1', player1);
        setUser1(true);
      }
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    disabled: !player1,
    onClick: function onClick() {
      sessionStorage.setItem('player1', player1);
      setUser1(true);
    },
    type: "button"
  }, "submit")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://github.com/".concat(player1, ".png?size=200"),
    className: "userAatar",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cancel",
    onClick: function onClick() {
      setUser1(false);
    },
    "aria-hidden": "true"
  }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "right"
  }, !user2Submit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "player2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      setPlayer2(target.value);
    },
    value: player2,
    onKeyDown: function onKeyDown(_ref4) {
      var keyCode = _ref4.keyCode;

      if (keyCode === 13) {
        if (!player2.trim()) {
          alert('此输入框为必填字段'); // eslint-disable-line no-alert

          return;
        }

        sessionStorage.setItem('player2', player2);
        setUser2(true);
      }
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    disabled: !player2,
    onClick: function onClick() {
      sessionStorage.setItem('player2', player2);
      setUser2(true);
    },
    type: "button"
  }, "submit")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://github.com/".concat(player2, ".png?size=200"),
    className: "userAvatar",
    alt: "\u8BF7\u6C42\u4E2D"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cancel",
    onClick: function onClick() {
      setUser2(false);
    },
    "aria-hidden": "true"
  }, "X")))), user1Submit && user2Submit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "winner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: {
      pathname: '/result',
      search: "?player1=".concat(player1, "&player2=").concat(player2)
    }
  }, "Battle"))) : '');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/battlePage/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/battlePage/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".instructions h1{\r\n    text-align: center;\r\n}\r\n.content {\r\n    padding: 0 200px;\r\n}\r\n.content-item{\r\n    width: 30%;\r\n    height: 500px;\r\n    text-align: center;\r\n}\r\n.icon{\r\n    margin-top: 20px;\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 200px;\r\n    background-color: #EEEEEE;\r\n}\r\n.players{\r\n    padding:0 100px;\r\n    display: flex;\r\n}\r\n.players .left, .players .right{\r\n    width: 50%;\r\n}\r\n.players div input{\r\n    width: 80%;\r\n    height: 40px;\r\n    font-size: 20px;\r\n}\r\n.players div button{\r\n    width: 15%;\r\n    height: 46px;\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n\r\n.user{\r\n    width: 95%;\r\n    height:100px;\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n}\r\n.user img {\r\n    height: 100%;\r\n    float: left;\r\n}\r\n.user .cancel{\r\n    text-align: center;\r\n    height: 40px;\r\n    width:40px;\r\n    border-radius: 50%;\r\n    float:right;\r\n    line-height: 40px;\r\n    color: aliceblue;\r\n    font-weight: 900;\r\n    background-color: red;\r\n    margin-top: 30px;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.winner{\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center;\r\n}\r\n.winner button{\r\n    height: 100%;\r\n    width: 100px;\r\n    display: inline-block;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/battlePage/index.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AACA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;AACzB","sourcesContent":[".instructions h1{\r\n    text-align: center;\r\n}\r\n.content {\r\n    padding: 0 200px;\r\n}\r\n.content-item{\r\n    width: 30%;\r\n    height: 500px;\r\n    text-align: center;\r\n}\r\n.icon{\r\n    margin-top: 20px;\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 200px;\r\n    background-color: #EEEEEE;\r\n}\r\n.players{\r\n    padding:0 100px;\r\n    display: flex;\r\n}\r\n.players .left, .players .right{\r\n    width: 50%;\r\n}\r\n.players div input{\r\n    width: 80%;\r\n    height: 40px;\r\n    font-size: 20px;\r\n}\r\n.players div button{\r\n    width: 15%;\r\n    height: 46px;\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n\r\n.user{\r\n    width: 95%;\r\n    height:100px;\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n}\r\n.user img {\r\n    height: 100%;\r\n    float: left;\r\n}\r\n.user .cancel{\r\n    text-align: center;\r\n    height: 40px;\r\n    width:40px;\r\n    border-radius: 50%;\r\n    float:right;\r\n    line-height: 40px;\r\n    color: aliceblue;\r\n    font-weight: 900;\r\n    background-color: red;\r\n    margin-top: 30px;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.winner{\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center;\r\n}\r\n.winner button{\r\n    height: 100%;\r\n    width: 100px;\r\n    display: inline-block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/battlePage/index.css":
/*!****************************************!*\
  !*** ./src/pages/battlePage/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/battlePage/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2JhdHRsZVBhZ2VfaW5kZXhfanMuYzUyMzI1OWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNRLE1BQVQsR0FBa0I7QUFDL0Isa0JBQThCTiwrQ0FBUSxDQUFDTyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsU0FBdkIsS0FBcUMsRUFBdEMsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDTyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsU0FBdkIsS0FBcUMsRUFBdEMsQ0FBdEM7QUFBQTtBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDWiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9hLFdBQVA7QUFBQSxNQUFvQkMsUUFBcEI7O0FBQ0EsbUJBQWdDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9lLFdBQVA7QUFBQSxNQUFvQkMsUUFBcEI7O0FBQ0FqQixFQUFBQSxnREFBUyxDQUFDO0FBQUEsV0FBTSxZQUFNO0FBQ3BCa0IsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNELEtBRlM7QUFBQSxHQUFELEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyRUFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLCtCQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxpREFBQywyRUFBRDtBQUNFLFFBQUksRUFBRWhCLHFFQURSO0FBRUUsU0FBSyxFQUFFO0FBQ0xpQixNQUFBQSxLQUFLLEVBQUUsU0FERjtBQUNhQyxNQUFBQSxLQUFLLEVBQUUsS0FE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QUssY0FBYyx5QkFBeUIsS0FBSyxrQkFBa0IsbUJBQW1CLHNCQUFzQiwyQkFBMkIsS0FBSyxVQUFVLHlCQUF5Qiw4QkFBOEIscUJBQXFCLHNCQUFzQixrQ0FBa0MsS0FBSyxhQUFhLHdCQUF3QixzQkFBc0IsS0FBSyxvQ0FBb0MsbUJBQW1CLEtBQUssdUJBQXVCLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUssd0JBQXdCLG1CQUFtQixxQkFBcUIsMkJBQTJCLGtCQUFrQixLQUFLLGNBQWMsbUJBQW1CLHFCQUFxQiwrQkFBK0IsMkJBQTJCLEtBQUssZUFBZSxxQkFBcUIsb0JBQW9CLEtBQUssa0JBQWtCLDJCQUEyQixxQkFBcUIsbUJBQW1CLDJCQUEyQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix5QkFBeUIsOEJBQThCLHlCQUF5QiwyQkFBMkIsd0JBQXdCLEtBQUssZ0JBQWdCLHlCQUF5QixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLG1CQUFtQixxQkFBcUIscUJBQXFCLDhCQUE4QixLQUFLLG1CQUFtQjtBQUN6K0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWJkZW1vLy4vc3JjL3BhZ2VzL2JhdHRsZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0aHViZGVtby8uL3NyYy9wYWdlcy9iYXR0bGVQYWdlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9naXRodWJkZW1vLy4vc3JjL3BhZ2VzL2JhdHRsZVBhZ2UvaW5kZXguY3NzP2E4NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFVc2VyLCBmYUZpZ2h0ZXJKZXQsIGZhVHJvcGh5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmF0dGxlKCkge1xuICBjb25zdCBbcGxheWVyMSwgc2V0UGxheWVyMV0gPSB1c2VTdGF0ZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXIxJykgfHwgJycpO1xuICBjb25zdCBbcGxheWVyMiwgc2V0UGxheWVyMl0gPSB1c2VTdGF0ZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXIyJykgfHwgJycpO1xuICBjb25zdCBbdXNlcjFTdWJtaXQsIHNldFVzZXIxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIyU3VibWl0LCBzZXRVc2VyMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JhdHRsZemhtemdouWNuOi9veS6hicpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RydWN0aW9uc1wiPlxuICAgICAgPGgxPmluc3RydWN0aW9uPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPkVudGVyIFR3byBHaXRodWIgVXNlcnMgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhVXNlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNGRkJGNzQnLCB3aWR0aDogJzUwJScsIGhlaWdodDogJzUwJScsIG1hcmdpblRvcDogJzIwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5CYXR0bGUgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhRmlnaHRlckpldH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM4MDgwODAnLCB3aWR0aDogJzUwJScsIGhlaWdodDogJzUwJScsIG1hcmdpblRvcDogJzIwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5zZWUgVGhlIFdpbm5lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYVRyb3BoeX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNGNEVBMkEnLCB3aWR0aDogJzUwJScsIGhlaWdodDogJzUwJScsIG1hcmdpblRvcDogJzIwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIXVzZXIxU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5wbGF5ZXIxPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXllcjEodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXIxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCh7IGtleUNvZGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXIxLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn5q2k6L6T5YWl5qGG5Li65b+F5aGr5a2X5q61Jyk7Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyMScsIHBsYXllcjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyMSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGxheWVyMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXIxJywgcGxheWVyMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyMSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+c3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwbGF5ZXIxfS5wbmc/c2l6ZT0yMDBgfSBjbGFzc05hbWU9XCJ1c2VyQWF0YXJcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXIxKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5YXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKVxufVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdXNlcjJTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnBsYXllcjI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGxheWVyMih0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BsYXllcjJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoeyBrZXlDb2RlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYXllcjIudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+atpOi+k+WFpeahhuS4uuW/heWhq+Wtl+autScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3BsYXllcjInLCBwbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcjIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcGxheWVyMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXIyJywgcGxheWVyMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyMih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+c3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwbGF5ZXIyfS5wbmc/c2l6ZT0yMDBgfSBjbGFzc05hbWU9XCJ1c2VyQXZhdGFyXCIgYWx0PVwi6K+35rGC5LitXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcjIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgICAgICB1c2VyMVN1Ym1pdCAmJiB1c2VyMlN1Ym1pdFxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcmVzdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IGA/cGxheWVyMT0ke3BsYXllcjF9JnBsYXllcjI9JHtwbGF5ZXIyfWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBCYXR0bGVcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnN0cnVjdGlvbnMgaDF7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAwIDIwMHB4O1xcclxcbn1cXHJcXG4uY29udGVudC1pdGVte1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pY29ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXHJcXG59XFxyXFxuLnBsYXllcnN7XFxyXFxuICAgIHBhZGRpbmc6MCAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnBsYXllcnMgLmxlZnQsIC5wbGF5ZXJzIC5yaWdodHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuLnBsYXllcnMgZGl2IGlucHV0e1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuLnBsYXllcnMgZGl2IGJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJ7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGhlaWdodDoxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4udXNlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4udXNlciAuY2FuY2Vse1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6NDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndpbm5lciBidXR0b257XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9iYXR0bGVQYWdlL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluc3RydWN0aW9ucyBoMXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAwcHg7XFxyXFxufVxcclxcbi5jb250ZW50LWl0ZW17XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmljb257XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbn1cXHJcXG4ucGxheWVyc3tcXHJcXG4gICAgcGFkZGluZzowIDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ucGxheWVycyAubGVmdCwgLnBsYXllcnMgLnJpZ2h0e1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG4ucGxheWVycyBkaXYgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4ucGxheWVycyBkaXYgYnV0dG9ue1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcntcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgaGVpZ2h0OjEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi51c2VyIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi51c2VyIC5jYW5jZWx7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDo0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcntcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud2lubmVyIGJ1dHRvbntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFVc2VyIiwiZmFGaWdodGVySmV0IiwiZmFUcm9waHkiLCJMaW5rIiwiQmF0dGxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicGxheWVyMSIsInNldFBsYXllcjEiLCJwbGF5ZXIyIiwic2V0UGxheWVyMiIsInVzZXIxU3VibWl0Iiwic2V0VXNlcjEiLCJ1c2VyMlN1Ym1pdCIsInNldFVzZXIyIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiLCJ0cmltIiwiYWxlcnQiLCJzZXRJdGVtIiwicGF0aG5hbWUiLCJzZWFyY2giXSwic291cmNlUm9vdCI6IiJ9