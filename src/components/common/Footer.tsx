import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Mesquite Estates</h3>
            <p className="text-indigo-200 mb-4">
              Homes by Dr. Jan Duffy, BHHS Nevada Properties. Custom lots from $70K, homes $360K-$700K in beautiful Mesquite, Nevada.
            </p>
            <div className="flex space-x-4">
              {[faTwitter, faFacebookF, faLinkedinIn, faInstagram].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Mesquite_Homes_For_Sale"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Homes for Sale in Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/Golf_Homes_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Golf Homes in Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/Buying_Home_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Buying a Home in Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/Mesquite_Realtor_Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Realtor Services
                </Link>
              </li>
              <li>
                <Link
                  href="/About_Mesquite"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  About Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact_us"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Contact Dr. Jan Duffy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Home Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Custom Lots
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Property Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Real Estate Investment
                </Link>
              </li>
              <li>
                <Link
                  href="/Property/Property_type"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Browse Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-indigo-300" />
                <span className="text-indigo-200">Mesquite, Nevada<br />Virgin River Valley</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-indigo-300 mt-1" />
                <span className="text-indigo-200 text-sm">
                  Mesquite Welcome Center<br />
                  460 N. Sandhill Blvd.<br />
                  Mesquite, NV 89027
                </span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3 text-indigo-300" />
                <Link
                  href="/Contact_us"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  Contact Dr. Jan Duffy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
          <p>
            © {new Date().getFullYear()} Mesquite Estates. All Rights Reserved.
          </p>
          <p className="mt-2">
            Dr. Jan Duffy, BHHS Nevada Properties
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;