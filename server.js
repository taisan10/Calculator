const express = require("express");
const math = require("mathjs");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// Custom factorial function
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) return NaN; // Ensure integer and non-negative
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
}

app.post("/calculate", (req, res) => {
    try {
        let { expression } = req.body;

        // ✅ Replace "^" with "**" for power calculation
        expression = expression.replace(/\^/g, "**");

        // ✅ Convert "5!" to "factorial(5)"
        expression = expression.replace(/(\d+)!/g, (_, num) => `factorial(${num})`);

        // ✅ Convert percentage (%) to division
        expression = expression.replace(/(\d+)%/g, (_, num) => `(${num}/100)`);

        // Use math.js to evaluate the expression safely
        const result = math.evaluate(expression, { factorial });

        res.json({ result });
    } catch (error) {
        res.json({ result: "Error: Invalid Expression" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
