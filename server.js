const express = require("express");
const films = require("./utils/fetchFilms");
const app = express();
const port = 3000;

app.get("/api/film/:title", async (req, res) => {
  const data = await films.fetchFilms(req.params.title);
  res.json(data);
});

app.post("/api/film/:title", (req, res) => {
  res.send({ message: `Se ha guardado ${req.params.title}` });
});

app.put("/api/film/:title", (req, res) => {
  res.send({ id: 0, message: `Se ha actualizado ${req.params.title}` });
});

app.delete("/api/film/:title", (req, res) => {
  res.send({ id: 0, message: `Se ha borrado ${req.params.title}` });
});

app.use((req, res, next) => {
  res.status(404).send({ message: `La ruta ${req.url} no existe` });
});

app.listen(port, () =>
  console.info(`Este servidor funciona en el puerto: ${port}`)
);
