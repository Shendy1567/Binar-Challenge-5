
const USERNAME = 'admin'
const PASSWORD = 'admin'
const fs = require('fs')
const path = require('path')
const failLoginPath = path.join(__dirname, "../../login_status/login_fail.json")
const successLoginPath = path.join(__dirname, "../../login_status/login_success.json")

const failLoginText = JSON.parse(fs.readFileSync(failLoginPath), "utf-8")
const successLoginText = JSON.parse(fs.readFileSync(successLoginPath), "utf-8")

module.exports = (req, res, next) => {
  if (req.method == "GET") {
    res.render("login")
    next()
  }
  
  if (req.method == "POST") {
    const {username, password} = (req.body)
    if (username == USERNAME && password == PASSWORD) {
      res.send(successLoginText)
      next()
    } else {
      res.send(failLoginText)
      next()
    }
  }
}