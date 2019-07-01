import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        //내가 mongodb를 사용할 때 마다 이 configureation을 추가해 라는뜻(true)
        //또는 이 configuration은 사용 안함으로해!라는 뜻(false)
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) => console.log("❌  Error on DB Connection");

//한번만 실행됨
db.once("open", handleOpen);
db.on("error", handleError);

//dotenv를 설치한 이유는 가끔 내가 어떤 부분을 숨겨놓고 싶을 수 있기 때문