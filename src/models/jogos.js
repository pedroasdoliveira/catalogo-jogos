import Sequelize from 'sequelize'
import {connection} from '../db/connection.js'

export const games = connection.define('games', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    jogo: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    imagem: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    plataforma: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    genero: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    ano: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createAt: false,
    updatedAt: false,
    timestamps: false
}
)

const initTable = async () => {
    await games.sync();
};

initTable();