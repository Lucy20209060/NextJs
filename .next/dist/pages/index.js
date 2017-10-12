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
					lineNumber: 17
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
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
		"dev": "next"
	}

	npm run dev

	在浏览其中打开: http://localhost:3000

	此时还没有任何页面

	创建页面
	pages 下 创建index.js

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

	语法和react相同


*/

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0YXRlIiwic2l0ZUluZm8iLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7Ozs7aUNBSU47O21CQUFhO3NDQUFBOzs4SEFFWjs7UUFBQSxBQUFLOztVQUZPLEFBRVosQUFBYSxBQUNILEFBQ0g7QUFERyxBQUNSOztBQUZXLEFBQ1o7U0FLRDs7Ozs7MkJBRVEsQUFDTDswQkFDRixjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQUssTUFBTCxBQUFXLFNBRmQsQUFDRixBQUNDLEFBQXdCLEFBRzFCOzs7OztFQWxCMkIsZ0JBQU0sQTs7QUF1Qm5DOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3NvbWVUZXN0L05leHRKcyJ9