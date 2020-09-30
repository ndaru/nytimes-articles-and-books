const Service = require('../services/articles')

exports.list = async (req, res, next) => {
  try {
    const params = {}
    const query = req.query

    if (query.search) {
      params.q = query.search
    }

    if (query.sort) {
      params.sort = query.sort
    }

    if (query.page) {
      params.page = query.page
    }

    const response = await Service.list(params)
    const articles = response.data.response.docs

    for (const article of articles) {
      // Extracts id
      article.id = article._id.slice(-36)

      delete article._id
    }

    res.json(articles)
  } catch (error) {
    next(error)
  }
}

exports.detail = async (req, res, next) => {
  try {
    const response = await Service.list({
      fq: `_id:("nyt://article/${req.params.id}")`
    })

    const articles = response.data.response.docs

    // Checks existance
    if (articles.length) {
      res.json(articles[0])
    }

    res.status(404).json('Not Found')
  } catch (error) {
    next(error)
  }
}
