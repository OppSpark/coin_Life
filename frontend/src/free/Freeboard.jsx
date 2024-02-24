import "./Freeboard.css";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const Freeboard = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);

    const fetchPosts = async () => {
        await fetch(`http://api.coin.oppspark.net/free?reqPage=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("게시글 목록을 불러오는 중 오류 발생:", error);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, [id]);

    return (
        <div className="freeboard">
            <h1 className="freetitle">게시글 목록</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li className="postfree" key={post.id}>
                        <Link
                            className="detailbtn title"
                            to={`/freeboard/${post.id}`}
                        >
                            {post.title}
                        </Link>

                        <Link
                            className="detailbtn title2"
                            to={`/freeboard/${post.id}`}
                        >
                            {post.content}
                        </Link>
                        <span className="author">{post.userid}</span>
                        <span className="created">
                            {new Date(post.created).toLocaleDateString("ko-KR")}{" "}
                            {new Date(post.created).toLocaleTimeString("ko-KR")}
                        </span>
                        <span className="view">{post.view}</span>
                    </li>
                ))}
            </ul>
            <Link className="writebtn" to="/freeboard/write">
                새 글 쓰기
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

export default Freeboard;
