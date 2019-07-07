import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;  //만일 대상을 못찾으면 4000번으로

const handleListening = () => 
    console.log(`✅  Listening on http://localhost:${PORT}`);


app.listen(PORT, handleListening);