import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import ReactToPrint from 'react-to-print';

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState("")
    const ref = useRef();

    const { isPending, error, isError, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`, { credentials: 'include' });
            return res.json();
        }
    })
    // console.log(jobs)

    if (isPending) {
        return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    const handleSortChange = (e) => {
        const searchText = e.target.value;
        setSortBy(searchText);

    };

    const filteredJobs = sortBy ? jobs.filter(job => job.category === sortBy) : jobs;


    if (jobs.length === 0) {
        return <p className="text-2xl font-bold text-red-500">No jobs available.........</p>
    }




    return (
        <div className="container mx-auto">
            {/* <h2>Applied jobs {jobs.length}</h2> */}

            <div className="text-center mb-6">
                <span className="text-xl font-bold">Filter By: </span>
                <select value={sortBy} onChange={handleSortChange} className="border text-lg font-medium bg-[#00385E] text-white p-3 rounded-lg" name="jobCategory" id="jobCategory" required>
                    <option value="">All Jobs</option>
                    <option value="Onsite Job">Onsite Job</option>
                    <option value="Remote Job">Remote Job</option>
                    <option value="Hybrid Job">Hybrid Job</option>
                    <option value="Part Time Job">Part Time Job</option>
                </select>
            </div>
            <div ref={ref} className="overflow-x-auto">
                <table className="table table-md">
                    <caption className="text-3xl font-semibold my-6">Your applied Job</caption>
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Job Category</th>
                            <th>Posted By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredJobs.map((job) => <tr key={job._id}>
                                <td>{job.title}</td>
                                <td>{new Date(job.posting_date).toLocaleDateString()}</td>
                                <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                <td>{job.min_salary}-{job.max_salary}</td>
                                <td>{job.category}</td>
                                <td>{job.posted_by}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className="text-center mt-14 mb-4">
                <ReactToPrint trigger={() => <button className="btn btn-outline btn-success">Download Summary</button>} content={()=>ref.current} />
            </div>
        </div>
    );
};

export default AppliedJobs;