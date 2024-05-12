import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className=" p-10 bg-[#00385E] text-white">
            <footer className="footer">
                <aside>
                    <img className="w-40" src="https://i.ibb.co/3NfPD4C/Career-Finder.png" alt="" />
                    <p>Explore Job Ltd.<br />Providing reliable Service since 2000</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Connect with</h6>
                    <div className="flex gap-6 text-3xl">
                        <a className="link link-hover"><FaFacebookSquare /></a>
                        <a className="link link-hover"><FaTwitterSquare /></a>
                        <a className="link link-hover"><FaGithubSquare /></a>
                        <a className="link link-hover"><FaLinkedinIn /></a>
                    </div>
                    <div className="mt-6 text-xl">
                        <div className="text-left">
                            <p className="flex items-center justify-center mb-2 gap-4"><BsFillTelephoneFill /><span className="text-base">658 442 152222</span></p>
                            <p className="flex items-center justify-center mb-2 gap-4"><MdEmail /><span className="text-base">info@exlore.job</span></p>
                            <p className="flex items-center justify-center mb-2 gap-4"><FaLocationDot /><span className="text-base">Gulshan, Dhaka Bangladesh</span></p>
                        </div>
                    </div>
                </nav>
            </footer>
            <hr className="mt-6 opacity-50" />
            <div>
                <p className="text-center text-sm mt-6">Copyright © 2024 - All right reserved by Explore Job Ltd</p>
            </div>
        </div>
    );
};

export default Footer;