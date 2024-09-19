import express from "express";
import cors from "cors";
import helmet from "helmet";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(helmet());

const today = new Date();
const todayToDayjs = dayjs(today).format("YYYY-MM-DD");
console.log("todayToDayjs =====> ", todayToDayjs);

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
console.log("hashedPassword >>>>>>>>>> ", hashedPassword);

const token = jwt.sign("1234", "secretKey");
console.log("token >>>>>>>>>> ", token);

// req : 요청 -> Request
// res : 응답 -> Response
app.get("/", (req, res) => {
  res.send("Nodejs 강의 재미있어요!");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
