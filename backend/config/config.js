require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "user_password",
  database: process.env.DB_NAME || "my_database",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
};
