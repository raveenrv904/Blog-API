require("dotenv").config();
const express = require("express");
const app = express();
const blogRouter = require("./routes/blog");
const connectDB = require("./db/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1", blogRouter);

const port = process.env.PORT || 6000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on the port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
