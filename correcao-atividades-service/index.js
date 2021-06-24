//index.js
const correcaoAtividades = require("./src/api/correcaoAtividades");
const repository = require("./src/repository/repository");
const server = require("./src/server/server");

(async () => {
  try {
    await server.start(correcaoAtividades, repository);
  } catch (error) {
    console.error(error);
  }
})();
