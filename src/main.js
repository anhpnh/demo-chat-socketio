let socket = io("/");

$(document).ready(() => {
  console.log("Document ready!!!");

  //Dang ki username that bai
  socket.on("server-send-dangki-thatbai", (username) => {
    alert(
      "Username: " +
        username +
        " da duoc dang ki." +
        "\nVui long dang ki username khac!!!"
    );
  });

  //Bat su kien #btnDangki click
  $("#btnDangki").click(() => {
    //client-gui-username
    socket.emit("client-gui-username", $("#txtUser").val());
  });
});
