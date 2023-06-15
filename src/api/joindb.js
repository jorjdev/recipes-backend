const { MongoClient } = require("mongodb");
const recipes = [require("../../../recipes.json")]; // Wrap recipes data inside an array
const {MONGO_URI} = process.env
const dbName = "recipes-api";
const collectionName = "recipes";

async function logData(data) {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Iterate over the data and log each document
    for (const item of data) {
      console.log(item); // Log each item
    }

    console.log("Data logged successfully!");
  } catch (error) {
    console.error("Error logging data:", error);
  } finally {
    client.close();
  }
}

// Call the function and pass your data as an argument
logData(recipes);
