const express = require('express');
const path = require('path');

const PORT =  5000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.listen(PORT, () => { console.log(`Server Running on http://localhost:${PORT}`) });

// app.get('/', (req, res) => {
//     res.send({ working: true });
// })

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
})
