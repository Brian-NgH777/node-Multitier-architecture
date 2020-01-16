import * as sql from 'mssql';
import * as dotenv from 'dotenv';
dotenv.config();

export default class DataAccess {
    private static pool: any;
    private static connection: any;

    static async connect(){
        DataAccess.pool = new sql.ConnectionPool({  
            user: String(process.env.DB_USER),
            password: String(process.env.DB_PASS),
            server: String(process.env.DB_HOST),
            database: String(process.env.DB_NAME),
            port : Number(process.env.DB_PORT),
            pool: {
                max: 50,
                idleTimeoutMillis: 60000
            },
            requestTimeout : 60000,
            connectionTimeout: 60000
        });
        DataAccess.connection = await DataAccess.pool.connect();
    }

    static async execute (data) {
        // let request = await DataAccess.connection.request();
        // let result = await request.query(data);
        try {
        let result = await  DataAccess.connection.request().query(data);
        // DataAccess.pool.close();
        // console.log('resultresultresult', result);
        return result.recordset;
        } catch (err) {
            console.log('err', err);
        }
    }
}