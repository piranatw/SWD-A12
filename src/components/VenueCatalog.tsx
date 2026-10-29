import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venuesJsonReady = await venuesJson;

  return (
    <section className="w-full px-6 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {venuesJsonReady.data.map((venue: VenueItem) => (
          <Card
            key={venue.id}
            vid={venue.id}
            venueName={venue.name}
            imgSrc={venue.picture}
          />
        ))}
      </div>
    </section>
  );
}
