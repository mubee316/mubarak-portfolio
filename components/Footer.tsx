import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-8 px-4 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <p className="text-sm mb-4">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-2 rounded bg-white text-black outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="w-full mt-2 p-2 rounded bg-white text-black outline-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-blus font-bold px-4 py-2 rounded hover:bg-blus hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="#about" className="hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-2xl">
            <Link href="https://twitter.com/mubaraq_olalekan" target="_blank">
              <FaTwitter className="hover:text-blue-400 transition" />
            </Link>
            <Link href="https://www.instagram.com/mubaraq_olalekan" target="_blank">
              <FaInstagram className="hover:text-pink-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/mubaraq-olalekan" target="_blank">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </Link>
            <Link href="https://github.com/mubaraq-olalekan" target="_blank">
              <FaGithub className="hover:text-gray-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Mubarak Olalekan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
