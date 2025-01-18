import { Github, Linkedin, Mail } from "lucide-react";

// FIXME: Colocar funcionalidade de ir para o email ou copiar para a área de transferência
export default function Contact() {
    return (
        <div className={"flex w-full"}>
            <div
                className={
                    "w-full px-10 py-10 rounded-2xl drop-shadow-2xl items-center flex bg-green-500"
                }
            >
                <img
                    className={"rounded-full shadow-2xl w-72"}
                    src={"https://github.com/alexZ7000.png"}
                    alt={"alexZ7000 github profile photo"}
                />
                <div className={"flex flex-col justify-center items-center"}>
                    <h1 className={"text-4xl font-bold"}>alexZ7000</h1>
                    <h2 className={"text-2xl"}>Software Developer</h2>
                    <div className={"flex gap-4"}>
                        <a
                            href={"https://www.github.com/alexz7000/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Github size={32} />
                        </a>
                        <a
                            href={"https://linkedin.com/in/alelimafilho"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Linkedin size={32} />
                        </a>
                        <a
                            href={"alessandrolimafilho@gmail.com"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Mail size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
