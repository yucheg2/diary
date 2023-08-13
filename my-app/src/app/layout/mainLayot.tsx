import { Container } from "@mui/material";
import React from "react";

export interface LayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <Container sx={{ boxShadow: 3, pt: 0, height: "100vh" }} maxWidth="md">
            {children}
        </Container>
    );
};

export default MainLayout;
