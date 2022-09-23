require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT
const cors = require("cors")

app.set("port", port || 3000);
app.use(express.json(), cors(), express.static("public"));
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Methods" : "*",
    });
    next();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});