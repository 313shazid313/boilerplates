import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db_url: process.env.SEQUELIZE_URL,
};
