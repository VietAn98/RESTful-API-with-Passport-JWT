var db = require('../utils/Database');

module.exports = {
  all: () => {
    return db.load('SELECT * FROM Account');
  },
};