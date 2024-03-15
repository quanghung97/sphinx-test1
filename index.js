var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      localAddress      : '127.0.0.1',
      port		: '9306'
    }
);
 
connection.connect();

// SELECT id, group_id, UNIX_TIMESTAMP(date_added) AS date_added, title, content FROM documents

var queryString = "SELECT * FROM test1 WHERE MATCH('@content test')limit 100";
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('data:', rows[i]);
    }
});
 
connection.end();
