import express from "express";

const app = express();

app.get("/messages", (req, res) => {
  const requestSource = req.headers["x-id"];
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
  );
  res.json([
    { id: 1, text: "Hello World" },
    { id: 2, text: "Another message from the separate backend" },
  ]);
});

app.get("/users", (req, res) => {
  const requestSource = req.headers["x-id"];
  console.log(
    `${new Date().toISOString()}: EXECUTING /users on backend from ${requestSource}`
  );
  res.json([
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
  ]);
});

app.listen(8080);
