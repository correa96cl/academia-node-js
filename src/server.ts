import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/people", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(4000, () => console.log("Server is running"));
