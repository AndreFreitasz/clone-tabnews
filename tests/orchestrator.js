import retry from "async-retry";
import database from "infra/database";

const waitForAllServices = async () => {
  await waitForWebServer();
};

async function clearDatabase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

const waitForWebServer = async () => {
  return retry(fetchStatusPage, {
    retries: 100,
    maxTimeout: 1000,
  });
};

const fetchStatusPage = async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  if (response.status !== 200) {
    throw Error;
  }
};

const orchestrator = {
  waitForAllServices,
  clearDatabase,
};

export default orchestrator;
