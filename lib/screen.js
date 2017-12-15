'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/lib/icon/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

require('../styles/screen.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = (_temp = _class = function (_PureComponent) {
  _inherits(Screen, _PureComponent);

  function Screen() {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
  }

  _createClass(Screen, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          logoSource = _props.logoSource,
          titleName = _props.titleName,
          description = _props.description,
          copyright = _props.copyright;

      return _react2.default.createElement(
        _rcQueueAnim2.default,
        { component: 'div', delay: 300, type: ['top', 'bottom'], className: 'passport_screen_container' },
        _react2.default.createElement(
          'div',
          { className: 'container_top', key: 'a' },
          _react2.default.createElement(
            'div',
            { className: 'container_top_header' },
            _react2.default.createElement('img', { className: 'container_top_header_logo', src: logoSource }),
            _react2.default.createElement(
              'span',
              { className: 'container_top_header_title' },
              titleName
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'container_top_desc' },
            description
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container_main', key: 'b' },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'globalFooter container_footer', key: 'c' },
          _react2.default.createElement(
            _rcQueueAnim2.default,
            { component: 'div', delay: 300, type: ['bottom', 'top'] },
            _react2.default.createElement(
              'div',
              { className: 'copyright', key: 'a' },
              'Copyright ',
              _react2.default.createElement(_icon2.default, { type: 'copyright' }),
              ' ',
              copyright
            )
          )
        )
      );
    }
  }]);

  return Screen;
}(_react.PureComponent), _class.propTypes = {
  children: _propTypes2.default.any,
  logoSource: _propTypes2.default.any,
  titleName: _propTypes2.default.string,
  description: _propTypes2.default.string,
  copyright: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
}, _class.defaultProps = {
  children: null,
  logoSource: require('../assets/images/NGCCBOENpgTXpBWUIPnI.svg'),
  titleName: 'Kenote Admin',
  description: '基于 React 和 Ant Design 设计与开发的管理平台.',
  copyright: _react2.default.createElement(
    'span',
    null,
    '2017 ',
    _react2.default.createElement(
      'b',
      null,
      'Kenote'
    ),
    ' \u5B9E\u9A8C\u5BA4\u51FA\u54C1'
  )
}, _temp);
exports.default = Screen;