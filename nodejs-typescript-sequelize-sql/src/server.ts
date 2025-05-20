import app from "./app";
import { config } from "./config";
import { Sequelize } from "sequelize";

async function main() {
  const sequelize = new Sequelize(config.db_url as string);

  try {
    await sequelize.authenticate();
    
    console.log("Connection has been established successfully.");

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

