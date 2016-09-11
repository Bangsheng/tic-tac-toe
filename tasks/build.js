'use strict'
const gulp = require('gulp');

gulp.task('build', (cb) => {
  gulp.runSequence('eslint', 'copy', 'less:prod', 'webpack', cb)
})
