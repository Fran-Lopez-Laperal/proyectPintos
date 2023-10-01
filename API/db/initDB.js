require("dotenv").config();

const getDB = require("./getDB");

const createTables = async () => {
  let connection;

  try {
    connection = await getDB();

    console.log("Borrando tablas...");
    await connection.query("SET GLOBAL sql_mode=''");
    await connection.query("DROP TABLE IF EXISTS news");
    await connection.query("DROP TABLE IF EXISTS users");

    console.log("Creando tablas...");

    await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                avatar VARCHAR(100),
                role ENUM('admin', 'normal') DEFAULT 'normal',
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )
        `);


    await connection.query(`
            CREATE TABLE IF NOT EXISTS news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(30) NOT NULL,
                image VARCHAR(100),
                introduction VARCHAR(255) NOT NULL,
                text TEXT NOT NULL,
                idUser INT UNSIGNED NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )
        `);


              await connection.query(
                `INSERT INTO users(name, email, password) VALUES('admin', 'admin@pintos.com', 'grupopintos')`
                )

                await connection.query(
                  `INSERT INTO news(title, image, introduction, text) VALUES ('tirulo noticia', 'image noticia', 'INTRODUCTION noticia','text noticia')`
                )

    console.log("¡Tablas creadas!");
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();

    process.exit();
  }
};

createTables();