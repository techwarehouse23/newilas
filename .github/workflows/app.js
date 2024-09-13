const express = require('express');
const app = express();

app.get ('/',(req, res) => {
    res.send("<h1>TechWareHouse New Node js14.17.5 from Docker container!!<h1>");
});
app.listen (3000, () => {
    console.log("App running on port 3000");
});
