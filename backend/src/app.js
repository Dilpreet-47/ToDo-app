import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser);
import router from "./routes/user.route.js";
app.use("/api/v1/user", router);

export { app };
