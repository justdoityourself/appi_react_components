"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bind;

var _appi_react = require("appi_react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
// https://dev.to/bhupendra1011/composition-vs-context-in-react-5cmb
function Bind(props) {
  var objects = {};
  var mutate = {};
  /* eslint-disable */

  for (var _i = 0, _Object$entries = Object.entries(props || {}); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];

    if (k == "children") continue;

    var _useAppi = (0, _appi_react.useAppi)(v),
        _useAppi2 = _slicedToArray(_useAppi, 2),
        d = _useAppi2[0],
        s = _useAppi2[1];

    objects[k] = d;
    mutate['set' + k[0].toUpperCase() + k.slice(1)] = s;
  }
  /* eslint-enable */


  return props.children([objects, mutate]);
}