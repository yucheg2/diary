import React from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import IconButton from "@mui/material/IconButton";
import DateForm from "../common/dateForm/dateForm";

interface DataSliderProps {
    curentDate: Date;
    handleCahngeDate: (date: Date) => void;
}

const DataSlider = ({ curentDate, handleCahngeDate }: DataSliderProps) => {
    const month: string[] = [
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
    const handleDateInc = () => {
        handleCahngeDate(
            new Date(
                curentDate.getFullYear(),
                curentDate.getMonth(),
                curentDate.getDate() + 1
            )
        );
    };
    const handleDateDic = () => {
        handleCahngeDate(
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
                paddingTop: "1vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                bgcolor: "info.main",
                borderBottom: 1,
                borderRadius: "0 0 15px 15px",
                color: "rgb(255, 255, 255)",
            }}
        >
            <IconButton size="large" onClick={handleDateDic}>
                <ArrowBackIosNewRoundedIcon color="action" />
            </IconButton>
            <Box
                sx={{
                    cursor: "default",
                    display: "flex",
                    flexShrink: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Typography variant="h5">
                    {month[curentDate.getMonth()]}
                </Typography>
                <SwipeableViews
                    index={curentDate.getDate() - 1}
                    containerStyle={{ width: "40vw", height: "100%" }}
                >
                    {days.map((day) => {
                        return (
                            <Box
                                sx={{
                                    textAlign: "center",
                                }}
                                key={day}
                            >
                                <Typography variant="h5">{day}</Typography>
                            </Box>
                        );
                    })}
                </SwipeableViews>
                <Typography variant="h6">{curentDate.getFullYear()}</Typography>
                <DateForm value={curentDate} onChange={handleCahngeDate} />
            </Box>
            <IconButton size="small" onClick={handleDateInc}>
                <ArrowForwardIosRoundedIcon color="action" />
            </IconButton>
        </Box>
    );
};

export default DataSlider;
