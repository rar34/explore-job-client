import JobsFeatures from "../../JobsFeature/JobsFeatures";
import JobCategory from "../JobCategory/JobCategory";
import Banner from "./Banner/Banner";
// import { useQuery } from "@tanstack/react-query";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <JobsFeatures></JobsFeatures>
        </div>
    );
};

export default Home;