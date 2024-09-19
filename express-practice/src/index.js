import express from "express";
import cors from "cors";
import helmet from "helmet";

let users = [{ id: 1, name: "ubar", age: 12 }];

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "700mb" }));

// GET Method
// 유저 정보 가져오기
// query or path
// 성공 status: 200
app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

// POST Method
// 유저 생성
// 요청 -> body
// 성공 status: 201
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  console.log("req.body >>>>>>>>>> ", req.body);

  users.push({
    id: new Date().getTime(),
    name,
    age,
  });
  res.status(201).json({ users });
});

// PATCH Method
// 유저 수정
// 성공 status: 204
// req.params.id
// 요청 -> body
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  console.log("req.params >>>>>>>>>> ", req.params);

  const targetUserIndex = users.findIndex((user) => user.id === Number(id));

  users[targetUserIndex] = {
    id: users[targetUserIndex].id,
    name: name ?? users[targetUserIndex].name,
    age: age ?? users[targetUserIndex].age,
  };

  res.status(204).json({});
});

// DELETE Method
// 유저 삭제
// 성공 status: 204
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const deletedUsers = users.filter((user) => user.id !== Number(id));
  users = deletedUsers;

  res.status(204).json({});
});

// req : 요청 -> Request
// res : 응답 -> Response
app.get("/", (req, res) => {
  res.send("Nodejs 강의 재미있어요!");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
