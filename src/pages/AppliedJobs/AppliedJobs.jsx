import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {

    const { user } = useContext(AuthContext);

    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`);
            return res.json();
        }
    })

    if (isPending) {
        return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }


    if (jobs.length === 0) {
        return <p className="text-2xl font-bold text-red-500">No jobs available.........</p>
    }

    return (
        <div>
            <h2>Applied jobs {jobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;