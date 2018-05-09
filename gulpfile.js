'use strict';

var gulp = require('gulp');
var cryptorescuecoreTasks = require('cryptorescuecore-build');

cryptorescuecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
