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