const status = (request, response) => {
  response.status(200).json({ Exercice: "Tríceps Francês", Status: "Running" });
};

export default status;
