"use client";

import Image from "next/image";
import Link from "next/link";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (rating: number) => void;
};

export default function Card({
  vid,
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <InteractiveCard>
      <Link href={`/venue/${vid}`} className="block">
        <div className="relative h-[190px] w-full overflow-hidden rounded-t-lg">
          <Image src={imgSrc} alt={venueName} fill className="object-cover" />
        </div>
        <h2 className="px-[10px] pt-3 text-xl font-semibold text-slate-900">
          {venueName}
        </h2>
      </Link>
      {rating !== undefined && onRatingChange && (
        <div className="px-[10px] pt-1">
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => onRatingChange(newValue ?? 0)}
          />
        </div>
      )}
    </InteractiveCard>
  );
}
