import { User } from "../../model/model_user";
import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export async function  login_user(request:Request,response:Response){
try {
    const {email,password}=request.body
    const user={email,password}
    // fazendo falidação com o token
    const user_exist= await User.findOne({email})
    if(!user_exist){
        return response.json({message:"usuário não existe!"})
    }
    const verify_password=bcrypt.compareSync(password,user_exist?.password)
    if(!verify_password){

        return response.json({message:"Senha incorrecta"})
    }
    if(!user_exist && !verify_password){
        return response.json({message:"dados invalidos, verifque novamente os seus dados"})
    }
    const token=jwt.sign(user,"fazendoteushuididisw90922",{expiresIn:"1h"})
    return response.json({message:"Login realizado com sucesso",data:token})

} catch (error) {
    
}
}