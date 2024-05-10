import { useLoaderData } from "react-router-dom";

const AllJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h2>All jobs here</h2>
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
                                <td>{job.posting_date}</td>
                                <td>{job.deadline}</td>
                                <td>{job.min_salary}-{job.max_salary}</td>
                                <td><button className="btn btn-sm">View Details</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;