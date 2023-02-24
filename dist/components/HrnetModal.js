"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./HrnetModal.css");
var HrnetModal = function HrnetModal(_ref) {
  var openModal = _ref.openModal,
    setOpenModal = _ref.setOpenModal,
    hrnetModalMessage = _ref.hrnetModalMessage;
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var close = function close(e) {
      if (e.key === "Escape") {
        setOpenModal(function (toggle) {
          return !toggle;
        });
      }
    };
    window.addEventListener("keydown", close);
    return function () {
      return window.removeEventListener("keydown", close);
    };
  }, [openModal]);
  var content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal ? /*#__PURE__*/_react.default.createElement("div", {
    className: "hrnetModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hrnetModal__wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hrnetModal__content"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "hrnetModal__content--message"
  }, hrnetModalMessage)), /*#__PURE__*/_react.default.createElement("div", {
    className: "hrnetModal__btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Close Modal",
    onClick: function onClick() {
      return setOpenModal(function (toggle) {
        return !toggle;
      });
    },
    className: "btn__hrnetModal--close"
  }, "Close")))) : null);
  return content;
};
var _default = HrnetModal;
exports.default = _default;