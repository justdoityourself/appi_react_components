"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Page(_ref) {
  var children = _ref.children,
      page = _ref.page,
      start = _ref.start,
      count = _ref.count,
      format = _ref.format;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];

  if (!format) format = function format(e) {
    return e;
  };
  (0, _react.useEffect)(function () {
    var _elements = [];

    if (!start && !count) {
      for (var _i2 = 0, _Object$entries = Object.entries((page === null || page === void 0 ? void 0 : page["$para"]) || {}); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            idx = _Object$entries$_i[0],
            element = _Object$entries$_i[1];

        if (idx.startsWith('_')) continue;
        if (format(element)) _elements.push(element);
      }
    } else {//TODO AUTO MAP $history and previous pages
    }

    setElements(_elements);
  }, [page, start, count]);
  return children instanceof Function ? children({
    elements: elements
  }) : /*#__PURE__*/(0, _react.cloneElement)(children, {
    elements: elements
  });
}