const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//Crear servidor
const server = express();

//Configurar servidor
server.use(cors());
server.use(express.json({ limit: "100mb" }));

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    database: "freedb_project molones",
    user: "freedb_Group2",
    password: "nnDTSJ#mTwUg?7W",
  });

  await connection.connect();
  console.log(`Conexión establecida ${connection.threadId}`);
  return connection;
}
//Aquí falta el catch para los errores!!!

//Escuchar servidor
const PORT = 4000;
server.listen(PORT, () => {
  console.log("Se ha conectado al puerto http://localhost:" + PORT);
});

//Solicitud con endpoint
server.get("/api/allproject", async (req, res) => {
  const select = "SELECT * FROM project";
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
    "INSERT INTO project (name, description, slogan, repo, demo, technologies, image, fk_author) VALUES(?,?,?,?,?,?,?,?)";

  const [resultProject] = await connect.query(insertProject, [
    body.name,
    body.desc,
    body.slogan,
    body.repo,
    body.demo,
    body.technologies,
    body.photo,
    idAuthor,
  ]);
  console.log(resultProject);
  res.json({
    succes:true, cardURL: `http://localhost:4000/project/${resultProject.insertId}`,
  });
  // connect.end();
});
