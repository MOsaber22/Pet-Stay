import { Typography } from "@material-tailwind/react";
import { FaPaw } from "react-icons/fa";
import ValuesAbout from "./ValuesAbout";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-gray-200 font-sans antialiased transition-colors duration-300">
      <section className="w-full mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 lg:pt-16 pb-10 md:pb-20 flex flex-col md:flex-row items-start gap-8 md:gap-12 relative">
        <div className="flex-1">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-green-800 dark:text-green-400 bg-[#c6f0c2] dark:bg-green-900/30 px-4 py-1.5 rounded-full mb-6">
            Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-tight md:leading-[1.05] text-[#222] dark:text-white mb-6 tracking-tight">
            To provide every pet <br className="hidden md:block" />
            with a{" "}
            <span className="text-teal-700 dark:text-teal-500 italic">
              safe and
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-teal-700 dark:text-teal-500 italic">
              loving
            </span>{" "}
            home.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-md">
            We believe companionship is a joy for everyone. At Pet-Stay, we
            unite the connection between humans and their animals, ensuring
            every adoption is a lifelong harmony.
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end mt-2 md:mt-0 md:-mt-6 lg:-mt-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[30rem] md:h-[30rem] lg:w-[42rem] lg:h-[42rem] flex-shrink-0">
            <img
              src="./heroAbout.jpeg"
              alt="Happy cat"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl rotate-3"
            />
            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
              <FaPaw size={14} /> Trusted Since 2020
            </div>
          </div>
        </div>
      </section>

      <ValuesAbout />

      <section className="w-full mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="w-full flex-1 flex items-center justify-center mt-6 md:mt-0">
          <div className="relative w-full max-w-[320px] md:max-w-[500px] h-72 md:h-96 hover:scale-105 transition-transform duration-500">
            <img
              src="./rightAbout.jpeg"
              alt="Cat owner"
              className="absolute left-0 top-0 w-48 h-64 md:w-64 md:h-80 object-cover rounded-2xl shadow-xl outline-none bg-gray-200 dark:bg-gray-800"
            />
            <img
              src="./leftAbout.jpeg"
              alt="Happy cat"
              className="absolute right-0 md:right-4 bottom-0 w-40 h-56 md:w-56 md:h-72 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-900 outline-none bg-gray-200 dark:bg-gray-800 transition-colors duration-300 z-10"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white leading-snug mb-5">
            Our Story began with a
            <span className="text-teal-500"> single rescue.</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
            What started as a small community initiative in our neighborhood has
            grown into a sophisticated community of sitters, foster homes, and
            medical professionals — all dedicated to one thing: the dignity of
            pet life.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            We don't just "move" pets. We facilitate bonds that humans and
            animals can grow in together, because our love is unconditional.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="/avatar1About.jpg"
                alt="member-1"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover transition-colors duration-300"
              />
              <img
                src="/avatar2About.jpg"
                alt="member-2"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover transition-colors duration-300"
              />
              <img
                src="/avatar3About.jpg"
                alt="member-3"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover transition-colors duration-300"
              />
            </div>
            <p className="text-xs font-semibold text-black dark:text-gray-400 uppercase tracking-wider">
              Joined by 10,000+ happy owners
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-transparent py-10 md:py-20 px-6 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <span className="text-teal-400 text-8xl leading-none font-serif select-none">
            "
          </span>
          <blockquote className="text-black dark:text-gray-200 text-xl md:text-2xl font-semibold leading-relaxed -mt-6">
            We don't choose the pets; they choose the souls that need them most.
            Our job is simply to make sure they find each other.
          </blockquote>
          <p className="mt-6 text-teal-600 text-xs font-bold uppercase tracking-widest">
            — JULIAN REED, Founder
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
