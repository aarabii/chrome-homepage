import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/api/fetch", async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching URL");
  }
});

app.listen(3001, () => {
  console.log("Proxy server listening on port 3001");
});
