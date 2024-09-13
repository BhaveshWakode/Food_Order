import express from "express";
import cors from "cors";
import { router } from "../backend/routes/index.js";
import dotenv from "dotenv";
import UserRouter from "./routes/User.js";
import OrderRouter from "./routes/Order.js";

dotenv.config({ path: "../.env" });

const pot =5000
console.log("fh");

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204, // Legacy browsers support
};

// Apply CORS with options
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.get("/ddd", (req, res) => {
  res.json({
    msg: "test",
  });
});

app.use("/api/v1", UserRouter);
app.use("/api/v1/orders", OrderRouter);

console.log("fhrrrrrrrrrrr");

app.listen(pot, () => {
  console.log("Server is running on 5000");
});
