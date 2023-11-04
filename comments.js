//create web server
var express = require('express');
var router = express.Router();

//create database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

//connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL');
});

//get all comments
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM comments.comments', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

//get comment by id
router.get('/:id', function(req, res, next) {
  connection.query('SELECT * FROM comments.comments WHERE id = ?', [req.params.id], function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

//add comment
router.post('/', function(req, res, next) {
  connection.query('INSERT INTO comments.comments (comment) VALUES (?)', [req.body.comment], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//update comment
router.put('/:id', function(req, res, next) {
  connection.query('UPDATE comments.comments SET comment = ? WHERE id = ?', [req.body.comment, req.params.id], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//delete comment
router.delete('/:id', function(req, res, next) {
  connection.query('DELETE FROM comments.comments WHERE id = ?', [req.params.id], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;