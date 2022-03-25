const Sequelize = require('sequelize');

const PresupuestoModel = require('./models/prespuesto');

const sequelize = new Sequelize('presupuesto_personal', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const Presupuesto = PresupuestoModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('tablas sincronizadas');
    })
module.exports = {
    Presupuesto
}