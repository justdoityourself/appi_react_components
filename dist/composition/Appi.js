"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Appi;

var _appi_react = require("appi_react");

var _react = require("react");

function Appi(_ref) {
  var children = _ref.children;
  (0, _react.useEffect)(function () {
    (0, _appi_react.loadAppi)({
      autoLogin: true
    });
  }, []);
  return children instanceof Function ? children({}) : children;
}