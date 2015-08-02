var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('compile', function() {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['compile'])
});

gulp.task('default', ['compile', 'watch']);
