import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-4">
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className=" text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a highly motivated and ambitious Full Stack Developer with a strong
        technical background and a passion for problem-solving. I am proficient
        in various programming languages and frameworks such as HTML, CSS, JavaScript, Java.
        I have a subtle hand in React.Js and Three.Js.  
        I possess a solid understanding of tools like VS Code, Google
        Colab, Canva, and PPTX. As a quick learner, I have excellent analytical
        and debugging skills, and can work effectively both independently and as
        a team member. My love for competitive coding has helped me hone my
        problem-solving abilities and stay up-to-date with the latest industry
        trends.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
