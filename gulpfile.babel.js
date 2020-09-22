// gulp setting(pipe) file
// gulp, node-scss, gulp-scss
import gulp from "gulp";
import sass from "gulp-sass";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
  },
};

//fucntion을 export 해주고 gulp (functioname) 이런식으로
//package.json의 script로 실행
export function styles() {
  return gulp
    .src(paths.styles.src) // build src
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest)); // build dest
}
