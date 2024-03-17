import React from "react";
import { SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Contact = () => {
  return (
    <div className="text-center">
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
          <form className=" placeholder:text-slate-400 text-left p-9 bg-sky-950 py-7">
            <label className="block text-2xl m-4">Full Name</label>
            <input
              type="text"
              className=" h-12 w-full pl-5 bg-slate-900"
              placeholder="Your Name"
            />
            <label className="block text-2xl m-4">Email Address</label>
            <input
              type="email"
              className="h-12 w-full pl-5  bg-slate-900"
              placeholder="Your Email"
            />

            <label className="block text-2xl m-4">Message</label>
            <textarea
              cols="30"
              rows="6"
              className="pt-5 w-full pl-5 text-white bg-slate-900 resize-none"
              placeholder="Type your message here"
            ></textarea>
            <button className="w-36 h-12 m-4 border-2 cursor-pointer hover:bg-sky-400 font-medium rounded-lg ">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="text-center m-8 text-3xl">Contect me on Social media</div>
      <div className="flex justify-center">
        <div className="">
          <SiLinkedin size={50} className="m-auto rounded-lg size-12 duration-700 hover:size-16"  style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }} />
          <span>Linkedin</span>
        </div>
        <div className="w-28 h-24">
        <SiInstagram className="m-auto rounded-lg size-12 duration-700 hover:size-16" style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}/>
        <span>Instagram</span>
        </div>
        <div>
        <SiTwitter  size={50} className="m-auto rounded-lg size-12 duration-700 hover:size-16"  style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}/>
        <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
