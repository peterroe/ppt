let express = require('express')
let app = express()
let cors = require('cors')

app.use(cors())
app.get('/list',(req,res) => {
	//查询数据库
	const data = ['apple','banana','pear']
	res.send(data)
})

app.listen(3000,() => {
	console.log('3000端口监听中')
})