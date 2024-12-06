import { createClient } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

/**
 * Publish a message to the channel after a delay.
 * @param {string} message - The message to publish.
 * @param {number} time - The delay in milliseconds.
 */
const publishMessage = (message, time) => {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish("ALXchannel", message, (err) => {
      if (err) {
        console.error("Publish error:", err.message);
      }
    });
  }, time);
};

// Call the function to publish messages
publishMessage("ALX Student #1 starts course", 100);
publishMessage("ALX Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("ALX Student #3 starts course", 400);
