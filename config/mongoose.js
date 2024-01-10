import mongoose from 'mongoose'
// const MONGO_URL = "mongodb+srv://pawnalakeholiday:%23PawnaLake123@pawnalake.apaxdtd.mongodb.net/?retryWrites=true&w=majority"
const MONGO_URL = "mongodb://127.0.0.1/Uniqserve_db"
const HOSTED_MONGO_URL = "mongodb+srv://Uniqueserve:Uniquemongodbpass%40123@cluster0.ce0pqw5.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(HOSTED_MONGO_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erroe connecting MongoDB'));

db.once('open',function(){
    console.log("LOG : Successfully connected to the MONGO_URL",MONGO_URL); 
})

export default db

