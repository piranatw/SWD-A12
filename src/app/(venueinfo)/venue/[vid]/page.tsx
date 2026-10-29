import Image from "next/image";
import Link from "next/link";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const { data: venue } = await getVenue(vid);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-lg md:flex-row md:items-start">
        <Image
          src={venue.picture}
          alt={venue.name}
          width={320}
          height={240}
          className="rounded-lg object-cover"
        />
        <div className="text-slate-700">
          <h1 className="text-3xl font-semibold text-slate-900">{venue.name}</h1>
          <div className="mt-4 space-y-1">
            <div>Name: {venue.name}</div>
            <div>Address: {venue.address}</div>
            <div>District: {venue.district}</div>
            <div>Province: {venue.province}</div>
            <div>Postal Code: {venue.postalcode}</div>
            <div>Tel: {venue.tel}</div>
            <div>Daily Rate: {venue.dailyrate}</div>
          </div>
          <Link href="/venue" className="mt-6 inline-block text-blue-700 underline">
            Back to all venues
          </Link>
        </div>
      </div>
    </main>
  );
}
