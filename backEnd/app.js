const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));

app.use('/uploads', express.static('uploads'))

// Routing 
const portrait = require('./routing/portrait')
const response = require('./routing/response')
const account = require('./routing/account')
const feedback = require('./routing/feedback')
const team = require('./routing/team')
const config = require('./config/config');
app.use('/api/portrait', portrait);
app.use('/api/response', response);
app.use('/api/feedback', feedback);
app.use('/api/team', team);
app.use('/', account)
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport);

app.listen(process.env.PORT || PORTNODE, () => console.log(`Server start on port ${PORTNODE}`));

module.exports = app;