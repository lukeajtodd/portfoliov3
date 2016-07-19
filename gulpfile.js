var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();

var sassPaths = [

];

gulp.task('sass', function() {
  return gulp.src('resources/sass/*.scss')
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'ios_saf 8.4'],
      remove: false
    }))
    .pipe(gulp.dest('public/stylesheets'))
    .pipe($.livereload());
});

gulp.task('imagemin', function() {
  gulp.src('public/img/**/*')
  .pipe($.imagemin())
  .pipe(gulp.dest('public/img/'))
});

gulp.task('watch', function () {
    $.livereload.listen();
    gulp.watch('resources/sass/**/*.scss', ['sass']);
});
