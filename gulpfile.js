//调用gulp模块
const gulp = require('gulp');
const concat = require('gulp-concat');
//用gulp建立一个搬砖任务
gulp.task('zip_plugin', function () {
    return gulp.src('projects/plugin/dist/*.js').pipe(
        concat('all.js')
    ).pipe(
        gulp.dest('js')
    );
});