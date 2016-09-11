'use strict'
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const config = {
  src: [
    'actions/**/*.js',
    'components/**/*.js',
    'constants/**/*.js',
    'containers/**/*.js',
    'libs/**/*.js',
    'reducers/**/*.js',
    'tasks/**/*.js',
    'test/**/*.js',
    'index.js',
    'server.js'
  ]
}

gulp.task('eslint', () => {
  gulp.src(config.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
