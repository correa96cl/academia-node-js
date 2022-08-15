import express from "express";
import { peopleRoutes } from "./routes/people.routes";

const app = express();

app.use(express.json());

app.use("/people", peopleRoutes);

app.listen(4000, () => console.log("Server is running"));
