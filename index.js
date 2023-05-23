const express = require('express')
const app = express()
const port = 4004

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static("public"))

require('./control')(app)


app.listen(port, () => {
  console.log(`running at port ${port}`)
})
