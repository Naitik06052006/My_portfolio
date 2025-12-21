import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
     const [status, setStatus] = useState("");
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cform1",       // ✅ service ID
        "template_809k7ao",     // ✅ template ID
        e.target,
        "zRh0_VGSbpptXo8IJ"     // ✅ public key
      )
      .then(() => {
        setStatus("success");
        e.target.reset();

        setTimeout(() => setStatus(""), 3000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");

        setTimeout(() => setStatus(""), 3000);
      });
  };
    return (
        <div id='contact' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get In
                        <span className='text-teal-800'>Touch</span>
                    </h1>
                    <p>Have a project in mind or want to discuss potential opportunities?</p>
                </div>
                <div className='max-w-3xl mx-auto'>
                    <form className='space-y-6' onSubmit={sendEmail}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <input className='px-4 py-3 w-full border border-zinc-500
                                 rounded outline-none hover:border-2' type="text" name="name" placeholder='Enter name' required/>
                            </div>
                            <div>
                                 <input className='px-4 py-3 w-full border border-zinc-500
                                 rounded outline-none hover:border-2' type="email" name="email" placeholder='Enter email' required/>
                            </div>
                        </div>
                        <div>
                            <input className='px-4 py-3 w-full border border-zinc-500 
                            rounded outline-none hover:border-2' type="text" name="subject" placeholder='Enter Subject'/>
                        </div>
                        <div>
                            <textarea className='px-4 py-3 w-full h-40 border border-zinc-500 hover:border-2
                            rounded outline-none' type="textarea" name="message" placeholder='Enter Message' required/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className='flex items-center gap-2 px-8 py-4 bg-zinc-800
                             text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full'>
                                Send Message
                                <FaArrowRight className='text-sm' />

                            </button>
                        </div>
                    </form>
                    {status === "success" && (
        <div className="popup success">✅ Message sent!</div>
      )}

      {status === "error" && (
        <div className="popup error">❌ Message failed</div>
      )}
                </div>
            </div>
        </div>
        
    )
}

export default Contact