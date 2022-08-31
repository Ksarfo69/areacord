import type { NextApiRequest, NextApiResponse } from 'next';
import { connectPG, dbConn } from '../../../config/dbConn';

type Data = {};

interface IResponse {
  rows: Array<{ room_id: number; room_name: string }>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectPG();
  const query: string = 'SELECT * FROM room';

  await dbConn.query(query, (err: Error, results: IResponse) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(results.rows);
  });
}
