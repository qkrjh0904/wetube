import express from "express";

export const userRouter = express.Router();


//router는 많은 route들이 담긴 파일
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));