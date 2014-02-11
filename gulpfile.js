var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    prefix    = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename');

gulp.task('build', function() {
    gulp.src('source/ouibounce.js')
        .pipe(uglify())
        .pipe(rename('ouibounce.min.js'))
        .pipe(gulp.dest('source'));

    gulp.src('test/ouibounce.css')
        .pipe(prefix())
        .pipe(minifyCSS())
        .pipe(rename('ouibounce.min.css'))
        .pipe(gulp.dest('test'));
});