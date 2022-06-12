"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppiPlot;

var _line = require("@nivo/line");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var theme = {
  "background": "#ffffff",
  "textColor": "#333333",
  "fontSize": 11,
  "axis": {
    "domain": {
      "line": {
        "stroke": "#777777",
        "strokeWidth": 1
      }
    },
    "legend": {
      "text": {
        "fontSize": 12,
        "fill": "#333333"
      }
    },
    "ticks": {
      "line": {
        "stroke": "#777777",
        "strokeWidth": 1
      },
      "text": {
        "fontSize": 11,
        "fill": "#333333"
      }
    }
  },
  "grid": {
    "line": {
      "stroke": "#dddddd",
      "strokeWidth": 1
    }
  },
  "legends": {
    "title": {
      "text": {
        "fontSize": 11,
        "fill": "#333333"
      }
    },
    "text": {
      "fontSize": 11,
      "fill": "#333333"
    },
    "ticks": {
      "line": {},
      "text": {
        "fontSize": 10,
        "fill": "#333333"
      }
    }
  },
  "annotations": {
    "text": {
      "fontSize": 13,
      "fill": "#333333",
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "link": {
      "stroke": "#000000",
      "strokeWidth": 1,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "outline": {
      "stroke": "#000000",
      "strokeWidth": 2,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "symbol": {
      "fill": "#000000",
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    }
  },
  "tooltip": {
    "container": {
      "background": "#ffffff",
      "color": "#333333",
      "fontSize": 12
    },
    "basic": {},
    "chip": {},
    "table": {},
    "tableCell": {},
    "tableCellValue": {}
  }
};

function AppiPlot(_ref) {
  var title = _ref.title,
      plot = _ref.plot,
      select = _ref.select;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      lines = _useState2[0],
      setLines = _useState2[1];

  (0, _react.useEffect)(function () {
    var _lines = [];

    var _iterator = _createForOfIteratorHelper(select || []),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;
        var data = [];

        var _iterator2 = _createForOfIteratorHelper(Object.entries(plot || {}).filter(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              k = _ref3[0],
              v = _ref3[1];

          return !k.startsWith('_');
        })),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                x = _step2$value[0],
                v = _step2$value[1];

            data.push({
              x: new Date(parseInt(x)).toLocaleString().split(',')[1],
              y: v[id] || 0
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _lines.push({
          id: id,
          data: data
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setLines(_lines);
  }, [plot, select]);
  if (!lines.length) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '100%',
      width: '100%'
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '100%',
      width: '100%'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_line.ResponsiveLine, {
      theme: theme,
      data: lines,
      margin: {
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
      },
      xScale: {
        type: 'point'
      },
      yScale: {
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      },
      yFormat: " >-.2f",
      axisTop: {
        orient: 'top',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: title,
        legendOffset: -32,
        legendPosition: 'middle'
      },
      axisRight: null
      /*axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}*/

      /*axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
      }}*/
      ,
      pointSize: 10,
      pointColor: {
        theme: 'background'
      },
      pointBorderWidth: 2,
      pointBorderColor: {
        from: 'serieColor'
      },
      pointLabelYOffset: -12,
      useMesh: true,
      legends: [{
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [{
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1
          }
        }]
      }]
    })
  });
}

;