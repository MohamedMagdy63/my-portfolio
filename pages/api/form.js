import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const body = req.body;

  console.log('body: ', body);

  if (!body.name || !body.email) {
    return res.status(400).json({ data: 'First or last name not found' });
  }
}
