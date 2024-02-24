import { Router } from "express";
import { listar_usuarios,registar_user } from "../controller/controller_register/controller_register";
import { auth_middleware } from "../controller/controller_session/middleware_session";
import { login_user } from "../controller/controller_session/session_controller";

const routes=Router()


// session ou login user
routes.post("/session_user",login_user)
routes.get("/users",auth_middleware,listar_usuarios)
routes.post("/users",registar_user)

export default routes
