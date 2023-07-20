const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
//Crear servidor
const server = express();

//Configurar servidor
server.use(cors());
server.use(express.json({ limit: "100mb" }));
server.set("view engine", "ejs");
dotenv.config();

async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERMOLON,
    password: process.env.PASS,
  });

  await connection.connect();
  console.log(`Conexión establecida ${connection.threadId}`);
  return connection;
}
//Aquí falta el catch para los errores!!!

//Escuchar servidor
 const serverPort = process.env.PORT || 4000
//const PORT = 4000;
server.listen(serverPort, () => {
  console.log("Se ha conectado al puerto http://localhost:" + serverPort);
});

//Solicitud con endpoint
server.get("/api/allproject", async (req, res) => {
  const select = "SELECT * FROM project JOIN author ON (fk_author = idautor);";
  const connect = await connectDB();
  const [result] = await connect.query(select);
  console.log(result);
  res.json(result);
  connect.end();
});

// endpoint post
server.post("/api/add", async (req, res) => {
  const body = req.body;

  let insertAuthor = "INSERT INTO author (autor, job, photo) VALUES (?,?,?)";

  const connect = await connectDB();
  const [result] = await connect.query(insertAuthor, [
    body.name,
    body.job,
    body.photo,
  ]);

  const idAuthor = result.insertId;

  let insertProject =
    "INSERT INTO project (name, descproject, slogan, repo, demo, technologies, image, fk_author) VALUES(?,?,?,?,?,?,?,?)";

  const [resultProject] = await connect.query(insertProject, [
    body.name,
    body.desc,
    body.slogan,
    body.repo,
    body.demo,
    body.technologies,
    body.image,
    idAuthor,
  ]);
  console.log(resultProject);
  res.json({
    succes: true,
    cardURL: `http://localhost:4000/project/${resultProject.insertId}`,
  });
  connect.end();
});

//endpoint get
//nos devuelve un array vacío aunque pongamos en la url /project y el id correspondiente
server.get("/project/:idProject", async (req, res) => {
  const id = req.params.idProject;
  const query =
    "SELECT * FROM author INNER JOIN project ON fk_author = idautor WHERE idproject = ?";
  const connect = await connectDB();
  const [result] = await connect.query(query, id);
  console.log(result);
  res.render("detailProject", result[0]);
});

server.use(express.static("./src/public"));

server.use(express.static("./src/css_plantillas"));
