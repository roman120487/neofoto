const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));

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
const account = require('./routing/account')
const feedback = require('./routing/feedback')

app.use('/api/portrait', portrait);
app.use('/api/response', response);
app.use('/api/feedback', feedback);

app.use('/', account)
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport);


app.listen(process.env.PORT || 3001, () => console.log('Server start on port 3001'));

module.exports = app;