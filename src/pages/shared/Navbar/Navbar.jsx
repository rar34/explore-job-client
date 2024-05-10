import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


    const navLinks = <>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
        }} to="/">Home</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
        }} to="/update-profile">Update Profile</NavLink></li>

        { <li className="text-lg"><NavLink style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
        }} to="/contact">Contact Us</NavLink></li>}
    </>


    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[8] p-2 shadow text-black bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl md:text-3xl font-medium md:font-bold text-gray-400">Home<span className="text-[#1DD100]">Vista</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-end " >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName || user?.email}>
                            <div className="w-10 rounded-full ">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/ZX6HMzF/pp.jpg"} />
                            </div>

                        </div>
                        <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm text-white font-bold dropdown-content bg-neutral w-32">
                            <li className="hover:bg-gray-500"><Link to="/user-profile">User Profile</Link></li>
                            <li className="hover:bg-gray-500"><Link to="/login"><button onClick={handleLogOut}>Logout</button></Link></li>
                        </ul>
                    </div>
                    :
                    <>
                        <Link to="/login"><button className="btn btn-success text-white mr-3">Login</button></Link>
                        {/* <Link to="/register"><button className="btn btn-success text-white">Register</button></Link> */}
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;