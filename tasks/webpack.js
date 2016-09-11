'use strict'
const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const path = require('path')

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: './index',
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
}

gulp.task('webpack', () => {
  return gulp.src(['./index.js'])
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest('.build/public/js'))
})
