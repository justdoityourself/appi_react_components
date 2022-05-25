"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MailBase;

var _material = require("@mui/material");

var _appi_react_components = require("appi_react_components");

var _jsxRuntime = require("react/jsx-runtime");

function MailBase(_ref) {
  var page = _ref.page;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.Page, {
    page: page,
    children: function children(_ref2) {
      var currentBreakpoint = _ref2.currentBreakpoint;

      switch (currentBreakpoint) {
        default:
        case 'mobile':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Mobile, {});

        case 'tablet':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Tablet, {});

        case 'laptop':
        case 'desktop':
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Desktop, {});
      }
    }
  });
}