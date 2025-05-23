require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/utils/swagger-output.json");
const port = process.env.PORT || 5000;

const authRoutes = require("./src/routes/authRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();
app.use(
  cors({
    origin: [
      "https://mybookshelf-api-ferry.vercel.app",
      "http://localhost:5000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "x-api-key"],
    credentials: true,
  })
);
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    customCss:
      ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
    customCssUrl: CSS_URL,
  })
);
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
