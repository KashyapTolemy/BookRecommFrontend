const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { recommendBook } = require("./recommendationSystem");

app.use(bodyParser.json());

// API endpoint to handle book recommendation requests
app.post("/api/recommend", (req, res) => {
  console.log("inside function");
  const bookName = req.body.bookName;

  const recommendedBooks = recommendBook(bookName);

  // Send recommended books as response
  res.json({ recommendedBooks });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
