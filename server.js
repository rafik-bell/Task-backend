const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());
const mongoose =require('mongoose')
const cookieParser = require('cookie-parser');

const {vrifiy} = require("./src/middleware/authmiddleware")

app.use(express.json());
app.use(cookieParser());


// mongodb conection 
const conect =require('./src/config/mongodbconction')
mongoose.connect(conect.url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



// router
const userRoute =require('./src/routes/UserAuth')
app.use('/user',userRoute);
// task route
const userRoute1 =require('./src/routes/Homeuser')
app.use('/user1',userRoute1);
//////////validation token route
app.get('/valid', vrifiy)





app.listen(port, function () {
  console.log(` app listening on port ${port}`);
});