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
    const lists = response.data.results

    for (const list of lists) {
      // Extracts id
      list.id = list.list_name_encoded
    }

    res.json(lists)
  } catch (error) {
    next(error)
  }
}
