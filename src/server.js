import "dotenv/config";
import app from "./app.js";
import { startKeepAlive } from "./utils/renderKeepAlive.js";

async function server() {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
    startKeepAlive();
  });
}

server();
