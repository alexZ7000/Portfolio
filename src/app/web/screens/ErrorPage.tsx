export default function ErrorPage() {
    return (
        <div
            className={
                "w-full flex flex-col h-screen text-center items-center justify-center"
            }
        >
            <h1 className={"text-yellow-400 font-bold text-8xl"}>ERROR 404</h1>
            <p className={"text-blue-500"}>
                This endpoint doesn't match any other in our server. Please
                enter a valid endpoint to continue
            </p>
        </div>
    );
}
