import { createClient, print } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

/**
 * Function to set a value in Redis for a given key using callbacks.
 * @param {string} schoolName - The key to set in Redis.
 * @param {string} value - The value to associate with the key.
 */
const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
};

/**
 * Function to retrieve and display the value
 * for a given key from Redis using callbacks.
 * @param {string} schoolName - The key to retrieve from Redis.
 */
const displaySchoolValue = (schoolName) => {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error retrieving value for ${schoolName}:`, err);
    } else {
      console.log(reply);
    }
  });
};

// Call the functions as specified
displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
