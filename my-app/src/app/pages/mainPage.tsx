import React from "react";
import MainLayout from "../layout/mainLayot";
import DataSlider from "../components/ui/dataSelecter";

const MainPage = () => {
    return (
        <MainLayout>
            <header>
                <DataSlider />
            </header>
        </MainLayout>
    );
};

export default MainPage;
