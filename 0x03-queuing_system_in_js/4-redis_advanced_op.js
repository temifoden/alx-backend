import { createClient, print } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

/**
 * Function to create the hash.
 */
const createHash = () => {
  client.hset("ALX", "Portland", 50, print);
  client.hset("ALX", "Seattle", 80, print);
  client.hset("ALX", "New York", 20, print);
  client.hset("ALX", "Bogota", 20, print);
  client.hset("ALX", "Cali", 40, print);
  client.hset("ALX", "Paris", 2, print);
};

/**
 * Function to display the hash.
 */
const displayHash = () => {
  client.hgetall("ALX", (err, reply) => {
    if (err) {
      console.error("Error retrieving hash:", err);
    } else {
      console.log(reply);
    }
  });
};

// Call the functions
createHash();
displayHash();
