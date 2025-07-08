import Link from "next/link";
import React from "react";

export const Navigation = () => {
    return <div className="flex items-center justify-between p-4 bg-gray-500 text-white">
        <div className="text-lg font-bold">BetterFlix</div>
        <div className="flex gap-4">
            <Link href="/" className="text-white hover:text-gray-300">
                Home
            </Link>
            <Link href="/movies" className="text-white hover:text-gray-300">
                Movies
            </Link>
        </div>
    </div>
}

