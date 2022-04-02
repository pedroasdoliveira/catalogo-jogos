import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const connection = new Sequelize(
    DB_BASE = jogos,
    DB_USER = postgres,
    DB_PASS = Pa44528033,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)