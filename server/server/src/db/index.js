const mongoose = require("mongoose");
require("dotenv")

const MONGODB_URI = "mongodb://localhost:27017/Notes";

mongoose.connect(MONGODB_URI, {
    autoIndex: false,
}).then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.log(error);
})
