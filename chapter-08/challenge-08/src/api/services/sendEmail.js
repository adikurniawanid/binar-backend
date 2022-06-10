const nodemailer = require("nodemailer");
const config = require("../../config/smtp.config");
require("dotenv").config();

module.exports = async (
  fromParam,
  toParam,
  subjectParam,
  textParam,
  htmlParam
) => {
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST_TEST,
    port: config.SMTP_PORT_TEST,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL_TEST,
      pass: process.env.SMTP_PASSWORD_TEST,
    },
  });

  const info = await transporter.sendMail({
    from: fromParam,
    to: toParam,
    subject: subjectParam,
    text: textParam,
    html: htmlParam,
  });

  return info;
};
