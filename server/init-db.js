// init-db.js

// Importujemy połączenie z bazą danych
const db = require('./database.js');

// Używamy db.serialize, aby upewnić się, że komendy wykonują się jedna po drugiej
db.serialize(() => {
  console.log('Rozpoczynam inicjalizację bazy danych...');

  // 1. Tworzymy tabele (używając IF NOT EXISTS, na wszelki wypadek)
  db.run(`CREATE TABLE IF NOT EXISTS messages (message TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS people (name TEXT)`);

  // 2. Czyścimy tabele przed dodaniem nowych danych
  db.run(`DELETE FROM messages`);
  db.run(`DELETE FROM people`);

  // 3. Wstawiamy dane początkowe
  db.run(`INSERT INTO messages (message) VALUES (?)`, ['Hello World!']);

  const people = ['harry', 'jack', 'berry'];
  const stmt = db.prepare(`INSERT INTO people (name) VALUES (?)`);
  for (const person of people) {
    stmt.run(person);
  }
  stmt.finalize();

  console.log('Inicjalizacja zakończona. Dane startowe zostały dodane.');
});

// Zamykamy połączenie z bazą danych
db.close();