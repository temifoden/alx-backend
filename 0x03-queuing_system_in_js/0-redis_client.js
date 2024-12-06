import { createClient } from "redis";

const connectRedis = async () => {
  console.log("Attempting to connect to Redis...");

  const client = createClient();
  client.on("error", (err) =>
    console.log(`Redis client not connected to the server: ${err}c`)
  );
  await client.connect();

  console.log("Redis client connected to the server");

  //   Close the connection when done
  await client.quit();
};
connectRedis().catch(console.error);
