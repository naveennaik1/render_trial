const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080



const app = express();


app.use(cors());


// Handle POST request to /upload endpoint
const sampleData = [
    {
        id:1,
        name:"naveen",
    },
    {
        id:2,
        name:"durgesh",
    },
    {
        id:3,
        name:"chirag",
    },
]

app.get('/' , (req , res)=>{
    res.json(sampleData)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});