import { app } from "./app/app"

const PORT=3333

app.listen(PORT,()=>{
    console.log({
        sucess:"server is running in port:"+PORT,
        api_http:`http://localhost:${PORT}`
        
    })
})