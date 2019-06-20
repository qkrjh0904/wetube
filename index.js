const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);  //4000번 포트를 listening 시작하면 handleListening 함수 호출