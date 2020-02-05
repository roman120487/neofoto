const mongoose = require('mongoose');
PORTNODE = 3001;
secretKey = 'neophotokeysecret';
mongoose.Promise = global.Promise;
SERVERIP = 'localhost';
SERVER_PORT = '3001';

mongoose.connect('mongodb+srv://neophoto:neophoto@neophoto-8ccqw.mongodb.net/neophoto?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('Database Connected'))
.catch((error) => console.log(error));


