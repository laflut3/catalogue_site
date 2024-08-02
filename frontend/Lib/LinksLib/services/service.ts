// lib/linkService.ts
import {connectDB} from '../../MongoLib/mongodb';
import Link, { ILink } from '../models/Links';

export async function getLinksByType(type: string): Promise<ILink[]> {
    await connectDB();
    return Link.find({ type }).exec();
}

export async function getLinkByUrl(url: string): Promise<ILink | null> {
    await connectDB();
    return Link.findOne({ url }).exec();
}
