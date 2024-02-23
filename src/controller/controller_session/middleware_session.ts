import {Request,Response,NextFunction} from "express"
import jwt from "jsonwebtoken"

export async function auth_middleware(request:Request,response:Response,next:NextFunction){
    const token_header=request.headers["authorization"]
    const token=token_header && token_header.split(" ")[1]
    if(!token){
        return response.status(401).send("Acesso negado:token não encontrado")
    }
    try {
        jwt.verify(token,"fazendoteushuididisw90922")
        next()
    } catch (error) {
        return response.status(401).send("Acesso negado:token não encontrado")
    }
}