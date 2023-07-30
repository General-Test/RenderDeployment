import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import placeRoutes from "./routes/Places.js";
import userRouter from "./routes/User.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/places", placeRoutes);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Wonders of Karnataka Backend is Running on Heroku :)");
});
const CONNECTION_URL =
  process.env.CONNECTION_URL ||
  "mongodb+srv://generaltest:generaltest@generaltest-1.t8kn0.mongodb.net/wKarnataka?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
