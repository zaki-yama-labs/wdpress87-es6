var gulp = require('gulp');
var ts = require('gulp-typescript');

var config = {
  ts: {
    src: [
      'src/**/*.ts'
    ],
    dest: 'dest',
    options: {target: 'ES5', module: 'commonjs'}
  }
};

gulp.task('compile', function() {
  return gulp.src(config.ts.src)
          .pipe(ts(config.ts.options))
          .js
          .pipe(gulp.dest(config.ts.dest));
});

gulp.task('watch', function() {
    gulp.watch(config.ts.src, ['compile']);
});

gulp.task('default', ['compile', 'watch']);
