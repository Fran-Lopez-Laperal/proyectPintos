require("dotenv").config();

const getDB = require("./getDB");

const createTables = async () => {
  let connection;

  try {
    connection = await getDB();

    console.log("Borrando tablas...");
    await connection.query("DROP TABLE IF EXISTS timeline");
    await connection.query("DROP TABLE IF EXISTS news");
    await connection.query("DROP TABLE IF EXISTS users");

    console.log("Creando tablas...");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS news (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        image VARCHAR(100),
        text VARCHAR(100) NOT NULL,
        id_user INT UNSIGNED NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await connection.query(`
    CREATE TABLE IF NOT EXISTS timeLine (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(30) NOT NULL,
      image VARCHAR(100),
      text TEXT NOT NULL,
      year INT NOT NULL,
      id_user INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS promotions (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(30) NOT NULL,
      image VARCHAR(100),
      text TEXT NOT NULL,
      id_user INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();

    process.exit();
  }
};

createTables();
