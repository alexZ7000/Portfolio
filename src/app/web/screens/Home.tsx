import DragonAnimation from "@components/DragonAnimation.tsx";
import Contact from "@components/Contact.tsx";
import "@styles/gradient.css";
import WorkExperience from "@components/WorkExperience.tsx";

export default function Home() {
    return (
        <section>
            <div className={"absolute -z-10 left-32"}>
                <DragonAnimation />
            </div>
            <section className={"flex mb-96 ms-96 pt-16"}>
                <h1
                    className={
                        "text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bluebright-d via-green-d to-green-d background-animate bg-[length:200%_100%]"
                    }
                >
                    Unleashing powerful solutions with precision and mastery.
                </h1>
            </section>
            <WorkExperience />
            <footer
                className={
                    "flex flex-col gap-y-12 transition-all justify-center items-center"
                }
            >
                <h1 className={"text-6xl font-bold"}>About me</h1>
                <Contact />
            </footer>
        </section>
    );
}
