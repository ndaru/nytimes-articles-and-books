const articles = require('./controllers/articles')
const books = require('./controllers/books')

module.exports = app => {
  app.get('/articles', articles.list)
  app.get('/articles/:id', articles.detail)

  app.get('/books/lists', books.listList)
  app.get('/books/:list', books.list)
}
