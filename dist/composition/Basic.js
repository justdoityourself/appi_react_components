"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Basic;

var _appi_react = require("appi_react");

var _react = require("react");

function Basic(_ref) {
  var children = _ref.children,
      logging = _ref.logging;
  (0, _react.useEffect)(function () {
    (0, _appi_react.loadBasic)({
      autoLogin: true,
      logging: logging
    });
  }, []);
  return children instanceof Function ? children({}) : children;
}