// gulpfile.js 
var gulp = require('gulp');
var app = require('./app');
var nodemon = require('gulp-nodemon')
 
gulp.task('run-server', function () {
	app.listen(3000);
});

gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js ejs'
  , env: { 'NODE_ENV': 'development' }
  })
})