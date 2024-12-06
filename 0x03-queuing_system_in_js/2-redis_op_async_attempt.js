import { createClient } from "redis";

const client = createClient();

/**
 * Function to set a value in Redis for a given key.
 * @param {string} schoolName - The key to set in Redis.
 * @param {string} value - The value to associate with the key.
 */
const setNewSchool = async (schoolName, value) => {
  try {
    const result = await client.set(schoolName, value);
    console.log(`Set result; ${result}`);
  } catch (err) {
    console.log("Error setting new school:", err);
  }
};

/**
 * Function to retrieve and display the value for a given key from Redis.
 * @param {string} schoolName - The key to retrieve from Redis.
 */
const displaySchoolValue = async (schoolName) => {
  try {
    const value = await client.get(schoolName);
    console.log(`Value for ${schoolName} is ${value}`);
  } catch (err) {
    console.log("error displaying value", err);
  }
};

(async () => {
  client.on("error", (err) =>
    console.log(`Redis client not connected to the server: ${err}`)
  );
  await client.connect();

  //   call both functions
  displaySchoolValue("Holberton");
  setNewSchool("HolbertonSanFrancisco", "100");
  displaySchoolValue("HolbertonSanFrancisco");
  //   Close the connection when done
  await client.quit();
})().catch(console.error);
