import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { user, setUser, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password, name, photoURL } = data;
        if (password.length < 6) {
            return toast('Password must be 6 character long')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast("Your password should at least one uppercase character")
        }
        else if (!/[a-z]/.test(password)) {
            return toast("Your password should at least one lowercase character")
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        Swal.fire({
                            title: "Success",
                            text: "Registration successful",
                            icon: "success"
                        });
                        setUser({ ...user, photoURL: photoURL, displayName: name })
                        navigate("/")

                    })
            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })
    }
    return (
        <div className="my-14">
            <div className="flex w-full max-w-sm mx-auto overflow-hidden justify-center  bg-[#00385E] text-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                {/* <div className="hidden bg-cover lg:block lg:w-1/2"></div> */}

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-40" src="https://i.ibb.co/3NfPD4C/Career-Finder.png" alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-200">
                        Welcome back!
                    </p>



                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xl text-center text-gray-500 uppercase dark:text-gray-200 hover:underline">Sign Up</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control" data-aos="fade-left" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                {...register("name")} />
                        </div>
                        <div className="form-control" data-aos="fade-right" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control" data-aos="fade-left" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text text-white font-semibold">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered"
                                {...register("photoURL")} />
                        </div>
                        {/* password field */}
                        <div className="form-control" data-aos="fade-right" data-aos-delay="400">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input w-full input-bordered"
                                    {...register("password", { required: true })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-3">
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>

                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Register</button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to="/login" className="ext-lg btn btn-outline font-bold text-gray-200 uppercase dark:text-gray-400 hover:underline">or Login</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;