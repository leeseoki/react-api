webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/bail/index.js":
false,

/***/ "./node_modules/character-entities-legacy/index.json":
false,

/***/ "./node_modules/character-reference-invalid/index.json":
false,

/***/ "./node_modules/collapse-white-space/index.js":
false,

/***/ "./node_modules/extend/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-alphabetical/index.js":
false,

/***/ "./node_modules/is-alphanumerical/index.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/is-decimal/index.js":
false,

/***/ "./node_modules/is-hexadecimal/index.js":
false,

/***/ "./node_modules/is-plain-obj/index.js":
false,

/***/ "./node_modules/is-whitespace-character/index.js":
false,

/***/ "./node_modules/is-word-character/index.js":
false,

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ "./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.mjs").default || __webpack_require__(/*! unfetch */ "./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.mjs"));


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.mjs.map


/***/ }),

/***/ "./node_modules/markdown-escapes/index.js":
false,

/***/ "./node_modules/mdast-add-list-metadata/index.js":
false,

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
false,

/***/ "./node_modules/parse-entities/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
false,

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
false,

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
false,

/***/ "./node_modules/react-markdown/lib/renderers.js":
false,

/***/ "./node_modules/react-markdown/lib/symbols.js":
false,

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
false,

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
false,

/***/ "./node_modules/remark-parse/index.js":
false,

/***/ "./node_modules/remark-parse/lib/block-elements.json":
false,

/***/ "./node_modules/remark-parse/lib/decode.js":
false,

/***/ "./node_modules/remark-parse/lib/defaults.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/break.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/link.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/url.js":
false,

/***/ "./node_modules/remark-parse/lib/parse.js":
false,

/***/ "./node_modules/remark-parse/lib/parser.js":
false,

/***/ "./node_modules/remark-parse/lib/set-options.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
false,

/***/ "./node_modules/remark-parse/lib/unescape.js":
false,

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
false,

/***/ "./node_modules/remark-parse/lib/util/html.js":
false,

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
false,

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
false,

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
false,

/***/ "./node_modules/repeat-string/index.js":
false,

/***/ "./node_modules/replace-ext/index.js":
false,

/***/ "./node_modules/state-toggle/index.js":
false,

/***/ "./node_modules/trim-trailing-lines/index.js":
false,

/***/ "./node_modules/trim/index.js":
false,

/***/ "./node_modules/trough/index.js":
false,

/***/ "./node_modules/trough/wrap.js":
false,

/***/ "./node_modules/unherit/index.js":
false,

/***/ "./node_modules/unified/index.js":
false,

/***/ "./node_modules/unist-util-is/index.js":
false,

/***/ "./node_modules/unist-util-remove-position/index.js":
false,

/***/ "./node_modules/unist-util-stringify-position/index.js":
false,

/***/ "./node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/unist-util-visit/index.js":
false,

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/vfile-location/index.js":
false,

/***/ "./node_modules/vfile-message/index.js":
false,

/***/ "./node_modules/vfile/core.js":
false,

/***/ "./node_modules/vfile/index.js":
false,

/***/ "./node_modules/x-is-string/index.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);














var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        className: "jsx-1753027244"
      }, "batman TV show"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
        className: "jsx-1753027244"
      }, this.props.shows.map(function (_ref) {
        var show = _ref.show;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
          key: show.id,
          className: "jsx-1753027244"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "/p/".concat(show.id),
          href: "/post?id=".concat(show.id)
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          className: "jsx-1753027244"
        }, show.name)));
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1753027244"
      }, "h1.jsx-1753027244,a.jsx-1753027244{font-family:\"Arial\";}ul.jsx-1753027244{padding:0;}li.jsx-1753027244{list-style:none;margin:5px 0;}a.jsx-1753027244{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1753027244:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGhpdmFuL0RvY3VtZW50cy93b3Jrc3BhY2UvcmVhY3QtdHJhaW5uaW5nL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUdpQyxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9waGFtdGhpdmFuL0RvY3VtZW50cy93b3Jrc3BhY2UvcmVhY3QtdHJhaW5uaW5nL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dzOiBkYXRhXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+YmF0bWFuIFRWIHNob3c8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMucHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEsIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/phamthivan/Documents/workspace/react-trainning/hello-next/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, "getInitialProps",
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.06a3a4e5626a997744b3.hot-update.js.map