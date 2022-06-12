"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppiTable;

var _react = require("react");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _FilterList = _interopRequireDefault(require("@mui/icons-material/FilterList"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

var headCells = [{
  id: 'id',
  numeric: false,
  disablePadding: true,
  label: 'ID'
}, {
  id: 'created',
  numeric: true,
  disablePadding: false,
  label: 'Created'
}];

function EnhancedTableHead(props) {
  var onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableHead, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.TableRow, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
        padding: "checkbox",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
          color: "primary",
          indeterminate: numSelected > 0 && numSelected < rowCount,
          checked: rowCount > 0 && numSelected === rowCount,
          onChange: onSelectAllClick,
          inputProps: {
            'aria-label': 'select all desserts'
          }
        })
      }), headCells.map(function (headCell) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
          align: headCell.numeric ? 'right' : 'left',
          padding: headCell.disablePadding ? 'none' : 'normal',
          sortDirection: orderBy === headCell.id ? order : false,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableSortLabel, {
            active: orderBy === headCell.id,
            direction: orderBy === headCell.id ? order : 'asc',
            onClick: createSortHandler(headCell.id),
            children: headCell.label
          })
        }, headCell.id);
      })]
    })
  });
}

var EnhancedTableToolbar = function EnhancedTableToolbar(_ref) {
  var numSelected = _ref.numSelected,
      title = _ref.title;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Toolbar, {
    sx: _objectSpread({
      pl: {
        sm: 2
      },
      pr: {
        xs: 1,
        sm: 1
      }
    }, numSelected > 0 && {
      bgcolor: function bgcolor(theme) {
        return (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.activatedOpacity);
      }
    }),
    children: [numSelected > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
      sx: {
        flex: '1 1 100%'
      },
      color: "inherit",
      variant: "subtitle1",
      component: "div",
      children: [numSelected, " selected"]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      sx: {
        flex: '1 1 100%'
      },
      variant: "h6",
      id: "tableTitle",
      component: "div",
      children: title
    }), numSelected > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: "Delete",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Delete.default, {})
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: "Filter list",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterList.default, {})
      })
    })]
  });
};

function AppiTable(_ref2) {
  var _data$$total;

  var title = _ref2.title,
      data = _ref2.data,
      dense = _ref2.dense,
      limit = _ref2.limit;

  var _useState = (0, _react.useState)('asc'),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = (0, _react.useState)('calories'),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _dense = dense || false;

  var _limit = limit || 10;

  var _useState9 = (0, _react.useState)(_limit),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsPerPage = _useState10[0],
      setRowsPerPage = _useState10[1];

  var total = (data === null || data === void 0 ? void 0 : (_data$$total = data.$total) === null || _data$$total === void 0 ? void 0 : _data$$total.para) || 0;
  var para = (data === null || data === void 0 ? void 0 : data.$para) || {};
  var rows = Object.keys(para).filter(function (k) {
    return !k.startsWith('_');
  }).map(function (id) {
    return _objectSpread({
      id: id
    }, para[id]);
  });

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = rows.map(function (n) {
        return n.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var isSelected = function isSelected(id) {
    return selected.indexOf(id) !== -1;
  };

  var emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - total) : 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: 'gvt',
    style: {
      '--gr': 'auto minmax(0px,1fr) auto',
      '--gc': 'minmax(0px,1fr)'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
      sx: {
        width: '100%',
        mb: 2
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(EnhancedTableToolbar, {
        numSelected: selected.length,
        title: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableContainer, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Table, {
          size: _dense ? 'small' : 'medium',
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(EnhancedTableHead, {
            numSelected: selected.length,
            order: order,
            orderBy: orderBy,
            onSelectAllClick: handleSelectAllClick,
            onRequestSort: handleRequestSort,
            rowCount: total
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.TableBody, {
            children: [rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).sort(getComparator(order, orderBy)).map(function (row, index) {
              var isItemSelected = isSelected(row.id);
              var labelId = "enhanced-table-checkbox-".concat(index);
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.TableRow, {
                hover: true,
                onClick: function onClick(event) {
                  return handleClick(event, row.id);
                },
                role: "checkbox",
                "aria-checked": isItemSelected,
                tabIndex: -1,
                selected: isItemSelected,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
                  padding: "checkbox",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Checkbox, {
                    color: "primary",
                    checked: isItemSelected,
                    inputProps: {
                      'aria-labelledby': labelId
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
                  component: "th",
                  id: labelId,
                  scope: "row",
                  padding: "none",
                  children: row.id
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
                  align: "right",
                  children: new Date(row.created).toLocaleString().split(',')[0]
                })]
              }, row.id);
            }), emptyRows > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableRow, {
              style: {
                height: (_dense ? 33 : 53) * emptyRows
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
                colSpan: 6
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TablePagination, {
        rowsPerPageOptions: [5, 10, 25],
        component: "div",
        count: total,
        rowsPerPage: rowsPerPage,
        page: page,
        onPageChange: handleChangePage,
        onRowsPerPageChange: handleChangeRowsPerPage
      })]
    })
  });
}