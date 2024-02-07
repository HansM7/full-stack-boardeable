import express from "express";
import authRouter from "./routes/auth.route";
import boardRouter from "./routes/board.route";

const app = express();

app.use(express.json());

app.use("/api", authRouter);
app.use("/api", boardRouter);

app.listen(5000);
