import express, { type Application } from "express"
import prisma from "./lib/prisma"
import { json } from "node:stream/consumers"

const app:Application = express()

app.use(express.json())

app.get("/", async(req, res)=> {
    res.send("server is done")
})

export default app