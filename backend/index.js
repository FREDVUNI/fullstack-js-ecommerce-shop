const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")
// const connectDB = require("./connection/database")

const app = express()
app.use(morgan("tiny"))
dotenv.config({path:".env"})
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

// const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.status(200) 
    .json({
        status:200, 
        message:"API for the e-commerce store.Check it out below 🤷‍♂️",
        api: "http://localhost:4001/products"
    })
})

app.use("/",require("./routes/products")) 

// connectDB()  
// app.listen(PORT,() =>{
//     console.log(`server started on port http://localhost:${PORT}`)
// })