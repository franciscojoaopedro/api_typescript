import  express,{Express} from "express"
import MiddlewareConfig from "@config/middleware.config"
import DataBaseConfig from "@config/database.config"



class App{
    app: Express
    constructor(){
        this.app = express()
        MiddlewareConfig.init(this.app)
        DataBaseConfig.connect()
    }
}


export const app=new App().app