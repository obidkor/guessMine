// gulp setting(pipe) file
// gulp, node-scss, gulp-scss
// gulp-autoprefixer : understadable on every browser
// gulp-csso : minify css
// del : delete folder
// browerify / babelify : js module bundler(n개 js파일 하나 파일로 모듈화)
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-browserify";
import babel from "babelify";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};

const clean = () => del(["src/static"]);

//fucntion을 export 해주고 gulp (functioname) 이런식으로
//package.json의 script로 실행
//pipe(fucntion())으로 계쏙 연결
const styles = () =>
  gulp
    .src(paths.styles.src) // build src
    .pipe(sass())
    .pipe(
      autoprefixer({
        //browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest)); // build dest

const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
      bro({
        transform: [
          babel.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(gulp.dest(paths.js.dest));
// for automatic builds
//watch(String path, fuctionname to excute)
const watchFiles = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};

//series로 함수 연속실행
const dev = gulp.series(clean, styles, js, watchFiles);

// build
export const build = gulp.series(clean, styles, js);

//gulp가 실행되면 dev가 자동 실행
export default dev;
