/*!
 * AFPdb: Antifreeze Proteins (AFPs) Database.
 * ___________________________________________________
 * Gulp: The streaming build system.
 * https://github.com/gulpjs/gulp | http://gulpjs.com/
 * @author  : Prabhat Kumar, http://prabhatkumar.org/
 * @date    : 11-July-2015
 * ___________________________________________________
 */
'use strict';
// main module.
var gulp                   = require('gulp');
// required modules.
var sass              = require('gulp-sass');
var concat          = require('gulp-concat');
var scsslint     = require('gulp-scss-lint');
var uglify          = require('gulp-uglify');
var beautify      = require('gulp-beautify');
var sourcemaps  = require('gulp-sourcemaps');
var connect        = require('gulp-connect');
var jade              = require('gulp-jade');
var htmlmin        = require('gulp-htmlmin');
var coffee          = require('gulp-coffee');
// utility modules.
var path                   = require('path');
var gutil             = require('gulp-util');
var gulpif              = require('gulp-if');
var size              = require('gulp-size');
var del                     = require('del');
var notify          = require("gulp-notify");
var rename          = require("gulp-rename");
var replace        = require('gulp-replace');
var bytediff      = require('gulp-bytediff');
var chmod            = require('gulp-chmod');
