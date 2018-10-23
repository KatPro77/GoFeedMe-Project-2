module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
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
    phone: {
      type: DataTypes.INTEGER
    }
  });

  return Volunteer;
};
