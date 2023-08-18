import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import Box from "@mui/material/Box";
import "./index.css";
import { format } from "date-fns";

interface DateFormProps {
    value: Date;
    onChange: (date: Date) => void;
}

const DateForm = ({ value, onChange }: DateFormProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        onChange(new Date(target.value));
    };
    return (
        <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
            <label htmlFor="date" className="h3 mr-2 flex-auto">
                <>
                    <ArrowDropDownIcon color="action" />
                </>
            </label>
            <input
                id="date"
                type="date"
                onChange={handleChange}
                value={format(value, "yyyy-MM-dd")}
                className="border rounded"
            />
        </Box>
    );
};

export default DateForm;
