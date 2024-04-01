import React from "react";
import Card from "./card";

async function Categorycomp(props) {
  const fetchdata = await fetch("http://192.168.0.139:3002/api/v1/props/metadata", {
    cache: "no-cache",
  });
  const response = await fetchdata.json();
  return (
    <div className="px-2 sm:px-10 md:px-16 lg:px-20 cart-parent flex flex-col gap-6 py-5 h-auto overflow-hidden">
      <div className=" h-auto  flex gap-4 flex-col py-5">
        <div className=" flex gap-4 flex-col">
          <h1 className=" text-white text-2xl font-bold">{props.path}</h1>
          <p className=" text-gray-500">
            Nothing's better than a game that feels like a true adventure and is
            chock-full of action! Our Action RPG category is host to some of the
            most exciting games; you'll find titles like The Elder Scrolls
            franchise, Pathfinder, and even the beloved God of War!
          </p>
        </div>
        <div className=" w-full flex items-center justify-between py-5">
          <div className=" flex items-center gap-3">
            <button className=" bg-white text-black p-3 px-5 rounded-3xl">
              All
            </button>
            <button className=" tags-theme text-white shadow-2xl p-3 px-5 rounded-3xl">
              Games
            </button>
            <button className=" tags-theme text-white shadow-2xl p-3 px-5 rounded-3xl">
              DLC
            </button>
          </div>
          <div className=" flex items-center gap-3">
            <span className=" text-white">Sort by</span>
            <select className=" p-3 rounded-md text-white cursor-pointer">
              <option className=" cursor-pointer">item 1</option>
              <option>item 2</option>
              <option>item 3</option>
              <option>item 4</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 extralarge md:gap-8 w-full">
          {response &&
            Array.isArray(response) &&
            response.map((el, index) => {
              return (
                <Card
                  key={index}
                  image={el.product_img}
                  id={el.public_product_id}
                  token={el.product_token}
                  price={el.price}
                  promo_price={el.promo_price}
                  title={el.product_name}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Categorycomp;

/*
            
            <Card image={elden} title={"Elden Ring"} />
            <Card image={parfic} title={"dark souls 2"} />
            <Card image={batman} title={"BATMAN"} />
            <Card image={legopirate} title={"lEGO Pirates"} />
            <Card image={resd4} title={"Resident evil 4"} />
*/
