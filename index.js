//const express = require('express'); 아래와 같이 변경
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;
/*
function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}
*/
const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

// ID나 PW를 보낸다면 req object로 받을 수 있음
/*
function handleHome(req, res){
    res.send("Hello from home");    //요청에대한 응답을 보냄
}
*/
const handleHome = (req, res) => res.send("Hello from home.");

/* 아래와 같이 변경 가능
function handleProfile(req, res){
    res.send("You are on my profile");  //응답으로 다음 문장을 보냄
}
*/
const handleProfile = (req, res) => res.send("You are on my profile.");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(helmet());
app.use(morgan("common"));



/*
const betweenHome = (req, res, next) => {
    //next는 요청을 계속 처리할 수 있는 권한을 주는것
    //연결을 다루는건 req, res, next가 있음
    console.log("middleware");
    next();
};
//이건 글로벌한 방식의 middleware임
//만약 IP주소를 검사하는 middelware를 만들었다하면 이런식으로 차단도 가능함
app.use(betweenHome);   
*/

// '/'은 main URL
//main URL에 대한 요청(get)이 있으면 handleHome함수 호출
app.get("/", handleHome);

//main/profile에대한 요청에 있으면 handleProfile함수 홀출
app.get("/profile", handleProfile);


//4000번 포트를 listening 시작하면 handleListening 함수 호출
app.listen(PORT, handleListening);  