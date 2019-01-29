import React from 'react'
import Head from 'next/head'

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
				{/* 在head中增加标签 */}
				<Head>
					<title>index page</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<p>{this.state.siteInfo.name}</p>
			</div>
	    )
	}

}

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