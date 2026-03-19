const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/register", (req, res) => {
    res.redirect(301, "/registered.html");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "chinmay" && password === "password") {
        return res.redirect(301, "/loginsuccess.html");
    } else {
        return res.status(403).send(`
            <h2>❌ Invalid credentials</h2>
            <a href="/login.html">Try again</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
