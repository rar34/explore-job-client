import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

const JobDetails = () => {

    const { user } = useContext(AuthContext);

    const job = useLoaderData();
    // console.log(job)

    const { _id, posted_by, title, posting_date, deadline, min_salary, max_salary, applicants, category, photo, description } = job || {};
    // console.log(job.email)


    const handleJobSubmit = async (e) => {
        e.preventDefault();
        const jobId = _id;
        const buyerEmail = job?.email;
        const userEmail = user?.email;
        if (buyerEmail === userEmail) {
            return toast.error("Action not permitted")
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
        }
        catch (error) {
            console.log(error)
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
                    {/* <button className="btn btn-outline btn-success mt-6">Apply Now</button> */}

                    {/* The button to open modal */}
                    <label htmlFor="apply_job_modal" className="btn btn-outline btn-success mt-6">Apply Now</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="apply_job_modal" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Enter you resume url for submit application</h3>
                            <form onSubmit={handleJobSubmit}>
                                <label className="font-bold mb-2" htmlFor="">User Name:</label> <br />
                                <input type="text" className="input w-full" defaultValue={user.displayName} readOnly />
                                <label className="font-bold mb-2" htmlFor="">User Email</label> <br />
                                <input type="text" className="input w-full" defaultValue={user.email} readOnly /><br />
                                <input type="text" placeholder="Enter your resume link" className="input mt-3 input-bordered w-full" required />
                                <input className="btn btn-outline btn-success w-full mt-4" type="submit" value="Submit Application" />
                            </form>
                            {/* <div>
                                <label className="font-bold mb-2" htmlFor="">User Name:</label> <br />
                                <input type="text" className="input w-full" defaultValue={user.displayName} disabled />
                                <label className="font-bold mb-2" htmlFor="">User Email</label> <br />
                                <input type="text" className="input w-full" defaultValue={user.email} disabled /><br />
                                <input type="text" placeholder="Enter your resume link" className="input mt-3 input-bordered w-full" />
                                <button onClick={handleJobSubmit} className="btn btn-outline btn-success w-full mt-4">Submit Application</button>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;