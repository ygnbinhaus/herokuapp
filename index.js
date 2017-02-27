const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));
app.get('/',function(req,res){
	res.send('Hello Heroku')
	})
app.listen(app.get('port'),function(err){
	if (err) {
		return console.log("An error occured",err)
	}
	console.log('Example app listening on port 5000')
	})
