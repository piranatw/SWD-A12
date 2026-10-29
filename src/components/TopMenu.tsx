import Image from "next/image";
import { getServerSession } from "next-auth";
import TopMenuItem from "./TopMenuItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
    const session = await getServerSession(authOptions);

    return (
        <nav className="flex h-16 items-center justify-between border-b
        border-slate-200 bg-white px-6 shadow-sm">
            <div className="flex items-center gap-4">
                {
                    session
                    ? <TopMenuItem title="Sign-Out" pageRef="/api/auth/signout"/>
                    : <TopMenuItem title="Sign-In" pageRef="/api/auth/signin"/>
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking"/>
            </div>

            <div className="flex items-center gap-4">
                <TopMenuItem
                title="Booking"
                pageRef="/booking"
                />

                <Image
                src="/assets/logo.png"
                alt="Venue Explorer Logo"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"/>
            </div>
        </nav>
    )
}
