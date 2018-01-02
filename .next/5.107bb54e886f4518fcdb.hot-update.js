webpackHotUpdate(5,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\someTest\\NextJs\\pages\\index.js';


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

		_this.state = {
			siteInfo: {
				name: 'index page'
			}

		};
		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, 'index page'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			})), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, this.state.siteInfo.name));
		}
	}]);

	return _class;
}(_react2.default.Component);

// 来自Zeit的团队在React的基础和组件模型上构建了Next.js

/*
	npm init -y
	npm install --save react react-dom next

	在 package.json 添加下面的npm脚本命令

		"scripts": {
			"dev": "next",
		    "build": "next build",
		    "start": "next start"
		}

	npm run dev

	在浏览其中打开: http://localhost:3000

	此时还没有任何页面

	创建页面
	pages下创建index.js等页面，语法和react相同

		import React from 'react'
		export default class extends React.Component {

			constructor(){
				super();
				this.state = {
					siteInfo:{
						name:'index page'
					}
					
				}
			}

			render() {
			    return (
					<div>
						<p>{this.state.siteInfo.name}</p>
					</div>
			    )
			}
		}

	行内样式
		<p style={{ color: 'red' }}>
	
	heade添加标签
		import Head from 'next/head'
		export default () =>
			<div>
				<Head>
					<title>My page title</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<p>Hello world!</p>
			</div>
	
	fetch 数据请求
		import fetch from 'isomorphic-fetch'
		async getInitialProps() {
			const res = await fetch('https://b2b.hzanchu.com/api.php?s=api/order/getlist')
			const statusCode = res.statusCode > 200 ? res.statusCode : false
			const json = await res.json()
			console.log(res)
		}

	参数跳转
		import Link from 'next/link'
		import Router from 'next/router'
		
		<Link href={{ pathname: '/index', query: { name: 'lucy' } }}>
			<p>标签跳转index</p>
		</Link>

		handler(){
			Router.push({
				pathname: '/index',
				query: { name: 'YUMI' }
			})
		}




*/

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJzdGF0ZSIsInNpdGVJbmZvIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztpQ0FJTjs7bUJBQWE7c0NBQUE7OzhIQUVaOztRQUFBLEFBQUs7O1VBRk8sQUFFWixBQUFhLEFBQ0gsQUFDSDtBQURHLEFBQ1I7O0FBRlcsQUFDWjtTQUtEOzs7OzsyQkFFUSxBQUNMOzBCQUNGLGNBQUE7O2VBQUE7aUJBQUEsQUFFQztBQUZEO0FBQUEsSUFBQSxrQkFFQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHVEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2VBQTlCO2lCQUpGLEFBRUMsQUFFQyxBQUVEO0FBRkM7d0JBRUQsY0FBQTs7ZUFBQTtpQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQUssTUFBTCxBQUFXLFNBUGQsQUFDRixBQU1DLEFBQXdCLEFBRzFCOzs7OztFQXZCMkIsZ0JBQU0sQTs7QUEyQm5DOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L3NvbWVUZXN0L05leHRKcyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\someTest\\NextJs\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\someTest\\NextJs\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMDdiYjU0ZTg4NmY0NTE4ZmNkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/M2JkODA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaXRlSW5mbzp7XHJcblx0XHRcdFx0bmFtZTonaW5kZXggcGFnZSdcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHQgICAgcmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7Lyog5ZyoaGVhZOS4reWinuWKoOagh+etviAqL31cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDx0aXRsZT5pbmRleCBwYWdlPC90aXRsZT5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PHA+e3RoaXMuc3RhdGUuc2l0ZUluZm8ubmFtZX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdCAgICApXHJcblx0fVxyXG5cclxufVxyXG5cclxuLy8g5p2l6IeqWmVpdOeahOWboumYn+WcqFJlYWN055qE5Z+656GA5ZKM57uE5Lu25qih5Z6L5LiK5p6E5bu65LqGTmV4dC5qc1xyXG5cclxuLypcclxuXHRucG0gaW5pdCAteVxyXG5cdG5wbSBpbnN0YWxsIC0tc2F2ZSByZWFjdCByZWFjdC1kb20gbmV4dFxyXG5cclxuXHTlnKggcGFja2FnZS5qc29uIOa3u+WKoOS4i+mdoueahG5wbeiEmuacrOWRveS7pFxyXG5cclxuXHRcdFwic2NyaXB0c1wiOiB7XHJcblx0XHRcdFwiZGV2XCI6IFwibmV4dFwiLFxyXG5cdFx0ICAgIFwiYnVpbGRcIjogXCJuZXh0IGJ1aWxkXCIsXHJcblx0XHQgICAgXCJzdGFydFwiOiBcIm5leHQgc3RhcnRcIlxyXG5cdFx0fVxyXG5cclxuXHRucG0gcnVuIGRldlxyXG5cclxuXHTlnKjmtY/op4jlhbbkuK3miZPlvIA6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFxyXG5cclxuXHTmraTml7bov5jmsqHmnInku7vkvZXpobXpnaJcclxuXHJcblx05Yib5bu66aG16Z2iXHJcblx0cGFnZXPkuIvliJvlu7ppbmRleC5qc+etiemhtemdou+8jOivreazleWSjHJlYWN055u45ZCMXHJcblxyXG5cdFx0aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cdFx0ZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRcdFx0Y29uc3RydWN0b3IoKXtcclxuXHRcdFx0XHRzdXBlcigpO1xyXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdFx0XHRzaXRlSW5mbzp7XHJcblx0XHRcdFx0XHRcdG5hbWU6J2luZGV4IHBhZ2UnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlbmRlcigpIHtcclxuXHRcdFx0ICAgIHJldHVybiAoXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8cD57dGhpcy5zdGF0ZS5zaXRlSW5mby5uYW1lfTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdOihjOWGheagt+W8j1xyXG5cdFx0PHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFxyXG5cdGhlYWRl5re75Yqg5qCH562+XHJcblx0XHRpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblx0XHRleHBvcnQgZGVmYXVsdCAoKSA9PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHQ8cD5IZWxsbyB3b3JsZCE8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFxyXG5cdGZldGNoIOaVsOaNruivt+axglxyXG5cdFx0aW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblx0XHRhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2IyYi5oemFuY2h1LmNvbS9hcGkucGhwP3M9YXBpL29yZGVyL2dldGxpc3QnKVxyXG5cdFx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUgPiAyMDAgPyByZXMuc3RhdHVzQ29kZSA6IGZhbHNlXHJcblx0XHRcdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdH1cclxuXHJcblx05Y+C5pWw6Lez6L2sXHJcblx0XHRpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblx0XHRpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cdFx0XHJcblx0XHQ8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2luZGV4JywgcXVlcnk6IHsgbmFtZTogJ2x1Y3knIH0gfX0+XHJcblx0XHRcdDxwPuagh+etvui3s+i9rGluZGV4PC9wPlxyXG5cdFx0PC9MaW5rPlxyXG5cclxuXHRcdGhhbmRsZXIoKXtcclxuXHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdHBhdGhuYW1lOiAnL2luZGV4JyxcclxuXHRcdFx0XHRxdWVyeTogeyBuYW1lOiAnWVVNSScgfVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBS0E7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXBCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=