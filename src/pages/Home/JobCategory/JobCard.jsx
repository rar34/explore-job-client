import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { motion } from "framer-motion";


const JobCard = ({ job }) => {
    const { _id, posted_by, title, posting_date, deadline, min_salary, max_salary, applicants, category } = job || {};
    return (
        <motion.div initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} className="max-w-2xl px-8 py-4 bg-base-100 rounded-lg border-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light bg-gray-400  text-white rounded-md p-2">Deadline: {new Date(deadline).toLocaleDateString()}</span>
                <p className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-[#00385E99] rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{category}</p>
            </div>

            <div className="mt-2">
                <p href="#" className="text-xl font-bold" tabIndex="0" role="link">{title}</p>
                <p className="mt-2  font-semibold ">Posted By: {posted_by}</p>
                <p className="mt-2  font-medium ">Posted in: {new Date(posting_date).toLocaleDateString()}</p>
                <p className="mt-2 text-sky-600 font-medium ">Salary Range: {min_salary}-{max_salary}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <p href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Total Applicant: {applicants}</p>

                <div className="flex items-center">

                    <Link to={`/job/${_id}`}><button className="btn bg-[#00385E] text-white" tabIndex="0" role="link">View Details</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;
JobCard.propTypes = {
    job: PropTypes.object
}