'use strict'
const gulp = require('gulp')
const cssnano = require('gulp-cssnano')
const less = require('gulp-less')
const watch = require('gulp-watch')

const config = {
  src: ['assets/styles/main.less'],
  imports: 'assets/styles',
  dest: '.build/public/styles'
}

gulp.task('less:prod', () => {
  return gulp.src(config.src)
    .pipe(less({
      paths: config.imports
    }))
    .pipe(cssnano({
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(gulp.dest(config.dest))
})

gulp.task('less:dev', () => {
  watch(config.src[0], function () {
    gulp.runSequence('less:prod')
  })
})
