const Service = require('../services/articles')

exports.list = async (req, res) => {
  const response = await Service.list(req.query)
  const articles = response.data.response.docs

  for (const article of articles) {
    // Extracts id
    article.id = article._id.slice(-36)

    delete article._id
  }

  res.json(articles)
}

exports.detail = async (req, res) => {
  const response = await Service.list({
    fq: `_id:("nyt://article/${req.params.id}")`
  })

  const articles = response.data.response.docs

  // Checks existance
  if (articles.length) {
    res.json(articles[0])
  }

  res.status(404).json('Not Found')
}
