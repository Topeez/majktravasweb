import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);


const formSchema = z.object({
    fullname: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10).max(16),
    message: z.string().min(10),
})

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = formSchema.safeParse(body);

        if(!parsed.success){
            return new Response(JSON.stringify({error: parsed.error.format()}), {status: 400});
        }

        const { fullname, email, phone, message } = parsed.data;

        await resend.emails.send({
            from: "onboarding@resend.dev", //Tohle se musí změnit na verified doménu
            to: "topetopinka7@seznam.cz", //Tady musí byt potom Majkova adresa
            subject: "Nová zpráva z webu",
            html: `
                <h2>Nová zpráva</h2>
                <p><strong>Jméno:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Zpráva:</strong><br />${message}</p>
        `,
        });

        return new Response(JSON.stringify({success: true}), {status: 200});
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({error: "Nastala chyba"}), {status: 500});
    }
}