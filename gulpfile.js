const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('css', () => {
  gulp.src('src/css/*').pipe(browserSync.stream());
});

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    },
    open: false,
    notify: false
  });

  gulp.watch('./src/index.html').on('change', browserSync.reload);
  gulp.watch('./src/js/*').on('change', browserSync.reload);
  gulp.watch('./src/css/*', ['css']);
});
