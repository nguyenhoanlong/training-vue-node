const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize('training_vue_nodejs', 'root', '12345678', {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;