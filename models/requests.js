module.exports = function(sequelize, DataTypes) {
  var requests = sequelize.define("requests", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    zipcode: {
      type: DataTypes.STRING
    }
  });
  return requests;
};
