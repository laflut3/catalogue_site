import { NextApiRequest, NextApiResponse } from 'next';
import {connectDB} from '@/../Lib/MongoLib/mongodb';
import Link from '@/../Lib/LinksLib/models/Links';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    await connectDB();

    try {
        const link = await Link.findById(id);
        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }
        res.status(200).json(link);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
