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

var _jsxFileName = 'D:\\someTest\\NextJs\\pages\\about.js?entry';
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
				css: 'p.jsx-1764728119{color:pink}i.jsx-1764728119{font-size:20px;color:#009e4d}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWdCLEFBSWtCLEFBR0csV0FGZixJQUdjLGNBQ2QiLCJmaWxlIjoicGFnZXNcXGFib3V0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3NvbWVUZXN0L05leHRKcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcvc3RhdGljL2ltZy9oYWkucG5nJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbi8vIOe7hOS7tuW8leWFpVxyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9pbmRleCdcclxuXHRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXRlSW5mbzp7XHJcblx0XHRcdFx0bmFtZTonYWJvdXQgcGFnZSdcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZXIoKXtcclxuXHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0cGF0aG5hbWU6ICcvaW5kZXgnLFxyXG5cdFx0XHRxdWVyeTogeyBuYW1lOiAnWVVNSScgfVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2IyYi5oemFuY2h1LmNvbS9hcGkucGhwP3M9YXBpL29yZGVyL2dldGxpc3QnKVxyXG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlID4gMjAwID8gcmVzLnN0YXR1c0NvZGUgOiBmYWxzZVxyXG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHsgc3RhdHVzQ29kZSwgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdC8vIOebkeWQrOi3r+eUseWPmOWMllxyXG5cdFx0Um91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdBcHAgaXMgY2hhbmdpbmcgdG86ICcsIHVybClcclxuXHRcdH1cclxuXHJcblx0ICAgIHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblxyXG5cdFx0XHRcdHsvKiDlnKhoZWFk5Lit5aKe5Yqg5qCH562+ICovfVxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdFx0ey8qIHN0YXRlICovfVxyXG5cdFx0XHRcdDxwIG9uQ2xpY2s9e3RoaXMuZ2V0SW5pdGlhbFByb3BzfT57dGhpcy5zdGF0ZS5zaXRlSW5mby5uYW1lfTwvcD5cclxuXHJcblx0XHRcdFx0ey8qIOihjOWGheagt+W8jyAqL31cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzMzMycgfX0+5LiN5pyN5Zi/5Zi/5Zi/PC9kaXY+XHJcblxyXG5cdFx0XHRcdHsvKiDngrnlh7vkuovku7YgKi99XHJcblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5oYW5kbGVyLmJpbmQodGhpcyl9Pmpz54K55Ye76Lez6L2saW5kZXg8L2k+XHJcblxyXG5cdFx0XHRcdHsvKiDlj4LmlbDot7PovawgKi99XHJcblx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9pbmRleCcsIHF1ZXJ5OiB7IG5hbWU6ICdsdWN5JyB9IH19PlxyXG5cdFx0XHRcdFx0PHA+5qCH562+6Lez6L2saW5kZXg8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHQ8SW5kZXggLz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7LyogY3NzICovfVxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHBpbms7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzAwOWU0ZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHRcdFx0LyogXHJcblx0XHRcdFx0XHRcdHAuanN4LTI3ODA1MjE1OTN7Y29sb3I6cGlua31pLmpzeC0yNzgwNTIxNTkze2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gXHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0LyogXHJcblx0XHRcdFx0XHRcdGdsb2JhbCDkuI3kvJrmt7vliqBoYXNo5YC8IOWPr+iDveS8muimhuebluWxgOmDqOagt+W8j1xyXG5cdFx0XHRcdFx0XHRpe2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gICBcclxuXHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6MzBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQgICAgKVxyXG5cdH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\about.js?entry */'
			}), _react2.default.createElement(_style2.default, {
				styleId: '2472876772',
				css: 'i{font-size:30px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RnVCLEFBVXFCLGVBQ2YiLCJmaWxlIjoicGFnZXNcXGFib3V0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3NvbWVUZXN0L05leHRKcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcvc3RhdGljL2ltZy9oYWkucG5nJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbi8vIOe7hOS7tuW8leWFpVxyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9pbmRleCdcclxuXHRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXRlSW5mbzp7XHJcblx0XHRcdFx0bmFtZTonYWJvdXQgcGFnZSdcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZXIoKXtcclxuXHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0cGF0aG5hbWU6ICcvaW5kZXgnLFxyXG5cdFx0XHRxdWVyeTogeyBuYW1lOiAnWVVNSScgfVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2IyYi5oemFuY2h1LmNvbS9hcGkucGhwP3M9YXBpL29yZGVyL2dldGxpc3QnKVxyXG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlID4gMjAwID8gcmVzLnN0YXR1c0NvZGUgOiBmYWxzZVxyXG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHsgc3RhdHVzQ29kZSwgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdC8vIOebkeWQrOi3r+eUseWPmOWMllxyXG5cdFx0Um91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdBcHAgaXMgY2hhbmdpbmcgdG86ICcsIHVybClcclxuXHRcdH1cclxuXHJcblx0ICAgIHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblxyXG5cdFx0XHRcdHsvKiDlnKhoZWFk5Lit5aKe5Yqg5qCH562+ICovfVxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdFx0ey8qIHN0YXRlICovfVxyXG5cdFx0XHRcdDxwIG9uQ2xpY2s9e3RoaXMuZ2V0SW5pdGlhbFByb3BzfT57dGhpcy5zdGF0ZS5zaXRlSW5mby5uYW1lfTwvcD5cclxuXHJcblx0XHRcdFx0ey8qIOihjOWGheagt+W8jyAqL31cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzMzMycgfX0+5LiN5pyN5Zi/5Zi/5Zi/PC9kaXY+XHJcblxyXG5cdFx0XHRcdHsvKiDngrnlh7vkuovku7YgKi99XHJcblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5oYW5kbGVyLmJpbmQodGhpcyl9Pmpz54K55Ye76Lez6L2saW5kZXg8L2k+XHJcblxyXG5cdFx0XHRcdHsvKiDlj4LmlbDot7PovawgKi99XHJcblx0XHRcdFx0PExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9pbmRleCcsIHF1ZXJ5OiB7IG5hbWU6ICdsdWN5JyB9IH19PlxyXG5cdFx0XHRcdFx0PHA+5qCH562+6Lez6L2saW5kZXg8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHQ8SW5kZXggLz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR7LyogY3NzICovfVxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHBpbms7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IzAwOWU0ZDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cclxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHRcdFx0LyogXHJcblx0XHRcdFx0XHRcdHAuanN4LTI3ODA1MjE1OTN7Y29sb3I6cGlua31pLmpzeC0yNzgwNTIxNTkze2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gXHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0LyogXHJcblx0XHRcdFx0XHRcdGdsb2JhbCDkuI3kvJrmt7vliqBoYXNo5YC8IOWPr+iDveS8muimhuebluWxgOmDqOagt+W8j1xyXG5cdFx0XHRcdFx0XHRpe2ZvbnQtc2l6ZTozMHB4O2NvbG9yOnJlZH0gICBcclxuXHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6MzBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQgICAgKVxyXG5cdH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=pages\\about.js?entry */'
			}));
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiZmV0Y2giLCJJbmRleCIsInN0YXRlIiwic2l0ZUluZm8iLCJuYW1lIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXMiLCJzdGF0dXNDb2RlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImhhbmRsZXIiLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBR1AsQUFBTyxBQUFXOzs7Ozs7O0FBUGxCOzs7QUFNQTs7OztpQ0FNQzs7bUJBQWE7c0NBQUE7OzhIQUVaOztRQUFBLEFBQUs7O1VBRk8sQUFFWixBQUFhLEFBQ0gsQUFDSDtBQURHLEFBQ1I7O0FBRlcsQUFDWjtTQUtEOzs7Ozs0QkFFUSxBQUNSO21CQUFBLEFBQU87Y0FBSyxBQUNELEFBQ1Y7V0FBTyxFQUFFLE1BRlYsQUFBWSxBQUVKLEFBQVEsQUFFaEI7QUFKWSxBQUNYOzs7Ozs7Ozs7Ozs7ZUFNaUIsK0JBQU0sQSxBQUFOOztZQUFaO0EsdUJBQ0E7QSxxQkFBYSxJQUFBLEFBQUksYUFBSixBQUFpQixNQUFNLElBQXZCLEFBQTJCLGEsQUFBYTs7ZUFDeEMsSUFBQSxBQUFJLEE7O1lBQWpCO0Esd0JBRU47O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUlRLEFBRVI7O0FBQ0E7bUJBQUEsQUFBTyxxQkFBcUIsZUFBTyxBQUNqQztZQUFBLEFBQVEsSUFBUixBQUFZLHdCQUFaLEFBQW9DLEFBQ3JDO0FBRkQsQUFJRzs7MEJBQ0YsY0FBQTtlQUFBOztlQUFBO2lCQUFBLEFBR0M7QUFIRDtBQUFBLElBQUEsa0JBR0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLDBEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7ZUFBQTtpQkFMRixBQUdDLEFBRUMsQUFJRDtBQUpDO3dCQUlELGNBQUEsT0FBRyxTQUFTLEtBQVosQUFBaUIsNEJBQWpCOztlQUFBO2lCQUFBLEFBQW1DO0FBQW5DO1dBQW1DLEFBQUssTUFBTCxBQUFXLFNBVC9DLEFBU0MsQUFBdUQsQUFHdkQsdUJBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFkLEFBQVksQUFBUyxxQkFBckI7O2VBQUE7aUJBQUE7QUFBQTtNQVpELEFBWUMsQUFHQSxtREFBQSxjQUFBLE9BQUcsU0FBUyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQXpCLEFBQVksQUFBa0Isa0JBQTlCOztlQUFBO2lCQUFBO0FBQUE7TUFmRCxBQWVDLEFBR0Esb0RBQUEsQUFBQyxnQ0FBSyxNQUFNLEVBQUUsVUFBRixBQUFZLFVBQVUsT0FBTyxFQUFFLE1BQTNDLEFBQVksQUFBNkIsQUFBUTtlQUFqRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTtlQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQW5CRixBQWtCQyxBQUNDLEFBR0QsbURBQUEsQUFBQzs7ZUFBRDtpQkF0QkQsQUFzQkM7QUFBQTtBQUFBO2FBdEJEO1NBQUE7QUFBQTthQUFBO1NBREUsQUFDRixBQW9ERDtBQXBEQzs7Ozs7RUF0QzBCLGdCQUFNLEEiLCJmaWxlIjoiYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovc29tZVRlc3QvTmV4dEpzIn0=