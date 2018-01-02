'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\someTest\\NextJs\\pages\\index.js?entry';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJzdGF0ZSIsInNpdGVJbmZvIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztpQ0FJTjs7bUJBQWE7c0NBQUE7OzhIQUVaOztRQUFBLEFBQUs7O1VBRk8sQUFFWixBQUFhLEFBQ0gsQUFDSDtBQURHLEFBQ1I7O0FBRlcsQUFDWjtTQUtEOzs7OzsyQkFFUSxBQUNMOzBCQUNGLGNBQUE7O2VBQUE7aUJBQUEsQUFFQztBQUZEO0FBQUEsSUFBQSxrQkFFQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHVEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2VBQTlCO2lCQUpGLEFBRUMsQUFFQyxBQUVEO0FBRkM7d0JBRUQsY0FBQTs7ZUFBQTtpQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQUssTUFBTCxBQUFXLFNBUGQsQUFDRixBQU1DLEFBQXdCLEFBRzFCOzs7OztFQXZCMkIsZ0JBQU0sQTs7QUEyQm5DOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3NvbWVUZXN0L05leHRKcyJ9