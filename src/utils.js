const { Sequelize } = require('sequelize');

module.exports.createStore = () => {
  const db = new Sequelize('postgres://localhost:5432/test');

  const users = db.define('user', {
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    year: Sequelize.ENUM('FRESHMAN', 'SOPHOMORE', 'JUNIOR', 'SENIOR'),
    interestDept: Sequelize.ARRAY(Sequelize.STRING),
    cart: Sequelize.ARRAY(Sequelize.STRING)
  });

  const classes = db.define('class', {
    classCode: Sequelize.STRING,
    classNo: Sequelize.INTEGER,
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    dept: Sequelize.STRING,
    school: Sequelize.STRING,
    prereqs: Sequelize.STRING
  });

  const activities = db.define('activities', {
    isLiked: Sequelize.BOOLEAN
  });

  users.belongsToMany(classes, { through: activities });
  classes.belongsToMany(users, { through: activities });

  return { db, users, classes, activities };
};
