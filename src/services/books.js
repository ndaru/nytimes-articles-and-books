const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3',
  params: {
    'api-key': process.env.API_KEY
  }
})

exports.list = params => {
  return client.get('/lists.json', { params })
}

exports.listList = () => {
  return client.get('/lists/names.json')
}
