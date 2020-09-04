const express = require('express');
const app = express();
const addDB = require("./add.User");

const cors = require("cors");//unblocking cors policy
const multer = require("multer");

app.use(express.json()); //parsing the req body of post
app.use(cors()); //unlocking cors policy
app.use(express.urlencoded({ extended: true })); //url encoded
const upload = multer(); // BODY :: FORM DATA


app.post("/adduser", async (req,res) => {
    try{
        const input = req.body;
    await addDB.addUser(input);
    res.json({ opr:true });
    }catch(err){
        res.json({ opr:false });
    }       
});

app.post("/auth-user", async (req,res) => {
    try{
        const input = req.body;
    await addDB.authUser(input);
    res.json({ opr:true });
    }catch(err){
        res.json({ opr:false });
    }    
});

app.post("/forgot", async (req,res) => {
    try{
        const input = req.body;
    await addDB.forgotPassword(input);
    res.json({ opr:true });
    }catch(err){
        res.json({ opr:false });
    }    
});

app.post("/reset", async (req,res) => {
    try{
        const input = req.body;
    await addDB.resetPassword(input);
    res.json({ opr:true });
    }catch(err){
        res.json({ opr:false });
    }      
});
app.listen(3000);
