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




app.get("/", (req, res) => {
  res.render("trangchu");
});
