const sequelize = require("sequelize");

const db = new sequelize("prime", "postgres", "rahul", {// database , user , password
  host: "localhost",
  dialect: "postgres"
});

db.authenticate().then(() => {
  console.log("Database Connected");
});

db.sync().then(res => console.log('Tables Created'));
module.exports = db;
