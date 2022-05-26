"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MailBase;

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MailBase(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary;
  var shouldDark = (0, _material.useMediaQuery)('(prefers-color-scheme: dark)');

  var _useState = (0, _react.useState)(window.localStorage.dark == "true" || shouldDark),
      _useState2 = _slicedToArray(_useState, 2),
      dark = _useState2[0],
      _setDark = _useState2[1];

  var setDark = function setDark(dark) {
    window.localStorage.dark = dark;

    _setDark(dark);
  };

  var theme = (0, _react.useMemo)(function () {
    return (0, _styles.createTheme)({
      palette: {
        mode: dark ? 'dark' : 'light',
        primary: {
          main: primary
          /*
            light?: string;
            main: string;
            dark?: string;
            contrastText?: string;
          */

        },
        secondary: {
          main: secondary
        }
        /*
        ...error
        ...warning
        ...info
        ...success
         */

      }
    });
  }, [dark]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CssBaseline, {}), children instanceof Function ? children({
        dark: dark,
        setDark: setDark
      }) : children]
    })
  });
}