const express = require('express');
const app = express();


app.listen(process.env.PORT || 3000, () => console.log('Server start on port 3000'));

module.exports = app;