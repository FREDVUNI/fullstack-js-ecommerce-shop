const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        const con = mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true,
        })
        process.exit(1)
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB