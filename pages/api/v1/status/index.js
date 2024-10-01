import database from "infra/database.js";

const status = async (request, response) => {
  const result = await database.query("SELECT 1+1 AS sum;");
  console.log(result.rows);
  response.status(200).json({ Exercice: "Tríceps Francês", Status: "Running" });
};

export default status;
