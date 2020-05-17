const sequelize = require("sequelize");

// const db = new sequelize("prime", "postgres", "0123456789", {// database , user , password
//   host: "localhost",
//   dialect: "postgres"
// });
const db= new sequelize(`	postgres://apzghzzz:e6PTxSrBtMcD_8C4sMQT0-c-kii_1EzY@rosie.db.elephantsql.com:5432/apzghzzz`);


db.authenticate().then(() => {
  console.log("Database Connected");
});

db.sync().then(res => console.log('Tables Created'));
module.exports = db;
