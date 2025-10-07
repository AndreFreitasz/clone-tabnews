const { exec } = require("node:child_process");

const checkPostgres = () => {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
};

const handleReturn = (error, stdout) => {
  if (stdout.search("accepting connections") === -1) {
    process.stdout.write(".");
    checkPostgres();
    return;
  }

  console.log("\n✅ Postgres está pronto e aceitando conexões!\n");
};

process.stdout.write(
  "\n\n ❌ Aguardando o banco de dados PostgreSQL ficar disponível...",
);
checkPostgres();
