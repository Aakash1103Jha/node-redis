# Node-Redis App with Docker

## A simple Node-express app, along with Redis, both running in a separate Docker container.

-   Redis here is simply used to count the number of times `/api` route has been visited in total.
-   One of the possible implementation can be `caching` in the Node app.

## Stack

1. Node
2. Express
3. TypeScript
4. Redis
5. Docker

## Challenges

1. **Connecting container running `node-express` app with the one running `redis` in order to get or add the number of `visits`.**

    **Solution**:

    - use `docker network ls` to the the id for network created for the app.
    - use `docker network inspect <network_id>` to get the IP address of the container running `redis`.
    - use that IP address in the `url` property (when using `redis.createClient()`), or pass it as a env variable in `docker-compose`/`cli` when starting the container.
    - If `localhost` is used in the url, then it would mean that the container running node app is trying to connect to itself, and not the redis container.
