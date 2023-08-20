import React, { useState } from "react";
import MainLayout from "../layout/mainLayot";
import DataSlider from "../components/ui/dataSelecter";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../store/hooks";
import { getTodosSelector } from "../store/todos";
import { format } from "date-fns";

const DiaryPage = () => {
    const [curentDate, setCurrentDate] = useState<Date>(new Date());
    const todos = useAppSelector(
        getTodosSelector(format(curentDate, "yyyy-MM-dd"))
    );
    console.log(todos);
    const handleChange = (newDate: Date) => {
        setCurrentDate(newDate);
    };
    return (
        <MainLayout>
            <header>
                <DataSlider
                    handleCahngeDate={handleChange}
                    curentDate={curentDate}
                />
            </header>
            <Fab
                color="primary"
                sx={{
                    position: "sticky",
                    top: "85vh",
                    left: "83vw",
                    width: "70px",
                    height: "70px",
                }}
            >
                <AddIcon sx={{ fontSize: 43 }} />
            </Fab>
        </MainLayout>
    );
};

export default DiaryPage;
