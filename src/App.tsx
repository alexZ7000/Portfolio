import AppRoutes from "@routes/index";
import ToasterContainer from "@components/ToasterContainer.tsx";
import { createPortal } from "react-dom";
import { useThemeDetector } from "@functions/ThemeDetector.ts";

export default function App() {
    const isDarkTheme = useThemeDetector();
    return (
        <>
            <ToasterContainer />
            {createPortal(
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href={
                        isDarkTheme
                            ? "/portfolio/dragonWhite.svg"
                            : "/portfolio/dragonBlack.svg"
                    }
                />,
                document.getElementById("link-by-user-theme") as
                    | Element
                    | DocumentFragment
            )}
            <AppRoutes />
        </>
    );
}
