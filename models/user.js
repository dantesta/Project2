module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,

    email: DataTypes.STRING,

    username: DataTypes.STRING
  });



  return User;
};
