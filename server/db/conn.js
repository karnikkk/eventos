const  mongoose = require('mongoose');


const DB = process.env.MONGO_URL;


mongoose.connect(DB).then( () => {
    console.log(`database connected Successful`);
}).catch((err) => console.log(`no connection`));