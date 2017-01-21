function DataSource() {}
DataSource.prototype.getUser = function (callback) {
  const user = {
    name: 'John',
    age: 30,
  };

  return callback(user);
};

module.exports = DataSource;