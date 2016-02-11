var gulp = require('gulp'),
  	connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server({"port" : 4123});
});
 
gulp.task('default', ['webserver']);