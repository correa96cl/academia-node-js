import express from "express";
import { peopleRoutes } from "./routes/people.routes";
import { historyRoutes } from "./routes/history.routes";

const app = express();

app.use(express.json());

app.use("/people", peopleRoutes);
app.use("/history", historyRoutes);

app.listen(4000, () => console.log("Server is running"));
