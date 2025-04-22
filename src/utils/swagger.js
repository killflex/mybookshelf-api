const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "MyBookshelf API",
    description: "API for managing your personal book collection",
  },
  host: ["mybookshelf-api-ferry.vercel.app", "localhost:5000"],
  schemes: ["http", "https"],
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
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "./src/routes/authRoutes.js",
  "./src/routes/bookRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
