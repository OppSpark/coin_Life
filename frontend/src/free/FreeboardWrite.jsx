import "./FreeboardWrite.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FreeboardWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const vaild_write = async () => {
        await fetch("http://api.coin.oppspark.net/vaildlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result === "already_login") {
                } else {
                    alert("로그인을 하고 작성하세요.");
                    navigate("/freeboard");
                }
            })
            .catch((error) => {
                console.error("로그인 확인 중 에러 발생:", error);
            });
    };

    useEffect(() => {
        vaild_write();
    }, []);

    const handleSubmit = async ({ title, content }) => {
        await fetch("http://api.coin.oppspark.net/free", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ title, content }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                switch (data.result) {
                    case "no_session":
                        alert("로그인을 하고 작성하세요.");
                        break;
                    case "invaild_value":
                        alert("타이틀 또는 내용을 입력하세요.");
                        break;
                    case "data_too_long":
                        alert("내용이 너무 깁니다.");
                        break;
                    case "freepost_success":
                        alert("게시글이 작성되었습니다.");
                        navigate("/freeboard");
                        break;
                    case "freepost_fail":
                        alert("게시글 작성에 실패했습니다.");
                        break;
                    default:
                        alert(
                            "서버 오류가 있습니다. 잠시 후 다시 작성해 주세요."
                        );
                }
            })
            .catch((error) => {
                console.error("게시글 업로드 중 에러 발생:", error);
            });
    };

    return (
        <div className="freeboardwrite">
            <input
                type="text"
                id="title_txt"
                name="title"
                placeholder="제목"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                id="content_write"
                name="content"
                placeholder="내용을 입력하세요."
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
                className="post_submit"
                onClick={() => handleSubmit({ title, content })}
            >
                작성
            </button>
        </div>
    );
};

export default FreeboardWrite;
