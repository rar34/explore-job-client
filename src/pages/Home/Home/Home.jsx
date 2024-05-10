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
        </div>
    );
};

export default Home;