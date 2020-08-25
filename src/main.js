let socket = io("/");

$(document).ready(() => {
  console.log("Document ready!!!");

  //Dang ki username thanh cong
  socket.on("server-send-dangki-thanhcong", (data) => {
    let s =
      "<div socketid='" +
      data.id +
      "' class='motUser'>" +
      data.username +
      "</div>";
    $("#danhSachUserOnline").append(s);
  });

  //Dang ki username = ""
  socket.on("server-send-dangki-empty", (data) => {
    alert(data);
  });

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
    $("#txtUser").val("");
  });
});
