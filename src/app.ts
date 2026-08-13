import express, { type Application } from "express"
import prisma from "./lib/prisma"
import { json } from "node:stream/consumers"
import { notFound } from "./middleware/notFound"

const app:Application = express()

app.use(express.json())

app.get("/", async(req, res)=> {
    res.send("server is done")
})

app.use(notFound)

export default app