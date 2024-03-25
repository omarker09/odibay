import React from "react";
import Product from "@/componnent-sm/product";
import Link from "next/link";
import gtv from "../public/collectble/gtv.png";
import gtav from "../public/collectble/red-dead.jpg";
import pf from "../public/collectble/iptvcard.png";
import "../app/globals.css";
import { useTheme } from "next-themes";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Regulerproducts() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        theme !== "dark"
          ? " flex bg-white duration-300 flex-col px-2 sm:px-10 md:px-16 lg:px-20 py-2  "
          : " flex cart-parent duration-300 flex-col px-2 sm:px-10 md:px-16 lg:px-20 py-2  "
      }
    >
      <div className=" w-full flex flex-col  py-2 gap-3 justify-between items-start">
        <div className=" w-full flex items-center justify-between">
          <h1
            className={
              theme !== "dark"
                ? " text-black text-2xl font-bold"
                : " text-white text-2xl rounded-lg  text-md "
            }
          >
            Popular
          </h1>
          <Link
            className={
              theme !== "dark"
                ? " cart-light-box py-1 px-2 rounded text-xs text-black "
                : " cart-box py-1 px-2 rounded text-xs  text-white "
            }
            href={"/"}
          >
            Discover all
          </Link>
        </div>
        <div className="flex flex-col gap-0 justify-start">
          <p className={theme !== "dark" ? "text-gray-500" : "text-gray-200"}>
            Explore exclusive programs and projects designed to enhance your
            experience
          </p>
        </div>
      </div>
      <div className=" w-full overflow-hidden  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 duration-300  gap-4  py-3">
        <Product
          id={2}
          img={pf}
          discount={20}
          title="RDR 2"
          oldprice={0}
          price={3500}
          category={"PS5 Games"}
          rating={4}
          width={290}
          height={290}
        />
        <Product
          id={3}
          img={gtv}
          discount={5}
          title="GTA V"
          price={2000}
          oldprice={0}
          category={"PS5 Games"}
          rating={5}
          width={290}
          height={290}
        />
        <Product
          id={4}
          img={gtav}
          discount={10}
          title="RDR 2"
          price={3500}
          oldprice={0}
          category={"PS5 Games"}
          rating={4}
          width={290}
          height={290}
        />
        <Product
          id={5}
          img={gtv}
          discount={15}
          title="GTA V"
          price={2000}
          oldprice={0}
          category={"PS5 Games"}
          rating={5}
          width={290}
          height={290}
        />
        <Product
          id={6}
          img={gtav}
          discount={10}
          title="RDR 2"
          price={3500}
          oldprice={0}
          category={"PS5 Games"}
          rating={4}
          width={290}
          height={290}
        />
        <Product
          id={7}
          img={gtav}
          discount={10}
          title="RDR 2"
          price={3500}
          oldprice={0}
          category={"PS5 Games"}
          rating={4}
          width={290}
          height={290}
        />
        <Product
          id={8}
          img={gtv}
          discount={15}
          title="GTA V"
          price={2000}
          oldprice={0}
          category={"PS5 Games"}
          rating={5}
          width={290}
          height={290}
        />
        <Product
          id={9}
          img={gtav}
          discount={10}
          title="RDR 2"
          price={3500}
          oldprice={0}
          category={"PS5 Games"}
          rating={4}
          width={290}
          height={290}
        />
      </div>
    </div>
  );
}

export default Regulerproducts;

/*
{data.length === 0 ? <div>Loading ...</div> : data.map((e) => {
          return <Product id={e.id} img={e.image} discount={20} title={e.title} price={e.price} category={e.category} rating={4} width={290} height={290} />
        })}
*/

/*

        <Product id={2} img={pf} discount={20} title="RDR 2 fgh fhf ghgfh dghdghd" oldprice={0} price={3500} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={3} img={gtv} discount={5} title="GTA V" price={2000} oldprice={0} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={290} height={290} />
        <Product id={4} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={5} img={gtv} discount={15} title="GTA V" price={2000} oldprice={0} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product id={6} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={7} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={8} img={gtv} discount={15} title="GTA V" price={2000} oldprice={0} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product id={9} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />

*/
