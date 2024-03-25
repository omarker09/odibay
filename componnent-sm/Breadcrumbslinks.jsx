import React, { useState, useEffect } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

function Breadcrumbslinks(props) {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(props.home === true);
  }, [props.home]);

  return (
    <div>
      <Link
        className="hover:underline flex gap-1 items-center"
        href={`/${props.path}`}
      >
        {isHome ? <HomeIcon className="text-black" color="blue" /> : ""}
        {props.title}
      </Link>
    </div>
  );
}

export default Breadcrumbslinks;
