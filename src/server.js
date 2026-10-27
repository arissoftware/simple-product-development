import "dotenv/config";
import app from "./app.js";

async function server() {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
  });
}

server();
