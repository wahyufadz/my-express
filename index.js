import express from "express";
import dotenv from "dotenv";
dotenv.config();

const { PORT, PRODUCTION } = process.env;

const app = express();

// app.use(express.static());
app.use(express.json());
app.use(express.json());
app.get("/status", (req, res) => res.json({ status: "online" }));

app.listen(PORT, () => console.log(`server started at ${PORT} ${PRODUCTION}`));
