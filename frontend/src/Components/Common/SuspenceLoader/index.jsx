import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SuspenceLoader({ loading }) {
    return (
        <>
            <Box sx={{
                display: 'flex',
                position: 'fixed',
                top: '0',
                left: '0',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                background: "white",
                zIndex: 2,
            }} >
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <img className="max-w-[189px] md:max-w-[400px]" src="https://www.allduniv.ac.in/assets/frontend/img/home/au_logo.png" alt="logo" id="main_logo" />
                    <CircularProgress sx={{
                        color: "black",
                        width: '50px !important',
                        height: '50px !important',
                        fontWeight: '900 !important',
                    }} />
                </Box>
            </Box>
        </>
    );
}