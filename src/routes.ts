import { prisma } from './prisma';
import express from 'express';

import nodemailer from 'nodemailer';

export const routes = express.Router();


//vem do servidor de testes de email  
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4544fe4bd76c7e",
    pass: "264f994660b0e9"
  }
});

routes.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body;

  const feedback =  

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Ezefferth <ezefferth@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n')
  })

  return res.status(201).json({ data: feedback });
})