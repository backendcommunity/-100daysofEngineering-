const express = require("express");

const app = express();

app.use(express.json());

app.get("/myquery", (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    success: true,
    message: "Your detail is successfully extracted",
    data: req.query,
  });
});

const users = [
  {
    name: "shina",
    age: 10,
    id: 1,
  },
  {
    name: "Jules",
    age: 75,
    id: 2,
  },
];

// For Query
app.get("/user", (req, res) => {
  // console.log(req.query);
  const { id } = req.query;
  const user = users.find((user) => user.id === Number(id));

  return res.status(200).json({
    success: true,
    message: "Your details is successfully extracted",
    data: user,
  });
});

// For params
app.get("/user/:id", (req, res) => {
  // console.log(req.query);
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  return res.status(200).json({
    success: true,
    message: "Your details is successfully extracted",
    data: user,
  });
});

// Post request
app.post("/user", (req, res) => {
  // console.log(req.query);
  // const { id, name, age } = req.body;
  // const user = users.find((user) => user.id === Number(id));
  users.push(req.body);

  return res.status(201).json({
    success: true,
    message: "User has been created successfully",
    // data: user,
  });
});

app.listen(2000, () => {
  console.log("Listen to the server");
});
