import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion"; // Import motion from Framer Motion
import "../globals.css";
import BasicRating from "@/components/muicomponent/rating";
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ChevronRight";
import ArrowLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "next-themes";

const DRAG_BUFFER = 30;
const DELAY_VALUE_MS = 2000;

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [delayValue, setDelayValue] = useState(3000);
  const { theme, setTheme } = useTheme();
  const dragX = useMotionValue(0);
  const fakeApiResponse = [
    {
      id: 1,
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Slide 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Slide 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "Slide 4",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      title: "Slide 5",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const handleBack = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };
  const DragStart = () => {
    setIsDrag(true);
  };
  const DragEnd = () => {
    const currentDrag = dragX.get();
    console.log(dragX.get());
    setIsDrag(false);
    if (currentDrag <= -DRAG_BUFFER) {
      setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    } else if (currentDrag >= DRAG_BUFFER) {
      setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    }
  };
  // Auto slider
  useEffect(() => {
    let interval;

    if (!isHover) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, delayValue);
    }

    return () => clearInterval(interval);
  }, [isHover, delayValue]);
  // End Auto slider

  return (
    <div className="  flex duration-300 h-auto rounded-xl items-center gap-3 justify-center overflow-hidden relative">
      <button
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          handleNext();
        }}
        className="absolute left-4 flex items-center justify-center rounded-full arrow-background duration-300  text-4xl z-50  text-white"
      >
        <ArrowLeftIcon style={{ fontSize: 40 }} className=" text-4xl" />
      </button>

      <div className=" flex duration-300 rounded-xl w-full h-auto gap-7 flex-col">
        <motion.div
          animate={{
            translateX: `-${currentIndex * 100}%`,
            transition: {
              type: "tween", // or use "tween", "inertia", etc. the default is "spring"
              stiffness: 100, // Adjust stiffness and damping as needed
              damping: 10,
            },
          }}
          style={{ x: dragX }}
          onDragStart={DragStart}
          onDragEnd={DragEnd}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          dragConstraints={{ right: 0, left: 0 }}
          drag="x"
          className="w-full  cursor-pointer rounded-xl h-auto lg:h-80   flex "
        >
          {data.map((el, index) => (
            <div
              key={el.id}
              className={
                theme !== "dark"
                  ? " border border-gray-200 min-w-full h-full flex flex-col rounded-xl lg:flex-row items-center justify-between"
                  : "   min-w-full h-full flex flex-col lg:flex-row items-center rounded-xl justify-between"
              }
            >
              <img
                src={el.src}
                className="no-drag-img w-full rounded-xl h-44 lg:h-full object-cover lg:object-cover"
              />
            </div>
          ))}
        </motion.div>
        <div className="  w-full gap-3 text-white absolute bottom-3 flex items-center justify-center">
          {data.map((_, index) => (
            <span
              style={{ padding: 5 }}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={
                theme !== "dark"
                  ? ` cursor-pointer ${
                      index !== currentIndex ? " bg-gray-500" : "bg-gray-100"
                    } rounded-full`
                  : ` cursor-pointer ${
                      index !== currentIndex ? " bg-gray-500" : "bg-slate-100"
                    } rounded-full`
              }
            ></span>
          ))}
        </div>
      </div>
      <button
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          handleBack();
        }}
        className="  absolute right-4 arrow-background duration-300 flex items-center justify-center rounded-full z-50  text-white"
      >
        <ArrowRightIcon style={{ fontSize: 40 }} className=" text-4xl" />
      </button>
    </div>
  );
};

export default Carousel;
