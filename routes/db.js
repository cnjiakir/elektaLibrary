var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elektabooklibrarytest'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
		console.log('failed to connect');
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;