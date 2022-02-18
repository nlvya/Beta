const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static("./public"));

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();