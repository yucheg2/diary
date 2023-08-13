import React, { useState } from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import Button from "@mui/material/Button";

const DataSlider = () => {
    const month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    const days: number[] = Array.from({ length: 31 }, (v, i) => i + 1);
    const [curentDate, setCurrentDate] = useState<Date>(new Date());
    const handleDateInc = () => {
        setCurrentDate(
            new Date(
                curentDate.getFullYear(),
                curentDate.getMonth(),
                curentDate.getDate() + 1
            )
        );
    };
    const handleDateDic = () => {
        setCurrentDate(
            new Date(
                curentDate.getFullYear(),
                curentDate.getMonth(),
                curentDate.getDate() - 1
            )
        );
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                bgcolor: "info.main",
                borderBottom: 1,
                borderRadius: "0 0 15px 15px",
                color: "rgb(255, 255, 255)",
            }}
        >
            <Button onClick={handleDateDic}>
                {" "}
                <ArrowBackIosNewRoundedIcon />
            </Button>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <SwipeableViews index={curentDate.getDate() - 1}>
                    {days.map((day) => {
                        return (
                            <Box sx={{ textAlign: "center" }} key={day}>
                                <Typography variant="h5">{day}</Typography>
                            </Box>
                        );
                    })}
                </SwipeableViews>
                <Typography variant="h5">
                    {month[curentDate.getMonth()]}
                </Typography>
            </Box>
            <Button onClick={handleDateInc}>
                {" "}
                <ArrowForwardIosRoundedIcon />
            </Button>
        </Box>
    );
};

export default DataSlider;
