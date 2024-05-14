import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    // const [jobs, setJobs] = useState([]);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`, { withCredentials: true })
        return data;
    }

    const { data: jobs = [], isPending, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['jobs', user?.email]
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

    const handleDelete = async id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/job/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                            });
                            getData();
                            // navigate("/my-jobs")
                        }
                    })
            }
        });
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