const Service = require('../services/books')

exports.list = async (req, res, next) => {
  try {
    const response = await Service.list({
      list: req.params.list
    })

    res.json(response.data.results)
  } catch (error) {
    next(error)
  }
}

exports.listList = async (req, res, next) => {
  try {
    const response = await Service.listList()

    res.json(response.data.results)
  } catch (error) {
    next(error)
  }
}
