import "../../app/globals.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
export const MegaMenu1 = () => {
  const MegaArr1 = [
    {
      href: "/categories/Popular-Games",
      title: "Popular Games",
      Desc: "lorem yhgj hgj  jkkkdghjdghj ghj dghj ",
    },
    {
      href: "/categories/Cd-Keys-bulk",
      title: "Cd Keys bulk",
      Desc: "lorem yhgj hgj  jkkkdghjdghj ghj dghj ",
    },
    {
      href: "/categories/Extra-price",
      title: "Extra price",
      Desc: "lorem yhgj hgj  jkkkdghjdghj ghj dghj ",
    },
    {
      href: "/categories/Fortinte-VDX",
      title: "Fortinte VDX",
      Desc: "lorem yhgj hgj  jkkkdghjdghj ghj dghj ",
    },
    {
      href: "/categories/Summer-Package",
      title: "Summer Package",
      Desc: "lorem yhgj hgj  jkkkdghjdghj ghj dghj ",
    },
  ];
  return (
    <div className=" w-full gap-4 h-full grid  grid-cols-4 row-span-2">
      {MegaArr1.map((el, index) => (
        <Link
          href={el.href}
          className=" flex mega-nested-card-text mega-nested-card rounded-md duration-400 p-3 flex-col gap-2"
          key={el.title}
        >
          <h1 className="  text-lg">{el.title}</h1>
          <p className=" text-gray-400 text-sm">{el.Desc}</p>
        </Link>
      ))}
    </div>
  );
};

export const MegaMenu2 = () => {
  return (
    <div className=" w-full gap-4 h-full grid grid-cols-4 row-span-2">
      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">GTA 5</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Fortinte</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Minecraft</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Diablo Importal</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">FIFA 24</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>
    </div>
  );
};

export const MegaMenu3 = () => {
  return (
    <div className=" w-full gap-4 h-full grid grid-cols-4 row-span-2">
      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Amazon Card</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Steam Keys</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Origign Keys</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Itunes Cards</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Google play</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>
    </div>
  );
};

export const MegaMenu4 = () => {
  return (
    <div className=" w-full gap-4 h-full grid grid-cols-4 row-span-2">
      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Xbox S|X</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Xbox One</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Xbox Events</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Role Avatar</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">Xbox Minecraft</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>
    </div>
  );
};

export const MegaMenu5 = () => {
  return (
    <div className=" w-full gap-4 h-full grid grid-cols-4 row-span-2">
      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Rockstar Games</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Visit Steam</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Summer Event</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className=" text-lg">IPTV 50% off</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex mega-nested-card-text mega-nested-card duration-400 p-3 flex-col gap-2">
        <h1 className="  text-lg">Minecraft for 15$</h1>
        <p className=" text-gray-400 text-sm">
          lorem yhgj hgj jkkkdghjdghj ghj dghj{" "}
        </p>
      </div>

      <div className=" flex items-center justify-start w-full ">
        <div className=" flex flex-row cursor-pointer  w-full justify-center  items-center duration-400 p-2 border h-14 gap-4 border-orange-400">
          <p className=" text-gray-400 text-sm">See More</p>
          <h1 className=" orange-text-colo text-lg">
            <ArrowForwardIcon />
          </h1>
        </div>
      </div>
    </div>
  );
};
