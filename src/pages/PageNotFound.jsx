const PagetNotFound = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-radial-[at_0%_0%] from-yellow-300 to-white to-75% dark:to-black dark:to-75%">
                <div className="w-screen mx-auto max-w-md space-y-4 rounded-2xl shadow-xl/30 dark:shadow-yellow-300 border-2 border-gray-300 bg-gray-100 p-10 dark:border-yellow-300 dark:bg-linear-to-bl dark:from-gray-700 dark:to-black">
                    <h1 className="dark:text-white text-7xl font-bold text-center">404</h1>
                    <h1 className="text-xl font-semibold text-center dark:text-white">Not Found</h1>
                    <h1 className="text-xs font-semibold text-center dark:text-gray-400">You may want to return to the home page or try a search.</h1>
                </div>
            </div>
        </>
    );
}
export default PagetNotFound