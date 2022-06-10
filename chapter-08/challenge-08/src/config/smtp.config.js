require("dotenv").config();

module.exports = {
  EMAIL_SMTP: process.env.EMAIL_SMTP,
  PASSWORD_SMTP: process.env.PASSWORD_SMTP,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,

  EMAIL_SMTP_TEST: process.env.EMAIL_SMTP_TEST,
  PASSWORD_SMTP_TEST: process.env.PASSWORD_SMTP_TEST,
  SMTP_HOST_TEST: process.env.SMTP_HOST_TEST,
  SMTP_PORT_TEST: process.env.SMTP_PORT_TEST,
};
