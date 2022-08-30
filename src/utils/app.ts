import express, { Application, Request, Response, json, urlencoded } from "express";
import cors from "cors";
import { countVisits, redisClient } from "./redis";

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.disable("x-powered-by");

app.get("/api", async (req: Request, res: Response) => {
	try {
		countVisits();
		return res.status(200).json({ message: "Hello World!" });
	} catch (error) {
		console.error(`Redis Error: ${error}`);
		return res.status(500).json({ message: (error as Error).message });
	}
});

export default app;
