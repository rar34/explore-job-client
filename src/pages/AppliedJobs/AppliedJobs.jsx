import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AppliedJobs = () => {

    const { user } = useContext(AuthContext);

    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`, { credentials: 'include' });
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
            <div className="text-center mb-6">
                <span className="text-xl font-bold">Filter By: </span>
                <select className="border text-lg font-medium bg-[#00385E] text-white p-3 rounded-lg" name="jobCategory" id="jobCategory" required>
                    <option value="">Select Category</option>
                    <option value="Onsite Job">Onsite Job</option>
                    <option value="Remote Job">Remote Job</option>
                    <option value="Hybrid Job">Hybrid Job</option>
                    <option value="Part Time Job">Part Time Job</option>
                </select>
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

export default AppliedJobs;