import React from "react";
import SectionAds from "./SectionAds";
import Carousel from "./carousel";
import Banner from "@/components/banner";
import Navbar from "@/components/Navbar";
import Mainproducts from "@/components/mainproducts";

import { useTheme } from "next-themes";
function Mainpage() {
  const { theme, setTheme } = useTheme();
  const bgColorClassTheme = theme === "dark" ? "cart-parent" : "bg-white";
  const items = [
    {
      imageUrl: "https://via.placeholder.com/600x300",
      title: "Featured Item 1",
      description: "Description for Featured Item 1",
    },
    {
      imageUrl: "https://via.placeholder.com/600x300",
      title: "Featured Item 2",
      description: "Description for Featured Item 2",
    },
    {
      imageUrl: "https://via.placeholder.com/600x300",
      title: "Featured Item 3",
      description: "Description for Featured Item 3",
    },
  ];
  const data = [
    {
      src: "https://static.driffle.com/media-gallery/production/260a9067-a616-4757-95fb-f0f67eca85ad_helldivers-2-mobilewebp",
      title: "GTA 6",
      alt: "Image 1 for carousel",
      price: 99.99,
      perc: 40,
      tags: ["Open World", "POP"],
    },
    {
      src: "https://static.driffle.com/media-gallery/production/008e7124-0d50-4855-885b-e5cbaf872425_horizon-forbidden-west-complete-edition-desktopwebp",
      title: "GTA 5",
      alt: "Image 2 for carousel",
      price: 59.99,
      perc: 20,
      tags: ["RPG", "Simulation", "ACTION"],
    },
    {
      src: "https://static.driffle.com/media-gallery/production/ebe509ab-60ad-4cc5-8a15-14eaae7d333e_alone-in-the-dark-mobilewebp",
      title: "Nature ",
      alt: "Image 3 for carousel",
      price: 20.99,
      perc: 10,
      tags: ["Nature"],
    },
  ];

  return (
    <div className="  h-auto w-full cart-parent gap-4 flex flex-col">
      <SectionAds />
      <div
        className={`w-full h-auto duration-300 ${bgColorClassTheme} flex-col  flex gap-4 items-center px-2 sm:px-10 md:px-16 lg:px-20 justify-center`}
      >
        <Carousel data={data} />
      </div>
    </div>
  );
}

export default Mainpage;
