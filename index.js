const socks = require("socksv5");
const port = 25490;

const server = socks.createServer((info, accept, deny) => {
  accept();
});

server.on("error", (err) => {
  console.log("SOCKS5 Server Error:", err);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`SOCKS5 server running on port ${port}`);
});

server.useAuth(socks.auth.None());