import { Pool } from 'pg';

interface IConnectionDetails {
  host?: string;
  user?: string;
  port: number;
  password?: string;
  database?: string;
  sslmode: string;
}

const ConnectionDetails: IConnectionDetails = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: 5432,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  sslmode: 'disable',
};

export const dbConn = new Pool(ConnectionDetails);

export const connectPG = async () => {
  await dbConn.connect();
  dbConn.on('error', (error) => console.log(error));
  dbConn.on('connect', () => console.log('Connected to Database'));
};
