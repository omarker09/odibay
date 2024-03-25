import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Categorycomp from "./component/categorycomp";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
function page({ params }) {
  const currentPath = params.categories;
  const modifiedPath = currentPath.replace(/-/g, " ");
  return (
    <div className="h-auto">
      <Navbar />
      <Categorycomp path={modifiedPath} />
      <Footer />
    </div>
  );
}

export default page;
