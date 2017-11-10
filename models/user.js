module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,

    email: DataTypes.STRING,

    username: DataTypes.STRING
  });



  return User;
<<<<<<< HEAD
};
=======
};
>>>>>>> 81f8b0a3aa804c782d763068b6a8f4fba90f975a
