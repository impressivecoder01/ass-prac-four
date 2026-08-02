import { configDotenv } from "dotenv";
import { env } from "node:process";

configDotenv()

const config = {
NODE_ENV: env.NODE_ENV,    
PORT: env.PORT,
DATABASE_URL: env.DATABASE_URL
}

export default config