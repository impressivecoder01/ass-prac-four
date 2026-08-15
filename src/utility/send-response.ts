import type { Response } from "express"

export const  send = <T>(res:Response, {message,data,error}:{message:string,data?: T, error:boolean},status=200) => {
    res.status(status).json({
        message,
        data:error?undefined:data
    })
}