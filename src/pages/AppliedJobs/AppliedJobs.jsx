import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AppliedJobs = () => {

    const { user } = useContext(AuthContext);

    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`);
            return res.json();
        }
    })
    console.log(jobs)

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
            {/* <h2>Applied jobs {jobs.length}</h2> */}
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    jobs?.map(job => <div key={job._id} className="max-w-2xl px-8 py-4 bg-base-100 rounded-lg border-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-light bg-gray-400  text-white rounded-md p-2">Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                            <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-[#00385E99] rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{job.category}</p>
                        </div>

                        <div className="mt-2">
                            <p href="#" className="text-xl font-bold" tabIndex="0" role="link">{job.title}</p>
                            <p className="mt-2  font-semibold ">Posted By: {job.posted_by}</p>
                            <p className="mt-2  font-medium ">Posted in: {job.posting_date}</p>
                            <p className="mt-2 text-sky-600 font-medium ">Salary Range: {job.min_salary}-{job.max_salary}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <p href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Total Applicant: {job.applicants}</p>

                            <div className="flex items-center">

                                <Link to={`/job/${job._id}`}><button className="btn bg-[#00385E] text-white" tabIndex="0" role="link">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;