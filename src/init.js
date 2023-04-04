import "regenerator-runtime";
import "dotenv/config";
import "./db/db";
import "./db/dbTestHandler";
import app from "./server";

const PORT = process.env.PORT || 4001;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
