import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import Tooltip from 'rc-tooltip';
import Handle from './Handle';
export default function createSliderWithTooltip(Component) {
  var _a;

  return _a = /*#__PURE__*/function (_React$Component) {
    _inherits(ComponentWrapper, _React$Component);

    var _super = _createSuper(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      _classCallCheck(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: _objectSpread(_objectSpread({}, prevState.visibles), {}, _defineProperty({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = _objectWithoutProperties(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = _objectWithoutProperties(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return React.createElement(Tooltip, Object.assign({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), React.createElement(Handle, Object.assign({}, restProps, {
          style: _objectSpread({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    _createClass(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return React.createElement(Component, Object.assign({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }(React.Component), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}