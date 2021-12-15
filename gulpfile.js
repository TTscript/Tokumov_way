const { src, dest, watch, series, parallel} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require('del');
const sync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function html() {
    return src('src/**.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('build'))
}

function style() {
    return src('src/sass/style.scss')
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(rename('style.min.css'))
        .pipe(sourcemap.write('.'))
        .pipe(dest('build/css'))
        .pipe(sync.stream())
}

function clear() {
    return del('build');
}

function server() {
    sync.init({
        server: 'build'
    })

    watch('src/**.html', series(html)).on('change', sync.reload);
    watch('src/sass/**/*.scss', series(style)).on('change', sync.reload);
}

const copy = (done) => {
  src([
    'src/fonts/*.{woff2,woff}',
    'src/*.ico',
    'src/img/**/*.{png,jpg,svg}',
  ],
  {
    base: "src"
  })
    .pipe(dest("build"))
    done();
}

function copyFonts() {
    return src('src/fonts/*.{woff2,woff}')
      .pipe(dest('build/fonts'));
}

exports.clear = clear;
exports.build = series(clear, copy, html, style);
exports.default = series(clear, copy, html, style, server);
