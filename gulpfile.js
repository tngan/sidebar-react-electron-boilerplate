var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default',function(){
    // place code for your default task here
    return gulp.src('assets/js/components/*.react.jsx')
        .pipe(react())
        .pipe(gulp.dest('assets/js/components'));
});
