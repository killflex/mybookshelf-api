const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "MyBookshelf API",
    description:
      "API for managing your personal book collection with API Key authentication and Google Books API integration",
    version: "1.0.0",
  },
  host: ["mybookshelf-api-ferry.vercel.app"],
  schemes: ["https"],
  basePath: "/api",
  tags: [
    {
      name: "Auth",
      description: "Authentication endpoints",
    },
    {
      name: "Books",
      description: "Book management endpoints",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "x-api-key",
      description: "API Key authentication",
    },
  },
  security: [
    {
      apiKeyAuth: [],
    },
  ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "./src/routes/authRoutes.js",
  "./src/routes/bookRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
