"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";

// Images
import gtv from "../public/collectble/gtv.png";
import gtav from "../public/collectble/red-dead.jpg";
import discord from "../public/collectble/discord.png";
import iptbcard from "../public/collectble/iptvcard.png";

// Material UI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// next ui

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// darkmode
import { useTheme } from "next-themes";

// The promotion must has only 2 link updated use what you want
function Mainproducts({ data }) {
  const { theme, setTheme } = useTheme();
  // States
  const [value, setValue] = React.useState(4);

  // Responsive proop
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1320 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1320, min: 940 },
      items: 4,
    },
    mobilemid: {
      breakpoint: { max: 940, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 390 },
      items: 2,
    },
    mobilesmall: {
      breakpoint: { max: 390, min: 0 },
      items: 2,
    },
  };

  // Data
  const arr = [
    { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
    { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
    { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
    { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
    { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
    { title: "IPTV", price: 2500, category: "PS5 Games", image: iptbcard },
    { title: "Discord", price: 1000, category: "XBOX Games", image: discord },
  ];
  const bgColorClassTheme = theme === "dark" ? "cart-parent" : "bg-white";

  // Custom dot indicator
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const handleClick = () => {
      onClick();
      onMove(index);
    };
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={handleClick}
        style={{ background: active ? "blue" : "grey" }}
      ></button>
    );
  };

  return (
    <div
      className={
        theme !== "dark"
          ? " flex py-2 flex-col gap-3 bg-white "
          : " flex py-2 flex-col gap-3 cart-parent "
      }
    >
      <div className=" w-full flex flex-col px-2 sm:px-10 md:px-16 lg:px-20 py-2 gap-3 justify-between items-start">
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
      <div className=" px-2 sm:px-10 md:px-16 lg:px-20 ">
        <Carousel
          responsive={responsive}
          additionalTransfrom={2}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite
          containerClass="my-carousel"
          keyBoardControl
          minimumTouchDrag={2}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          showDots={true} // Set showDots to true
          customDot={<CustomDot />} // Pass the custom dot component
          pauseOnHover={true}
          slidesToSlide={2}
          swipeable
          sliderClass="my-carousel"
          className=" bg-white"
          partialVisible={false}
        >
          {/*Notice image size must be at least 512 * 512 px */}
          {arr.map((e) => {
            return (
              <div
                key={e.title}
                className={
                  theme !== "dark"
                    ? " mr-2 border border-gray-200 rounded-lg"
                    : " mr-2 cart-box rounded-lg"
                }
              >
                <Image
                  height={290}
                  width={290}
                  src={e.image}
                  alt="Red Dead Redemption 2"
                  style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                  className=" no-drag-img no-drag-text"
                />
                <div className=" flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start">
                  <div className=" flex items-center justify-between w-full">
                    <p
                      className={
                        theme !== "dark"
                          ? " text-xs lg:text-sm text-gray-400"
                          : " text-xs lg:text-sm text-white"
                      }
                    >
                      {e.category}
                    </p>
                    <Link
                      className={
                        theme !== "dark"
                          ? "p-1 text-xs lg:text-sm text-black"
                          : "p-1 text-xs lg:text-sm text-white"
                      }
                      href={"/"}
                    >
                      Details{" "}
                      <ArrowForwardIosIcon
                        className=" text-xs text-black  "
                        fontSize="small"
                      />
                    </Link>
                  </div>
                  <h1
                    className={
                      theme !== "dark"
                        ? " text-bold text-md"
                        : " text-bold text-gray-200 text-md"
                    }
                  >
                    {e.title}
                  </h1>
                  <div className=" flex flex-col gap-2 items-start w-full justify-between">
                    <div className=" w-full items-center flex justify-between">
                      <span
                        className={
                          theme !== "dark"
                            ? "font-bold text-black text-xs sm:text-sm"
                            : "font-bold text-orange-400 text-xs sm:text-sm"
                        }
                      >
                        {e.price} DZD
                      </span>
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Rating
                          name="read-only"
                          size="small"
                          value={value}
                          readOnly
                        />
                      </Box>
                    </div>
                    <button
                      className={
                        theme !== "dark"
                          ? " w-full duration-300 hover:opacity-70 orange-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-2 text-black rounded"
                          : " w-full duration-300 hover:opacity-70 orange-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-2 text-black rounded"
                      }
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Mainproducts;

/*
        <Card className="py-0 cart-box rounded-md">
     
                        <CardBody className="overflow-visible pt-0 px-0 flex flex-col gap-2 ">
                            <Image
                                alt="Card background"
                                className="object-cover rounded"
                                src="https://cdn.mos.cms.futurecdn.net/3D9dh6TgNMUXwC7kYD5rP-1200-80.jpg"
                                width={270}
                            />
                            <div className=' flex px-2 items-center justify-between'>
                                <Image
                                    src="https://media.zenfs.com/en/gamerevolution_126/a01f17a082c1360f9d9d554d6bbec3d8"
                                    height={45}
                                    width={45}
                                />
                                <span className=' text-gray-300 text-xs'>20$</span>
                            </div>
                            <div className=' w-full px-2'>
                                <button className=' bg-orange-400 text-black rounded-md w-full p-1'>add</button>
                            </div>
                        </CardBody>
                    </Card>

                </Carousel>
*/

/*

            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className=" bg-slate-400 h-full px-10 flex gap-3 "
            >

                <SwiperSlide style={{ width: 200 }} className='  flex h-full bg-slate-50 justify-center items-center'>
                    <div style={{ width: 200 }} className=' bg-blue-500 h-full  flex flex-col items-center justify-center'>
                        <div >
                            <Image
                                height={300}
                                width={300}
                                src={gtav}
                                alt='Red Dead Redemption 2'
                            />
                        </div>
                        <div className=' h-14 w-full flex items-center justify-around bg-slate-100'>
                            <h1>Red dead 2</h1>
                            <button>buy</button>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

*/

/*

  <Swiper
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                
                pagination={{
                    clickable: true,
                    
                  }}
                  navigation={true}
                modules={[Autoplay]}
                className='mySwiper rounded-lg md:rounded-lg bg-slate-500'
            >
                <SwiperSlide className=' flex justify-start rounded-lg relative h-full'>

                </SwiperSlide>


            </Swiper>

*/

/*

                <Product img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
                <Product img={img2} title={"Software"} smtitle={"Software products"} />
                <Product img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
                <Product img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"} />

                <Product img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
                <Product img={img2} title={"Software"} smtitle={"Software products"} />
                <Product img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
                <Product img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"} />
*/
