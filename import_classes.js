const classJson = require('./classes.json');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/test');

// test connection
(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

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
  description: Sequelize.TEXT,
  dept: Sequelize.STRING,
  school: Sequelize.STRING,
  prereqs: Sequelize.TEXT
});

const activities = db.define('activities', {
  isLiked: Sequelize.BOOLEAN
});

users.belongsToMany(classes, { through: activities });
classes.belongsToMany(users, { through: activities });

// import data now
// console.log(Object.values(classJson))
(async () => {
  await users.sync();
  await classes.sync();
  await activities.sync();

  classes.destroy({
    where: {},
    truncate: true
  });

  for (let i = 0; i < classJson.length; i++) {
    const rawClass = classJson[i];
    let currClass = {
      classCode: rawClass['code'],
      classNo: rawClass['class_id'],
      name: rawClass['name'],
      description: rawClass['overview'],
      dept: rawClass['subject'],
      school: rawClass['school'],
      prereqs: rawClass['requirements']
    };

    const newClass = classes.build(currClass);
    await newClass.save();
    console.log(`${newClass.name} was saved to the database!`);
  }

  process.exit();
})();
