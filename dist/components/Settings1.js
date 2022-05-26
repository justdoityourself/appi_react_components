"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _Settings;

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _appi_react = require("appi_react");

var _reactColor = require("react-color");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _Settings(_ref) {
  var _user$Public, _user$Public$profile, _user$Public2, _user$Public2$profile;

  var dark = _ref.dark,
      setDark = _ref.setDark,
      setAction = _ref.setAction;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      saving = _useState6[0],
      setSaving = _useState6[1];

  var _useAppi = (0, _appi_react.useAppi)("@user"),
      _useAppi2 = _slicedToArray(_useAppi, 2),
      user = _useAppi2[0],
      setUser = _useAppi2[1];

  (0, _react.useEffect)(function () {
    setSaving(false);
  }, [user]); //const [ip,setIp] = useState("0.0.0.0");
  //const userId = window.AppiClient.UserId();

  /*useEffect( () => {
      (async ()=>{
          const res = await fetch('https://geolocation-db.com/json/');
          const json = await res.json();
          console.log(json);
      })();
  
  }, [])*/

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
          value: name || (user === null || user === void 0 ? void 0 : (_user$Public = user['~public']) === null || _user$Public === void 0 ? void 0 : (_user$Public$profile = _user$Public.profile) === null || _user$Public$profile === void 0 ? void 0 : _user$Public$profile.name),
          style: {
            width: '100%'
          },
          onChange: function onChange(e) {
            setName(e.target.value);
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
            checked: dark,
            onChange: function onChange() {
              return setDark(!dark);
            },
            label: "Dark Mode"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactColor.CirclePicker, {
          color: color || (user === null || user === void 0 ? void 0 : (_user$Public2 = user['~public']) === null || _user$Public2 === void 0 ? void 0 : (_user$Public2$profile = _user$Public2.profile) === null || _user$Public2$profile === void 0 ? void 0 : _user$Public2$profile.color),
          onChangeComplete: function onChangeComplete(_ref2) {
            var hex = _ref2.hex;
            return setColor(hex);
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), (color || name) && !saving ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          size: "small",
          onClick: function onClick() {
            setUser({
              '~public': {
                'profile': {
                  color: color,
                  name: name
                }
              }
            });
            setSaving(true);
          },
          children: "Save"
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          size: "small",
          onClick: function onClick() {
            setAction("");
          },
          children: "Close"
        })]
      })
    })]
  });
}