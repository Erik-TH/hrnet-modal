"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./HrnetModal.css");
var HrnetModal = function HrnetModal(_ref) {
  var openModal = _ref.openModal,
    setOpenModal = _ref.setOpenModal,
    hrnetModalMessage = _ref.hrnetModalMessage;
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