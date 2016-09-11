let gulp = require('gulp')
let exec = require('child_process').exec;

gulp.exec = function(cmd, cb) {
  let child = exec(cmd);
  child.stdout.on('data', function(data) {
    console.log(data);
  });
  child.stderr.on('data', function(data) {
    console.error(data);
  });
  child.on('close', function() {
    cb();
  });
};

gulp.runSequence = require('run-sequence')
require('./tasks')
