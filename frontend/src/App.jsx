import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Landpage from "./Landpage";

import Login from "./user/Login";
import Signup from "./user/Signup";
import Logout from "./user/Logout";

import Free from "./free/Freeboard";
import FreeDetail from "./free/FreeboardDetail";
import FreeWrite from "./free/FreeboardWrite";
import FreeEdit from "./free/FreeboardEdit";

import Qna from "./qna/Qnaboard";
import QnaDetail from "./qna/QnaboardDetail";
import QnaWrite from "./qna/QnaboardWrite";
import QnaEdit from "./qna/QnaboardEdit";

import CoinChart from "./chart/CoinChart";

import Header from "./lib/Header";
import Footer from "./lib/Footer";
import NotFound from "./lib/NotFound";

import "./App.css";

const App = () => {
    const [isloggedin, setIsloggedin] = useState(
        Cookies.get("name") ? true : false
    );

    return (
        <div className="App">
            <BrowserRouter>
                <Header isloggedin={isloggedin} />
                <Routes>
                    <Route path="/" element={<Landpage />} />

                    <Route
                        path="/login"
                        element={<Login setIsloggedin={setIsloggedin} />}
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/logout"
                        element={<Logout setIsloggedin={setIsloggedin} />}
                    />

                    <Route path="/freeboard" element={<Free />} />
                    <Route path="/freeboard/:id" element={<FreeDetail />} />
                    <Route path="/freeboard/write" element={<FreeWrite />} />
                    <Route path="/freeboard/edit/:id" element={<FreeEdit />} />

                    <Route path="/qnaboard" element={<Qna />} />
                    <Route path="/qnaboard/:id" element={<QnaDetail />} />
                    <Route path="/qnaboard/write" element={<QnaWrite />} />
                    <Route path="/qnaboard/edit/:id" element={<QnaEdit />} />

                    <Route path="/coinchart" element={<CoinChart />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
