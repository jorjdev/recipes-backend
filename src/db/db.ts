import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });


const { MONGO_URI } = process.env;
if (!MONGO_URI) {
  console.log(process.env)
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

export const client = new MongoClient(MONGO_URI);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB, URI: ${MONGO_URI}`, error);
  }
}

export const db = client.db("recipes-api");

// Call connectToDatabase to establish the connection
connectToDatabase();
