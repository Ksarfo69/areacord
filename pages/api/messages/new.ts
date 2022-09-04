import type { NextApiRequest, NextApiResponse } from 'next';
import { connectPG, dbConn } from '../../../config/dbConn';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectPG();
  const roomID: number = req.body.room_id;
  const userID: number = req.body.user_id;
  const message: string = req.body.message;
  const time: Date = new Date();

  const query: string =
    'INSERT INTO messages(room_id, user_id, message, time) VALUES ($1, $2, $3, $4)';
  await dbConn.query(query, [roomID, userID, message, time], (err: Error) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send('Message added successfully');
  });
}
