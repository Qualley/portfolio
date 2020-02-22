var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', async function() {
    gulp.src('./css/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css'));
  });