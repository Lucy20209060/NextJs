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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index3 = require('./index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/luchao/Desktop/2017/NextJs/pages/about.js?entry';
// import logo from '/static/img/hai.png'


// 组件引入


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
				className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement('title', {
				className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			})), _react2.default.createElement('p', { onClick: this.getInitialProps, className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, this.state.siteInfo.name), _react2.default.createElement('div', { style: { color: '#333' }, className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, '\u4E0D\u670D\u563F\u563F\u563F'), _react2.default.createElement('i', { onClick: this.handler.bind(this), className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'js\u70B9\u51FB\u8DF3\u8F6Cindex'), _react2.default.createElement(_link2.default, { href: { pathname: '/index', query: { name: 'lucy' } }, __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement('p', {
				className: 'jsx-1764728119',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, '\u6807\u7B7E\u8DF3\u8F6Cindex')), _react2.default.createElement(_index4.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), _react2.default.createElement(_style2.default, {
				styleId: '573077082',
				css: 'p.jsx-1764728119{color:pink}i.jsx-1764728119{font-size:20px;color:#009e4d}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFZ0IsQUFJa0IsQUFHRyxXQUZmLElBR2MsY0FDZCIsImZpbGUiOiJwYWdlcy9hYm91dC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjaGFvL0Rlc2t0b3AvMjAxNy9OZXh0SnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcvc3RhdGljL2ltZy9oYWkucG5nJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbi8vIOe7hOS7tuW8leWFpVxuaW1wb3J0IEluZGV4IGZyb20gJy4vaW5kZXgnXG5cdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXRlSW5mbzp7XG5cdFx0XHRcdG5hbWU6J2Fib3V0IHBhZ2UnXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVyKCl7XG5cdFx0Um91dGVyLnB1c2goe1xuXHRcdFx0cGF0aG5hbWU6ICcvaW5kZXgnLFxuXHRcdFx0cXVlcnk6IHsgbmFtZTogJ1lVTUknIH1cblx0XHR9KVxuXHR9XG5cblx0YXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2IyYi5oemFuY2h1LmNvbS9hcGkucGhwP3M9YXBpL29yZGVyL2dldGxpc3QnKVxuXHRcdGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZSA+IDIwMCA/IHJlcy5zdGF0dXNDb2RlIDogZmFsc2Vcblx0XHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0Y29uc29sZS5sb2cocmVzKVxuXG5cdFx0Ly8gcmV0dXJuIHsgc3RhdHVzQ29kZSwgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdC8vIOebkeWQrOi3r+eUseWPmOWMllxuXHRcdFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4ge1xuXHRcdCAgY29uc29sZS5sb2coJ0FwcCBpcyBjaGFuZ2luZyB0bzogJywgdXJsKVxuXHRcdH1cblxuXHQgICAgcmV0dXJuIChcblx0XHRcdDxkaXY+XG5cblx0XHRcdFx0ey8qIOWcqGhlYWTkuK3lop7liqDmoIfnrb4gKi99XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5NeSBwYWdlIHRpdGxlPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHR7Lyogc3RhdGUgKi99XG5cdFx0XHRcdDxwIG9uQ2xpY2s9e3RoaXMuZ2V0SW5pdGlhbFByb3BzfT57dGhpcy5zdGF0ZS5zaXRlSW5mby5uYW1lfTwvcD5cblxuXHRcdFx0XHR7Lyog6KGM5YaF5qC35byPICovfVxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzMzMycgfX0+5LiN5pyN5Zi/5Zi/5Zi/PC9kaXY+XG5cblx0XHRcdFx0ey8qIOeCueWHu+S6i+S7tiAqL31cblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5oYW5kbGVyLmJpbmQodGhpcyl9Pmpz54K55Ye76Lez6L2saW5kZXg8L2k+XG5cblx0XHRcdFx0ey8qIOWPguaVsOi3s+i9rCAqL31cblx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9pbmRleCcsIHF1ZXJ5OiB7IG5hbWU6ICdsdWN5JyB9IH19PlxuXHRcdFx0XHRcdDxwPuagh+etvui3s+i9rGluZGV4PC9wPlxuXHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0PEluZGV4IC8+XG5cdFx0XHRcdFxuXHRcdFx0XHR7LyogY3NzICovfVxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBwaW5rO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpe1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjIwcHg7XG5cdFx0XHRcdFx0XHRjb2xvcjojMDA5ZTRkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2Bcblx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdHAuanN4LTI3ODA1MjE1OTN7Y29sb3I6cGlua31pLmpzeC0yNzgwNTIxNTkze2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdGdsb2JhbCDkuI3kvJrmt7vliqBoYXNo5YC8IOWPr+iDveS8muimhuebluWxgOmDqOagt+W8j1xuXHRcdFx0XHRcdFx0aXtmb250LXNpemU6MzBweDtjb2xvcjpyZWR9ICAgXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRpe1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDwvZGl2PlxuXHQgICAgKVxuXHR9XG5cbn0iXX0= */\n/*@ sourceURL=pages/about.js?entry */'
			}), _react2.default.createElement(_style2.default, {
				styleId: '2472876772',
				css: 'i{font-size:30px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGdUIsQUFVcUIsZUFDZiIsImZpbGUiOiJwYWdlcy9hYm91dC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjaGFvL0Rlc2t0b3AvMjAxNy9OZXh0SnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcvc3RhdGljL2ltZy9oYWkucG5nJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbi8vIOe7hOS7tuW8leWFpVxuaW1wb3J0IEluZGV4IGZyb20gJy4vaW5kZXgnXG5cdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXRlSW5mbzp7XG5cdFx0XHRcdG5hbWU6J2Fib3V0IHBhZ2UnXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVyKCl7XG5cdFx0Um91dGVyLnB1c2goe1xuXHRcdFx0cGF0aG5hbWU6ICcvaW5kZXgnLFxuXHRcdFx0cXVlcnk6IHsgbmFtZTogJ1lVTUknIH1cblx0XHR9KVxuXHR9XG5cblx0YXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2IyYi5oemFuY2h1LmNvbS9hcGkucGhwP3M9YXBpL29yZGVyL2dldGxpc3QnKVxuXHRcdGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZSA+IDIwMCA/IHJlcy5zdGF0dXNDb2RlIDogZmFsc2Vcblx0XHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0Y29uc29sZS5sb2cocmVzKVxuXG5cdFx0Ly8gcmV0dXJuIHsgc3RhdHVzQ29kZSwgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdC8vIOebkeWQrOi3r+eUseWPmOWMllxuXHRcdFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4ge1xuXHRcdCAgY29uc29sZS5sb2coJ0FwcCBpcyBjaGFuZ2luZyB0bzogJywgdXJsKVxuXHRcdH1cblxuXHQgICAgcmV0dXJuIChcblx0XHRcdDxkaXY+XG5cblx0XHRcdFx0ey8qIOWcqGhlYWTkuK3lop7liqDmoIfnrb4gKi99XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5NeSBwYWdlIHRpdGxlPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblxuXHRcdFx0XHR7Lyogc3RhdGUgKi99XG5cdFx0XHRcdDxwIG9uQ2xpY2s9e3RoaXMuZ2V0SW5pdGlhbFByb3BzfT57dGhpcy5zdGF0ZS5zaXRlSW5mby5uYW1lfTwvcD5cblxuXHRcdFx0XHR7Lyog6KGM5YaF5qC35byPICovfVxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzMzMycgfX0+5LiN5pyN5Zi/5Zi/5Zi/PC9kaXY+XG5cblx0XHRcdFx0ey8qIOeCueWHu+S6i+S7tiAqL31cblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5oYW5kbGVyLmJpbmQodGhpcyl9Pmpz54K55Ye76Lez6L2saW5kZXg8L2k+XG5cblx0XHRcdFx0ey8qIOWPguaVsOi3s+i9rCAqL31cblx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9pbmRleCcsIHF1ZXJ5OiB7IG5hbWU6ICdsdWN5JyB9IH19PlxuXHRcdFx0XHRcdDxwPuagh+etvui3s+i9rGluZGV4PC9wPlxuXHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0PEluZGV4IC8+XG5cdFx0XHRcdFxuXHRcdFx0XHR7LyogY3NzICovfVxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBwaW5rO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpe1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjIwcHg7XG5cdFx0XHRcdFx0XHRjb2xvcjojMDA5ZTRkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2Bcblx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdHAuanN4LTI3ODA1MjE1OTN7Y29sb3I6cGlua31pLmpzeC0yNzgwNTIxNTkze2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHQvKiBcblx0XHRcdFx0XHRcdGdsb2JhbCDkuI3kvJrmt7vliqBoYXNo5YC8IOWPr+iDveS8muimhuebluWxgOmDqOagt+W8j1xuXHRcdFx0XHRcdFx0aXtmb250LXNpemU6MzBweDtjb2xvcjpyZWR9ICAgXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRpe1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDwvZGl2PlxuXHQgICAgKVxuXHR9XG5cbn0iXX0= */\n/*@ sourceURL=pages/about.js?entry */'
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkxpbmsiLCJSb3V0ZXIiLCJmZXRjaCIsIkluZGV4Iiwic3RhdGUiLCJzaXRlSW5mbyIsIm5hbWUiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInJlcyIsInN0YXR1c0NvZGUiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsImdldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiaGFuZGxlciIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPLEFBQVc7Ozs7Ozs7QUFQbEI7OztBQU1BOzs7O2lDQU1DOzttQkFBYTtzQ0FBQTs7OEhBRVo7O1FBQUEsQUFBSzs7VUFGTyxBQUVaLEFBQWEsQUFDSCxBQUNIO0FBREcsQUFDUjs7QUFGVyxBQUNaO1NBS0Q7Ozs7OzRCQUVRLEFBQ1I7bUJBQUEsQUFBTztjQUFLLEFBQ0QsQUFDVjtXQUFPLEVBQUUsTUFGVixBQUFZLEFBRUosQUFBUSxBQUVoQjtBQUpZLEFBQ1g7Ozs7Ozs7Ozs7OztlQU1pQiwrQkFBTSxBLEFBQU47O1lBQVo7QSx1QkFDQTtBLHFCQUFhLElBQUEsQUFBSSxhQUFKLEFBQWlCLE1BQU0sSUFBdkIsQUFBMkIsYSxBQUFhOztlQUN4QyxJQUFBLEFBQUksQTs7WUFBakI7QSx3QkFFTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBSVEsQUFFUjs7QUFDQTttQkFBQSxBQUFPLHFCQUFxQixlQUFPLEFBQ2pDO1lBQUEsQUFBUSxJQUFSLEFBQVksd0JBQVosQUFBb0MsQUFDckM7QUFGRCxBQUlHOzswQkFDRixjQUFBO2VBQUE7O2VBQUE7aUJBQUEsQUFHQztBQUhEO0FBQUEsSUFBQSxrQkFHQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7ZUFBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsMERBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztlQUFBO2lCQUxGLEFBR0MsQUFFQyxBQUlEO0FBSkM7d0JBSUQsY0FBQSxPQUFHLFNBQVMsS0FBWixBQUFpQiw0QkFBakI7O2VBQUE7aUJBQUEsQUFBbUM7QUFBbkM7V0FBbUMsQUFBSyxNQUFMLEFBQVcsU0FUL0MsQUFTQyxBQUF1RCxBQUd2RCx1QkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQWQsQUFBWSxBQUFTLHFCQUFyQjs7ZUFBQTtpQkFBQTtBQUFBO01BWkQsQUFZQyxBQUdBLG1EQUFBLGNBQUEsT0FBRyxTQUFTLEtBQUEsQUFBSyxRQUFMLEFBQWEsS0FBekIsQUFBWSxBQUFrQixrQkFBOUI7O2VBQUE7aUJBQUE7QUFBQTtNQWZELEFBZUMsQUFHQSxvREFBQSxBQUFDLGdDQUFLLE1BQU0sRUFBRSxVQUFGLEFBQVksVUFBVSxPQUFPLEVBQUUsTUFBM0MsQUFBWSxBQUE2QixBQUFRO2VBQWpEO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BbkJGLEFBa0JDLEFBQ0MsQUFHRCxtREFBQSxBQUFDOztlQUFEO2lCQXRCRCxBQXNCQztBQUFBO0FBQUE7YUF0QkQ7U0FBQTtBQUFBO2FBQUE7U0FERSxBQUNGLEFBb0REO0FBcERDOzs7OztFQXRDMEIsZ0JBQU0sQSIsImZpbGUiOiJhYm91dC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjaGFvL0Rlc2t0b3AvMjAxNy9OZXh0SnMifQ==