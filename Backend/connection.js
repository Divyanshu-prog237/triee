const mongoose = require('mongoose');
const url = "mongodb+srv://Divyanshu:divyansh123@cluster0.oumgsxm.mongodb.net/Bincubators?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose; 