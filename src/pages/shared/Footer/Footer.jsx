import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#00385E] text-white">
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
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Connect with</h6>
                <div className="flex gap-6 text-3xl">
                    <a className="link link-hover"><FaFacebookSquare /></a>
                    <a className="link link-hover"><FaTwitterSquare /></a>
                    <a className="link link-hover"><FaGithubSquare /></a>
                    <a className="link link-hover"><FaLinkedinIn /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;