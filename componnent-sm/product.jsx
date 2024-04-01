import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import "../app/globals.css";
import { useTheme } from "next-themes";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FaCartShopping, FaArrowCircleRight } from "react-icons/fa";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Product(props) {
  const [openSnack, setOpenSnack] = useState(false);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const datas = useSelector((e) => e.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gettingLocal = localStorage.getItem("cartSystem");
        const cartParse = JSON.parse(gettingLocal);
        if (cartParse !== undefined) {
          setCartData(cartParse);
        }
      } catch (error) {
        console.log("Error parsing:", error);
      }
    };

    fetchData();
  }, []);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const handleAddToCart = () => {
    dispatch(addProduct(props));
    setOpenSnack(true);
  };

  return (
    <div
      key={props.id}
      className="boxshadow duration-200 flex flex-col justify-between cursor-pointer relative w-full rounded-lg"
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="success"
            sx={{ width: "100%" }}
          >
            {props.title} has been added to your Cart!
          </Alert>
        </Snackbar>
      </Stack>
      {props.discount && (
        <div className="bg-red-600 text-white px-4 py-1 absolute top-0 right-0">
          {props.discount}% OFF
        </div>
      )}
      <div
        className={
          theme !== "dark"
            ? "mr-2 border border-gray-200 rounded-lg w-full"
            : "mr-2 w-full cart-box rounded-lg"
        }
      >
        {/* Image and other content here */}
        <button
          onClick={handleAddToCart}
          className={
            theme !== "dark"
              ? "w-full duration-300 hover:opacity-70 orange-background text-xs lg:text-sm px-1 md:px-3 lg:px-2 py-2 text-black rounded flex items-center gap-3 justify-center"
              : "w-full duration-300 hover:opacity-70 orange-background flex items-center justify-center text-xs lg:text-sm gap-3 px-1 md:px-3 lg:px-2 py-2 text-black rounded"
          }
        >
          Add <FaCartShopping />
        </button>
      </div>
    </div>
  );
}

export default Product;
