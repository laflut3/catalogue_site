import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
            firstName: string;
            lastName: string;
            isAdmin: boolean;
        }
    }

    interface User {
        id: string;
        name: string;
        email: string;
        image: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        name: string;
        email: string;
        picture: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
    }
}
