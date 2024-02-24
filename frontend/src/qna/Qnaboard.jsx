import "./Qnaboard.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Qnaboard = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`http://api.coin.oppspark.net/qna?reqPage=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    data.sort((a, b) => b.id - a.id);
                    console.log(data);
                    setPosts(data);
                })
                .catch((error) => {
                    console.error(
                        "게시글 목록을 불러오는 중 오류 발생:",
                        error
                    );
                });
        };
        fetchPosts();
    }, [id]);

    return (
        <div className="freeboard">
            <h1 className="freetitle">질문 게시글 목록</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li className="postfree" key={post.id}>
                        <Link className="detailbtn title" to={`/qnaboard/${post.id}`}>
                            {post.title}
                        </Link>
                        <Link className="detailbtn title2" to={`/qnaboard/${post.id}`}>
                            {post.content}
                        </Link>
                        <span className="author">{post.userid}</span>
                        <span className="created">{new Date(post.created).toLocaleDateString('ko-KR')} {new Date(post.created).toLocaleTimeString('ko-KR')}</span>
                        
                        
                        <span className="view">{post.view}</span>
                    </li>
                ))}
            </ul>
            <Link className="writebtn" to="/qnaboard/write">
                새 질문 쓰기
            </Link>

            <div className="pagebtn">
                <button
                    onClick={() => {
                        if (id > 1) {
                            setId(id - 1);
                        }
                    }}
                >
                    이전
                </button>
                <span>&nbsp;&nbsp; {id} &nbsp;&nbsp;</span>
                <button
                    onClick={() => {
                        setId(id + 1);
                    }}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default Qnaboard;