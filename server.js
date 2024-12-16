const express = require("express");
const sequelize = require("./config/data-source");
const cors = require("cors");
const dotenv = require("dotenv");

const userRouter = require("./api/user/user-route");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// app.use("/", async (req, res) => {
//   res.status(200).send("Welcome");
// });
app.use("/users", userRouter);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
    process.exit(1);
  });


