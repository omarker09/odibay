import React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import ExploreSteam from "../../public/collectble/steam_explore.webp";
import ExploreXbox from "../../public/collectble/xbox_explore.webp";
import ExplorePlayStation from "../../public/collectble/playstation_explore.webp";
import ExploreNitindeo from "../../public/collectble/nitindo_explore.webp";
import ExploreBinance from "../../public/collectble/binance_explore.webp";
import { useTheme } from "next-themes";

function Explore() {
  const { theme, setTheme } = useTheme();
  return (
    <section className={theme === "dark" ? " px-2 explores-section-bg sm:px-10 md:px-16 lg:px-20" : " px-2 bg-white sm:px-10 md:px-16 lg:px-20"}>
      <div className="h-auto w-full flex flex-col gap-4  py-6">
        <div className="w-full">
          <h1 className={theme === "dark" ? " text-xl font-extrabold text-white" : " text-xl font-extrabold text-black"}>
            Explore By Platforms
          </h1>
        </div>
        <div className="gap-3 w-full grid  grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 items-center">
          <Image
            className="object-cover rounded-lg h-24 w-full sm:w-56 cursor-pointer"
            src={ExploreSteam}
          />
          <Image
            className="object-cover rounded-lg h-24 w-full sm:w-56 cursor-pointer"
            src={ExploreXbox}
          />
          <Image
            className="object-cover rounded-lg h-24 w-full sm:w-56 cursor-pointer"
            src={ExplorePlayStation}
          />
          <Image
            className="object-cover rounded-lg h-24 w-full sm:w-56 cursor-pointer"
            src={ExploreNitindeo}
          />
          <Image
            className="object-cover rounded-lg h-24 w-full sm:w-56 cursor-pointer"
            src={ExploreBinance}
          />
        </div>
      </div>
    </section>
  );
}

export default Explore;
