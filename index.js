const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

// ID나 PW를 보낸다면 req object로 받을 수 있음
function handleHome(req, res){
    res.send("Hello from home");    //요청에대한 응답을 보냄
}

function handleProfile(req, res){
    res.send("You are on my profile");  //응답으로 다음 문장을 보냄
}

// '/'은 main URL
//main URL에 대한 요청(get)이 있으면 handleHome함수 호출
app.get("/", handleHome);

//main/profile에대한 요청에 있으면 handleProfile함수 홀출
app.get("/profile", handleProfile);

//4000번 포트를 listening 시작하면 handleListening 함수 호출
app.listen(PORT, handleListening);  