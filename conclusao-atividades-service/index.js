//index.js
const conclusaoAtividades = require("./src/api/conclusaoAtividades");
const repository = require("./src/repository/repository");
const server = require("./src/server/server");

(async () => {
  try {
    await server.start(conclusaoAtividades, repository);
  } catch (error) {
    console.error(error);
  }
})();
