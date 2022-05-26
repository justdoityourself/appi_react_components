"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserRow;

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function UserRow(_ref) {
  var profile = _ref.profile,
      onUser = _ref.onUser,
      userId = _ref.userId;
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
        background: profile.color,
        opacity: 0.1
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemButton, {
      onClick: function onClick() {
        return onUser(userId);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemAvatar, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
          sx: {
            width: 48,
            height: 48
          },
          crossOrigin: "anonymous",
          alt: profile === null || profile === void 0 ? void 0 : profile.name,
          src: profile === null || profile === void 0 ? void 0 : profile.avatar
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
        primary: (profile === null || profile === void 0 ? void 0 : profile.name) || "No Username"
      })]
    })]
  });
}