import { navbarProperties } from "@constants/NavbarProperties.ts";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className={"w-full fixed mt-5 flex justify-center"}>
            <section
                className={"px-20 py-2 drop-shadow bg-blue-500 rounded-full"}
            >
                <div>
                    <ul className={"flex gap-20 list-none p-0"}>
                        {navbarProperties.map((item, index) => (
                            <li key={"listKey " + index}>
                                <button
                                    className={
                                        "hover:text-pink-600 drop-shadow w-20 transition-all duration-300 hover:scale-105"
                                    }
                                    onClick={() => navigate(item.navigate)}
                                    role="link"
                                    tabIndex={0}
                                    aria-label={`Navegar para ${item.title}`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    );
}
