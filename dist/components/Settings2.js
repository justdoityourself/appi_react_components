"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _Settings;

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _appi_react = require("appi_react");

var _reactColor = require("react-color");

var _jsxRuntime = require("react/jsx-runtime");

//This version uses the useOptimistic hook
function _Settings(_ref) {
  var _user$Public, _user$Public$profile, _user$Public2, _user$Public2$profile;

  var useApp = _ref.useApp;

  var _useOptimistic = (0, _appi_react.useOptimistic)("@user"),
      user = _useOptimistic.store,
      setUser = _useOptimistic.setStore,
      flush = _useOptimistic.flush,
      dirty = _useOptimistic.dirty,
      clear = _useOptimistic.clear;

  var _useApp = useApp(),
      dark = _useApp.dark,
      setDark = _useApp.setDark,
      setAction = _useApp.setAction;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
    sx: {
      minWidth: 320,
      maxWidth: 420
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'gvt',
      style: {
        'marginLeft': '20px',
        '--gr': '1fr',
        '--gg': '8px',
        '--gc': 'auto auto 1fr'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Settings, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: "Settings"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardContent, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: 'gvt',
        style: {
          '--gr': 'repeat(5,auto)',
          '--gg': '32px',
          '--gc': '1fr'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
          label: "User Name",
          size: "small",
          value: (user === null || user === void 0 ? void 0 : (_user$Public = user['~public']) === null || _user$Public === void 0 ? void 0 : (_user$Public$profile = _user$Public.profile) === null || _user$Public$profile === void 0 ? void 0 : _user$Public$profile.name) || "",
          style: {
            width: '100%'
          },
          onChange: function onChange(e) {
            setUser({
              "~public": {
                profile: {
                  name: e.target.value
                }
              }
            });
          },
          InputProps: {
            startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
              position: "start",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Person, {})
            })
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: 'gvt',
          style: {
            padding: '0px 8px',
            '--gr': '1fr',
            '--gc': 'auto auto 1fr auto',
            '--gg': '8px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.SettingsBrightness, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
            style: {
              margin: '8px 0px'
            },
            children: "Dark Mode"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Switch, {
            checked: dark || false,
            onChange: function onChange() {
              return setDark(!dark);
            },
            label: "Dark Mode"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactColor.CirclePicker, {
          color: user === null || user === void 0 ? void 0 : (_user$Public2 = user['~public']) === null || _user$Public2 === void 0 ? void 0 : (_user$Public2$profile = _user$Public2.profile) === null || _user$Public2$profile === void 0 ? void 0 : _user$Public2$profile.color,
          onChangeComplete: function onChangeComplete(_ref2) {
            var hex = _ref2.hex;
            return setUser({
              "~public": {
                profile: {
                  color: hex
                }
              }
            });
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          style: {
            width: '100%'
          },
          color: "secondary",
          variant: "outlined",
          size: "small",
          onClick: function onClick() {
            return (0, _appi_react.logout)();
          },
          children: "Logout"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: 'gvt',
        style: {
          '--gr': '1fr',
          '--gc': '1fr auto auto'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), dirty ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          size: "small",
          onClick: function onClick() {
            return flush(true);
          },
          children: "Save"
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          size: "small",
          onClick: function onClick() {
            clear();
            setAction("");
          },
          children: "Close"
        })]
      })
    })]
  });
}