'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', gulp.series(function () {
    return gulp.src(['assets/scss/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
}));

gulp.task('watch', gulp.series(function () {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'assets/scss/*.scss'], gulp.parallel(['sass']));
}));
gulp.task('default', gulp.series(['sass', 'watch']));
