import express from 'express'
import setupMiddware from './middleware'
import request from 'request-promise'
//import { restRouter } from './api'

const app = express()
setupMiddware(app)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/albums', (req, res) => {
	request('https://api.deezer.com/search/album?q=helloween')
		.then(result => {
			res.json(JSON.parse(result))
		})
})

app.use('/tracks/:albumId', (req, res) => {
	request(`https://api.deezer.com/album/${req.params.albumId}/tracks`)
		.then(result => {
			res.json(JSON.parse(result))
		})
})

app.use('/search', (req, res) => {
	const urlToSearch = `https://api.deezer.com/search/album?q=${req.query.term}`
	request(urlToSearch)
		.then(result => {
			res.json(JSON.parse(result))
		})
})

export default app