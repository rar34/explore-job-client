import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
// import { useQuery } from "@tanstack/react-query";

const JobDetails = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const job = useLoaderData();
    // console.log(job)

    // const { isPending, error, isError, data: job } = useQuery({
    //     queryKey: ['job'],
    //     queryFn: async () => {
    //         const res = await fetch(`${import.meta.env.VITE_API_URL}/job/${_id}`);
    //         return res.json();
    //     }
    // })

    // if (isPending) {
    //     return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    // }

    // if (isError) {
    //     return <p>{error.message}</p>
    // }


    // if (job.length === 0) {
    //     return <p className="text-2xl font-bold text-red-500">No jobs available.........</p>
    // }

    const { _id, posted_by, title, posting_date, deadline, min_salary, max_salary, applicants, category, photo, description } = job || {};
    // console.log(job.email)


    const handleJobSubmit = async (e) => {
        e.preventDefault();
        const jobId = _id;
        const buyerEmail = job?.email;
        const userEmail = user?.email;
        const currentDate = new Date().toLocaleDateString();
        console.log(currentDate)
        if (buyerEmail === userEmail) {
            return toast.error("Action not permitted")
        }
        if (currentDate > deadline) {
            return toast.error('deadline is over')
            
        }
        // const currentDate = Date.now();
        // console.log(currentDate)

        const bidJob = {
            jobId, buyerEmail, userEmail, posted_by, title, posting_date, deadline, min_salary, max_salary, applicants, category
        }
        // console.log(bidJob)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bid`, bidJob)
            console.log(data)
            Swal.fire("Thanks for applying.");
            navigate("/applied-jobs")
        }
        catch (error) {
            console.log(error)
            toast.error(error.response.data)
            navigate("/applied-jobs")
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="relative">
                    <img className="object-cover w-full" src={photo} alt="Article" />

                    <p className="bg-green-200 absolute top-3 right-3 font-bold p-2">{category}</p>
                </div>
                <div className="p-6">
                    <div>
                        <span className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">Application deadline: {new Date(deadline).toLocaleDateString()}</span>
                        <a href="#" className="block mt-2 text-xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                        <a href="#" className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Posted By: {posted_by}</a>
                        <p>{description}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Job posted at: {posting_date}</p>
                        <p><span className="font-bold">Salary Range:</span> {min_salary}Tk - {max_salary}Tk</p>
                        <p className="font-bold">Applicants: {applicants}</p>
                    </div>


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline mt-3 btn-success" onClick={() => document.getElementById('my_modal_2').showModal()}>Apply Now</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box bg-[#00385E]">
                            <h2 className="text-2xl text-white mb-3 text-center font-semibold">Please enter your resume link to apply for the job</h2>
                            <hr className="mb-2" />
                            <form onSubmit={handleJobSubmit}>
                                <label className="font-bold mb-2 text-white" htmlFor="">User Name:</label> <br />
                                <input type="text" className="input w-full mb-3" defaultValue={user.displayName} readOnly />
                                <label className="font-bold mb-2 text-white" htmlFor="">User Email</label> <br />
                                <input type="text" className="input w-full mb-3" defaultValue={user.email} readOnly /><br />
                                <label className="font-bold mb-2 text-white" htmlFor="">Resume Link:</label> <br />
                                <input type="text" placeholder="Enter your resume link" className="input mt-3 input-bordered w-full" required />
                                <input className="btn btn-outline btn-success w-full mt-4" type="submit" value="Submit Application" />
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;