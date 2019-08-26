import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

// loading env variables
dotenvExpand(dotenv.config({ path: "./.env" }));
