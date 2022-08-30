import { createClient } from "redis";

export const redisClient = createClient({
	url: `redis://${process.env.REDIS_BASE_URI}:6379`,
});

redisClient.on("error", console.error);

redisClient.connect();

var visits = 0;

export const countVisits = async () => {
	try {
		const result = await redisClient.get("visits");
		if (!result) return await redisClient.set("visits", visits);
		console.log(result);
		return await redisClient.set("visits", parseInt(result as string) + 1);
	} catch (err) {
		console.error(err);
	}
};
