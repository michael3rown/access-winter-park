// Include gulp
var gulp = require('gulp');

// Include Plugins
var less = require('gulp-less'); // Compiles LESS into CSS.
var cleanCSS = require('gulp-clean-css'); // Minifies CSS.
var renameCSS = require('gulp-rename'); //Rename files.

// Path Variables
// var paths = {
//	less: 'build-assets/bootstrap-less',
//	css: 'addons/shared_addons/themes/accesswinterpark/css'
// };

// Minify style.css
gulp.task('minify-css', function() {
	return gulp.src('addons/shared_addons/themes/accesswinterpark/css/styles.css')
		.pipe(cleanCSS())
		.pipe(renameCSS(function (path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest('addons/shared_addons/themes/accesswinterpark/css'));
});

// Compile bootstrap.less
gulp.task('less', function() {
	return gulp.src('build-assets/bootstrap-less/bootstrap.less')
		.pipe(less())
		.pipe(gulp.dest('addons/shared_addons/themes/accesswinterpark/css'));
});

// Minify boostrap.css
gulp.task('minify-less', function() {
	return gulp.src('addons/shared_addons/themes/accesswinterpark/css/bootstrap.css')
		.pipe(cleanCSS())
		.pipe(renameCSS(function (path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest('addons/shared_addons/themes/accesswinterpark/css'));
});

// Compile bootstrap.less and Minify boostrap.css
gulp.task('multi-less', function() {
	return gulp.src('build-assets/bootstrap-less/bootstrap.less')
		.pipe(less())
		.pipe(gulp.dest('addons/shared_addons/themes/accesswinterpark/css'))
		.pipe(cleanCSS())
		.pipe(renameCSS(function (path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest('addons/shared_addons/themes/accesswinterpark/css'));
});

// Watch Files for Changes
gulp.task('watch', function() {
	gulp.watch('addons/shared_addons/themes/accesswinterpark/css/styles.css', ['minify-css']);
	gulp.watch('build-assets/bootstrap-less/*.less', ['multi-less']);
});

// Default Task
gulp.task('default', ['minify-css', 'multi-less']);