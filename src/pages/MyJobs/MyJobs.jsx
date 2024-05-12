import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    // const { isPending, error, isError, data: jobs } = useQuery({
    //     queryKey: ['jobs'],
    //     queryFn: async () => {
    //         const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`, { credentials: 'include' });
    //         return res.json();
    //     }
    // })
    // console.log(jobs)

    // if (isPending) {
    //     return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    // }

    // if (isError) {
    //     return <p>{error.message}</p>
    // }

    useEffect(() => {
        getData();
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`)
        setJobs(data)
    }


    if (jobs.length === 0) {
        return <p className="text-2xl font-bold text-red-500">No jobs available.........</p>
    }

    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/job/${id}`)
            console.log(data)
            toast.success("Deleted successfully")
            getData();
        } catch (error) {
            toast.error(error.message)
        }
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
                                <Link to={`/update/${job._id}`}><td><button className="btn btn-outline btn-success btn-sm">Update</button></td></Link>
                                <td><button onClick={() => handleDelete(job._id)} className="btn btn-outline btn-success btn-sm">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;