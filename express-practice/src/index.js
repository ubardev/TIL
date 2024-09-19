import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import UserController from "./users";

let users = [{ id: 1, name: "ubar", age: 12 }];

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));

app.use("/users", UserController.router);

// req : 요청 -> Request
// res : 응답 -> Response
app.get("/", (req, res) => {
  res.send("Nodejs 강의 재미있어요!");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
