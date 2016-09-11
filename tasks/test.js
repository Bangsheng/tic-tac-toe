const gulp = require('gulp')
const mocha = require('gulp-mocha')
const babel = require('babel-core/register')

gulp.task('test', () =>
  gulp.src([
    'test/libs/*.js',
    'test/actions/*.js',
    'test/reducers/*.js',
    'test/components/*.js'
  ], {
    read: false
  })
  .pipe(mocha({
    ui: 'bdd',
    reporter: 'spec',
    compilers: {
      js: babel
    }
  }))
)
