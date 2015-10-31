'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactApp = (function (_Component) {
  _inherits(ReactApp, _Component);

  function ReactApp(props) {
    _classCallCheck(this, ReactApp);

    _get(Object.getPrototypeOf(ReactApp.prototype), 'constructor', this).call(this, props);

    var placeholder = {
      'try': 'removing some whitespace!',
      or: 'add valid JSON',
      then: ['then', 'click', 'format'],
      hi: 'mom!!!'
    };

    this.state = {
      value: JSON.stringify(placeholder, null, 4),
      txtClass: styles.textArea
    };
  }

  _createClass(ReactApp, [{
    key: '_validate',
    value: function _validate() {
      try {
        var orig = JSON.parse(this.state.value);
        var v = JSON.stringify(orig, null, 4);
        this.setState({
          value: v,
          error: null,
          txtClass: styles.textArea
        });
      } catch (e) {
        this.setState({
          error: 'Invalid JSON: ' + e.name + ' - ' + e.message,
          txtClass: styles.textAreaError
        });
      }
    }
  }, {
    key: '_saveText',
    value: function _saveText(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'app', style: styles.container },
        _react2['default'].createElement(
          'h1',
          { style: styles.header },
          'Format & Validate JSON'
        ),
        _react2['default'].createElement(
          'p',
          { style: styles.error },
          this.state.error
        ),
        _react2['default'].createElement('textarea', {
          rows: '30',
          cols: '80',
          value: this.state.value,
          style: this.state.txtClass,
          onChange: this._saveText.bind(this)
        }),
        _react2['default'].createElement(
          'button',
          { style: styles.button, onClick: this._validate.bind(this) },
          'VALIDATE'
        )
      );
    }
  }]);

  return ReactApp;
})(_react.Component);

exports['default'] = ReactApp;

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  header: {
    flex: '0 1 auto'
  },
  error: {
    color: 'red'
  },
  textArea: {
    flex: '0 1 auto',
    fontFamily: 'monospace'
  },
  textAreaError: {
    flex: '0 1 auto',
    fontFamily: 'monospace',
    border: '1px solid red'
  },
  button: {
    cursor: 'pointer',
    flex: '0 1 auto',
    marginTop: 20,
    padding: 10,
    fontSize: 14
  }
};
module.exports = exports['default'];