import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    success: boolean;
    error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configurez le transporteur
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Configurez l'email
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New contact form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ success: false, error: message });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
