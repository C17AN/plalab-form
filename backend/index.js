const express = require("express");
const multer = require("multer");
const app = express();
const cors = require("cors");
const port = 5500;

// CORS
app.use(cors());

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 파일 저장을 위한 multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "storage/"); // 파일이 저장될 경로
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

app.post("/login", (req, res) => {
  // 요청 처리
  console.log(req.body);
  if (req.body.username !== "1004899") {
    res.status(401).send({ message: "로그인에 실패했습니다.", code: "ERROR" });
  } else {
    setTimeout(() => {
      res.send({ message: "로그인에 성공했습니다.", code: "SUCCESS" });
    }, 3000);
  }
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  // 요청 처리
  console.log(req.file); // 업로드된 파일 정보
  console.log(req.body); // 나머지 폼 데이터
  res.send({ message: "파일이 성공적으로 업로드 되었습니다." });
});

app.get("/", (req, res) => {
  res.send({ message: "서버가 실행중입니다." });
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
