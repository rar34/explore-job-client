import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    // const [jobs, setJobs] = useState([]);

    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`);
            return res.json();
        }
    })

    if (isPending) {
        return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }


   if(jobs.length === 0){
    return <p className="text-2xl font-bold text-red-500">No jobs available.........</p>
   }

    return (
        <div>
            <h2>My jobs list</h2>
            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.map((job) => <tr key={job._id}>
                                <td>{job.title}</td>
                                <td>{new Date(job.posting_date).toLocaleDateString()}</td>
                                <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                <td>{job.min_salary}-{job.max_salary}</td>
                                <td><Link to=""><button className="btn btn-outline btn-success btn-sm">Update</button></Link></td>
                                <td><Link to=""><button className="btn btn-outline btn-success btn-sm">Delete</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;