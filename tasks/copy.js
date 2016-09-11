'use strict'
const gulp = require('gulp')

gulp.task('copy', () => {
  return gulp.src(['assets/styles/fonts/*'])
    .pipe(gulp.dest('.build/public/styles/fonts'))
})
