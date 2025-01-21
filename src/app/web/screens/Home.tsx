import DragonAnimation from "@components/Generic/DragonAnimation.tsx";
import Contact from "@components/Generic/Contact.tsx";
import "@styles/gradient.css";

export default function Home() {
    return (
        <section>
            <div className={"absolute -z-10 left-32"}>
                <DragonAnimation />
            </div>
            <section className={"flex ms-96 pt-16"}>
                <h1
                    className={
                        "text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 background-animate bg-[length:200%_100%]"
                    }
                >
                    Unleashing powerful solutions with precision and mastery.
                </h1>
            </section>
            <section className={"flex justify-center items-center"}>
                <h1>Work Experience</h1>
            </section>
            <section
                className={"flex transition-all justify-center items-center"}
            >
                <h1>About me</h1>
            </section>
            <footer className={"mt-96 pt-96"}>
                <Contact />
            </footer>
        </section>
    );
}
