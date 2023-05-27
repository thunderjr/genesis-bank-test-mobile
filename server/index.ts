import "dotenv/config";
import { fastify } from "fastify";

import { connect as connectToDb } from "./db/mongo";
import routes from "./routes";

const PORT = Number(process.env.PORT) || 3333;

const app = fastify();
app.register(routes);

connectToDb().then(() => {
  app.listen({ host: "0.0.0.0", port: PORT }, (err, address) => {
    if (err) process.exit(1);
    console.log(`Server listening on ${address}`);
  });
});
