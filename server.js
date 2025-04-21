require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/utils/swagger-output.json");
const port = process.env.PORT || 5000;

const authRoutes = require("./src/routes/authRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const css_url =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { customCssUrl: css_url })
);
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
