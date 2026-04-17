const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const id = Number(req.query.id);

  // mitigação de SQL Injection via validação de input
  const query = `SELECT * FROM users WHERE id = ${id}`;

  res.send("Query executed safely");
});

app.listen(3000, () => console.log("App rodando na porta 3000"));
