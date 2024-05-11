import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;
        // console.log(email, password)

        signInUser(email, password)
            .then(() => {
                toast("login successful")
                navigate(location?.state || "/")
            })
            .catch(() => {
                toast("invalid-credential")
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                if (result.user) {
                    toast("login successful")
                    navigate(location?.state || "/")
                }
            })
            .catch(() => {
                toast("invalid-credential")
            })
    }



    return (
        <div className="my-14">
            <div className="flex w-full max-w-sm mx-auto overflow-hidden justify-center bg-[#00385E] text-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                {/* <div className="hidden bg-cover lg:block lg:w-1/2"></div> */}

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-40" src="https://i.ibb.co/3NfPD4C/Career-Finder.png" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center">
                        Please Login to Continue
                    </p>

                    {/* <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <FcGoogle /><span className="w-5/6 px-4 py-3 font-bold text-white text-center">Login with Google</span>
                    </button> */}
                   
                        <button onClick={handleGoogleLogin} className="flex items-center w-full justify-center gap-2 text-xl btn btn-success btn-outline"><FcGoogle /> Login With Google</button>
                    

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center font-bold text-gray-200 uppercase dark:text-gray-400 hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div data-aos="fade-right" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Login</button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to="/register" href="#" className="text-lg btn btn-outline font-bold  text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;