import { createClient } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});
const createHash = async () => {
  try {
    await client.hSet("ALX", "Portland", 50);
    console.log("Portland set successfully");
    await client.hSet("ALX", "Seattle", 80);
    console.log("Seattle set successfully");
    await client.hSet("ALX", "New York", 20);
    console.log("New York set successfully");
    await client.hSet("ALX", "Bogota", 20);
    console.log("Bogota set successfully");
    await client.hSet("ALX", "Cali", 40);
    console.log("Cali set successfully");
    await client.hSet("ALX", "Paris", 2);
    console.log("Paris set successfully");
  } catch (err) {
    console.error("Error setting hash values:", err);
  }
};

const displayHash = async () => {
  try {
    const hash = await client.hGetAll("ALX");
    console.log(JSON.stringify(hash, null, 2)); // Pretty-printed output
  } catch (err) {
    console.error("Error retrieving hash:", err);
  }
};

(async () => {
  try {
    await client.connect();
    await createHash();
    await displayHash();
  } catch (err) {
    console.error("Error during Redis operations:", err);
  } finally {
    await client.quit();
  }
})();
