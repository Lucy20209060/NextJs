export default () => {
  return (
    <div>
		<p>about page</p>
		<i>啊啊啊啊</i>
		<div style={{ color: '#333' }}>不服嘿嘿嘿</div>

		
		<style jsx>{`

			p {
				color: pink;
			}
			i{
				font-size:30px;
				color:red;
			}

		`}</style>

		<style global jsx>{`
			body {
				background: #009e4c;
			}
	    `}</style>


    </div>
  )
}