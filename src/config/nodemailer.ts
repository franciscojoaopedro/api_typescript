
import nodemailer from "nodemailer"

export type UserEmail={
    email_user:string
    assunto:string
    message:string
}
export async function enviar_email(user:UserEmail){
    const tranporter_do_email=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"ngungadev@gmail.com",
            pass:"F931993481f@"
        }
    })

    const configuracao_de_envio_de_email={
        from:"ngungadev@gmail.com",
        to:`${user.email_user}`,
        subject:`${user.assunto}`,
        text:`${user.message}`
    }

    tranporter_do_email.sendMail(configuracao_de_envio_de_email,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("Email enviado com sucesso!")

        }
    })

}