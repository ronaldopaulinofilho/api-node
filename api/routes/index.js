const bodyParser = require('body-parser')
const categories = require('./categoriesRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(categories)
}