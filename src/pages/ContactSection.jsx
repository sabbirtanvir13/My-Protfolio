import { div } from "framer-motion/client";
import React from "react";

const ContactSection = () => {
  return (

       <div>
           <h1 className="text-4xl font-bold text-center text-white mb-12">
     <span className="text-yellow-400 font-bold">   Contact Me</span>
      </h1>
    <div className="px-6 py-12 rounded-2xl shadow-inner max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
     
     
  
        
      <div className="flex-1">
        <img
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
          alt="Contact illustration"
          className="w-full rounded-2xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4 text-white">
           Get in <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="text-white mb-8">
          Have any questions or need help? Fill out the form and we’ll get back
          to you as soon as possible.
        </p>

        <div>
            <div>
                <p className="font-semibold text-white ">
            📞 Phone:{"01777829308 "}
            <a
              href=""
              className="text-blue-500 hover:underline"
            >
              +880 1777-829308
            </a>
          </p>
                <p className="font-semibold text-white ">
            ✉️ Email:{" sabbirtanvirahmed18@gmail.com "}
            <a
              href=""
              className=" text-blue-500 hover:underline"
            >
              sabbirtanvirahmed18@gmail.com
            </a>
          </p>
           <p className="font-semibold text-white  mt-2">
            📍 Address: Dhaka, Bangladesh
          </p>
            </div>
        </div>

        <form className="space-y-4 mt-3">
          <input className=" border border-gray-300 rounded-lg p-3 text-black shadow w-full " type="text" />
          <br /> 
          <textarea className="border border-gray-300 rounded-lg p-3 text-black shadow w-full" name="" id="" cols="30"></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
          >
            Send Message 
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
