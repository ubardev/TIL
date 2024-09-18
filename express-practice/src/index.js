import express from "express";

const app = express();

// req : 요청 -> Request
// res : 응답 -> Response
app.get("/", (req, res) => {
  res.send("Nodejs 강의 재미있어요!");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
