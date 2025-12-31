import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", routes);

connectDB().then(() => {
  app.listen(PORT, () => console.log("Server is listening to port:", PORT));
});
