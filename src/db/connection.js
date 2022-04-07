import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const connection = new Sequelize(
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    process.env.DATABASE_URL,
    {
        // host: process.env.DB_HOST,
        // port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
)