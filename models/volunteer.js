module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },

    phone: {
      type: DataTypes.INTEGER
    },
    location: {
      type: DataTypes.INTEGER
    },
    availability: {
      type: DataTypes.DATE
    },
    mealPreference: {
      type: DataTypes.STRING
    },
    mealQuantity: {
      type: DataTypes.INTEGER
    },
    background: {
      type: DataTypes.BOOLEAN
    }
  });

  return Volunteer;
};
