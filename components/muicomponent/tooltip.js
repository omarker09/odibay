import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { tooltipClasses } from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "../../app/globals.css"
const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function CustomizedTooltips() {
    return (
        <div>
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">Password Coldown</Typography>
                        <em>{"You can only change the password one time every 7 day. "}</em>
                        <b>{"click reset if you forogot the current password !!"}</b>
                    </React.Fragment>
                }
            >
                <span style={{padding: 1}} className=' bg-slate-600 cursor-pointer text-xs h-full flex items-center justify-center rounded-full'>
                    <QuestionMarkIcon fontSize='small' className=' text-white text-sm font-normal'/>
                </span>
            </HtmlTooltip>
        </div>
    );
}
