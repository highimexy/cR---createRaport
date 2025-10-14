const db = require("./database.js");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) => {
  // Najpierw pobieramy wiadomość
  db.get("SELECT message FROM messages", (err, messageRow) => {
    if (err) {
      // Obsługa błędu, jeśli zapytanie o wiadomość się nie powiedzie
      return res.status(500).json({ error: err.message });
    }

    // Następnie pobieramy listę osób
    db.all("SELECT name FROM people", [], (err, peopleRows) => {
      if (err) {
        // Obsługa błędu, jeśli zapytanie o osoby się nie powiedzie
        return res.status(500).json({ error: err.message });
      }

      // Składamy finalną odpowiedź i wysyłamy ją do frontendu
      res.json({
        message: messageRow ? messageRow.message : "Brak wiadomości",
        people: peopleRows.map((row) => row.name),
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
