
import express, { Express } from "express"
import routes from "../routes/routes"
import cors from "cors"

export default class MiddlewareConfig {
    constructor() { }

    static init(app: Express) {
        app.use(express.json())
        app.use(cors({ origin: "*" }))
        app.use(routes)
    }
}