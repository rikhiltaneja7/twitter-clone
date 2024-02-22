const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes");
const cors = require("cors")

async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}
main()
  .then((result) => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Unsuccessful", err);
  });

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Server Home Page");
});

app.use("/users",userRouter)

app.listen(8080, () => {
  console.log("App listening on port 8080");
});
