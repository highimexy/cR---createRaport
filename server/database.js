const sqlite3 = require("sqlite3");

const db = new sqlite3.Database('main.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączono z bazą danych main.db.');
});

module.exports = db;