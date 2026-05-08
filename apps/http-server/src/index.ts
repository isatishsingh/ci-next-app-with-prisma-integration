import express from 'express';
import {prisma} from "@repo/prisma/client"

const app = express();

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Welcome to express");
})

app.post("/signin", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = await prisma.user.create({
        data:{
            username : username,
            password : password
        }
    });

    res.status(200).json({
        "message": "login successfully",
        "id" : user.id
    });
})

app.listen(3003,()=>{
    console.log("Server is running on port 3000");
})

