module.exports = function(sequelize, DataTypes) {
  let Volunteer = sequelize.define("volunteer", {
    name: DataTypes.STRING,
    email: DataTypes.INT,
    phone: DataTypes.INT,
    location: DataTypes.INT,
    avalibility: DataTypes.DATE,
    mealPreference: DataTypes.STRING,
    mealuantity: DataTypes.INT,
    background: DataTypes.BOOLEAN,
 
  });
  return Volunteer;
 };