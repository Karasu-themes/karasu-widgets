const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  rename=  require('gulp-rename'),
	  autoprefixer = require('gulp-autoprefixer'),
	  minifyCSS = require('gulp-clean-css')

let outPath = './dist';

/*
COMPILAR CSS
=================*/
gulp.task('css-build', function(){
	gulp.src('./source/*.scss')
	//sass
	.pipe(sass().on('Sass build error', sass.logError))
	//Autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
		cascade: true
	}))
	.pipe(gulp.dest(outPath));

	//minify
	gulp.src('./source/*.scss')
	.pipe(sass().on('CSS minify error', sass.logError))
	//Autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
		cascade: true
	}))
	.pipe(rename('krs-widgets.min.css'))
	.pipe(minifyCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest(outPath));
});


gulp.task('build', function(){
	gulp.watch('./source/**/**', ['css-build']);
})