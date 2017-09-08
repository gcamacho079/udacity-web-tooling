var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  console.log("I'm gulping now!")
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})
