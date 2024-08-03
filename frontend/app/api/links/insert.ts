"use client"

import { NextApiRequest, NextApiResponse } from 'next';
import {connectDB} from '@/../Lib/MongoLib/mongodb';
import Link from '@/../Lib/LinksLib/models/Links';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    if (req.method === 'POST') {
        const { url, type } = req.body;

        if (!url || !type) {
            return res.status(400).json({ message: 'URL and type are required' });
        }

        try {
            const newLink = new Link({ url, type });
            await newLink.save();
            res.status(201).json(newLink);
        } catch (error) {
            res.status(500).json({ message: "erreur d'insertion" });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
