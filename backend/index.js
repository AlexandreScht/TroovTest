const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
