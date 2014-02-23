var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    prefix    = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    umd_wrap  = require('gulp-wrap-umd'),
    rename    = require('gulp-rename');

gulp.task('build', function() {

    gulp.src('source/ouibounce.js')
        .pipe(umd_wrap({ namespace: 'ouiBounce' }))
        .pipe(gulp.dest('build'))

    gulp.src('source/ouibounce.js')
        .pipe(umd_wrap({ namespace: 'ouiBounce' }))
        .pipe(uglify())
        .pipe(rename('ouibounce.min.js'))
        .pipe(gulp.dest('build'));

    gulp.src('test/ouibounce.css')
        .pipe(prefix())
        .pipe(minifyCSS())
        .pipe(rename('ouibounce.min.css'))
        .pipe(gulp.dest('test'));

    gulp.src('test/ouibounce.css')
        .pipe(prefix())
        .pipe(gulp.dest('test'));
});
