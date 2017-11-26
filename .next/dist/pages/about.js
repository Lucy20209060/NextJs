'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index3 = require('./index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logo from '/static/img/hai.png'
var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

		_this.state = {
			siteInfo: {
				name: 'about page'
			}

		};
		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: 'handler',
		value: function handler() {
			_index2.default.push({
				pathname: '/index',
				query: { name: 'YUMI' }
			});
		}
	}, {
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var res, statusCode, json;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _isomorphicFetch2.default)('https://b2b.hzanchu.com/api.php?s=api/order/getlist');

							case 2:
								res = _context.sent;
								statusCode = res.statusCode > 200 ? res.statusCode : false;
								_context.next = 6;
								return res.json();

							case 6:
								json = _context.sent;

								console.log(res);

							// return { statusCode, stars: json.stargazers_count }

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}, {
		key: 'render',
		value: function render() {

			// 监听路由变化
			_index2.default.onRouteChangeStart = function (url) {
				console.log('App is changing to: ', url);
			};

			return _react2.default.createElement('div', {
				className: 'jsx-1764728119'
			}, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
				className: 'jsx-1764728119'
			}, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1764728119'
			})), _react2.default.createElement('p', { onClick: this.getInitialProps, className: 'jsx-1764728119'
			}, this.state.siteInfo.name), _react2.default.createElement('div', { style: { color: '#333' }, className: 'jsx-1764728119'
			}, '\u4E0D\u670D\u563F\u563F\u563F'), _react2.default.createElement('i', { onClick: this.handler.bind(this), className: 'jsx-1764728119'
			}, 'js\u70B9\u51FB\u8DF3\u8F6Cindex'), _react2.default.createElement(_link2.default, { href: { pathname: '/index', query: { name: 'lucy' } } }, _react2.default.createElement('p', {
				className: 'jsx-1764728119'
			}, '\u6807\u7B7E\u8DF3\u8F6Cindex')), _react2.default.createElement(_index4.default, null), _react2.default.createElement(_style2.default, {
				styleId: '573077082',
				css: ['p.jsx-1764728119{color:pink;}', 'i.jsx-1764728119{font-size:20px;color:#009e4d;}']
			}), _react2.default.createElement(_style2.default, {
				styleId: '2472876772',
				css: ['i{font-size:30px;}']
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

// 组件引入
exports.default = _class;