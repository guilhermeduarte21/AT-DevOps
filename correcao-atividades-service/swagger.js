const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/api/correcaoAtividades.js"];

swaggerAutogen(outputFile, endpointsFiles);
