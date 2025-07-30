import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { socialMediaLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 shadow-inner-2xl">
      <div className="py-10">
        {/* Section 1: Brand Info */}
        <div className="md:col-span-1 text-center md:text-left">
          <h3 className="flex justify-center font-playfair text-3xl font-extrabold text-blue-300 mb-4 drop-shadow-md">
            <Link to="/">
              <img
                className="h-10 sm:h-12 md:h-14"
                src={logo}
                alt="8mosphere Logo"
              />
            </Link>
          </h3>
          <div className="text-gray-300 text-sm leading-relaxed text-center max-w-xs md:max-w-full mx-auto md:mx-0">
            <p>Secure . Reliable . Scalable</p>
            <p>Data Center Solutions</p>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            {socialMediaLinks.map((socialMediaLink) => (
              <Link
                key={socialMediaLink.id}
                to={socialMediaLink.to}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <socialMediaLink.icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-7 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} IRONDATAVAULTS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
