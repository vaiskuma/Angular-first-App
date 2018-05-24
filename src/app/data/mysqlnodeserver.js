var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database: 'test'

});

connection.connect(function(err) {
  console.log("connection error: ",err)
  // connected! (unless `err` is set)
});
Queries:

var post  = {id: 1, name: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {

  
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
