// socket.io-client 모듈로부터 io 함수 불러오기
import io from "socket.io-client";

// io 메서드를 사용하여 서버의 URL과 포트에 맞는 소켓 객체 생성
// 소켓 객체란 io 함수가 반환하는 객체로, 이 객체를 통해 클라이언트와 서버 간의 실시간 통신이 이뤄짐
const socket = io("ws://localhost:8080");

// on 메서드 : 이벤트 리스너를 붙이는 메서드 (이벤트 핸들러를 설정하는 메서드)
// message 이벤트 : 서버로부터 메시지를 받았을 때 발생
socket.on("message", (text) => {
  // createElement 메서드 : HTML 요소를 생성하는 메서드
  const element = document.createElement("li");
  // innerHTML 프로퍼티 : HTML 요소의 내용을 설정하는 프로퍼티
  element.innerHTML = text;
  // querySelector 메서드 : CSS 선택자로 HTML 요소를 찾는 메서드
  // appendChild 메서드 : HTML 요소를 추가하는 메서드
  document.querySelector("ul").appendChild(element);
});

// onclick 프로퍼티 : HTML 요소를 클릭했을 때 실행되는 이벤트 핸들러를 설정하는 프로퍼티
// button 요소를 클릭했을 때 실행되는 이벤트 핸들러 설정
document.querySelector("button").onclick = () => {
  // querySelector 메서드 : CSS 선택자로 HTML 요소를 찾는 메서드
  // value 프로퍼티 : input 요소의 값을 가져오는 프로퍼티
  const text = document.querySelector("input").value;
  // socket.emit 메서드 : 이벤트를 발생시키는 메서드
  socket.emit("message", text);
};
