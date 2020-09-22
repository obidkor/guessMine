// gulp setting(pipe) file
// gulp, node-scss, gulp-scss
// gulp-autoprefixer : understadable on every browser
// gulp-csso : minify css
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
};

//fucntion을 export 해주고 gulp (functioname) 이런식으로
//package.json의 script로 실행
//pipe(fucntion())으로 계쏙 연결
function styles() {
  return gulp
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
}

// for automatic builds
function watchFiles() {
  //watch(String path, fuctionname to excute)
  gulp.watch(paths.styles.watch, styles);
}

//series로 함수 연속실행
const dev = gulp.series([styles, watchFiles]);

//gulp가 실행되면 dev가 자동 실행
export default dev;
