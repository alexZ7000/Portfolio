import { useState } from "react";

// TODO: Colocar experiências profissionais, fazer animação via TypeScript
export default function WorkExperience() {
    const [activeTab, setActiveTab] = useState("professional");

    const renderContent = () => {
        switch (activeTab) {
            case "professional":
                return (
                    <div>
                        <h2 className={"text-2xl font-semibold mb-2"}>
                            Experiência Profissional
                        </h2>
                        <p>
                            Detalhes sobre suas experiências em empresas reais.
                        </p>
                    </div>
                );
            case "academic":
                return (
                    <div>
                        <h2 className={"text-2xl font-semibold mb-2"}>
                            Projetos Acadêmicos
                        </h2>
                        <p>Projetos desenvolvidos durante a faculdade.</p>
                    </div>
                );
            case "personal":
                return (
                    <div>
                        <h2 className={"text-2xl font-semibold mb-2"}>
                            Projetos Pessoais
                        </h2>
                        <p>Seus projetos independentes e pessoais.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section
            className={"flex flex-col items-center justify-center py-16 px-4"}
        >
            <h1 className={"text-4xl font-bold text-center mb-8"}>
                Work Experience
            </h1>
            <div className={"w-full max-w-4xl"}>
                <ul className="flex border-b border-gray-300 mb-8">
                    <li
                        className={`cursor-pointer transition-all duration-300 px-6 py-2 ${
                            activeTab === "professional"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : ""
                        }`}
                        onClick={() => setActiveTab("professional")}
                    >
                        Profissional
                    </li>
                    <li
                        className={`cursor-pointer px-6 py-2 ${
                            activeTab === "academic"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : ""
                        }`}
                        onClick={() => setActiveTab("academic")}
                    >
                        Acadêmicos
                    </li>
                    <li
                        className={`cursor-pointer px-6 py-2 ${
                            activeTab === "personal"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : ""
                        }`}
                        onClick={() => setActiveTab("personal")}
                    >
                        Pessoais
                    </li>
                </ul>
                <div className="bg-white text-black transition-all duration-300 p-6 rounded-lg shadow-lg">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}
