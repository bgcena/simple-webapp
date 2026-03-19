const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// REGISTER (always success)
app.post("/register", (req, res) => {
    res.send(`
        <h2>✅ Registered Successfully</h2>
        <a href="/login.html">Go to Login</a>
    `);
});

// LOGIN (hardcoded)
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "chinmay" && password === "password") {
        res.send(`
            <h1>🎉 Logged in successfully</h1>
            <p>Welcome ${username}</p>
        `);
    } else {
        res.send(`
            <h2>❌ Invalid credentials</h2>
            <a href="/login.html">Try again</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});