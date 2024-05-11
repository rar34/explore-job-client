import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`);
            setJobs(data);
        }
        getJobs();
    }, [user?.email])
    console.log(jobs)

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