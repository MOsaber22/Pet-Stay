import { Typography } from "@material-tailwind/react";
import { FaPaw } from "react-icons/fa";
import ValuesAbout from "./ValuesAbout";

const About = () => {
  return (
    <div className="bg-white text-black font-sans antialiased">
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-5">
            Our Purpose
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-5">
            To provide every pet with a{" "}
            <span className="text-teal-500 italic">safe and loving</span> home.
          </h1>
          <p className="text-black text-base leading-relaxed max-w-md">
            We believe companionship is a joy for everyone. At Pet-Stay, we
            unite the connection between humans and their animals, ensuring
            every adoption is a lifelong harmony.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
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

      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-14">
        <div className="flex-1 relative h-80 flex items-center justify-center">
          <img
            src="./rightAbout.jpeg"
            alt="Cat owner"
            className="absolute left-0 top-0 w-52 h-64 object-cover rounded-2xl shadow-xl"
          />
          <img
            src="./leftAbout.jpeg"
            alt="Happy cat"
            className="absolute right-0 bottom-0 w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug mb-5">
            Our Story began with a{" "}
            <span className="text-teal-500">single rescue.</span>
          </h2>
          <p className="text-black text-sm leading-relaxed mb-4">
            What started as a small community initiative in our neighborhood has
            grown into a sophisticated community of sitters, foster homes, and
            medical professionals — all dedicated to one thing: the dignity of
            pet life.
          </p>
          <p className="text-black text-sm leading-relaxed mb-6">
            We don't just "move" pets. We facilitate bonds that humans and
            animals can grow in together, because our love is unconditional.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="/avatar1About.jpg"
                alt="member-1"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/avatar2About.jpg"
                alt="member-2"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/avatar3About.jpg"
                alt="member-3"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-xs font-semibold text-black uppercase tracking-wider">
              Joined by 10,000+ happy owners
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-teal-400 text-8xl leading-none font-serif select-none">
            "
          </span>
          <blockquote className="text-black text-xl md:text-2xl font-semibold leading-relaxed -mt-6">
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
