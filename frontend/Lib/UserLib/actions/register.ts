"use server"

import { connectDB } from "../../MongoLib/mongodb";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, nom, prenom, username, phone, dateOfBirth } = values;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });
        if (userFound) {
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            nom,
            prenom,
            username,
            phone,
            dateOfBirth,
            email,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        // Convertir l'utilisateur en objet simple
        return {
            id: savedUser._id.toString(),
            nom: savedUser.nom,
            prenom: savedUser.prenom,
            username: savedUser.username,
            phone: savedUser.phone,
            dateOfBirth: savedUser.dateOfBirth,
            email: savedUser.email,
        };
    } catch (e) {
        console.log(e);
        return {
            error: 'Une erreur est survenue lors de la création de l\'utilisateur.'
        };
    }
}
