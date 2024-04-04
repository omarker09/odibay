import React from "react";
import { useTheme } from "next-themes";
import "../app/globals.css";
import RecommendSlider from "@/app/mainComponent/RecommendSlider";
const data = [
  {
    src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/gta-6-infinite-endless-concept-art.jpeg",
    title: "GTA 5",
    alt: "Image 2 for carousel",
    tags: ["RPG", "Simulation", "ACTION"],
  },
  {
    src: "https://picsum.photos/seed/img3/600/400",
    title: "Nature ",
    alt: "Image 3 for carousel",
    tags: ["Nature"],
  },
];
function FastSlider() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        theme !== "dark"
          ? "flex duration-300 flex-col bg-white py-2 px-2 gap-5 sm:px-10 md:px-16 lg:px-20 "
          : "cart-parent duration-300 flex flex-col py-2 px-2 gap-5 sm:px-10 md:px-16 lg:px-20 "
      }
    >
      <h1 className=" text-white text-2xl">Fanatical Gamers Recommend</h1>
      <RecommendSlider data={data} />
    </div>
  );
}

export default FastSlider;
