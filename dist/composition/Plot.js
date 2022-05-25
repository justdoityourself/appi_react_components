"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Plot;

var _appi_react = require("appi_react");

var _react = require("react");

function Plot(_ref) {
  var children = _ref.children,
      logging = _ref.logging,
      format = _ref.format;
  //TODO
  (0, _react.useEffect)(function () {
    (0, _appi_react.loadAppi)({
      autoLogin: true,
      logging: logging
    });
  }, []);
  return children instanceof Function ? children({}) : children;
}