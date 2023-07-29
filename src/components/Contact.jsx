import React, { useState, useRef } from "react";
import styles from "../styles";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.value = "";

    emailjs
      .sendForm(
        "service_ch4gxt6",
        "template_zdgyhla",
        form.current,
        "t2O8b2blLfXETNbz7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex-col flex mb-4 justify-start items-center"
          >
            <div>
              <h4 className="uppercase about text-[20px]">Get In Touch</h4>
              <h4 className="about textgradient text-[35px] lg:text-[50px]">
                Let's Work <br /> Together!
              </h4>
              <div className="flex flex-row gap-x-4 text-[20px] lg:text-[40px] mt-4 lg:mt-8 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/Arpit7707" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/JethavaArpit?t=1_JZ37BtReARR0XYaptQgw&s=09"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/arpit-jethava-825529255"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://drive.google.com/file/d/1T-uej0XE9I4vdTdSIqYYxgfpG17cVnXh/view?usp=sharing"
                  className="text-gradient btn-link lg:text-[30px] lg:pt-2"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border-4 rounded-2xl flex flex-col gap-y-6 pb-4 lg:pb-16 p-4 border-purple-900 items-start"
          >
            <input
              type="text"
              id="subject"
              name="from_name"
              className="bg-transparent border-black border-b-2 py-3 outline-none my-3 lg:my-6 w-full
                 placeholder:text-black focus:border-accent transition-all placeholder:font-primary"
              placeholder="Name"
            />
            <input
              type="email"
              id="name"
              className="bg-transparent border-black border-b-2 py-3 outline-none my-3 lg:my-6 w-full
                 placeholder:text-black focus:border-accent transition-all placeholder:font-primary"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              type="text"
              id="name"
              className="bg-transparent border-black border-b-2 py-2 mb-2 lg:py-8 lg:mb-12 outline-none my-2 lg:my-8 w-full
                 placeholder:text-black focus:border-accent transition-all resize-none placeholder:font-primary"
              placeholder="Message"
              name="message"
            />

            <input type="submit" className="btn btn-lg" value="Send Message" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
