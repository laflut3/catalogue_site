import { connectDB } from "../../MongoLib/mongodb";
import User from "../models/User";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import {to} from "@react-spring/core";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({
                    email: credentials?.email,
                }).select("+password");

                if (!user) throw new Error("Wrong Email");

                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password
                );

                if (!passwordMatch) throw new Error("Wrong Password");

                return {
                    id: user._id.toString(),
                    name: user.username,
                    email: user.email,
                    image: user.image,
                    firstName: user.prenom,
                    lastName: user.nom,
                    isAdmin: user.isAdmin,
                    DateOfBirth: user.DateOfBirth
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.isAdmin = user.isAdmin;
                token.DateOfBirth = user.DateOfBirth;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.isAdmin = token.isAdmin;
                session.user.DateOfBirth = token.DateOfBirth;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};
