import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BlogPost = () => {
    const navigate = useNavigate()

    const handleAddBlog = async e => {
        e.preventDefault();
        const form = e.target;
        const title = form.blogTitle.value;
        const description = form.blogDescription.value;

        const newBlog = {
            title, description
        }
        // console.log(newBlog)

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/blogs`, newBlog)
            // console.log(data)
            if (data.insertedId) {
                navigate("/blogs")
                Swal.fire("Your blog is posted successfully");
            }
        }
        catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className="px-4 md:px-20 my-10 container mx-auto p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-center my-6">Post your Blogs</h2>
            <form onSubmit={handleAddBlog} className="border-2 bg-[#00385E99] border-gray-200 p-6 md:w-3/4 mx-auto rounded-xl shadow-lg">

                {/* Minimum and maximum salary */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Blog Title</span>
                        </div>
                        <input name="blogTitle" type="text" placeholder="Blog title" className="input input-bordered w-full " required />
                    </label>
                </div>
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium text-white">Blog Description</span>
                        </div>
                        <textarea name="blogDescription" type="text" placeholder="Blog description" className="input h-40 input-bordered w-full " />
                    </label>
                </div>
                <input className="btn btn-success bg-green-200 w-full" type="submit" value="Post" />
            </form>
        </div>
    );
};

export default BlogPost;