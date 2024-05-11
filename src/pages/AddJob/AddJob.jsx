import { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { user } = useContext(AuthContext);

    return (
        <div className="px-4 md:px-20 my-10">
            <h2 className="text-3xl font-bold text-center my-6">Post your job</h2>
            <form className="border-2 border-gray-200 p-6 rounded-xl shadow-lg">
                {/* Job title and jon category */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Job Title</span>
                        </div>
                        <input name="touristSpotName" type="text" placeholder="Job title" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Job Category</span>
                        </div>
                        <select className="border bg-transparent p-3 rounded-lg" name="countryList" id="countryList">
                            <option value="">Select Category</option>
                            <option value="Bangladesh">Onsite Jobs</option>
                            <option value="Thailand">Remote Jobs</option>
                            <option value="Indonesia">Hybrid Jobs</option>
                            <option value="Malaysia">Part Time Jobs</option>
                        </select>
                    </label>
                </div>
                {/* User name and email */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">User Name</span>
                        </div>
                        <input name="location" type="text" defaultValue={user?.displayName} className="input input-bordered w-full " readOnly />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Email</span>
                        </div>
                        <input name="photoURL" type="text" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                    </label>
                </div>
                {/* Minimum and maximum salary */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Minimum Salary</span>
                        </div>
                        <input name="seasonality" type="text" placeholder="Minimum salary" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Maximum Salary</span>
                        </div>
                        <input name="averageCost" type="text" placeholder="Maximum Salary" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* job posting date and deadline */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Job Posting Date: </span>
                        </div>
                        <DatePicker className="p-3 border rounded-lg w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Deadline</span>
                        </div>
                        <DatePicker className="p-3 border rounded-lg w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                </div>
                <div className="md:flex mb-4">
                    
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Job Description</span>
                        </div>
                        <textarea name="shortDescription" type="text" placeholder="Job description Description" className="input input-bordered w-full " />
                    </label>
                </div>

                <input className="btn btn-success text-white w-full" type="submit" value="Add Place" />
            </form>
        </div>
    );
};

export default AddJob;