const express = require("express");
const router = express.Router();

const path = require("path");
const mysql = require("mysql");
const mainModulePath = path.dirname(require.main.filename);
const dbconfig = require(path.resolve(mainModulePath, "../config/dbinfo.js"));
const connection = mysql.createConnection(dbconfig);

router.get("/free", (req, res) => {
    const sql = "SELECT * FROM freeboard ORDER BY ID DESC;";

    
    connection.query(sql, (err, rows) => {
        console.log(rows.length)
        return res.send(rows);
    });
});

router.get("/freeSize", (req, res) => {
    const sql = "SELECT * FROM freeboard ORDER BY ID DESC;";
    connection.query(sql, (err, rows) => {
        return res.send(""+ rows.length);
    });
});



    //10 개 씩 출력
router.get("/free/:pid", (req, res) =>{
    const sql = "SELECT * FROM freeboard ORDER BY ID DESC LIMIT ?, ?";
    if (req.params.pid == 1 )
        var firstPage = 1;
    else
        var firstPage = ( 10 * (req.params.pid - 1) );

    var lastPage = req.params.pid * 10;
    
    const pid = [firstPage, lastPage]

    connection.query(sql, pid, (err, rows) => {
        return res.send({rows});
    });
});


router.get("/free/:id", (req, res) => {
    const sql = "SELECT * FROM freeboard WHERE id = ?";
    const viewCountSQL = "UPDATE freeboard SET view = view + 1 WHERE id = ?";

    const id = [req.params.id];

    connection.query(sql, id, (err, rows) => {
        connection.query(viewCountSQL, id, (err) => {
            return res.send(rows);
        });
    });
});

module.exports = router;
