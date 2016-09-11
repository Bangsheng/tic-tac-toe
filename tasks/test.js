const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () =>
  gulp.src([
    'test/libs/*.js'
  ], {
    read: false
  })
  .pipe(mocha({
    ui: 'bdd',
    reporter: 'spec'
  }))
);
