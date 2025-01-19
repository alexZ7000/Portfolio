import ErrorPage from "@screens/ErrorPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@screens/Home.tsx";
import Navbar from "@components/Generic/Navbar.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className={"pt-32"} />
            <div className={"px-96"}>
                <Routes>
                    <Route path={"/portfolio/*"} element={<ErrorPage />} />
                    <Route path={"/portfolio"} element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
