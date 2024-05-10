import JobCategory from "../JobCategory/JobCategory";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <h2 className="text-3xl text-red-400">this is home</h2>
        </div>
    );
};

export default Home;