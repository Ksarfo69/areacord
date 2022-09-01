import type { NextApiRequest, NextApiResponse } from 'next';
import { connectPG, dbConn } from '../../../config/dbConn';

type Data = {};

interface IResponse {
  rows: Array<{
    message_id: number;
    room_id: number;
    user_id: number;
    message: string;
    time: string;
  }>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectPG();
  const roomID: number = req.body.room_id;

  const query: string = 'SELECT * FROM messages WHERE room_id = $1';
  await dbConn.query(query, [roomID], (err: Error, results: IResponse) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(results.rows);
  });
}
