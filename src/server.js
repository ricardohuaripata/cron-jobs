import express from "express";
import setupCronJobs from "./cron-jobs.js";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";

import dotenv from "dotenv";
dotenv.config();

setupCronJobs();

const app = express();

// Middleware
app.use(bodyParser.json());

// Implementar CORS
app.use(cors());
app.options("*", cors());

app.use("/", routes);

const PORT = process.env.PORT || 3000;
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
