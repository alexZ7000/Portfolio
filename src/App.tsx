import AppRoutes from "@routes/index";
import ToasterContainer from "@components/Generic/ToasterContainer.tsx";

export default function App() {
    return (
        <>
            <ToasterContainer />
            <AppRoutes />
        </>
    );
}
