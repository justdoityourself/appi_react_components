"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Appi;

var _appi_react = require("appi_react");

var _react = require("react");

function Appi(_ref) {
  var children = _ref.children,
      logging = _ref.logging;
  (0, _react.useEffect)(function () {
    loadAppi({
      autoLogin: true,
      logging: logging
    });
  }, []);
  return children instanceof Function ? children({}) : children;
}