//调用gulp模块
const gulp = require('gulp');
const concat = require('gulp-concat');
//用gulp建立一个搬砖任务
gulp.task('zip_plugin', function () {
    return gulp.src('dist-plugin/*.js').pipe(
        concat('plugin.js')
    ).pipe(
        // gulp.dest('dist-plugin')
        gulp.dest('src/assets/plugins')
    );
});