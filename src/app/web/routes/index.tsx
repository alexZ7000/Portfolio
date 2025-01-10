import ErrorPage from "@screens/ErrorPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@screens/Home.tsx";
import Contact from "@screens/Contact.tsx";
import Projects from "@screens/Projects.tsx";
import About from "@screens/About.tsx";
import Navbar from "@components/Generic/Navbar.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className={"pt-24"} />
            <div className={"px-96"}>
                <Routes>
                    <Route path={"/portfolio/*"} element={<ErrorPage />} />
                    <Route path={"/portfolio"} element={<Home />} />
                    <Route path={"/portfolio/contact"} element={<Contact />} />
                    <Route path={"/portfolio/projects"} element={<Projects />} />
                    <Route path={"/portfolio/about"} element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
