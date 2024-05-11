
const JobsFeatures = () => {
    return (
        <div className="my-10">
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide mb-4 text-gray-800 dark:text-white lg:text-4xl">
                            Millions of Jobs. Find the one that suits you.
                        </h1>
                        <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Bring to the table win-win survival</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Capitalize on low hanging fruit to identify</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">But I must explain to you how all this</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                        <a href="#allJobs" className="w-full btn btn-outline btn-success">Explore Now</a>
                        
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://i.ibb.co/Cwkh04W/img.jpg" alt="glasses photo" />
                </div>
            </div>
        </div>
    );
};

export default JobsFeatures;