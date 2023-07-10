import express , { Application, NextFunction, Request, Response } from "express";

const app : Application = express()

app.use(express.json())

app.get('/',(req:Request, res: Response)=>{
    console.log("ffe");
    return res.json("root api")
})

app.listen(3000, () => {
    console.log('Server started at port 3000');
})
