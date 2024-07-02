import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Create a Nodemailer transporter using SMTP
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // your email
                pass: process.env.EMAIL_APP_PASSWORD, // app-specific password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // change to your email
            subject: 'Demande de contact client',
            text: `Cette personne est intéressée pour avoir un premier contact avec vous : ${email}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email transmis' });
        } catch (error) {
            console.error('Erreur à l\'envoi de l\'email:', error);
            res.status(500).json({ error: "Erreur à l'envoi" });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}
