import { WebSocketServer } from "ws";
import {prisma} from "@repo/prisma/client"

const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket) =>{
    
    const res = await prisma.user.create({
        data:{
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })

    console.log(res);
    console.log("Server is running on port 3002");

    socket.send("Hi there, your are connected through websocket server!");
})

