"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Event;

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function Event(_ref) {
  var color = _ref.color,
      icon = _ref.icon,
      onEvent = _ref.onEvent,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
    alignItems: "flex-start",
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: color || "",
        opacity: 0.1
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemButton, {
      onClick: function onClick() {
        return onEvent();
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemAvatar, {
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
        primary: title,
        secondary: subtitle
      })]
    })]
  });
}