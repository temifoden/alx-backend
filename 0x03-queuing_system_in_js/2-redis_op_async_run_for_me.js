import { createClient, print } from "redis";
import { promisify } from "util";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Promisify the client.get function
const getAsync = promisify(client.get).bind(client);

/**
 * Function to set a value in Redis for a given key.
 * @param {string} schoolName - The key to set in Redis.
 * @param {string} value - The value to associate with the key.
 */
const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
};

/**
 * Async function to retrieve and display the value for a given key from Redis.
 * @param {string} schoolName - The key to retrieve from Redis.
 */
const displaySchoolValue = async (schoolName) => {
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.error(`Error retrieving value for ${schoolName}:`, err);
  }
};

// Call the functions as specified
(async () => {
  displaySchoolValue("Holberton");
  setNewSchool("HolbertonSanFrancisco", "100");
  displaySchoolValue("HolbertonSanFrancisco");
})();
