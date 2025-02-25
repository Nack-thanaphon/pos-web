"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <div onClick={() => signOut()} className='flex items-center  bg-red-500 text-white p-2 rounded-lg cursor-pointer'>
            <p>Sign Out</p>
        </div>
    );
}
