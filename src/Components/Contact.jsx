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
    // setAlert(true);
    // setTimeout(() => {
    //   setAlert(false);
    // }, 1500);
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
    // showAlert();

    setAlert(true);
  };
  return (
    <div id="contact" className="text-center">
      <div className="text-3xl text-center mx-auto my-8"> Contact</div>
      <div className="flex">
        <div className="flex flex-col justify-center px-16 w-1/2">
          <div>
            <strong className="text-3xl text-sky-400">Send me Message</strong>
          </div>
          <div className="text-2xl">
            Want to start conversation regarding a project or have an inquiry?
            Just fill out the form below to send me a message.
          </div>
        </div>
        <div className="w-1/2 px-16 ">
          <form
            // onSubmit={submitHandler}
            action="https://formspree.io/f/mzbnjgoq"
            method="POST"
            className=" placeholder:text-slate-400 text-left p-9 bg-sky-950 py-7"
          >
            <label className="block text-2xl m-4">Full Name</label>
            <input
              name="name"
              type="text"
              autoComplete="off"
              value={contact.name}
              onChange={handleChange}
              className=" h-12 w-full pl-5 bg-slate-900"
              placeholder="Your Name"
            />
            <label className="block text-2xl m-4">Email Address</label>
            <input
              name="email"
              type="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleChange}
              className="h-12 w-full pl-5  bg-slate-900"
              placeholder="Your Email"
            />

            <label className="block text-2xl m-4">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              value={contact.message}
              onChange={handleChange}
              className="pt-5 w-full pl-5 text-white bg-slate-900 resize-none"
              placeholder="Type your message here"
            ></textarea>
            {/* <button
              type="submit"
              className="w-36 h-12 m-4 border-2 cursor-pointer hover:bg-sky-400 font-medium rounded-lg "
            >
              Send Message
            </button> */}
            <Button
              className="m-4 hover:bg-sky-400 font-medium"
              type={"submit"}
              text={"Send Message"}
              // onClick={submitHandler}
            />
          </form>
        </div>
      </div>
      <div className="text-center m-8 text-3xl">Contect me on Social Media</div>
      <div className="flex justify-center gap-5 m-8">
        <Link to="https://linkedin.com/in/jatingupta10008">
          <SiLinkedin
            size={50}
            className="m-auto rounded-lg size-12 duration-700 hover:size-16"
            style={{
              color: "rgb(56 189 248",
              boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
            }}
          />
          <span>Linkedin</span>
        </Link>
        <Link to="">
          <SiInstagram
            className="m-auto rounded-lg size-12 duration-700 hover:size-16"
            style={{
              color: "rgb(56 189 248",
              boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
            }}
          />
          <span>Instagram</span>
        </Link>
        <Link to="https://twitter.com/jatinguptaa08">
          <SiTwitter
            size={50}
            className="m-auto rounded-lg size-12 duration-700 hover:size-16"
            style={{
              color: "rgb(56 189 248",
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
