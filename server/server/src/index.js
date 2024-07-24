const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config;
require('./db');

const {auth} = require("./middleware/auth.middleware")
const userRouter = require("./routes/users_router");
const authRouter = require("./routes/auth_router");
const notesRouter = require("./routes/notes_router");

app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send(`Hello CipherSchool`);
})

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/notes",auth, notesRouter);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})