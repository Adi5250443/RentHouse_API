const express=require ("express");
const cors=require("cors");
const app=express();

app.use(cors());

const port=process.env.PORT || 3000;
const apiDATA=require("./data.json");


app.get("/",(req,res)=>{
    res.send(apiDATA);
})

app.listen(port,()=>{
    console.log("server is live");
}
)