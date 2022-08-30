require("regenerator-runtime");
require("dotenv/config");

import { App, redisClient } from "./utils";

const PORT: string | number = process.env.PORT || 4002;

const server = App.listen(PORT, () => console.info(`Server running on port ${PORT}`));

// redisClient.connectClient();

export default server;
