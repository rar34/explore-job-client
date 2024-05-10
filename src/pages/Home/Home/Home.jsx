import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import Banner from "./Banner/Banner";

const Home = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div>
            <Banner></Banner>
            <JobCategory jobs={jobs}></JobCategory>
            <h2 className="text-3xl text-red-400">this is home</h2>
        </div>
    );
};

export default Home;