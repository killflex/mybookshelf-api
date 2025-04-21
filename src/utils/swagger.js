const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "MyBookshelf API",
    description: "API for managing your personal book collection",
  },
  host: "localhost:5000",
  schemes: ["http"],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "x-api-key",
      description: "API Key authentication",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "./src/routes/authRoutes.js",
  "./src/routes/bookRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
