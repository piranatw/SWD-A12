import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function VenuePage() {
  const venues = getVenues();

  return (
    <main className="min-h-screen bg-slate-50">
      <h1 className="px-6 pt-10 text-3xl font-semibold text-slate-900">
        Select Your Venue
      </h1>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
