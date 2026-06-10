import { Sequelize } from "sequelize";
import { env } from "../routes/utilites/validate-env.js";


export const sequelize = new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD, {
        dialect: 'postgres',
        logging:false
    }

)

export const connectToPG = async () => {
    try {
        await sequelize.authenticate();
        
        // sequelize.sync({force:true})
        console.log('CONNECTED TO PG SUCCESSFULLY');
    } catch (e) {
        console.log('COULD NOT CONNECT TO PG!');
        throw e;
    }
}

