const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRouter = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Kurale:Ethiopia@cluster0.uyzji0o.mongodb.net/?retryWrites=true&w=majority");

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(itemRouter);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
