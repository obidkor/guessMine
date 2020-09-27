//socket 관련 이벤트 파일(서버)

const socketController = (socket) => {
  socket.on("setNickname", ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};

export default socketController;
