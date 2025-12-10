import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

interface FooterProps {

}

const Footer = (props: FooterProps) => {

    return (
        <div className='md:container mx-auto md:p-6'>

            <footer className=' bg-primary text-on-primary  px-5 py-1 md:px-10 md:py-3 max-md:text-xs md:rounded-2xl flex max-md:flex-col text-center gap-1 justify-between'>
                {/* ICONS */}
                <ul className='flex justify-center'>
                    <li className="pr-3">
                        <a href="#">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="pr-3">
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </li>
                    <li className="pr-3">
                        <a href="#">
                            <FaFacebook />
                        </a>

                    </li>
                    <li className="pr-3">
                        <a href="#">
                            <FaInstagram />
                        </a>

                    </li>
                    <li className="pr-3">
                        <a href="#">
                            <FaTiktok />
                        </a>

                    </li>
                </ul>

                {/* COPYRIGHTS */}
                <p>© 2024 Pro Tennis Tool. All rights reserved.</p>

                <p>By Manuel Araya</p>
            </footer>
        </div>
    );
};

export default Footer;