const express = require("express");
const app = express();

// ❌ vulnerável (SQL Injection)
app.get("/user", (req, res) => {
  const id = req.query.id;
  const query = "SELECT * FROM users WHERE id = ?";

  res.send("Query: " + query);
});

app.listen(3000, () => console.log("App rodando na porta 3000"));
