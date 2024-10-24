import { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    //_id, posted_by, title, posting_date, deadline, min_salary, max_salary, applicants, category 
    const handleAddJob = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.jobTitle.value;
        const category = form.jobCategory.value;
        const userName = user?.displayName;
        const email = user?.email;
        const posting_date = startDate;
        const deadline = endDate;
        const min_salary = form.minSalary.value;
        const max_salary = form.maxSalary.value;
        const applicants = 0;
        const posted_by = form.postedBy.value;
        const description = form.jobDescription.value;
        const photo = form.photoURL.value;

        const newJob = {
            posted_by, title, category, posting_date, deadline, min_salary, max_salary, applicants, description, userName, email, photo
        }
        // console.log(newJob)

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, newJob)
            // console.log(data)
            if (data.insertedId) {
                navigate("/my-jobs")
                Swal.fire("Your job is posted successfully");
            }
        }
        catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return (
        <div className="px-4 md:px-20 my-10 container mx-auto p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-center my-6">Post your job</h2>
            <form onSubmit={handleAddJob} className="border-2 bg-[#00385E99] border-gray-200 p-6 rounded-xl shadow-lg">
                {/* Job title and jon category */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Job Title</span>
                        </div>
                        <input name="jobTitle" type="text" placeholder="Job title" className="input input-bordered w-full " required />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Job Category</span>
                        </div>
                        <select className="border bg-[#00385E99] text-white p-3 rounded-lg" name="jobCategory" id="jobCategory" required>
                            <option value="">Select Category</option>
                            <option value="Onsite Job">Onsite Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Hybrid Job">Hybrid Job</option>
                            <option value="Part Time Job">Part Time Job</option>
                        </select>
                    </label>
                </div>
                {/* User name and email */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">User Name</span>
                        </div>
                        <input name="name" type="text" defaultValue={user?.displayName} className="input input-bordered w-full " readOnly />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Email</span>
                        </div>
                        <input name="email" type="text" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                    </label>
                </div>
                {/* Minimum and maximum salary */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Minimum Salary</span>
                        </div>
                        <input name="minSalary" type="text" placeholder="Minimum salary" className="input input-bordered w-full " required />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Maximum Salary</span>
                        </div>
                        <input name="maxSalary" type="text" placeholder="Maximum Salary" className="input input-bordered w-full " required />
                    </label>
                </div>
                {/* job posting date and deadline */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Job Posting Date: </span>
                        </div>
                        <DatePicker className="p-3 border rounded-lg w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Deadline</span>
                        </div>
                        <DatePicker className="p-3 border rounded-lg w-full" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </label>
                </div>
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Posted By</span>
                        </div>
                        <input name="postedBy" type="text" placeholder="posted By" className="input input-bordered w-full " required />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Photo URL</span>
                        </div>
                        <input name="photoURL" type="text" placeholder="PhotoURL" className="input input-bordered w-full " required />
                    </label>
                </div>
                <div className="md:flex mb-4">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Job Description</span>
                        </div>
                        <textarea name="jobDescription" type="text" placeholder="Job description" className="input input-bordered w-full " />
                    </label>
                </div>

                <input className="btn btn-success bg-green-200 w-full" type="submit" value="Post" />
            </form>
        </div>
    );
};

export default AddJob;