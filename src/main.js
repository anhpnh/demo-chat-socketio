let socket = io("/");

$(document).ready(() => {
  console.log("Document ready!!!");
  //hide divChatting
  $("#divChatting").hide();

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

  //server-send-dangki-thanhcong-onlyuser
  socket.on("server-send-dangki-thanhcong-onlyuser", () => {
    
    //show divChatting
  $("#divChatting").show(1000);
    //hide form dang ki
    $("#divDangKi").hide(1000);
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
