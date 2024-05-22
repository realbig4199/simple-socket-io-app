// createServer 메서드를 활용하여 http 서버를 생성
const http = require("http").createServer();

// socket.io 라이브러리를 불러와 http 서버와 연결
// io 객체는 Socket.io 서버 인스턴스로, 이 객체가 클라이언트와의 연결을 수락하고, 이벤트를 발생시키거나 수신
// 첫 번째 인수로 생성한 http 서버를 전달하고, 두 번째 인수로 옵션을 설정
const io = require("socket.io")(http, {
  // cors : Cross-Origin Resource Sharing
  cors: { origin: "*" }, // cors 설정 : 모든 도메인에서 서버에 접근하는 것을 허용
});

// on 메서드 : 이벤트 리스너를 붙이는 메서드 (이벤트 핸들러를 설정하는 메서드)
// connection 이벤트 : 클라이언트가 서버에 연결되었을 때 발생
// socket 객체 : 클라이언트와 서버 간의 통신을 담당하는 객체
// 클라이언트가 서버에 연결될 때마다 socket 객체가 생성되고 이를 통해 클라이언트와 서버는 통신을 주고 받을 수 있음
io.on("connection", (socket) => {
  console.log("a user connected"); // 유저 연결 확인

  // on 메서드 : 이벤트 리스너를 붙이는 메서드 (이벤트 핸들러를 설정하는 메서드)
  // message 이벤트 : 클라이언트로부터 메시지를 받았을 때 발생
  socket.on("message", (message) => {
    // emit 메서드 : 이벤트를 발생시키는 메서드
    // 첫 번째 인수로 이벤트 이름을, 두 번째 인수로 데이터를 전달
    // 즉, message라는 이벤트를 발생시키고, 데이터를 전달
    io.emit("message", `${socket.id.substr(0, 2)} : ${message}`);
  });
});

// http 서버 실행 (8080번 포트에서 서버 실행)
const port = 8080;
http.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행`);
});
