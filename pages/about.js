import React from 'react'
import Head from 'next/head'
// import logo from '/static/img/hai.png'
import Link from 'next/link'

import Router from 'next/router'
import fetch from 'isomorphic-fetch'

// 组件引入
import Index from './index'

export default class extends React.Component {

	constructor(){
		super();
		this.state = {
			siteInfo:{
				name:'about page'
			}
			
		}
	}

	handler(){
		Router.push({
			pathname: '/index',
			query: { name: 'YUMI' }
		})
	}

	async getInitialProps() {
		const res = await fetch('https://b2b.hzanchu.com/api.php?s=api/order/getlist')
		const statusCode = res.statusCode > 200 ? res.statusCode : false
		const json = await res.json()

		console.log(res)

		// return { statusCode, stars: json.stargazers_count }
	}


	render() {

		// 监听路由变化
		Router.onRouteChangeStart = url => {
		  console.log('App is changing to: ', url)
		}

	    return (
			<div>

				{/* 在head中增加标签 */}
				<Head>
					<title>about page</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>

				{/* state */}
				<p onClick={this.getInitialProps}>{this.state.siteInfo.name}</p>

				{/* 行内样式 */}
				<div style={{ color: '#333' }}>不服嘿嘿嘿</div>

				{/* 点击事件 */}
				<i onClick={this.handler.bind(this)}>js点击跳转index</i>

				{/* 参数跳转 */}
				<Link href={{ pathname: '/index', query: { name: 'lucy' } }}>
					<p>标签跳转index</p>
				</Link>

				<Index />
				
				{/* css */}
				<style jsx>{`

					p {
						color: pink;
					}
					i{
						font-size:20px;
						color:#009e4d;
					}

				`}</style>

				<style global jsx>{`
					/* 
						p.jsx-2780521593{color:pink}i.jsx-2780521593{font-size:30px;color:red} 
					*/
					/* 
						global 不会添加hash值 可能会覆盖局部样式
						i{font-size:30px;color:red}   
					*/
					i{
						font-size:30px;
					}
				`}</style>

			</div>
	    )
	}

}