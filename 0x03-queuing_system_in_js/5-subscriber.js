import { createClient } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Subscribe to the channel
client.subscribe("ALXchannel", (err) => {
  if (err) {
    console.error("Subscription error:", err.message);
    return;
  }
  console.log("Subscribed to ALXchannel");
});

client.on("message", (channel, message) => {
  console.log(`${message}`);
  if (message === "KILL_SERVER") {
    client.unsubscribe(channel, (err) => {
      if (err) {
        console.error("Unsubscribe error:", err.message);
        return;
      }
      console.log("Unsubscribed from channel");
      client.quit();
    });
  }
});
