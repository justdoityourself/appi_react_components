"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignUpBase;

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

/*
Callback: onSignUp, called when a sign up completes and after login.
Callback: onWaiting(true, false or string), call when a long background event is pending.
Callback: toLogin, called to indicate switch to login view.
Component: Logo, controls the logo graphic.
Boolean: basic, controls if the appi account type will be basic or advanced. ( Advanced takes a few seconds to generate a private key ).
*/
function SignUpBase(_ref) {
  var onSignUp = _ref.onSignUp,
      onWaiting = _ref.onWaiting,
      toLogin = _ref.toLogin,
      Logo = _ref.Logo,
      basic = _ref.basic;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      userError = _useState4[0],
      setUserError = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      pwError = _useState6[0],
      setPwError = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      pw1 = _useState8[0],
      setPw1 = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      pw2 = _useState10[0],
      setPw2 = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      checked = _useState12[0],
      setChecked = _useState12[1];

  var createAccount = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var error;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!username || username.length < 5)) {
                _context.next = 3;
                break;
              }

              setUserError(true);
              return _context.abrupt("return");

            case 3:
              if (!(!pw1 || pw1 !== pw2 || pw1.length < 5)) {
                _context.next = 6;
                break;
              }

              setPwError(true);
              return _context.abrupt("return");

            case 6:
              onWaiting("Generating a secure identity. This will take a second...");
              _context.next = 9;
              return (0, _appi_react.signup)(username, pw1, basic);

            case 9:
              error = _context.sent;

              if (!error) {
                _context.next = 15;
                break;
              }

              onWaiting(false);
              setUserError(true);
              _context.next = 19;
              break;

            case 15:
              _context.next = 17;
              return (0, _appi_react.login)(username, pw1, "", checked);

            case 17:
              onWaiting(false);
              if (onSignUp) onSignUp();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createAccount() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: 'gvt',
    style: {
      '--gr': '1fr auto 1fr',
      '--gc': '1fr'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Card, {
      sx: {
        minWidth: 320,
        maxWidth: 420
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: 'gvt',
          style: {
            '--gr': '1fr',
            '--gc': '1fr',
            'marginBottom': '24px',
            'textAlign': 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "h5",
            children: " Welcome to  "
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Logo, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "subtitle2",
            children: "To start enter a user name and password"
          })]
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
              setUser(e.target.value);
              setUserError(false);
              setPwError(false);
            },
            error: userError,
            helperText: userError ? "Invalid Username" : "",
            label: "Username",
            size: "small",
            style: {
              width: '100%'
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            value: pw1,
            onChange: function onChange(e) {
              setPw1(e.target.value);
              setPwError(false);
              setUserError(false);
            },
            error: pwError,
            helperText: pwError ? "Password invalid or doesn't match" : "",
            label: "Password",
            size: "small",
            type: "password",
            style: {
              width: '100%'
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            value: pw2,
            onChange: function onChange(e) {
              setPw2(e.target.value);
              setPwError(false);
              setUserError(false);
            },
            label: "Confirm Password",
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
            onClick: createAccount,
            children: "Create Account"
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
        children: ["Already have an account? ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            return toLogin();
          },
          color: "secondary",
          variant: "text",
          children: "Login"
        })]
      })]
    })]
  });
}