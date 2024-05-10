import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center md:mt-6">
            <img src="https://i.ibb.co/5vt5QFs/not-found.jpg" alt="" />
            <h2 className="text-3xl mb-5 text-red-800">Page not found</h2>
            <Link to="/" className="btn btn-success font-bold text-white text-2xl">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;