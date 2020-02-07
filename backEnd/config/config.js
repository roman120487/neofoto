const mongoose = require('mongoose');
PORTNODE = 3001;
secretKey = 'neophotokeysecret';
mongoose.Promise = global.Promise;
SERVERIP = '188.40.170.11';
SERVER_PORT = '3001';

mongoose.connect('mongodb://neofotocomua:z3{JXG-Pd)fuwN6[@localhost:27017/neofotocomua', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('Database Connected'))
.catch((error) => console.log(error));


