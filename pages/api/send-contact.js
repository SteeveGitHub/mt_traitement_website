import nodemailer from 'nodemailer';
import fs from 'fs';
import formidable from 'formidable';
import path from 'path';
import archiver from 'archiver';
import fetch from 'node-fetch';

export const config = {
    api: {
        bodyParser: false,
    },
};

const uploadDir = path.join('/tmp', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const uploadDir = path.join('/tmp', 'uploads'); // Utilisez /tmp pour Vercel
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        const form = formidable({
            multiples: true,
            uploadDir: uploadDir,
            keepExtensions: true,
            maxFileSize: 4 * 1024 * 1024, // Limite à 4MB pour Vercel
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing files:', err);
                return res.status(500).json({ error: 'Error parsing files' });
            }

            const { fullName, companyName, email, message, captchaToken } = fields;

            // Verify reCAPTCHA token
            const secretKey = process.env.RECAPTCHA_SECRET_KEY;
            const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

            const response = await fetch(verificationUrl, {
                method: 'POST',
            });

            const data = await response.json();

            if (!data.success) {
                return res.status(400).json({ error: 'Invalid CAPTCHA' });
            }

            // Create a transporter object
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            // Prepare the attachments
            let attachments = [];
            for (const fileKey in files) {
                const fileArray = Array.isArray(files[fileKey]) ? files[fileKey] : [files[fileKey]];
                fileArray.forEach(file => {
                    if (file && file.filepath) {
                        attachments.push({
                            filename: file.originalFilename,
                            path: file.filepath,
                        });
                    }
                });
            }

            // Send email with or without compression based on attachment size
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: 'Demande de contact client',
                text: `Nom & prénom: ${fullName}\nNom de l'entreprise: ${companyName}\nEmail: ${email}\nMessage: ${message}`,
                attachments: attachments,
            };

            try {
                await transporter.sendMail(mailOptions);
                // Clean up uploaded files after sending email
                attachments.forEach(attachment => {
                    fs.unlinkSync(attachment.path);
                });
                return res.status(200).json({ message: 'Email transmis' });
            } catch (error) {
                console.error('Erreur à l\'envoi de l\'email:', error);
                return res.status(500).json({ error: "Erreur à l'envoi" });
            }
        });
    } else {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }
}