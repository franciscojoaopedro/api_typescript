import DataBaseConfig from "@config/database"
import MiddlewareConfig from "@config/middleware"
import express, { Express } from "express"

class App{
    app: Express
    constructor(){
        this.app = express()
        MiddlewareConfig.init(this.app)
        DataBaseConfig.connect()
    }
}


export const app=new App().app