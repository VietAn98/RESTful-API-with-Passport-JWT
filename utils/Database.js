var mysql = require('mysql');

var createConnection = () => {
  return mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'V28pG1ZaIG',
    password: 'ob4W1lBGDf',
    database: 'V28pG1ZaIG'
  });
}

module.exports = {
  load: sql => {
    return new Promise((resolve, reject) => {
      var connection = createConnection();
      connection.connect();
      connection.query(sql, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
        connection.end();
      });
    });
  },
};