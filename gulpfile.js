var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('babelify', function() {
  browserify({ entries: './src/app.js', debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dst'))
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['babelify'])
});

gulp.task('default', ['babelify', 'watch']);
