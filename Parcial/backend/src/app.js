import express from "express";
import bodyParser from "body-parser";
import errorHandler from "./middlewares/error-handler.mjs";
import { requestLogger } from "./middlewares/request-logger.mjs";
import petsRouter from "./routes/pets.mjs";
import cors from "cors";

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(requestLogger);
app.use(cors());
app.use(errorHandler);

app.use("/api", petsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

