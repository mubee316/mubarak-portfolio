import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = React.forwardRef((props, ref) => {
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true); // Set loading state

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear form
          setSending(false); // Reset loading state
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setSending(false); // Reset loading state
        }
      );
  };

  return (
    <footer className="bg-gray-500 text-white py-8 px-4 md:px-16 lg:px-32 mt-96" ref={ref}>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <p className="text-sm mb-4">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form ref={formRef} onSubmit={sendEmail} id="targetfooter">
            <div className="mb-4">
              <label htmlFor="email" className="text-sm">Your Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full mt-2 p-2 rounded bg-white text-black outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="w-full mt-2 p-2 rounded bg-white text-black outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
              disabled={sending} // Disable button while sending
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="#about" className="hover:underline">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="hover:underline">About Me</span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-bold text-1xl text-center text-blue-600">
                        Building the Future, One Line of Code at a Time
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Hello, I&apos;m Mubarak Olalekan, a passionate and detail-oriented frontend developer
                        with a strong focus on creating engaging, user-friendly web applications. With expertise
                        in technologies such as Next.js, React, TypeScript, and Tailwind CSS, I thrive on
                        transforming ideas into responsive, interactive digital experiences.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-blue-600 text-white hover:border border-blue-600">Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
              <FaInstagram className="hover:text-pink-400 transition  bg-clip-text bg-gradient-to-t from-pink-900 to-pink-200" />
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

      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Mubarak Olalekan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
