'use strict'

const Express = require('express')
const app = new Express()
const port = 3000
const isProd = process.env.NODE_ENV === 'production'
const bodyParser = require('body-parser')
const judge = require('./libs/judge')

if (!isProd) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack-dev-config')
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.use('/public', Express.static('.build/public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/result-check', bodyParser.json(), function (req, res) {
  let game = req.body
  res.json({
    win: judge.hasWon(game) ? game.player : 0,
    noTileLeft: judge.noTileLeft(game.board)
  })
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port, port)
  }
})
