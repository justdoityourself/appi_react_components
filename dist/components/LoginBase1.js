"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginBase;

var _material = require("@mui/material");

var _appi_react = require("appi_react");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LoginBase(_ref) {
  var onLogin = _ref.onLogin,
      toSignUp = _ref.toSignUp,
      onWaiting = _ref.onWaiting,
      Logo = _ref.Logo;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      sb = _useState8[0],
      setSb = _useState8[1];

  var tryLogin = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onWaiting(true);
              _context.next = 3;
              return (0, _appi_react.login)(username, password, "", checked);

            case 3:
              result = _context.sent;
              onWaiting(false);
              if (!result) setSb(true);else if (onLogin) onLogin();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function tryLogin() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: 'gvt',
    style: {
      '--gr': '1fr auto 1fr',
      '--gc': '1fr'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Snackbar, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      open: sb,
      autoHideDuration: 3000,
      onClose: function onClose() {
        return setSb(!sb);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
        onClose: function onClose() {
          return setSb(!sb);
        },
        severity: "error",
        sx: {
          width: '100%'
        },
        children: "Invalid Login Details"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
      sx: {
        minWidth: 320,
        maxWidth: 420
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: 'gvt',
          style: {
            '--gr': '1fr',
            '--gc': '1fr',
            'marginBottom': '24px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Logo, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: 'gvt',
          style: {
            '--gr': '1fr 1fr',
            '--gg': '16px',
            '--gc': '1fr'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            value: username,
            onChange: function onChange(e) {
              return setUser(e.target.value);
            },
            label: "Username",
            size: "small",
            style: {
              width: '100%'
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            value: password,
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            },
            label: "Password",
            size: "small",
            type: "password",
            style: {
              width: '100%'
            }
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CardActions, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: 'gvt',
          style: {
            '--gr': '1fr',
            '--gc': 'auto 1fr auto'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: {
              fontSize: "14px"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
              size: "small",
              checked: checked,
              onChange: function onChange() {
                return setChecked(!checked);
              }
            }), " Stay Logged"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
            size: "small",
            onClick: tryLogin,
            children: "Continue"
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'gvt',
      style: {
        '--gr': '1fr auto',
        '--gc': '1fr'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: {
          marginBottom: '16px'
        },
        children: ["Don't have an account? ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            return toSignUp();
          },
          color: "secondary",
          variant: "text",
          children: "Sign Up"
        })]
      })]
    })]
  });
}