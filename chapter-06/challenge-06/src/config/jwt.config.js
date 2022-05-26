require("dotenv").config();

module.exports = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_ACCESS_EXPIRATION_MINUTES: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  JWT_REFRESH_EXPIRATION_DAYS: process.env.JWT_REFRESH_EXPIRATION_DAYS,
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES:
    process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES:
    process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
};
