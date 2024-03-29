#!/usr/bin/node
const express = require("express");
const app = express();
const port = 8088;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        //secret은 임의의 난수값
        secret: "5$9!2@In#%gO$cS",
        resave: false,
        saveUninitialized: false,
        cookie: {
            domain: ".oppspark.net",
            sameSite: false,
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

const cors = require("cors");
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("coin_life API");
});

/* 계정 인증 */

// 로그인 기능
const loginRouter = require("./models/authenticated/login.js");
app.use("/", loginRouter);

//회원가입 기능
const regRouter = require("./models/authenticated/register.js");
app.use("/", regRouter);

/* 자유 게시판 */

// 자유 게시판 불러오기
const getFreeBoardRouter = require("./models/free_board/freeBoardGet.js");
app.use("/", getFreeBoardRouter);

// 자유 게시판 삽입 삭제 수정
const postFreeBoardRouter = require("./models/free_board/freeBoardPost.js");
app.use("/", postFreeBoardRouter);

// 자유 게시판 댓글 삽입 삭제 수정
const freeCommentRouter = require("./models/free_board/freeComments.js");
app.use("/", freeCommentRouter);

/* 질문 게시판  */

//질문 게시판 불러오기
const getQnaBoardRouter = require("./models/qna_borad/qnaBoardGet.js");
app.use("/", getQnaBoardRouter);

//질문 게시판 삽입 삭제 수정
const postQnaBoardRouter = require("./models/qna_borad/qnaBoardPost.js");
app.use("/", postQnaBoardRouter);

const post = require("./models/qna_borad/qna.js");
app.use("/", post);

//질문 게시판

app.listen(port, () => {
    console.log(`Example app listening at http://api.coin.oppspark.net:${port}`);
});
