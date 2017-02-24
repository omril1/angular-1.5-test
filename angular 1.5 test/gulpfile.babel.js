import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps';
import browserSyncModule from 'browser-sync';
import del from 'del';

var browserSync = browserSyncModule.create();

var paths = {
    scripts: ['./public/javascripts/**.js']
};

gulp.task('clean', function() {
    return del.sync(['public/build']);
});

gulp.task('scripts', function() {
    browserSync.reload();
    return gulp.src(paths.scripts[0])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
    browserSync.init({server: {baseDir: "./public"}});
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['clean','watch', 'scripts']);
