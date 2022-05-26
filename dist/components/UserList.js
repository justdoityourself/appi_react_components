"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserList;

var _material = require("@mui/material");

var _appi_react = require("appi_react");

var _appi_react_components = require("appi_react_components");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function UserList(_ref) {
  var userIds = _ref.userIds,
      onUser = _ref.onUser;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.Walk, {
    object: userIds,
    children: function children(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          publicView = _ref3[0];

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'gvt',
        style: {
          '--gr': 'minmax(0px,1fr)',
          '--gc': 'minmax(0px,1fr)'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.List, {
          sx: {
            overflowY: "scroll",
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper'
          },
          children: [(0, _appi_react.appiKeys)(publicView).map(function (k) {
            var _publicView$k;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_appi_react_components.UserRow, {
              onUser: onUser,
              userId: k,
              profile: publicView === null || publicView === void 0 ? void 0 : (_publicView$k = publicView[k]) === null || _publicView$k === void 0 ? void 0 : _publicView$k.profile
            }, k);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {
            variant: "inset",
            component: "li"
          })]
        })
      });
    }
  });
}

;