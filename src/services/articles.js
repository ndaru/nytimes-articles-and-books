const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
  params: {
    'api-key': process.env.API_KEY,
    fl: '_id,headline,abstract,lead_paragraph,pub_date,byline'
  }
})

exports.list = params => {
  return client.get('articlesearch.json', { params })
}
