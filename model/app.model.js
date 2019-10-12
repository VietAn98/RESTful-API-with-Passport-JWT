var db = require('../utils/Database');

module.exports = {
  all: () => {
    return db.load('SELECT * FROM Account');
  },
  add: entity => {
    return db.add(`Account`, entity);
  }
};