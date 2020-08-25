let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
let server = require("http").Server(app);
let io = require("socket.io")(server);
let PORT = process.env.PORT || 3000;

server.listen(PORT);
console.log(`"Server started ${PORT}`);

let mangUsersOnline = [];

//client connect
io.on("connection", (socket) => {
  console.log("Client connected: " + socket.id);

  //client-gui-username
  socket.on("client-gui-username", (username) => {
    if (username === "") {
      socket.emit("server-send-dangki-empty", "Vui long nhap username");
    } else if (mangUsersOnline.indexOf(username) >= 0) {
      socket.emit("server-send-dangki-thatbai", username);
    } else {
      console.log("Co nguoi dang ki voi username la: " + username);
      mangUsersOnline.push(username);
      //server-send-dangki-thanhcong
      io.sockets.emit("server-send-dangki-thanhcong", {
        username: username,
        id: socket.id,
      });
    }
  });

  //client disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected: " + socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("trangchu");
});
