import express from 'express';
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
