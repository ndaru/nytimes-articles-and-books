const articles = require('./controllers/articles')

module.exports = app => {
  app.get('/articles', articles.list)
  app.get('/articles/:id', articles.detail)
}
