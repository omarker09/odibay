"use client";

// main
import React from "react";
import "../../app/globals.css";

// Material UI
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { tooltipClasses } from "@mui/material/Tooltip";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CustomizedTooltips(props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{props.title}</Typography>
            <em>{props.description1}</em>
            <b>{props.description2}</b>
          </React.Fragment>
        }
      >
        <span
          style={{ padding: 1 }}
          className=" cursor-pointer text-xs h-full flex items-center justify-center rounded-full"
        >
          <SmsFailedIcon
            style={{ fontSize: props.size }}
            fontSize="small"
            className=" text-white text-md font-normal"
          />
        </span>
      </HtmlTooltip>
    </div>
  );
}
