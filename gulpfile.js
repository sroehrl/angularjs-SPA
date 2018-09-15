

let jsIncludes = [
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'route/*.js',
    'src/*/*.js'
];


let runConfig = ['coffee','pug','sass','js','template','css'];

const gulp = require('gulp');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');
const coffee = require('gulp-coffee');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// installation-tasks

gulp.task('base-coffee',function(){
    return gulp.src('route/base.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('route'));
});
gulp.task('base-pug',function(){
    return gulp.src('route/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('route'));
});

gulp.task('coffee', function(){
    return gulp.src('src/*/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('src'));
});
gulp.task('pug', function(){
    return gulp.src('src/*/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('src'))
});
gulp.task('sass', function(){
    return gulp.src('src/*/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src'))
});

// compile

gulp.task('js', function() {
    return gulp.src(jsIncludes)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('css', function() {
    return gulp.src(['bower_components/*/*min.css','src/*/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('template', function() {
    return gulp.src('src/*/*.html')
        .pipe(flatten())
        .pipe(gulp.dest('./dist/template'));
});
gulp.task('build',['js','css','template']);


gulp.task('default',runConfig);

gulp.task('install',['base-coffee','base-pug','default']);