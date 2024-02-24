var mysql = require('mysql');
var config;
config = {
    mysql_pool : mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'Batman',
        database : 'kitty'
    })
};
module.exports = config;