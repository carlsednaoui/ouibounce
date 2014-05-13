var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    prefix    = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    umd_wrap  = require('gulp-wrap-umd'),
    stylus    = require('gulp-stylus'),
    rename    = require('gulp-rename');

gulp.task('build', function() {

    gulp.src('source/ouibounce.js')
        .pipe(umd_wrap({ namespace: 'ouibounce' }))
        .pipe(gulp.dest('build'));

    gulp.src('source/ouibounce.js')
        .pipe(umd_wrap({ namespace: 'ouibounce' }))
        .pipe(uglify())
        .pipe(rename('ouibounce.min.js'))
        .pipe(gulp.dest('build'));

    gulp.src('test/ouibounce.styl')
        .pipe(stylus())
        .pipe(prefix())
        .pipe(rename('ouibounce.css'))
        .pipe(gulp.dest('test'));

    gulp.src('test/ouibounce.styl')
        .pipe(stylus())
        .pipe(prefix())
        .pipe(minifyCSS())
        .pipe(rename('ouibounce.min.css'))
        .pipe(gulp.dest('test'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('test/ouibounce.styl', ['build']);
  gulp.watch('source/ouibounce.js', ['build']);
});
