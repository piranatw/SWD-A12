import Link from "next/link"

type TopMenuItemProps = {
    title: string;
    pageRef: string;
}

export default function TopMenuItem({
    title,
    pageRef,
}: TopMenuItemProps) {
    return (
        <Link
        href={pageRef}
        className="rounded-md bg-gray-200 px-4 py-2 font-bold text-black transition
        hover:bg-gray-300">
            {title}
        </Link>
    )
}
