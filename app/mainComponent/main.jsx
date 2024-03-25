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
      src: "https://cdn.mos.cms.futurecdn.net/3D9dh6TgNMUXwC7kYD5rP-1200-80.jpg",
      title: "GTA 6",
      alt: "Image 1 for carousel",
      price: 99.99,
      perc: 40,
      tags: ["Open World", "POP"],
    },
    {
      src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/gta-6-infinite-endless-concept-art.jpeg",
      title: "GTA 5",
      alt: "Image 2 for carousel",
      price: 59.99,
      perc: 20,
      tags: ["RPG", "Simulation", "ACTION"],
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      title: "Nature ",
      alt: "Image 3 for carousel",
      price: 20.99,
      perc: 10,
      tags: ["Nature"],
    },
  ];

  return (
    <div className="  h-auto w-full cart-parent flex flex-col">
      <SectionAds />
      <Carousel data={data} />
      <div
        className={`w-full h-auto duration-300 ${bgColorClassTheme} flex-col  flex gap-4 items-center px-2 sm:px-10 md:px-16 lg:px-20 justify-center`}
      >
        {/* leave it empty */}
      </div>
    </div>
  );
}

export default Mainpage;
