const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT
  )
`;

db.run(createTableSQL, err => {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Table created successfully");
  }
});

// Sett inn data i tabellen
const username = 'john_doe';
const email = 'john@example.com';
db.run(`INSERT INTO users (username, email) VALUES (?, ?)`, [username, email], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// Utfør en enkel spørring
db.all(`SELECT * FROM users`, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(`${row.id} | ${row.username} | ${row.email}`);
  });
});


db.close();
