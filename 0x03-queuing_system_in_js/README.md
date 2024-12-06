# 0x03. Queuing System in JS

## About

This project demonstrates how to work with Redis and Node.js to build a queuing system. It covers various aspects such as caching, asynchronous operations, Pub-Sub models, job creation and processing with Kue, and Express API servers.

## Objectives:

- Running Redis server locally.
- Caching data using Redis and `node-redis`.
- Handling async operations with Redis.
- Using Kue as a queue system.
- Building an Express app that interacts with a Redis server.
- Creating a Pub-Sub model with Redis.

---

## Tasks Overview

### Redis Installation and Setting Initial Values

- **Objective**: Install Redis and set the value `School` for the key `Holberton`.
- **File**: `dump.rdb`

---

### Script that Connects to Redis Servers Locally

- **Objective**: Connect to a Redis server running locally.
- **File**: `0-redis_client.js`

---

### Functions for Setting and Displaying Values

- **Objective**:
  - `setNewSchool`: Sets a value for a given key.
  - `displaySchoolValues`: Retrieves the value of a given key.
- **File**: `1-redis_op.js`

---

### Promises in Redis Operations

- **Objective**: Modify `displaySchoolValue` to work using Promises.
- **File**: `2-redis_op_async.js`

---

### Script to Set Redis Hashes

- **Objective**: Set Redis hashes using `node-redis` and print the response using `redis.print`.
- **File**: `4-redis_advanced_op.js`

---

### Pub-Sub Model in Redis

- **Objective**: Implement the Publisher-Subscriber model in Redis.

#### Subscriber

- Creates a Redis client that subscribes to the `holberton school` channel.
- **File**: `5-subscriber.js`

#### Publisher

- Creates a Redis client that publishes to the `holberton school` channel.
- **File**: `5-publisher.js`

---

### Job Creation with Kue

- **Objective**: Create jobs using Kue.
- **File**: `6-job_creator.js`

---

### Job Processing with Kue

- **Objective**: Process jobs using Kue.
- **File**: `6-job_processor.js`

---

### Tracking Job Progress and Errors with Kue

#### Job Creator

- Tracks job progress and handles errors during job creation.
- **File**: `7-job_creator.js`

#### Job Processor

- Tracks job progress and handles errors during job processing.
- **File**: `7-job_processor.js`

---

### Job Creation Function

- **Objective**: Create a function `createPushNotificationsJobs` for job creation.
- **File**: `8-job.js`

---

### Unit Tests

- **Objective**: Write unit tests for `createPushNotificationsJobs`.
- **File**: `8-job.test.js`

---

### Express Orders API Server with Redis Caching

- **Objective**: Build an API server using Redis for caching.

#### Routes:

1. `GET /list_products/`: Returns a list of all products.
2. `GET /list_products/:itemId`: Returns information about the product with the specified ID.
3. `GET /list/reserve_product/:itemId`: Reserves one unit of a product with the given ID if it is in stock.

- **File**: `9-stock.js`

---

### Express Seat Reservation API with Redis Job Queues

- **Objective**: Build an API server using Redis for managing job queues.

#### Routes:

1. `GET /available_seats`: Returns the number of available seats.
2. `GET /reserve_seat`: Seat reservation endpoint.
3. `GET /process`: Job processing endpoint.

- **File**: `100-seat.js`

---

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```
