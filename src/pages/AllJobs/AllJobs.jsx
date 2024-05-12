import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllJobs = () => {
    // const jobs = useLoaderData();
    // console.log(jobs)
    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
            return res.json();
        }
    })

    if (isPending) {
        return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }


    return (
        <div>
            <div className="flex justify-center my-10">
                <label className="input rounded-none rounded-l-lg input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search your job" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <button className="p-3 bg-green-700 text-white font-bold rounded-r-lg">Search</button>
            </div>
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
                            jobs.map((job) => <tr key={job._id}>
                                <td>{job.title}</td>
                                <td>{new Date(job.posting_date).toLocaleDateString()}</td>
                                <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                <td>{job.min_salary}-{job.max_salary}</td>
                                <Link to={`/job/${job._id}`}><button className="btn bg-[#00385E] btn-sm text-white" tabIndex="0" role="link">View Details</button></Link>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;