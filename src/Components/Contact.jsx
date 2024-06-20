import { useState } from "react";
import { SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import Button from "./Button";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState(false);
  const showAlert = () => {
    setAlert(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:4000/api/v1/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    const json = await response.json();
    console.log(json);

    setContact({ name: "", email: "", message: "" });
    setAlert(true);
  };

  return (
    <div id="contact" className="text-center sm:px-4 mt-10 lg:px-8 ">
      <div className="text-3xl text-center mx-auto my-16">Contact</div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center sm:px-4 lg:px-16 w-full lg:w-1/2 mb-8 lg:mb-0">
          <div>
            <strong className="text-3xl text-sky-400">Send me a Message</strong>
          </div>
          <div className="text-xl mx-8 lg:text-2xl">
            Want to start a conversation regarding a project or have an inquiry?
            Just fill out the form below to send me a message.
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-16">
          <form
            action="https://formspree.io/f/mzbnjgoq"
            method="POST"
            className="placeholder:text-slate-400 text-left p-4 lg:p-9 bg-sky-950 py-7 rounded-lg"
          >
            <label className="block text-xl lg:text-2xl m-4">Full Name</label>
            <input
              name="name"
              type="text"
              autoComplete="off"
              value={contact.name}
              onChange={handleChange}
              className="h-12 w-full pl-5 bg-slate-900 rounded-md mb-4"
              placeholder="Your Name"
            />
            <label className="block text-xl lg:text-2xl m-4">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleChange}
              className="h-12 w-full pl-5 bg-slate-900 rounded-md mb-4"
              placeholder="Your Email"
            />
            <label className="block text-xl lg:text-2xl m-4">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              value={contact.message}
              onChange={handleChange}
              className="pt-5 w-full pl-5 bg-slate-900 rounded-md resize-none mb-4"
              placeholder="Type your message here"
            ></textarea>
            <Button
              className="m-4 hover:bg-sky-400 font-medium"
              type={"submit"}
              text={"Send Message"}
            />
          </form>
        </div>
      </div>
      <div className="text-center my-8 text-2xl lg:text-3xl">
        Contact me on Social Media
      </div>
      <div className="flex justify-center gap-5 m-8">
        <Link to="https://linkedin.com/in/jatingupta10008" target="_blank">
          <SiLinkedin
            size={40}
            className="m-auto rounded-lg duration-700 hover:scale-110"
            style={{
              color: "rgb(56 189 248)",
              boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
            }}
          />
          <span>LinkedIn</span>
        </Link>
        <Link to="https://www.instagram.com/jatin_guptaa08/" target="_blank">
          <SiInstagram
            size={40}
            className="m-auto rounded-lg duration-700 hover:scale-110"
            style={{
              color: "rgb(56 189 248)",
              boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
            }}
          />
          <span>Instagram</span>
        </Link>
        <Link to="https://twitter.com/jatinguptaa08" target="_blank">
          <SiTwitter
            size={40}
            className="m-auto rounded-lg duration-700 hover:scale-110"
            style={{
              color: "rgb(56 189 248)",
              boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
            }}
          />
          <span>Twitter</span>
        </Link>
      </div>
      {alert && <Alert showAlert={showAlert} />}
    </div>
  );
};

export default Contact;
