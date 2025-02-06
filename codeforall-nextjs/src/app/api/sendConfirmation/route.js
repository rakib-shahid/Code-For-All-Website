import nodemailer from "nodemailer"

export async function POST(request){
    const {email} = await request.json()

    try{
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Code for All Newsletter Confirmation",
            html: "<b>Thanks for subscribing to our newsletter! Use this as a way to gain access to early registration for our events, learn more about Code for All, and stay up to date on tech news!</b> <br/> <h4>If you have not already, please make sure to join our <span><a href='https://discord.gg/YyGnEVZerm'>Discord</a></span> and follow us on <span><a href='https://www.instagram.com/codeforall_qc/'>Instagram</a></span></h4>"
        })


        return new Response(
            JSON.stringify({message: "email sent"}),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
        })      
    }catch(e){
        return new Response(
            JSON.stringify({message: "error"}),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
        })  
    }
}