const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://neophoto:neophoto@neophoto-8ccqw.mongodb.net/neophoto?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Database Connected'))
.catch((error) => console.log(error));

// Routing 
const portrait = require('./routing/portrait')
app.use('/api/portrait', portrait);


app.listen(process.env.PORT || 3000, () => console.log('Server start on port 3000'));

module.exports = app;