const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixer', function(done) {
    gulp.src('css/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'));

        done();
})