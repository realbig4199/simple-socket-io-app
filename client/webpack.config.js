// 웹팩 설정파일로 번들링(파일을 하나로 합치는 작업) 과정에서 적용할 모듈을 지정

// path 모듈을 불러옴
// path 모듈을 경로를 결합할 때 사용
const path = require("path");

module.exports = {
  // entry : 웹팩이 파일을 읽기 시작하는 진입점 파일(엔트리 파일)을 지정
  // 엔트리 파일을 index.js로 설정
  entry: "./index.js",

  // output : 번들링된 파일이 저장될 위치와 파일 이름을 지정
  // 번들링 : 여러 개의 파일을 하나로 합치는 작업
  output: {
    // filename : 번들링된 파일의 이름을 지정
    filename: "bundle.js",
    // path : 번들링된 파일의 경로를 지정
    // resolve 메서드 : 첫 번째 인수로 현재 파일의 경로를 전달하고, 두 번째 인수로 상대 경로를 전달하면 절대 경로로 반환
    // __dirname : 현재 파일이 위치한 디렉터리의 절대 경로를 담고 있는 Node.js 전역 변수 (client 디렉터리의 절대 경로를 반환)
    path: path.resolve(__dirname, "dist"),
  },
  // module : 번들링 과정에서 적용할 모듈을 지정
  module: {
    rules: [
      {
        // 로더 : 웹팩이 파일을 해석하고 변환하는 과정에서 사용하는 소프트웨어
        // test : 로더를 적용할 파일을 지정
        // .js 확장자를 가진 모든 파일에 로더를 적용
        test: /\.js$/,
        // exclude : 로더를 적용하지 않을 파일을 지정
        // node_modules 디렉터리에 포함된 파일은 로더를 적용하지 않음
        exclude: /node_modules/,
        // use : 해당 파일에 적용할 로더를 지정
        use: {
          // babel-loader : 자바스크립트 파일을 해석하고 변환하는 로더
          // 번들링 과정에서 사용할 로더를 지정
          loader: "babel-loader",
          // options : 로더의 옵션을 지정
          // @babel/preset-env : ES6+ 코드를 ES5로 변환하는 바벨 프리셋
          // ES6로 변환하는 이유는 ES6와 같은 최신 문법과 기능을
          // 모든 브라우저에서 동일하게 지원하지 않기 때문
          // 그래서 작성은 ES6로 하고, 이를 ES5로 변환하여 모든 브라우저에서 동작하도록 함
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // mode : 웹팩의 모드를 지정
  // 개발 모드로 설정하면 번들링된 파일이 최적화되지 않음
  // 빠른 빌드 시간과 디버깅을 위해 개발 모드로 설정 (코드가 축소되지 않아 가독성이 좋음)
  // 만약 프로덕션 모드로 설정하면 성능을 향상시키고, 파일 크기를 줄여 배포 환경에 적합한 파일을 생성
  mode: "development",
};
