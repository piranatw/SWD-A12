"use client";

import { useReducer } from "react";
import Card from "./Card";

type Venue = {
  vid: string;
  name: string;
  image: string;
};

type RatingAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

const venues: Venue[] = [
  { vid: "001", name: "The Bloom Pavilion", image: "/assets/bloom.jpg" },
  { vid: "002", name: "Spark Space", image: "/assets/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", image: "/assets/grandtable.jpg" },
];

function ratingsReducer(ratings: Map<string, number>, action: RatingAction) {
  const nextRatings = new Map(ratings);

  if (action.type === "set") {
    nextRatings.set(action.venueName, action.rating);
  } else {
    nextRatings.delete(action.venueName);
  }

  return nextRatings;
}

function initialRatings() {
  return new Map(venues.map(({ name }) => [name, 0]));
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, undefined, initialRatings);

  return (
    <section className="w-full px-6 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            venueName={venue.name}
            imgSrc={venue.image}
            rating={ratings.get(venue.name) ?? 0}
            onRatingChange={(rating) =>
              dispatch({ type: "set", venueName: venue.name, rating })
            }
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        {[...ratings].map(([venueName, rating]) => (
          <button
            key={venueName}
            type="button"
            data-testid={venueName}
            className="w-full rounded-md bg-white px-4 py-3 text-left text-black shadow-sm transition hover:bg-slate-100"
            onClick={() => dispatch({ type: "remove", venueName })}
          >
            {venueName} Rating : {rating}
          </button>
        ))}
      </div>
    </section>
  );
}
