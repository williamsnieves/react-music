import http from 'http'
import { createServer } from 'http' 

import app from './server'

const server = http.createServer(app)
let currentApp = app

server.listen(3000, () => {
	console.log("Node api from test")
})

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}