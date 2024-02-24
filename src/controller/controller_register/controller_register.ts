import { User } from "../../model/model_user";
import {Request,Response} from "express"
import bcrypt from "bcrypt"
export async function listar_usuarios(request:Request,response:Response){
    const filtro={
        $unset:{}
    }

    const {size} = request.query
    const users=await User.find({},{password:0},{limit: Number(size)})
    try {
        return response.json({message:"lista de usuário",users})
    } catch (error) {
        console.log({error:true,message_error:"não possivel listar os usuários",causa:error})
        return response.status(500).json({message:"não possivel listar os usuário"})
    }
}

export async function registar_user(request:Request,response:Response){
    const {name,password,email}=request.body
    try {

        const user_exist= await User.findOne({ email})
        if(user_exist){
            return response.json({message:"esse email já esta sendo utilizado!"})
        }
        const password_crypeted=  bcrypt.hashSync(password,12)
        const user=await User.create({
            name,
            email,
            password:password_crypeted
        })
        return response.json({message:"usuario criado",user})
    } catch (error) {
        console.log({error:true,message_error:"não possivel criar o usurio",causa:error})
        return response.status(500).json({message:"não possivel criar o usuário!"})
    }
}