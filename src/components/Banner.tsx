"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./banner.module.css";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className={styles.banner}
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Venue banner"
        fill
        priority
        className={styles.bannerImage}
      />

      {session ? (
        <div className="absolute right-6 top-4 z-20 text-xl font-semibold text-white">
          Welcome {session.user?.name}
        </div>
      ) : null}

      <div className={styles.content}>
        <h1>where every event finds its venue</h1>

        <p>
          Discover the perfect venue for every occasion. From intimate
          gatherings to large celebrations, find a space that fits your event,
          style, and needs.
        </p>
      </div>

      <button
        type="button"
        className={styles.selectButton}
        onClick={(event) => {
          event.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
