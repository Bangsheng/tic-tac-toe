'use strict'
const gulp = require('gulp');

gulp.task('start:dev', (cb) => {
  gulp.exec('node server.js', cb)
})

gulp.task('dev', (cb) => {
  gulp.runSequence('copy', 'less:prod', 'less:dev', 'start:dev', cb);
});
