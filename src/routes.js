const articles = require('./controllers/articles')
const books = require('./controllers/books')

const validator = require('express-joi-validation').createValidator({})
const articleSchemas = require('./validation-schemas/articles')

module.exports = app => {
  app.get('/articles', validator.query(articleSchemas.list), articles.list)
  app.get('/articles/:id', articles.detail)

  app.get('/books/lists', books.listList)
  app.get('/books/:list', books.list)
}
