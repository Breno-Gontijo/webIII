const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('./link');

const Medico = database.define('Médico', {
    CPF: {
        type: sequelize.STRING,
        allownNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allownNull: false,

    },
    especialidade: {
        type: Sequelize.STRING,
        allownNull: false
    },
    hora: {
        type: Sequelize.STRING,
        allownNull: false
    },
    dia: {
        type: Sequelize.FLOAT,
    }
})

module.exports = Medico;

