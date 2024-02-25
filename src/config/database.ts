import mongoose ,{Error} from "mongoose"

export default class DataBaseConfig {

    static async connect(){
        await mongoose.connect("mongodb://localhost:27017/test_api")
           .then(()=>console.log("connected in database"))
           .catch((error:Error)=>console.log({
               message:"erro ao conectar no banco de dados",
               typeErro:error
           }))
       }
}