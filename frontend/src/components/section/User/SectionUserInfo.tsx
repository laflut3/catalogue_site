"use client";

import React from 'react';
import { useSession } from "next-auth/react";
import UserPage from "./userUtils/UserInfo";
import Typewriter from "typewriter-effect";

const SectionUserInfo = () => {
    const { data: session, status } = useSession();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            {status === "authenticated" ? (
                <>
                    <UserPage
                        firstName={session?.user?.firstName || 'undefined'}
                        lastName={session?.user?.lastName || 'undefined'}
                        email={session?.user?.email || 'undefined'}
                        image={session?.user?.image || 'undefined'}
                        name={session?.user?.name || 'undefined'}
                    />
                </>
            ) : (
                <div className="text-center">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Aucun compte n'est connecté").start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 50,
                        }}
                    />
                </div>
            )}
        </section>
    );
}

export default SectionUserInfo;
