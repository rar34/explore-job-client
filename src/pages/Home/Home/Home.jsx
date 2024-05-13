import GetApp from "../../GetApp/GetApp";
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
            <GetApp></GetApp>
        </div>
    );
};

export default Home;