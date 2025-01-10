import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <section>
            <div className={"flex justify-center items-center"}>
                <h1>Alessandro Lima</h1>
            </div>
        </section>
    );
}
