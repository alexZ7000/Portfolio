import { navbarProperties } from "@constants/NavbarProperties.ts";
import LogoWhite from "@assets/logoWhite.svg";
import LogoBlack from "@assets/logoBlack.svg";
import { useThemeDetector } from "@functions/ThemeDetector.ts";

export default function Navbar() {
    const isDarkTheme = useThemeDetector();
    return (
        <nav className="w-full fixed z-50 backdrop-blur-lg bg-white/50 dark:bg-black/50 shadow-lg py-4 flex justify-center">
            <section className="w-full max-w-7xl px-6 py-2 flex justify-between items-center rounded-full">
                <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    <img
                        className={"max-h-16 scale-[525%]"}
                        src={isDarkTheme ? LogoWhite : LogoBlack}
                        alt="Alessandro Lima logo"
                    />
                </div>
                <div>
                    <ul className="flex gap-8 list-none p-0">
                        {navbarProperties.map((item, index) => (
                            <li key={`listKey-${index}`}>
                                <button
                                    className={`text-gray-600 dark:text-gray-300 ${isDarkTheme ? "hover:text-green-d" : "hover:text-green-l"} font-medium transition-all transform duration-300 hover:scale-105`}
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
