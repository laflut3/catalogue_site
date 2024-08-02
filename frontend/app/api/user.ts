import { getSession } from "next-auth/react";
import {connectDB} from "../../Lib/MongoLib/mongodb";
import User from "../../Lib/UserLib/models/User";

export default async (req:any, res:any) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    await connectDB();

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
};