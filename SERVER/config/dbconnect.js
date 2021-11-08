const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://shikhar0208:8447088311@cluster0.ozu5l.mongodb.net/myFirstDatabase?retryWrites=true',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB connection establised successfully'))
  .catch((err) => console.log(err));
