import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col justify-center gap-10  min-h-screen pt-24 px-10 bg-(--background)"
      >
        <div className="flex justify-left items-center h-10">
          <h2 className="text-4xl text-(--primary) font-body w-full text-left">
            &gt;_Contact Me
          </h2>
        </div>

        <div className="flex justify-center items-center gap-20">
          <div className="flex flex-col justify-between items-center gap-5 w-200 border-2 border-dotted border-(--primary) p-10 h-120">
            <h2 className="text-2xl text-(--primary) font-body w-full text-left pb-4">
              Contact Form
            </h2>

            <div className="flex justify-between items-center gap-5 w-180 pb-4">
              <label htmlFor="Name" className="text-(--primary) font-body w-30">
                $ Full Name
              </label>
              <input
                type="text"
                className="bg-(--background) border-b-2 border-b-(--primary) w-full outline-none focus:outline-none focus:ring-0 text-(--text)"
                placeholder="Your name"
              />
            </div>

            <div className="flex justify-between items-center gap-5 w-180 pb-4">
              <label
                htmlFor="email"
                className="text-(--primary) font-body w-30"
              >
                $ Email
              </label>
              <input
                type="email"
                className="bg-(--background) border-b-2 border-b-(--primary) w-full outline-none focus:outline-none focus:ring-0 text-(--text)"
                placeholder="Your email"
              />
            </div>

            <div className="flex justify-between items-start gap-5 w-180">
              <label
                htmlFor="message"
                className="text-(--primary) font-body w-30 pt-2"
              >
                $ Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Enter your message here..."
                className="w-full bg-(--background) text-(--text) border-0 border-b-2 border-b-(--primary) outline-none focus:outline-none focus:ring-0 resize-none"
              />
            </div>

            <div className="flex justify-center items-center w-full">
              <button className="px-10 py-6 bg-(--primary) rounded-md text-5x1 w-50 flex justify-center items-center">
                Send
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end w-150 border-2 border-dotted border-(--primary) p-10 h-120">
            <h2 className="text-2xl text-(--primary) font-body w-full text-left pb-4">
              Let's Connect
            </h2>

            <div className="flex flex-col justify-start items-start gap-5 w-full h-100">
              <a
                href="mailto:sumukhbhat.dev@gmail.com"
                className="flex items-center gap-4 text-body text-(--text) hover:text-(--primary) transition-colors"
              >
                <FaEnvelope className="text-(--primary)" />
                <span>sumukhbhat.dev@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                className="flex items-center gap-4 text-body text-(--text) hover:text-(--primary) transition-colors"
              >
                <FaLinkedin className="text-(--primary)" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/bhatSumukh"
                target="_blank"
                className="flex items-center gap-4 text-body text-(--text) hover:text-(--primary) transition-colors"
              >
                <FaGithub className="text-(--primary)" />
                <span>GitHub</span>
              </a>

              <a
                href="https://instagram.com/your_username"
                target="_blank"
                className="flex items-center gap-4 text-body text-(--text) hover:text-(--primary) transition-colors"
              >
                <FaInstagram className="text-(--primary)" />
                <span>Instagram</span>
              </a>

              <a
                href="https://discord.com/users/your-id"
                target="_blank"
                className="flex items-center gap-4 text-body text-(--text) hover:text-(--primary) transition-colors"
              >
                <FaDiscord className="text-(--primary)" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
