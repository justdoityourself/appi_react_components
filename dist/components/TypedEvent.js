"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TypedEvent;

var _appi_react_components = require("appi_react_components");

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function TypedEvent(_ref) {
  var _event$contents;

  var event = _ref.event;

  switch (event === null || event === void 0 ? void 0 : (_event$contents = event.contents) === null || _event$contents === void 0 ? void 0 : _event$contents.type) {
    case "friend_request":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.Far, {
        id: event.from,
        children: function children(user) {
          var _user$profile, _user$profile2, _user$profile3;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.Event, {
            onEvent: function onEvent() {
              return console.log("click");
            },
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
              sx: {
                width: 48,
                height: 48
              },
              alt: user === null || user === void 0 ? void 0 : (_user$profile = user.profile) === null || _user$profile === void 0 ? void 0 : _user$profile.name,
              src: user === null || user === void 0 ? void 0 : (_user$profile2 = user.profile) === null || _user$profile2 === void 0 ? void 0 : _user$profile2.avatar
            }),
            title: "Friend Request from " + (user === null || user === void 0 ? void 0 : (_user$profile3 = user.profile) === null || _user$profile3 === void 0 ? void 0 : _user$profile3.name),
            subtitle: "Sent " + new Date(event._created).toLocaleString().split(',')[1]
          });
        }
      });

    default:
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.Event, {});
  }
}