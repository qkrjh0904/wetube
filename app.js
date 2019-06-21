import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(helmet());
app.use(morgan("common"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);
//누군가 내 파일을 immport할 때 app object를 주겠다는말임
export default app; 