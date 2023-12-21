const express = require('express');
const app = express();
users = [
  {
    id: 1,
    name: 'John',
    address: '123 Main St',
    task: [{ title: 'task1', descrip: 'this is a test', dueDate: new Date() }],
  },
];

app.get('/', (req, res) => {
  res.status(200);
  res.json({
    success: true,
    users: users,
  });
});


module.exports = app;
