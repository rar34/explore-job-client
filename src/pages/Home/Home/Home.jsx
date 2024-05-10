import JobCategory from "../JobCategory/JobCategory";
import Banner from "./Banner/Banner";
// import { useQuery } from "@tanstack/react-query";

const Home = () => {
    // const jobs = useLoaderData();

    // const {data: jobs} = useQuery({
    //     queryKey: ['jobs'],
    //     queryFn: async () =>{
    //         const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
    //         return res.json();
    //     }
    // })
    //loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)

    // console.log(jobs)
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;