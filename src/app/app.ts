import  express,{Express} from "express"
import mongoose ,{Error} from "mongoose"
import routes from "../routes/routes"
import cors from "cors"


class App{
    app: Express
    constructor(){
        this.app=express()
        this.middleware()
        this.conect_database()
    }
  
   async middleware (){
        this.app.use(express.json())
        this.app.use(cors({origin:"*"}))
        this.app.use(routes)
    }
    async conect_database(){
     await mongoose.connect("mongodb://localhost:27017/test_api")
        .then(()=>console.log("connected in database"))
        .catch((error:Error)=>console.log({
            message:"erro ao conectar no banco de dados",
            typeErro:error
        }))
    }
}


export const app=new App().app