const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://neophoto:neophoto@neophoto-8ccqw.mongodb.net/neophoto?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('Database Connected'))
.catch((error) => console.log(error));

app.use('/uploads', express.static('uploads'))

// Routing 
const portrait = require('./routing/portrait')
const response = require('./routing/response')
app.use('/api/portrait', portrait);
app.use('/api/response', response);


app.listen(process.env.PORT || 3000, () => console.log('Server start on port 3000'));

module.exports = app;