const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/api/generateReport", (req, res) => { 
    res.download('./pdf/Bill No 03 - Mr.Rohan Ambagolla.pdf');
});

app.listen(PORT, () => {
    console.log("Server is up and running on server on " + PORT);
});