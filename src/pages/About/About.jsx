import { Typography } from "@material-tailwind/react";
import { FaHeart, FaShieldAlt, FaStar, FaPaw } from "react-icons/fa";

const VALUES = [
  {
    icon: <FaHeart className="text-pink-500" size={22} />,
    bg: "bg-pink-50",
    title: "Pure Empathy",
    desc: "We put the emotional well-being of every pet at the heart of every decision we make.",
  },
  {
    icon: <FaShieldAlt className="text-teal-500" size={22} />,
    bg: "bg-teal-50",
    title: "Lifelong Trust",
    desc: "Our relationship with pet owners doesn't end at the door — we provide ongoing support for every new family.",
  },
  {
    icon: <FaStar className="text-orange-400" size={22} />,
    bg: "bg-orange-50",
    title: "Curated Care",
    desc: "Every sitter is unique. We specialize in matching pets with professionals dedicated to ensuring a perfect fit.",
  },
];

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
];

const About = () => {
  return (
    <div className="bg-white text-black font-sans antialiased">
      {/* ══ HERO ══ */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: text */}
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

        {/* Right: hero image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80"
              alt="Happy cat"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl rotate-3"
            />
            {/* Floating paw badge */}
            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold">
              <FaPaw size={14} /> Trusted Since 2020
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Values that guide us
            </h2>
            <p className="text-black mt-3 text-sm">
              Built on trust, empathy, and endless love for your furry family.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VALUES.map(({ icon, bg, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div
                  className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  {icon}
                </div>
                <Typography className="text-black font-bold text-base mb-2">
                  {title}
                </Typography>
                <Typography className="text-black text-sm leading-relaxed">
                  {desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ══ */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-14">
        {/* Left: overlapping images */}
        <div className="flex-1 relative h-80 flex items-center justify-center">
          {/* Back image */}
          <img
            src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&q=80"
            alt="Cat owner"
            className="absolute left-0 top-0 w-52 h-64 object-cover rounded-2xl shadow-xl"
          />
          {/* Front image */}
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80"
            alt="Happy cat"
            className="absolute right-0 bottom-0 w-48 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>

        {/* Right: text */}
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

          {/* Avatars row */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`member-${i}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-black uppercase tracking-wider">
              Joined by 10,000+ happy owners
            </p>
          </div>
        </div>
      </section>

      {/* ══ QUOTE ══ */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Quotation mark */}
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
