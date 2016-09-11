const gulp = require('gulp');

gulp.task('start:dev', (cb) => {
  gulp.exec('node server.js', cb)
})

gulp.task('dev', (cb) => {
  gulp.runSequence('less:prod', 'less:dev', 'start:dev', cb);
});
