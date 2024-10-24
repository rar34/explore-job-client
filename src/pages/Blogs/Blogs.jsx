import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const Blogs = () => {
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/blogs`)
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, []);

    // console.log(blogs)

    const { isPending, error, isError, data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
            // setJobs(data)
            console.log(blogs)
            return res.json();
        }
    })

    if (isPending) {
        return <div className='flex justify-center items-center text-3xl'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }


    return (
        <div className="container mx-auto">
            <div className="my-10">
                <h2 className="italic text-2xl mb-4">Q. What is an access token and refresh token? How do they work and where should we store them on the client side?</h2>
                <p>Answer. <span className="font-bold">Access Token:</span>An access token is a credential used to access protected resources on behalf of the user. It is typically a string that represents the authorization granted to the client to access specific resources. Access tokens have a limited lifespan, typically ranging from minutes to hours, after which they expire.</p>
                <p className="my-4"><span className="font-bold">Refresh Token:</span>A refresh token is a credential used to obtain a new access token when the current access token expires. Refresh tokens are long-lived compared to access tokens and are used to request new access tokens without requiring the user to log in again. Refresh tokens are securely stored and are only exchanged for a new access token when the current one expires or is revoked.</p>
                <p>Here is how they work together in a typical scenario:</p>
                <ul className="list-disc pl-6">
                    <li>The client (such as a web application or mobile app) authenticates the user and obtains an access token and a refresh token from the authorization server.</li>
                    <li>The client uses the access token to make requests to protected resources on the resource server.</li>
                    <li>When the access token expires, the client can use the refresh token to request a new access token from the authorization server without requiring the user to log in again.</li>
                    <li>The authorization server validates the refresh token and issues a new access token if the refresh token is valid.</li>
                </ul>
                <p className="my-4">As for where to store these tokens on the client side:</p>

                <p><span className="font-bold">Access Token:</span>Access tokens should be stored securely on the client side to prevent unauthorized access. They are commonly stored in memory or in secure storage mechanisms provided by the operating system or framework (such as Keychain on iOS or SharedPreferences on Android).</p>
                <p className="my-4"><span className="font-bold">Refresh Token:</span> Refresh tokens are more sensitive and should be stored securely to prevent unauthorized access. They are usually stored in more secure storage mechanisms such as encrypted databases, secure cookies, or local storage with appropriate safeguards against cross-site scripting (XSS) attacks.</p>


                <h2 className="italic text-2xl mb-4">Q. What is express js? What is Nest JS ?</h2>
                <p>Answer. <span className="font-bold">Express.js:</span>Express.js is a minimalist web framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, template engines, and more. Express.js is highly flexible and unopinionated, allowing developers to structure their applications as they see fit.Express.js is widely used in the Node.js ecosystem and is popular for its simplicity and performance. It is a great choice for developers who prefer a lightweight framework and want full control over their applications architecture.</p>
                <p className="my-4"><span className="font-bold">NestJS:</span>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js but adds more structure and features inspired by Angular, making it particularly suitable for building enterprise-grade applications.NestJS provides a modular and opinionated architecture that encourages best practices such as dependency injection, modularization, and separation of concerns. It comes with built-in support for features like GraphQL, WebSockets, microservices, and more. NestJS also leverages TypeScript, which brings static typing and other modern language features to Node.js development, enhancing developer productivity and code maintainability.NestJS is often preferred by developers who appreciate strong conventions, scalability, and maintainability in their projects. It is a good choice for building complex applications where structure and maintainability are essential.</p>
                <div>
                    <h2 className="text-2xl my-3">Main Feature</h2>

                    <p>
                        - This website is about job seeking website. User can see jobs and apply jobs from here.
                    </p>
                    <p>
                        - Anyone can post job by login in. He or she can not apply who post the job.
                    </p>
                    <p>
                        - If the deadline is over no one can apply for the job.
                    </p>
                    <p>
                        - A beautiful and a footer is set in all page except error page.
                    </p>
                    <p>
                        - User can login with email and password which he/she used when sign up. Also login using his/her google account.
                    </p>
                    <p>
                        - All the information stored in mongoDB.
                    </p>
                    <p>
                        - Fetch data from mongodb using tanstack query.
                    </p>
                    <p>
                        - User who post the jobs can edit his/her jobs. Also can delete it.
                    </p>
                    <p>
                        -  Also a theme toggling function implemented.
                    </p>
                    <p>
                        -  secure data with jwt.
                    </p>
                    <p className="text-2xl my-3">
                        Packages are used in this project:
                    </p>
                    <p>
                        - framer motion package
                    </p>
                    <p>
                        - react hook form
                    </p>
                    <p>
                        - react to pdf
                    </p>
                    <p>
                        - react date picker
                    </p>
                    <p>
                        - Swiper JS
                    </p>
                </div>
            </div>
            {
                blogs?.map(blog => <div key={blog._id}>
                    <h2 className="italic text-2xl mb-4">{blog.title}</h2>
                    <p className="mb-6"><span className="font-bold">Answer.</span> <span>{blog.description}</span></p>
                </div>)
            }
        </div>
    );
};

export default Blogs;