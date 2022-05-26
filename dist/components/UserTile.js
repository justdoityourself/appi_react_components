"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserTile;

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function UserTile(_ref) {
  var profile = _ref.profile,
      onUser = _ref.onUser,
      userId = _ref.userId;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      height: 72,
      width: 72,
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemButton, {
      style: {
        padding: 0,
        height: "100%",
        width: "100%"
      },
      onClick: function onClick() {
        return onUser(userId);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemAvatar, {
        style: {
          padding: 8,
          height: "100%",
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
          sx: {
            width: 56,
            height: 56
          },
          crossOrigin: "anonymous",
          alt: profile === null || profile === void 0 ? void 0 : profile.name,
          src: profile === null || profile === void 0 ? void 0 : profile.avatar
        })
      })
    })]
  });
}