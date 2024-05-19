require('dotenv').config();

module.exports = {
  jwtSecret: 'tL4no1r7QBdZHIwK9+Vk5VNDbjUEdjHhTmuOGSLGD6Z0pcV343OYO8t9rdayQNfKhAxEHWeh+ZEYZRCicyA/hA==',
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  }
};
