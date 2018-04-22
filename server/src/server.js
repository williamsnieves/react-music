import express from 'express'
import setupMiddware from './middleware'
//import { restRouter } from './api'

const app = express()
setupMiddware(app)

app.use('/deezer', (req, res) => {
	res.json({response: 'deezer'})
})

export default app