const Sequelize = require('sequelize');

const db = new sequelize("prime", "postgres", "rahul", {// database , user , password
    host: "localhost",
    dialect: "postgres"
});

sequelize.sync().then(() => {
    console.log('Users db and user table have been created');
});
  
module.exports = User;